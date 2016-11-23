# Daylight Buzzer
Dieser App Prototyp entstand im Rahmen eines Hackathlons im Wahlfach: <i>Hackathlon IOT</i> im Studiengang Wirtschaftsinformatik (Master) an der Hochschule Reutlingen.<br/><br/>
Ziel war es eine App zu schreiben, die das Ionic Framework zur Generierung der App verwendet und CloudFoundry mit Node-JS und Bluemix als Backend. Zusätzlich soll eine Interaktionen mit einem IoT fähigen Gerät statt finden, hierfür wurde [Osram Lightify](https://www.osram.de/osram_de/produkte/led-technologie/lightify/lightify-home/index.jsp) verwendet.<br/>

## Technology
Für die Entwicklung hat man sich auf folgenden Technologien verständigt.
* FrontEnd
1. [Ionic Framework V2](https://ionicframework.com/docs/v2/getting-started/)
2. [Apache Cordova](https://cordova.apache.org/)
3. [Angular 2](https://angular.io/)
4. [TypeScript](http://www.typescriptlang.org/)

Während das Ionic Framework eine Vorgabe des Dozenten war, sind Apache Cordova, Angular und TypeScript von Ionic geforderte Abhängigkeiten.
Angular 2, ist eine umfangreiches Komponentne basiertes Frontend Framework, das von Google entwicklet wird.
TypeScript ist ein von Microsoft entwickelte JavaScript Obermenge, die typisierte JavaScript Entwicklung ermöglicht.

* Backend
1. [Node.js](https://nodejs.org)
2. [Express](http://expressjs.com/de/)
3. [IBM Bluemix](https://console.ng.bluemix.net/catalog/starters/sdk-for-nodejs/)
4. [Lightify Home API - EU](https://eu.lightify-api.org/)

Im Backend muss IBM Bluemix als Cloud Server verwendet werden. Die Backend Sprache ist frei wählbar. Wir haben uns für Node.js entschieden, weil: 
1. Docker Container mit Spring Boot als nicht starten wollte und IBM Bluemix den Zugriff auf Logs verhindert, so dass es nicht Möglichwar nachzuvollziehen, warum der Start des Containers schief läuft
2. die Cloud Foundry Starter App sich weder lokal noch auf dem Server starten ließ
3. das Tomcat Starter App ebenfalls nicht funktionierte.
So blieb letztlich nur noch Node.js übrig, das sich zumindest lokal und auch auf dem Server ausführen lässt. <br/>
Das Cloud Foundry Beispiel für Node.js hatte als Abhängigkeit Express, womit das Routing und die API Zugriffe ermöglicht werden.

Nachfolgend werden der Übersichtshalber die folgenden Themen separat behandelt:
* Architekturdiagramm, Entity-Model und Aktivitäten/Sequenzdiagramm
* API mit Übersicht der gültigen ULS und Parametern
* Allgemeine README's der zugrunde liegenden Frameworks

## Description
Für weitere Informationen über die Archtitektur klicken Sie bitte ![hier.](docs/DESCRIPTION.md "Diagramme")<br/>
Für eine grobe Übersicht und Beschreibung der App klicken Sie bitte ![hier.]()<br/>


## API
Für Beschreibung und Beispiele der API klicken Sie bitte ![hier.](docs/API.md)


## Ionic - Cordova Hooks Readme
[Read more...](frontend/DaylightBuzzer/hooks/README.md)

## NodeJS Readme and Changelog
[Read more...](backend/DayLightBuzzer/README.md)
[Read more...](backend/DayLightBuzzer/CHANGELOG.md)