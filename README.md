# Brewang

I have never done anything using Angular so this is my first time with the framework. Below you can read a diary-like something where I recorded my thoughts while I was trying to make the app.

## Day 0

* Feladatértelmezés:
    * oké, szóval kell egy Angular app, amit CLI-vel inicializálok. CLI inicializálás menni fog, csináltam már.
    * Az apphoz hozzá kell csapni az NGRX-szet state managernek. Magát az NGRX-et nem vágom, de a Vuex-ből kiindulva nagyjából sejtem mire lesz jó.
    * A kinézetet egy UI Kittel kell kipofozni. Bootstrapet minimálisan használtam már, de itt most látatlanban az angular-materialra teszem a voksom, mert material is Google, Angular is Google, biztos fasza lesz.
    * Az adatokat az Open Brewery DB-ről kell szedni. Első ránézésre világosnak tűnik -» megvannak adva az end-pointok az oldalon, ezeket fetch-elve kapom a JSON-t választ. Ráadásul ha jól tudom az Angularnak van saját megoldása a fetch-re, nem kell Axios és társai se.
    * Minden response a store-ba megy, és minden UI elem onnan jön: oké, ez érthető, erre van a store, majd kiderül mekkora szívás van vele.
    * 2 route lesz - routingolásra asszem az Angularnak van saját megoldása, nem hiszem, hogy ezzel gond lesz.
    * Első route: itt van az összes főzde kilistázva. ez egy 10+header soros táblázat lesz, paginiationnel. Esélyes, hogy ezzel fogom kezdeni az építést.
    * Második route: a konkrét főzdék aloldala, itt ID szerint lekérem majd az összes adatot és lehetőleg pofás módon tálalom majd.
    * Kell még egy header is, benne egy keresővel. Autocomplete cuccokat nem csináltam még, bízom benne, hogy az API-t nem lesz gyilkos használni. Max 5 elem ilyesmi. Ezt szerintem a végére tartogatom majd.
* Ezek alapján egy közelítőleges To-Do, priorizálva:
    * GitHub repot összedobni
    * Research kör #1 - Angular fejlesztés best practice-ok
    * Környezetet kialakítani: sztem WebStorm lesz az IDE, Angular CLI telepítése, NPM packagek + utánanézni mi hasznos még Angularhoz, pl: böngésző bővítmények stb.
    * Research kör #2 - konkrét technológiákhoz tutorialok, dokumentációk stb.
    * Minimál dizájn mellett összerakni funkcionálisan először az első, majd a második végül a header componenseket - közben megálmodni, hogy ezek milyen komponensekből épülnel fel, state manager bekötése
    * Research kör #3 - mit tud a material UI Kit, mik a lehetőségeim vele
    * Figma vagy PS-ben összerakni egy fasza látványtervet
    * Megvalósítani a dizájnt
    * Tesztelés, majd deploy pl. GitHub Pagesre
    * ETA: kb. egy hét
