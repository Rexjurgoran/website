package main

import (
	"context"
	"os"
	"time"

	"github.com/rs/zerolog/log"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var database *mongo.Database

func getDatabase() *mongo.Database {
	if database != nil {
		return database
	}
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://"+os.Getenv("MONGODB_USERNAME")+":"+os.Getenv("MONGODB_PASSWORD")+"@mongodb:27017/"))
	if err != nil || client == nil {
		log.Fatal().Msg(err.Error())
	}
	return client.Database("db")
}

func readEvents() []Event {
	condition := bson.M{}
	cursor, err := getDatabase().Collection("event").Find(context.Background(), condition)
	if err != nil {
		log.Error().Msg(err.Error())
		return buildEvents()
	}
	var events []Event
	err = cursor.All(context.Background(), &events)
	if err != nil {
		log.Error().Msg(err.Error())
		return buildEvents()
	}
	if len(events) == 0 {
		events = buildEvents()
		var data []interface{}
		data = append(data, events)
		database.Collection("event").InsertMany(context.Background(), data)
	}
	return events
}

func buildEvents() []Event {
	return []Event{
		{
			time.Date(2023, time.June, 30, 16, 45, 0, 0, time.Now().Location()),
			"Master degree",
			"Achieved master degree in IT-Management",
			Education,
		}, {
			time.Date(2020, time.September, 18, 17, 45, 0, 0, time.Now().Location()),
			"Bachelor degree",
			"Achieved bachelor degree in Business Informatics",
			Education,
		}, {
			time.Date(2017, time.August, 21, 8, 0, 0, 0, time.Now().Location()),
			"Dual Student @ HARTING Technology Group",
			"Started working as dual student Business Informatics within HARTING Technology Group. Mainly doing SAP development and PLM configuration.",
			Position,
		}, {
			time.Date(2017, time.July, 7, 0, 0, 0, 0, time.Now().Location()),
			"Finished school",
			"Finished school with advanced classes in physics and math",
			Education,
		},
	}
}
