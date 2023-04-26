### AVADA PET SUPPLIES
**Descrizione:**
Riprodurre un sito di forniture per animali
1) Analisi con Penpot del layout e della color palette
2) Costruire struttura di base a componenti
3) Creazione dei componenti
4) Creare ed importare il PageHeader nell'App.vue
   4a) L'header consiste in due parti
   4b) Costruire parte superiore dell'header e stilizzarla
   4c) La parte inferiore dovrà essere creata dinamicamente:
        -creo un array di oggetti (in un file dedicato) con all'interno le varie voci della nav
        -Popolo dinamicamente la lista della nav e aggiungo lo stile
5) Creare ed importare il PageFooter nell'App.vue
   5a) Il footer consiste in 2 parti
   5b) La parte superiore dovrà essere create dinamicamente:
        -creo un array di oggetti (in un file dedicato) con all'interno un array per ogni menu del footer (4)
   5c) La parte inferiore è costituita solo da uno span ed un'icona
---Durante il refactoring si deciderà se fare un componente dedicato per ogni parte sia del footer che dell'header--
6) Creare il Main ed importare il Main
   6a) Creo,popolo e stilizzo il componente JumboTron e lo importo nel PageMain
   6b) Essendo il resto del PageMain costituito da molte sezioni, creo staticamente le sezioni e solo durante il refactoring si decido se creare più componenti e quali si possono raggruppare

**USEFUL DOCUMENTATION:** 
fontawesome: 'https://fontawesome.com/docs/web/use-with/vue/' ; 
             'https://fontawesome.com/v6/docs/web/use-with/vue/add-icons'

fontsource: 'https://fontsource.org/docs/getting-started'
