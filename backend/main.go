package main

import (
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"
	"go.elastic.co/ecszerolog"
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

func main() {
	createLogger()
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
	filename := wd + "/log/backend" + today + ".log"
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
