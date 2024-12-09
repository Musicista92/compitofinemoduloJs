
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
]



function trovaLavori(titoloLavoro, posizioneLavoro) {

    const risultatiOttenuti = []
    for (let i = 0; i < jobs.length; i++) {
        const lavoroCorrente = jobs[i]
        console.log("Controllo su : " + lavoroCorrente.title + ", " + lavoroCorrente.location);
        const titoloIncluso = lavoroCorrente.title.toLowerCase().includes(titoloLavoro.toLowerCase());
        const posizioneInclusa = lavoroCorrente.location.toLowerCase().includes(posizioneLavoro.toLowerCase());
        console.log("Titolo incluso: " + titoloIncluso + ", Posizione inclusa: " + posizioneInclusa);
        if (titoloIncluso && posizioneInclusa) {
            risultatiOttenuti.push(lavoroCorrente);
        }
    }
    console.log("Risultati trovati: " + risultatiOttenuti);
    return {
        result: risultatiOttenuti,
        count: risultatiOttenuti.length
    }
}
const inputTitolo = document.getElementById("titoloInput");

const inputLocalita = document.getElementById("localitaInput");
const bottoneCerca = document.getElementById("cercaBtn");
const tabellaRisultati = document.getElementById("tabellaRisultati").querySelector("tbody");
const numeroRisultati = document.getElementById("numeroRisultati");

function gestisciRicerca() {
    const titoloDaCercare = inputTitolo.value
    const localitaDaCercare = inputLocalita.value
    const risultati = trovaLavori(titoloDaCercare, localitaDaCercare)
    aggiornaTabella(risultati);
}


bottoneCerca.addEventListener("click", gestisciRicerca);


function aggiornaTabella(risultati) {

    tabellaRisultati.innerHTML = "";
    if (risultati.count > 0) {
        numeroRisultati.innerText = "Ci sono " + risultati.count + " lavori.";
    }
for (let i = 0; i < risultati.result.length; i++) {
    const lavoro = risultati.result[i];
    const riga = document.createElement("tr");

    const cellaTitolo = document.createElement("td");
    cellaTitolo.innerText = lavoro.title;
    riga.appendChild(cellaTitolo)

    const cellaLocalita = document.createElement("td")
    cellaLocalita.innerText = lavoro.location;
    riga.appendChild(cellaLocalita)

    tabellaRisultati.appendChild(riga);
}
}