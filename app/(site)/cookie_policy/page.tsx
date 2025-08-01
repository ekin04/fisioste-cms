import CookieConsentComponent from "../components/layout/cookie-consent/Cookie";
interface Cookie_policyProps {}

const Cookie_policy: React.FC<Cookie_policyProps> = ({}) => {
    return (
        <div className="container max-w-4xl px-4 py-10 mx-auto">
            <h1 className="mb-8 text-3xl font-bold text-secondary">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Utilizziamo cookie e tecnologie simili sul nostro sito Web ed elaboriamo dati personali su di te,
                    come il tuo indirizzo IP. Condividiamo questi dati anche con terze parti. Il trattamento dei dati
                    può essere effettuato con il tuo consenso o sulla base di un interesse legittimo, al quale puoi
                    opporti nelle singole impostazioni sulla privacy. Hai il diritto di prestare il consenso solo ai
                    servizi essenziali e di modificare o revocare il tuo consenso in un secondo momento.
                   
                </p>
                <CookieConsentComponent />

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-secondary">Ulteriori informazioni sul trattamento</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Difesa in giudizio</h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                I Dati Personali dell'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle
                                fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa
                                Applicazione o dei Servizi connessi da parte dell'Utente.
                            </p>
                            <p className="leading-relaxed text-gray-700">
                                L'Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati
                                per ordine delle autorità pubbliche.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Informative specifiche</h3>
                            <p className="leading-relaxed text-gray-700">
                                Su richiesta dell'Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa
                                Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti
                                Servizi specifici, o la raccolta ed il trattamento di Dati Personali.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Log di sistema e manutenzione</h3>
                            <p className="leading-relaxed text-gray-700">
                                Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali
                                servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le
                                interazioni e che possono contenere anche Dati Personali, quali l'indirizzo IP Utente.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Informazioni non contenute in questa policy</h3>
                            <p className="leading-relaxed text-gray-700">
                                Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in
                                qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Risposta alle richieste "Do Not Track"</h3>
                            <p className="leading-relaxed text-gray-700">
                                Questa Applicazione non supporta le richieste "Do Not Track".
                                Per scoprire se gli eventuali servizi di terze parti utilizzati le supportino, l'Utente è invitato a
                                consultare le rispettive privacy policy.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Modifiche a questa privacy policy</h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy
                                policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa
                                Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti
                                attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con
                                frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
                            </p>
                            <p className="leading-relaxed text-gray-700">
                                Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare
                                provvederà a raccogliere nuovamente il consenso dell'Utente, se necessario.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-secondary">Informazioni per i consumatori californiani</h2>
                    
                    <p className="mb-4 leading-relaxed text-gray-700">
                        Questa parte del documento integra e completa le informazioni contenute nel resto della privacy
                        policy ed è fornita dalla società che gestisce questa Applicazione e, se del caso, dalla sua
                        capogruppo e dalle sue controllate e affiliate (ai fini di questa sezione denominate collettivamente
                        "noi", "nostro" o "nostra").
                    </p>

                    <div className="p-6 mb-6 rounded-lg bg-gray-50">
                        <p className="leading-relaxed text-gray-700">
                            Le disposizioni contenute in questa sezione si applicano a tutti gli Utenti che sono considerati
                            consumatori residenti nello stato della California, Stati Uniti d'America, ai sensi del "California
                            Consumer Privacy Act of 2018″ (tali Utenti sono indicati di seguito semplicemente come "tu", "tuo",
                            "voi" o "vostro"), e, per costoro, queste disposizioni prevalgono su qualsiasi altra disposizione
                            eventualmente divergente o in contrasto contenuta nella presente privacy policy.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Categorie di informazioni personali raccolte</h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                In questa sezione sono riassunte le categorie di informazioni personali che abbiamo raccolto,
                                comunicato o "venduto" ai sensi del CCPA e le relative finalità del trattamento. Puoi trovare
                                informazioni dettagliate su tali attività nella sezione denominata "Dettagli sul trattamento dei
                                Dati Personali" presente in questo documento.
                            </p>
                            <p className="leading-relaxed text-gray-700">
                                <strong>Informazioni che raccogliamo:</strong> Abbiamo raccolto le seguenti categorie di informazioni personali su di te: identificatori e
                                informazioni su Internet. Non raccoglieremo ulteriori categorie di informazioni personali senza prima comunicarti una nuova
                                informativa.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Come raccogliamo le informazioni</h3>
                            <p className="leading-relaxed text-gray-700">
                                Raccogliamo le suddette categorie di informazioni personali, direttamente o indirettamente, da te
                                quando utilizzi questa Applicazione. Per esempio, ci fornisci direttamente le tue informazioni personali quando invii richieste tramite
                                qualsiasi modulo presente su questa Applicazione. Inoltre, ci fornisci indirettamente informazioni
                                personali quando navighi su questa Applicazione.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">I tuoi diritti relativi alla privacy in California</h3>
                            <div className="p-6 rounded-lg bg-blue-50">
                                <h4 className="mb-3 font-semibold text-gray-800">Diritto alla conoscenza e alla portabilità</h4>
                                <p className="mb-4 leading-relaxed text-gray-700">Hai il diritto di conoscere:</p>
                                <ul className="ml-4 space-y-2 text-gray-700 list-disc list-inside">
                                    <li>le categorie di informazioni personali che raccogliamo su di te e le fonti di tali informazioni</li>
                                    <li>le finalità per le quali utilizziamo le tue informazioni personali e con chi le condividiamo</li>
                                    <li>informazioni dettagliate su vendita o comunicazione a terzi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-secondary">Informazioni per gli Utenti residenti in Brasile</h2>
                    
                    <p className="mb-6 leading-relaxed text-gray-700">
                        Le disposizioni contenute in questa sezione si applicano a tutti gli Utenti che sono residenti in
                        Brasile, ai sensi della "Lei Geral de Proteção de Dados" (LGPD).
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">Basi giuridiche per il trattamento</h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Trattiamo le tue informazioni personali esclusivamente nel caso in cui sussista una delle seguenti basi giuridiche:
                            </p>
                            <ul className="ml-4 space-y-2 text-gray-700 list-disc list-inside">
                                <li>il tuo consenso alle attività di trattamento</li>
                                <li>l'adempimento ad obblighi di legge</li>
                                <li>l'esecuzione di un contratto</li>
                                <li>il nostro legittimo interesse</li>
                                <li>la tutela della salute o sicurezza</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-3 text-xl font-medium text-gray-800">I tuoi diritti</h3>
                            <div className="p-6 rounded-lg bg-green-50">
                                <p className="mb-4 leading-relaxed text-gray-700">Hai il diritto di:</p>
                                <ul className="ml-4 space-y-2 text-gray-700 list-disc list-inside">
                                    <li>ottenere conferma dell'esistenza di trattamenti</li>
                                    <li>accedere alle tue informazioni personali</li>
                                    <li>ottenere la rettifica dei dati</li>
                                    <li>richiedere la cancellazione</li>
                                    <li>revocare il consenso</li>
                                    <li>presentare reclamo all'ANPD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-secondary">Definizioni e riferimenti legali</h2>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">Dati Personali</h3>
                                <p className="text-sm text-gray-600">Qualunque informazione che renda identificata o identificabile una persona fisica.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Utente</h3>
                                <p className="text-sm text-gray-600">L'individuo che utilizza questa Applicazione.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Titolare del Trattamento</h3>
                                <p className="text-sm text-gray-600">Chi determina le finalità e i mezzi del trattamento dati.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">Cookie</h3>
                                <p className="text-sm text-gray-600">Piccole porzioni di dati conservate nel browser dell'Utente.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Strumento di Tracciamento</h3>
                                <p className="text-sm text-gray-600">Tecnologia che consente di tracciare gli Utenti.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Servizio</h3>
                                <p className="text-sm text-gray-600">Il servizio fornito da questa Applicazione.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pt-6 mt-8 border-t">
                    <p className="text-sm text-gray-500">
                        <strong>Riferimenti legali:</strong> La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi
                        gli artt. 13 e 14 del Regolamento (UE) 2016/679.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        <strong>Ultima modifica:</strong> 20 Aprile 2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cookie_policy;