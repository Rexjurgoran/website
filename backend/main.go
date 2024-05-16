package main

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"
	"go.elastic.co/ecszerolog"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type EventType string

const (
	Education EventType = "education"
	Skill     EventType = "skill"
	Position  EventType = "position"
)

type Event struct {
	Date  time.Time `json:"date"`
	Title string    `json:"title"`
	Event string    `json:"event"`
	Type  EventType `json:"type"`
}

var ctx context.Context
var client *mongo.Client
var collection *mongo.Collection

func main() {
	createLogger()
	createDBConnection()
	createDBCollection()
	fillDB()
	router := mux.NewRouter()
	router.HandleFunc("/events", getEvents).Methods("GET")
	log.Fatal().Msg(http.ListenAndServe(":80", router).Error())
}

func createLogger() {
	today := time.Now().Format(time.DateOnly)
	wd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	filename := wd + "/logs/backend" + today + ".log"
	file, err := os.OpenFile(
		filename,
		os.O_APPEND|os.O_CREATE|os.O_WRONLY,
		0664,
	)
	if err != nil {
		panic(err)
	}
	logger := ecszerolog.New(file)
	log.Logger = logger
}

func createDBConnection() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	var err error
	client, err = mongo.Connect(ctx, options.Client().ApplyURI("mongodb://"+os.Getenv("MONGODB_USERNAME")+":"+os.Getenv("MONGODB_PASSWORD")+"@mongodb:27017/"))
	if err != nil {
		log.Fatal().Msg(err.Error())
	}
}

func createDBCollection() {
	database := client.Database("database")
	collection := database.Collection("collection")
	collection.Drop(ctx)
}

func fillDB() {
	events := buildEvents()
	insertManyDocument := []interface{}{}
	insertManyDocument = append(insertManyDocument, events)
	_, err := collection.InsertMany(ctx, insertManyDocument)
	if err != nil {
		log.Error().Msg(err.Error())
	}
}

func getEvents(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	events := buildEvents()
	error := json.NewEncoder(response).Encode(events)
	if error != nil {
		log.Fatal().Msg(error.Error())
	} else {
		log.Info().Msg("getEvents() was successfull")
	}
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
