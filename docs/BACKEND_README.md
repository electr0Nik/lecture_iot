# Warnung
Es wird dringend davon abgeraten diese App in diesem Zustand irgendwo produktiv zu verwenden!

# Daylight Buzzer Backend - Prototyp
Das Backend übernimmt die Kommunikation zwischen den Frontend und der Lightify Home Lampe.
Dazu steuert das Backend die REST Schnittstelle der Lightify API an.
Der Aufbau des Backends wird in den folgenden Seiten beschrieben:
1. Architektur
2. Aufbau des Filesystems (Datenbank)
3. Aktivitätsdiagramm Login
4. Aufbau der CloudFoundry App

## Architektur
Insgesamt besteht das gesamte System aus drei Komponenten.
1. Mobile App
2. Server
3. Lightify Lampe
![Architektur](images/Architecture.png "Architektur")

### 1. Mobile App
Das Frontend und seine Funktionalitäten werden in der ![Frontend_Readme.md](docs/FRONTEND_README.md "App Description") beschrieben <br>

### 2. Server
Der Server besteht aus der CloudFoundry Applikation und einem Filesystem. Um dem Ansatz eines MVP (minimum viable product) gerecht zu werden, wird an dieser Stelle nicht mit einer Datenbank gearbeitet.
Die CloudFoundry Applikation ist dafür zuständig, Anfragen der Mobile App anzunehmen und zu verarbeiten.
Dazu werden User und Gerätedaten benötigt um eine eindeutige Zuweisung zwischen den Anfragen und dem Ersteller der Anfragen zu garantieren.

Der Server wird über REST angesprochen und bietet folgende Funktionen:
a. Erstanmeldung am Server
b. Anmeldung am Server
c. Setzten von Attributen der Lightify Home
d. Erhalten von User-, Geräte- und Lightifyinformationen

### 3. Lightify Lmape
Die Funktionalitäten der Lightify Lampe werden nicht näher beschrieben, da diese als Blackbox angesehen wird.
Die Dokumentation kann [hier](https://eu.lightify-api.org/) eingesehen werden.

## Aufbau des Filesystems
Das Filesystem ist in drei Entitäten aufgebaut, welche als JSON abgespeichert werden.
1. User
2. Device
3. UserDevice
![Entity Modell](images/Entity_Model.png "Entity Modell")

### 1. User
In der User Entity werden alle Daten bezüglich eines Users abgespeichert.
Dazu zählen eine eindeutige ID für das Frontend (userUuid), der Name, die Email und das Passwort.

### 2. Device
In der Device Entity werden alle Daten bezüglich eines Gerätes abgespeichert.
Dazu zählen eine eindeutige ID für das Frontend (device Uuid), die Gerätebeschreibung, das Erzeuger und Änderungsdatum, sowie welcher Benutzer dieses Gerät erstellt hat.

### 3. UserDevice
Die UserDevice Entität wird benötigt, da eine m:n Beziehung zwischen den beiden vorherigen Entitäten besteht.
In dieser werden die jeweiligen Uuids abgespeichert.
Diese Tabelle wird benötigt um eine eindeutige Zuordnung zwischen User und Gerät zu garantieren.

## Aktivitätsdiagramm Login
Ein exemplarischer Zugriff auf den Server wird mit der Funktion:Login dargestellt.
![Funktion Login](images/Activity_Diagram_Login.png "Funktion Login")
Der User gibt seine Anmeldedaten (Email und Passwort) in der App ein.
Diese werden über das Backend (REST Funktion /login) an das Filesystem (DB) gesendet.
Nach einem erfolgreichem Abgleich wird die Uuid an die App zurückgesendet.
Der User erhält den "Login erfolgreich" Bildschirm und kann auf die App zugreifen.

## Aufbau der CloudFoundry App
Die notwendigen Dateien der App befinden sich im Ordner <i>libs</i>.
Dieser ist aufgeteilt in den Ordner <i>files</i>, welche das Filesystem darstellen und
den Ordner <i>services</i>, welche alle angeboteten Services beinhaltet.
