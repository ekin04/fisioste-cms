import { config, collection, fields, singleton } from "@keystatic/core";
import { url } from "inspector";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    navigation: {
      Contenuti: ["blog", "servizi"],
      Pagine: ["home", "testimonial", "convenzioni"],
      Impostazioni: ["settings", "navbar"],
    },
  },
  singletons: {
    home: singleton({
      label: "🏠 Home",
      path: "content/pages/home",
      format: { data: "json" },
      schema: {
        slide: fields.array(
          fields.object(
            {
              immagine: fields.image({
                label: "Immagine",
                directory: "public/img/cms/home",
                publicPath: "/img/cms/home",
              }),
              alt: fields.text({ label: "Descrivi immagine" }),
            },
            {
              label: "Slide Hero Home",
              description: "Slide d'immagini per il carosello della homepage",
              layout: [6, 6],
            }
          ),
          {
            label: "Slide Hero Home",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      },
    }),
    settings: singleton({
      label: "⚙️ Settings",
      path: "content/settings",
      format: { data: "json" },
      schema: {
        titoloSito: fields.text({ label: "Titolo Sito" }),
        descrizioneSito: fields.text({ label: "Descrizione Sito" }),
        email: fields.text({ label: "Email" }),
        telefono: fields.text({ label: "Telefono" }),
        cellulare: fields.text({ label: "Cellulare" }),
        indirizzo: fields.text({ label: "Indirizzo" }),
        linkGoogleMaps: fields.url({ label: "Link Google Maps" }),
        facebook: fields.url({ label: "Facebook" }),
        instagram: fields.url({ label: "Instagram" }),
        youtube: fields.url({ label: "Youtube" }),
        banner_og: fields.image({
          label: "Immagine condivisione link",
          description:
            "Immagine che compare quando viene condivisa una pagina del sito che non ha un immagine di copertina",
          directory: "public/",
          publicPath: "/",
          validation: { isRequired: true },
        }),
      },
    }),
    navbar: singleton({
      label: "🛠️ Navbar Desktop",
      path: "content/navbar",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            label: fields.text({
              label: "Etichetta",
              validation: { isRequired: true },
            }),
            path: fields.text({
              label: "Percorso",
              validation: { isRequired: true },
            }),
            children: fields.array(
              fields.object({
                label: fields.text({
                  label: "Etichetta",
                  validation: { isRequired: true },
                }),
                path: fields.text({
                  label: "Percorso",
                  validation: { isRequired: true },
                }),
              }),
              {
                label: "Sottomenu",
                itemLabel: (props) => props.fields.label.value,
              }
            ),
          }),
          {
            label: "Voci della Navbar Header",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
    testimonial: singleton({
      label: "👨‍⚖️ Testimonial",
      path: "content/testimonial",
      format: { data: "json" },
      schema: {
        testimonial: fields.array(
          fields.object(
            {
              nome: fields.text({ label: "Nome" }),
              immagine: fields.image({
                label: "Immagine",
                directory: "public/img/cms/testimonial",
                publicPath: "/img/cms/testimonial",
              }),
              rating: fields.number({ label: "Rating" }),
              descrizione: fields.text({
                label: "Recensione",
                validation: { isRequired: true },
                multiline: true,
              }),
            },
            {
              label: "Recensioni",
              layout: [12, 6, 6, 12],
            }
          ),
          {
            label: "Recensioni",
            itemLabel: (props) => props.fields.nome.value,
          }
        ),
      },
    }),
    convenzioni: singleton({
      label: "🏥 Convenzioni",
      path: "content/convenzioni",
      format: { data: "json" },
      schema: {
        convenzioni: fields.array(
          fields.object({
            nome: fields.text({
              label: "Nome",
              description: "Nome della societò convenzionata",
            }),
            url: fields.url({
              label: "Url",
              description: "Url della società convenzionata",
            }),
            immagine: fields.image({
              label: "Immagine",
              description: "Logo della società convenzionata",
              directory: "public/img/cms/convenzioni",
              publicPath: "/img/cms/convenzioni",
            }),
          }),
          {
            label: "Convenzioni",
            itemLabel: (props) => props.fields.nome.value,
          }
        ),
      },
    }),
  },
  collections: {
    servizi: collection({
      label: "👩‍🏭 Servizi",
      slugField: "title",
      columns: ["title", "id"],
      path: "content/servizi/*",
      format: { contentField: "content" },

      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        id: fields.number({
          label: "ID",
          description: "Posizione nella lista dei servizi",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Descrizione",
          description:
            "Descrizione breve del servizio comparirà nella griglia dei servizi",
          multiline: true,
        }),
        image: fields.image({
          label: "Immagine in evidenza",
          directory: "public/img/cms/servizi",
          publicPath: "/img/cms/servizi",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: "Contenuto del servizio",
          description:
            "Corpo della pagina, è possibile inserire ulteriori immagini",
          options: {
            image: {
              directory: "public/img/cms/servizi/",
              publicPath: "/img/cms/servizi/",
            },
          },
        }),
      },
    }),
    blog: collection({
      label: "📖 Blog",
      slugField: "title",
      path: "content/blog/*",
      columns: ["title", "publishDate"],
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishDate: fields.date({
          label: "Data di pubblicazione",
          validation: { isRequired: true },
          defaultValue: { kind: "today" },
        }),
        description: fields.text({
          label: "Descrizione",
          description:
            "Descrizione breve del post comparirà nella griglia dei post",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Contenuto dell'articolo",
          description:
            "Corpo della pagina, è possibile inserire ulteriori immagini",
          options: {
            image: {
              directory: "public/img/cms/blog/",
              publicPath: "/img/cms/blog/",
            },
          },
        }),
        image: fields.image({
          label: "Immagine",
          directory: "public/img/cms/blog",
          publicPath: "/img/cms/blog",
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
