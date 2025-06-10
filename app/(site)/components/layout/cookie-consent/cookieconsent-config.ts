import { CookieConsentConfig } from "vanilla-cookieconsent";

const pluginConfig: CookieConsentConfig = {
    guiOptions: {
    
        consentModal: {
            layout: "cloud inline",
            position: "bottom right",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar",
            position: "right",
            equalWeightButtons: false,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "it",
        autoDetect: "browser",
        translations: {
            it: {
                consentModal: {
                    title: "🍪 Gradiresti un cookie?",
                    description: "Questo sito utilizza cookie tecnici e di terze parti per offrire una migliore esperienza di navigazione. Continuando a navigare, acconsenti all'uso dei cookie. Puoi modificare le tue preferenze selezionando 'Gestisci preferenze'.",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    showPreferencesBtn: "Gestisci preferenze",
                    footer: "<a href=\"privacy_policy\">Informativa sulla privacy</a>\n<a href=\"cookie_policy\">Cookie Policy</a>"
                },
                preferencesModal: {
                    title: "Centro preferenze per il consenso",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    savePreferencesBtn: "Salva le preferenze",
                    closeIconLabel: "Chiudi la finestra",
                    serviceCounterLabel: "Servizi",
                    sections: [
                        {
                            title: "Utilizzo dei Cookie",
                            description: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando navighi su un sito web. Questo sito utilizza i cookie per migliorare la tua esperienza di navigazione e per raccogliere informazioni anonime sull'utilizzo del sito."
                        },
                        {
                            title: "Cookie Tecnici <span class=\"pm__badge\">Sempre Attivati</span>",
                            description: "Questi cookie sono strettamente necessari per il funzionamento del sito web e non possono essere disattivati. Sono utilizzati per memorizzare le informazioni relative alla sessione dell'utente e per gestire le funzionalit  del sito.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookie Analitici",
                            description: "Questi cookie raccolgono informazioni anonime sull'utilizzo del sito web, come ad esempio le pagine visitate, il tempo di permanenza sul sito e le azioni eseguite. Queste informazioni vengono utilizzate per migliorare la nostra offerta e per ottimizzare l'esperienza dell'utente.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Ulteriori informazioni",
                            description: "Se hai bisogno di ulteriori informazioni sulla mia politica cookie, non esitare a <a class=\"cc__link\" href=\"contatti\">contattarmi</a>. Sar  felice di aiutarti."
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true
    
};
export default pluginConfig;
