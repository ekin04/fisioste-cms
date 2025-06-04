import React from 'react';

interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <article className="prose prose-lg">
        <header className="mb-8">
          <h1 className="text-secondary text-3xl font-bold mb-4">
            Privacy Policy di www.fisioste.it
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Per avere informazioni circa i tuoi dati personali raccolti, le finalità ed i soggetti 
            con cui i dati vengono condivisi, contatta il Titolare.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-secondary text-2xl font-semibold mb-4 mt-8">
            Titolare del Trattamento dei Dati
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-2">
              <strong>fisioste</strong><br />
              Viale della Resistenza, 29<br />
              64100 Teramo
            </p>
            <p>
              <strong>Indirizzo email del Titolare:</strong>{' '}
              <a href="mailto:info@fisioste.it" className="text-blue-600 hover:underline">
                info@fisioste.it
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-secondary text-2xl font-semibold mb-4 mt-8">
            Tipologie di Dati raccolti
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Il Titolare non fornisce una lista di tipologie di Dati Personali raccolti.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni 
              dedicate di questa privacy policy o mediante specifici testi informativi visualizzati 
              prima della raccolta dei dati stessi.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati 
              di Utilizzo, raccolti automaticamente durante l'uso di questa Applicazione.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono 
              obbligatori. Se l'Utente rifiuta di comunicarli, potrebbe essere impossibile per questa 
              Applicazione fornire il Servizio. Nei casi in cui questa Applicazione indichi alcuni 
              Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, 
              senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori, sono incoraggiati 
              a contattare il Titolare.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              L'eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa 
              Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione, ove non 
              diversamente precisato, ha la finalità di fornire il Servizio richiesto dall'Utente, oltre 
              alle ulteriori finalità descritte nel presente documento e nella Cookie Policy, se disponibile.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o 
              condivisi mediante questa Applicazione e garantisce di avere il diritto di comunicarli o 
              diffonderli, liberando il Titolare da qualsiasi responsabilità verso terzi.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-secondary text-2xl font-semibold mb-4 mt-8">
            Modalità e luogo del trattamento dei Dati raccolti
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Modalità di trattamento
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, 
                  la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con 
                  modalità organizzative e con logiche strettamente correlate alle finalità indicate. 
                  Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti 
                  coinvolti nell'organizzazione di questa Applicazione (personale amministrativo, commerciale, 
                  marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di 
                  servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie 
                  di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte 
                  del Titolare. L'elenco aggiornato dei Responsabili potrà sempre essere richiesto al 
                  Titolare del Trattamento.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Base giuridica del trattamento
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle 
                  seguenti condizioni:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    l'Utente ha prestato il consenso per una o più finalità specifiche; Nota: in alcuni 
                    ordinamenti il Titolare può essere autorizzato a trattare Dati Personali senza che 
                    debba sussistere il consenso dell'Utente o un'altra delle basi giuridiche specificate 
                    di seguito, fino a quando l'Utente non si opponga ("opt-out") a tale trattamento. 
                    Ciò non è tuttavia applicabile qualora il trattamento di Dati Personali sia regolato 
                    dalla legislazione europea in materia di protezione dei Dati Personali;
                  </li>
                  <li>
                    il trattamento è necessario all'esecuzione di un contratto con l'Utente e/o 
                    all'esecuzione di misure precontrattuali;
                  </li>
                  <li>
                    il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;
                  </li>
                  <li>
                    il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per 
                    l'esercizio di pubblici poteri di cui è investito il Titolare;
                  </li>
                  <li>
                    il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.
                  </li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed">
                  È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica 
                  di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla 
                  legge, previsto da un contratto o necessario per concludere un contratto.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">Luogo</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui 
                  le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  I Dati Personali dell'Utente potrebbero essere trasferiti in un paese diverso da quello in 
                  cui l'Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l'Utente 
                  può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  L'Utente ha diritto a ottenere informazioni in merito alla base giuridica del trasferimento 
                  di Dati al di fuori dell'Unione Europea o ad un'organizzazione internazionale di diritto 
                  internazionale pubblico o costituita da due o più paesi, come ad esempio l'ONU, nonché in 
                  merito alle misure di sicurezza adottate dal Titolare per proteggere i Dati.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  L'Utente può verificare se abbia luogo uno dei trasferimenti appena descritti esaminando la 
                  sezione di questo documento relativa ai dettagli sul trattamento di Dati Personali o chiedere 
                  informazioni al Titolare contattandolo agli estremi riportati in apertura.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Periodo di conservazione
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti.
                </p>
                
                <p className="text-gray-700 leading-relaxed">Pertanto:</p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    I Dati Personali raccolti per scopi collegati all'esecuzione di un contratto tra il 
                    Titolare e l'Utente saranno trattenuti sino a quando sia completata l'esecuzione di tale contratto.
                  </li>
                  <li>
                    I Dati Personali raccolti per finalità riconducibili all'interesse legittimo del Titolare 
                    saranno trattenuti sino al soddisfacimento di tale interesse. L'Utente può ottenere ulteriori 
                    informazioni in merito all'interesse legittimo perseguito dal Titolare nelle relative sezioni 
                    di questo documento o contattando il Titolare.
                  </li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed">
                  Quando il trattamento è basato sul consenso dell'Utente, il Titolare può conservare i Dati 
                  Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare 
                  potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo in ottemperanza 
                  ad un obbligo di legge o per ordine di un'autorità.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo 
                  spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto 
                  alla portabilità dei Dati non potranno più essere esercitati.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-secondary text-2xl font-semibold mb-4 mt-8">
            Diritti dell'Utente
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              In particolare, l'Utente ha il diritto di:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>revocare il consenso in ogni momento.</strong> L'Utente può revocare il consenso al 
                trattamento dei propri Dati Personali precedentemente espresso.
              </li>
              <li>
                <strong>opporsi al trattamento dei propri Dati.</strong> L'Utente può opporsi al trattamento 
                dei propri Dati quando esso avviene su una base giuridica diversa dal consenso. Ulteriori 
                dettagli sul diritto di opposizione sono indicati nella sezione sottostante.
              </li>
              <li>
                <strong>accedere ai propri Dati.</strong> L'Utente ha diritto ad ottenere informazioni sui 
                Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia 
                dei Dati trattati.
              </li>
              <li>
                <strong>verificare e chiedere la rettificazione.</strong> L'Utente può verificare la correttezza 
                dei propri Dati e richiederne l'aggiornamento o la correzione.
              </li>
              <li>
                <strong>ottenere la limitazione del trattamento.</strong> Quando ricorrono determinate condizioni, 
                l'Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare 
                non tratterà i Dati per alcun altro scopo se non la loro conservazione.
              </li>
              <li>
                <strong>ottenere la cancellazione o rimozione dei propri Dati Personali.</strong> Quando ricorrono 
                determinate condizioni, l'Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.
              </li>
              <li>
                <strong>ricevere i propri Dati o farli trasferire ad altro titolare.</strong> L'Utente ha diritto 
                di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico 
                e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare. 
                Questa disposizione è applicabile quando i Dati sono trattati con strumenti automatizzati ed il 
                trattamento è basato sul consenso dell'Utente, su un contratto di cui l'Utente è parte o su misure 
                contrattuali ad esso connesse.
              </li>
              <li>
                <strong>proporre reclamo.</strong> L'Utente può proporre un reclamo all'autorità di controllo 
                della protezione dei dati personali competente o agire in sede giudiziale.
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-secondary text-xl font-medium mb-3">
              Dettagli sul diritto di opposizione
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Quando i Dati Personali sono trattati nell'interesse pubblico, nell'esercizio di pubblici 
                poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, 
                gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, 
                possono opporsi al trattamento senza fornire alcuna motivazione. Per scoprire se il Titolare tratti 
                dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni 
                di questo documento.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-secondary text-xl font-medium mb-3">
              Come esercitare i diritti
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Per esercitare i diritti dell'Utente, gli Utenti possono indirizzare una richiesta agli estremi 
              di contatto del Titolare indicati in questo documento. Le richieste sono depositate a titolo 
              gratuito e evase dal Titolare nel più breve tempo possibile, in ogni caso entro un mese.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-secondary text-2xl font-semibold mb-4 mt-8">
            Ulteriori informazioni sul trattamento
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Difesa in giudizio
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I Dati Personali dell'Utente possono essere utilizzati da parte del Titolare in giudizio o 
                  nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo 
                  di questa Applicazione o dei Servizi connessi da parte dell'Utente.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  L'Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare 
                  i Dati per ordine delle autorità pubbliche.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Informative specifiche
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Su richiesta dell'Utente, in aggiunta alle informazioni contenute in questa privacy policy, 
                questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali 
                riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.
              </p>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Log di sistema e manutenzione
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali 
                servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano 
                le interazioni e che possono contenere anche Dati Personali, quali l'indirizzo IP Utente.
              </p>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Informazioni non contenute in questa policy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste 
                in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.
              </p>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Risposta alle richieste "Do Not Track"
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Questa Applicazione non supporta le richieste "Do Not Track".
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Per scoprire se gli eventuali servizi di terze parti utilizzati le supportino, l'Utente è 
                  invitato a consultare le rispettive privacy policy.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-secondary text-xl font-medium mb-3">
                Modifiche a questa privacy policy
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy 
                  policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa 
                  Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli 
                  Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare 
                  con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare 
                  provvederà a raccogliere nuovamente il consenso dell'Utente, se necessario.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PrivacyPolicy;