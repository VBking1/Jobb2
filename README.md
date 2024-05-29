# Jobb For Deg og Meg - README

## Introduksjon
Jobb For Deg og Meg er en app som gjør det mulig for ungdommer å finne og ta på seg småjobber i sitt nærområde for å tjene litt ekstra penger. Appen er designet for å være enkel å bruke, med et intuitivt og brukervennlig grensesnitt som gjør jobbsøking både morsomt og effektivt.

## Funksjoner
- Finn småjobber: Bla gjennom tilgjengelige småjobber i ditt nærområde.
- Enkel navigering: Bruk grønne hjerte- og røde kryss-knapper for å indikere interesse.
- Jobbdetaljer: Se detaljer om hver jobb, inkludert type jobb, beskrivelse og estimert tid.

## Hvordan fungerer det?
1. Se jobber på skjermen
   Når du logger inn på appen, vil du umiddelbart bli presentert med en tilgjengelig jobb. Hver jobb inneholder informasjon om:
   - Type jobb (f.eks. gressklipping)
   - Beskrivelse av jobben
   - Estimert tid det vil ta å utføre jobben

2. Velg om du er interessert
   Du har to valg når du ser en jobb:
   - Grønt hjerte: Klikk på det grønne hjertet hvis du er interessert i jobben.
   - Rødt kryss: Klikk på det røde krysset hvis du ikke er interessert i jobben.

3. Neste jobb
   Etter at du har valgt enten det grønne hjertet eller det røde krysset, vil en ny jobb vises på skjermen, og prosessen gjentar seg.

# Lokal Installasjon
## Klon Prosjektet
1. Åpne et terminalvindu på datamaskinen din.

2. Naviger til mappen der du vil lagre den klonede repositories. Du kan bruke følgende kommando for å gå til ønsket mappe:
   ```
   cd din-mappe/
   ```

3. Kjør følgende kommando for å klone repositoriet:
   ```
   git clone https://github.com/VBking1/Jobb2.git
   ```

   Dette vil hente ned hele repositoriet lokalt på datamaskinen din.


## Node
Sjekk om du har node ved å skrive
   ```
   npm -v
   ```
Hvis du ikke har det, følg instruksene videre


1. Gå til Node.js' offisielle nettsted [https://nodejs.org](https://nodejs.org).

2. Nettstedet vil gjenkjenne operativsystemet ditt og vise riktig nedlastingsalternativ. Velg den anbefalte LTS-versjonen (Long-Term Support) for stabilitet og pålitelighet.

3. Last ned Node.js-installasjonsprogrammet ved å klikke på nedlastingsknappen og lagre filen på datamaskinen din.

4. Når nedlastingen er fullført, åpner du installasjonsprogrammet og følger instruksjonene. Du vil bli veiledet gjennom installasjonsprosessen for Node.js og npm. Merk at Node.js og npm er installert sammen.

5. Etter installasjonen kan du bekrefte om npm er riktig installert ved å åpne kommandolinjen og skrive følgende kommando:
   ```
   npm -v
   ```
## Installasjon av React
Følgende kommando for å installere React:
  ```shell
  npm install react
  ```

# Installer Vite
Hvis Vite ikke allerede er oppført som en avhengighet i package.json, kan du installere det ved å kjøre følgende kommando:

```sh
npm install vite --save-dev
```

### Trinn 1: Bekreft at Vite er riktig installert
Når installasjonen er fullført, kan du bekrefte at Vite er riktig installert ved å sjekke om det finnes i node_modules/.bin/-katalogen. Du kan gjøre dette med følgende kommando:

```sh
ls node_modules/.bin/vite
```

Hvis denne kommandoen viser "vite", betyr det at Vite er installert korrekt.

### Trinn 2: Kjør "npm run dev" igjen
Nå kan du prøve å kjøre utviklingsserveren på nytt ved å kjøre følgende kommando:

```sh
npm run dev
```

Dette vil starte Vite-utviklingsserveren, og du kan nå fortsette med utviklingen av prosjektet ditt.


## Kontakt og støtte

Hvis du har spørsmål, problemer eller trenger hjelp, vennligst ta kontakt.

## License
[License](LICENSE)
