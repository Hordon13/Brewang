# Brewang

Sziasztok!

Elkészültem a projekttel, amit rendkívül ötletesen Brewang-nak neveztem el, a Brewery és az Angular szavak összevonásával. A kódot értelemszerűen ebben a repóban tudjátok megnézni, alább pedig a jegyzeteimet/gondolatmenetemet olvashatjátok a projekttel kapcsolatban, ahogy kértétek.

Ha pedig kipróbálnátok élesben, akkor [ide kattintva](https://brewang.netlify.com/) 👇  megtehetitek. Ehhez légyszi Chrome böngészőt használjatok, mert csak arra optimalizáltam most, és legjobban egy 13"-es képernyőn mutat az app.

![Hello](https://i.imgur.com/OTrzitL.png)

## Day 0

* Feladatértelmezés:
    * oké, szóval kell egy Angular app, amit CLI-vel inicializálok. CLI inicializálás menni fog, csináltam már. ✅
    * Az apphoz hozzá kell csapni az NGRX-szet state managernek. Magát az NGRX-et nem vágom, de a Vuex-ből kiindulva nagyjából sejtem mire lesz jó. 
    * A kinézetet egy UI Kittel kell kipofozni. Bootstrapet minimálisan használtam már, de itt most látatlanban az angular-materialra teszem a voksom, mert material is Google, Angular is Google, biztos fasza lesz.
    * Az adatokat az Open Brewery DB-ről kell szedni. Első ránézésre világosnak tűnik -» megvannak adva az end-pointok az oldalon, ezeket fetch-elve kapom a JSON-t választ. Ráadásul ha jól tudom az Angularnak van saját megoldása a fetch-re, nem kell Axios és társai se. ✅
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

## Alapok

* A repó összerakása után az Angular alapjainak megismerésével kezdtem. Különféle fórumokról megpróbáltam összeszedni a legjobb oktatóanyagokat és kicsit átfutottam a dokumentációt, hogy barátkozzam a szintaxissal.
* Ezután kiválasztottam egy jónak mondott Udemy crash-course-t és gyorsan ledaráltam. A Vue miatt volt már egy kis alapom, így relatív gyorsan belerázódtam a fő koncepciókba.
* A TypeScript egy kicsit furcsa volt az elején, de mivel C++-szal kezdtem programozni tanulni, kifejezetten élveztem, hogy végre újra vannak típusok.
* Kicsit külön projekten gyakoroltam a szintasxist, majd elkezdtem építeni a projektet. Elhatároztam, hogy a dizájnnal majd csak a legvégén foglalkozom, így tényleg csak arra tudtam fókuszálni, hogy menjenek a dolgok.
* A lista nézettel kezdtem, ekkor még NgRX nélkül. Az Angular http modulja király volt, elég gyorsan sikerült összeraknom egy service-t, ami lekérdezte a főzdéket.

## Routing

* ez a része is flottul ment, tök jó a routing modul, a dokumentáció segítségével seperc alatt össze lehetett rakni a route-okat
* ahogy a route linkek is egyértelműek voltak
* persze ahogy néztem, itt is lehet még csavarni a dolgokon

## NgRX

* Idáig tök jól ment minden, azt hittem villámgyorsan kész leszek ezzel is, főleg, hogy a Vuex-et valamennyire vágom.
* Erősen tévedtem, elég sokat elbabráltam a NgRX-szel. Az első nehézség az volt, hogy nem igazán találtam jó tutorialt az elején, össze-vissza értettem meg részeket belőle.
* Nagyon ragaszkodtam a fejemben a Vuex-hez és kicsit nehéz volt átstruktúrálni a dolgokat.
* Szép lassan, sok szívás után végül kezdett összeállni a kép, amiben segített, hogy találtam egy jó tutorialt.
* Az Effect-ek megértése és bekötése megint egy külön történet volt, de végül az is sikerült.
* Ezután az okozott elég sok nehézséget, hogy rájöjjek, hogyan illene a lekérdezéshez szükséges url-eket elküldeni a komponensből a service-ig.
* Végül összeállt a dolog, utánanéztem, hogy tudom lekérni a route paraméterekt, majd ebből generáltam url-t stb.

## Pagination

* A következő nagyobb kihívás a lapozás megoldása volt.
* Az API default 20 főzde adatait dobja vissza, de szerencsére van endpoint amivel lehet paginationt használni
* Ezután jött egy hosszabb olvasás a server-side pagination-ról stb.
* Ahogy néztem ez külön tudomány, így végül úgy döntöttem, hogy mivel lesz keresés az oldalon, nem kell feltétlen csili-vili paginationt használni, elég ha egyesével lehet lapozni.
* Itt jött a következő bonyodalom, miszerint minden lapozás egy külön http request, de eddigre már szerencsére barátom volt az NgRX
* Közben felfigyeltem, hogy baromi idegesítő, hogy minden frissítésnél lenullázodik az oldalszám, úgyhogy utánajártam, hogy tudom eltárolni és lekérdezni a sessionStrorage-ből
* Másik problámán volt, hogy sehogyse tudtam lekérdezni, hogy mennyi elem van tárolva az API adatbázisában, így nem tudtam elkerülni a "túllapozást". Újabb fórumozás után végül az lett a megoldás, hogy lekérdem az utolsó elem ID-ját és remélem, hogy folytonos a számozás. Kis tesztelés után kiderült, hogy igen, folytonos, így ez egy használható megoldás akkor is ha a jövőben bővül az adatbázis.

## Autocomplete

* Látatlanban ettől tartottam a legjobban, de szerencsére nem volt annyira vészes
* Az API-nek ugyebár van erre endpointja, így tulajdonképpen egy lekérdezés az egész
* Egyedül annyival kellett megspékelni a dolgot, hogy a NgModel minden karakterleütésre küldön egy lekérdezést
* Eddigra már annyira megbékéltem az NgRX-szel, hogy külön actiont, effectet és mertem csinálni hozzá

**Ezen a ponton lényegében kész volt az app logikája, minden funkció működött**

## Angular Material

* Már csak a dizájn volt hátra, így bölcs módon elbrancheltem, hogy több verziót is kipróbálhassak egyszerűen ha úgy tartja kedvem
* Az Angular Materialt imádtam: tök egyértelmű volt minden, egyszerű, lényegretörő dokumentáció stb.
* Noha eredetileg össze akartam rakni egy látványtervet, de mivel adottak voltak a Material elemek rájöttem, hogy ezzel fölösleges szórakoznom
* Dizájn tekintetben elég pepecselős vagyok, így azért bő két napot eltöltöttem vele, mire megfogalmazódott a végleges kinézet
* Különösen azzal ment el sok idő mire kitaláltam, hogy pontosan milyen információkat akarok megjeleníteni és milyen formában
* Ehhez például csináltam egy custom pipe-ot, hogy a telefonszámok jól nézzenek ki
* Vagy utánanéztem, hogyan lehet Google Maps linket generálni a koordinátákból, mert egyébiránt azok tök irrelevánsak a felületen szerintem
* Ahhoz már nem volt lelkierőm, hogy responzívvá is tegyem a dolgot, így nemes egyszerűséggel kilőttem a minden nézetet, amin már nem néz ki jól
* Annak viszont utánanéztem még, hogyan tudnék billentyűlenyomásra lapozást csinálni, mert szerintem UX szempontból fontos

## Deploy

* Végül nem volt más hátra, mint élesíteni a dolgot
* Elsőre GitHub Pages-t akartam használni, mert az ismerem
* De annyi helyen olvastam, hogy milyen fasza a Netlify, hogy gondoltam kipróbálom
* A Routing miatt volt egy kis szívás, de szerencsére a dokumentáció itt is segített
* Nem mellesleg pedig tényleg nagyon fasza a Netlify
