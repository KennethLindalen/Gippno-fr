# Server for projekt

## Gjøreliste
### Authentisering
* [x] Lage server
* [x] Auth router
* [x] Opprette bruker med POST /auth/registrer
    * [x] Valider input
    * [x] Sjekke om epost er unik
    * [x] Hash passord (bcrypt)
    * [x] Lagre i db
* [x] Innlogging
    * [x] Sjekke etter epost i db
        * [x] sammenligne passord med passord hash
        * [x] Opprette JWT
            * [x] JWT svar
            
### Autorisering
* [ ] Gjester kan bare se hjemmeside
    * [ ] sjekket om innlogget middleware
        * [ ] Valider JWT i header
            * [ ] Sette req.user til JWT payload
        * [ ] Feilmelding hvis ikke autorisert
    * [ ] Redirigering til login
* [ ] Innloggede brukere kan se deres side
    * [ ] Tillat tilgang middleware
        * [ ] id i url må stemme med req.user
        * [ ] Uatorisert feilmelding
    * [ ] Rediriger til brukerns side istede for hjemmeside 
        * [ ] Sette user_id inn i localStorage etter login/signup
* [ ] Get for /auth/logout for å "rense" user_id cookie
    * [ ] Rediriger til hjemmeside
    
### Hovedside
* [x] Landingside
    * [x] Registreringsside
        * [x] Form: epost og passord
            * [x] Verifiser passord
        * [x] Når form blir "submitted"
            * [x] Valider epost
                * [x] Vis error
            * [x] Valider passord
                * [x] Vis error
            * [x] POST-forespørsel
                * [x] Vis error
                * [x] Hvis suksess
                    * [x] Redirekt til login
    * [x] Innloggingssside
        * [x] Form: epost og passord
            * [ ] Verifiser epost
            * [ ] Verifiser passord
        * [ ] Når form blir "submitted"
            * [ ] Valider epost
                * [ ] Vis error
            * [ ] Valider passord
                * [ ] Vis error
            * [ ] POST-forespørsel
                * [ ] Vis error
                * [ ] Hvis suksess
                    * [ ] Lagre JWT token i localStorage
                    * [ ] Redirekt til dashboard

### Ekstra stuff
* [ ] Adminside med alle brukere
    * [ ] Admintabell med alle user_id
    * [ ] Deaktiver brukere
* [ ] Admin kan se alle sider på siden
* [ ] Rate limiting (Hvor mange forsøk på innlogging)
    * [ ] Stoppe bruteforce innloggingsforsøk
* [ ] Hvis logget inn og går til logginn-/registreringssiden redirekt til dashboard
* [ ] Hvis utlogget inn og går til dashboard redirekt til home
* [ ] Beskyttet route backend
