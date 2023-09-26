package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type Event struct {
	Date  time.Time `json:"date"`
	Event string    `json:"event"`
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
		{time.Now(), "Something"},
	}
}
