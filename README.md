# henßler.de

Personal webpage for the Henßler family. Still in development.
This project was developed with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.
Icons used are part of the free version of [Fontawesome](https://fontawesome.com/).

# Architecture
The website is hosted by github pages, available [here](https://www.henßler.de/marvin). The hosted site consists only of the angular frontend.
This project also contains a backend, written in go, and a mongodb configuration. All three components can run as containers.

# Start
To run the containers all one needs to do is to run ```docker-compose up -d --build``` from within the repository.
After the containers are built and started, the website will be available from ```localhost:4200```
