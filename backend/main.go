package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
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
	router := mux.NewRouter()
	router.HandleFunc("/events", getEvents).Methods("GET")
	log.Fatal(http.ListenAndServe(":80", router))
}

func getEvents(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	events := buildEvents()
	error := json.NewEncoder(response).Encode(events)
	if error != nil {
		log.Fatal(error.Error())
	}
}

func buildEvents() []Event {
	return []Event{
		{time.Date(2023, time.January, 0, 0, 0, 0, 0, time.Now().Location()), "Master degree", "Achieved master degree in IT-Management", Education},
	}
}
