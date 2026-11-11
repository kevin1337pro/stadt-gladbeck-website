const pageHref = (id) => `?seite=${id}`;

export const pulseItems = [
  {
    label: "Engagement",
    title: "Gute Ideen verdienen Aufmerksamkeit",
    text: "Gemeinsam etwas bewegen: Entdecke, wie ehrenamtliches Engagement das Leben vor Ort bereichert.",
    href: pageHref("engagement"),
  },
  {
    label: "Kultur",
    title: "Ein Sommer voller Kultur",
    text: "Musik, Begegnungen und lange Abende unter freiem Himmel. So kann sich ein Stadtsommer anf\u00fchlen.",
    href: pageHref("kultursommer"),
  },
  {
    label: "Miteinander",
    title: "Dein Viertel kommt ins Gespr\u00e4ch",
    text: "Fragen stellen, Ideen teilen und die Nachbarschaft mitgestalten. Hier beginnt der Austausch.",
    href: pageHref("stadtgespraech"),
  },
  {
    label: "Jugend",
    title: "Junge Ideen f\u00fcr morgen",
    text: "Was w\u00fcnschen sich junge Menschen f\u00fcr ihre Stadt? Eine Einladung zum Mitdenken und Mitgestalten.",
    href: pageHref("jugendideen"),
  },
  {
    label: "Mobilit\u00e4t",
    title: "Neue Wege f\u00fcr deine Stadt",
    text: "Zu Fu\u00df, auf dem Rad oder mit dem Bus: Gute Verbindungen machen den Alltag leichter.",
    href: pageHref("mobilitaet"),
  },
];

export const quicklinks = [
  {
    tone: "lime",
    label: "Digital erledigen",
    title: "Serviceportal",
    text: "Antr\u00e4ge, Meldeangelegenheiten und weitere Dienstleistungen an einem Ort entdecken.",
    meta: "Service",
    href: pageHref("serviceportal"),
  },
  {
    tone: "navy",
    label: "Gut vorbereitet",
    title: "Online-Termine",
    text: "Dein Weg zum Termin: Anliegen ausw\u00e4hlen und Informationen zur Vorbereitung finden.",
    meta: "Rathaus",
    href: pageHref("online-termine"),
  },
  {
    tone: "light",
    label: "Rathaus direkt",
    title: "Rufnummern im Rathaus",
    text: "Die passende Ansprechstelle f\u00fcr dein Anliegen finden, ohne lange Suchwege.",
    meta: "Kontakt",
    href: pageHref("kontakt"),
  },
  {
    tone: "sand",
    label: "Karriere",
    title: "Arbeiten bei der Stadt",
    text: "Vielf\u00e4ltige Berufe, Ausbildung und Perspektiven im \u00f6ffentlichen Dienst entdecken.",
    meta: "Jobs",
    href: pageHref("karriere"),
  },
  {
    tone: "light",
    label: "Politik verstehen",
    title: "Ratssitzungen",
    text: "Wie Entscheidungen entstehen: Einblicke in die Arbeit von Rat und Aussch\u00fcssen.",
    meta: "Politik",
    href: pageHref("ratssitzungen"),
  },
  {
    tone: "navy",
    label: "Unterwegs",
    title: "Aktuelle Baustellen",
    text: "Ein Platz f\u00fcr Informationen zu Baustellen, Umleitungen und Ver\u00e4nderungen im Verkehr.",
    meta: "Mobilit\u00e4t",
    href: pageHref("baustellen"),
  },
];

export const themes = [
  {
    id: "rathaus",
    tone: "navy",
    label: "Rathaus & Politik",
    title: "Rathaus & Politik",
    text: "Dein Kontakt zur Verwaltung. Entscheidungen verstehen und die eigene Stadt mitgestalten.",
    tags: ["B\u00fcrgerservice", "Beteiligung", "Ratssitzungen"],
    href: pageHref("rathaus"),
  },
  {
    id: "familie",
    tone: "lime",
    label: "Familie & Bildung",
    title: "Familie & Bildung",
    text: "Von den ersten Schritten bis ins hohe Alter: Angebote f\u00fcr jede Generation.",
    tags: ["Fr\u00fche Bildung", "Spielpl\u00e4tze", "Miteinander"],
    href: pageHref("familie"),
  },
  {
    id: "wohnen",
    tone: "light",
    label: "Leben & Wohnen",
    title: "Leben & Wohnen",
    text: "Ein Zuhause finden, mobil bleiben und das eigene Quartier kennenlernen.",
    tags: ["Radwege", "Quartiere", "Baustellen"],
    href: pageHref("wohnen"),
  },
  {
    id: "wirtschaft",
    tone: "sand",
    label: "Wirtschaft",
    title: "Wirtschaft & Arbeit",
    text: "Raum f\u00fcr gute Ideen: Handel, Gr\u00fcndung und wirtschaftliche Entwicklung.",
    tags: ["Wochenmarkt", "Ausschreibungen", "Standort"],
    href: pageHref("wirtschaft"),
  },
  {
    id: "kultur",
    tone: "navy",
    label: "Kultur & Tourismus",
    title: "Kultur & Entdecken",
    text: "Neue Lieblingsorte, gute Geschichten und Kultur direkt vor der Haust\u00fcr.",
    tags: ["Kultursommer", "Stadtb\u00fccherei", "Ausflugsziele"],
    href: pageHref("kultur"),
  },
  {
    id: "sport",
    tone: "lime",
    label: "Sport & Freizeit",
    title: "Sport & Freizeit",
    text: "In Bewegung kommen, gemeinsam aktiv sein oder einfach die freie Zeit genie\u00dfen.",
    tags: ["Sport im Park", "Schwimmen", "Freizeit"],
    href: pageHref("sport"),
  },
];

export const stories = [
  {
    title: "Stadt am Wasser",
    badge: "Duisburg",
    text: "Am Innenhafen treffen alte Hafenkr\u00e4ne auf neue Architektur und weite Blicke.",
    image: new URL("../media/city/duisburg-innenhafen.jpg", import.meta.url)
      .href,
    alt: "Hafenkr\u00e4ne und Backsteinfassaden am Duisburger Innenhafen",
    position: "42% center",
    href: pageHref("ausflugsziele"),
  },
  {
    title: "Weite Blicke",
    badge: "Dortmund",
    text: "Winterlicht am Phoenixsee. Dahinter zeichnen sich die Stadt und der Florianturm ab.",
    image: new URL("../media/city/dortmund-phoenixsee.jpg", import.meta.url)
      .href,
    alt: "Dortmunder Skyline mit Florianturm hinter dem winterlichen Phoenixsee",
    position: "center center",
    href: pageHref("ausflugsziele"),
  },
  {
    title: "Ein Haus f\u00fcr alle",
    badge: "Bochum",
    text: "Der Innenhof des Bochumer Rathauses: klare Linien und ein Ort mitten im Stadtleben.",
    image: new URL("../media/city/bochum-rathaus.jpg", import.meta.url).href,
    alt: "Innenhof und Uhrturm des Bochumer Rathauses",
    position: "center top",
    href: pageHref("rathaus"),
  },
  {
    title: "Geschichte leuchtet",
    badge: "Essen",
    text: "Das beleuchtete F\u00f6rderger\u00fcst der Zeche Zollverein. Eine besondere Perspektive auf Industriekultur.",
    image: new URL("../media/city/essen-zollverein.jpg", import.meta.url).href,
    alt: "Beleuchtetes F\u00f6rderger\u00fcst von Schacht XII der Zeche Zollverein in Essen bei Nacht",
    position: "center center",
    href: pageHref("kultur"),
  },
];

export const videoSlots = [
  {
    tone: "navy",
    badge: "Stadt im Dialog",
    title: "Was bewegt dein Viertel?",
    text: "Platz f\u00fcr kurze Einblicke, Perspektiven aus der Nachbarschaft und gute Ideen.",
    href: pageHref("stadtgespraech"),
    cta: "Thema entdecken",
  },
  {
    tone: "lime",
    badge: "Zusammen aktiv",
    title: "Nachhaltig unterwegs",
    text: "Inspiration f\u00fcr einen Alltag mit kurzen Wegen und mehr Raum zum Durchatmen.",
    href: pageHref("mobilitaet"),
    cta: "Mehr erfahren",
  },
  {
    tone: "light",
    badge: "Drau\u00dfen erleben",
    title: "Kultur unter freiem Himmel",
    text: "Musik, Begegnungen und neue Lieblingsmomente. Eine Idee f\u00fcr den Stadtsommer.",
    href: pageHref("kultursommer"),
    cta: "Thema entdecken",
  },
];

export const news = [
  { ...pulseItems[1], tone: "feature", date: "Beispielmeldung" },
  { ...pulseItems[0], date: "Beispielmeldung" },
  { ...pulseItems[2], date: "Beispielmeldung" },
  { ...pulseItems[3], date: "Beispielmeldung" },
  { ...pulseItems[4], date: "Beispielmeldung" },
  {
    label: "Stadtentwicklung",
    date: "Beispielmeldung",
    title: "Mehr Platz f\u00fcr das Rad",
    text: "Sichere Verbindungen und gute Abstellm\u00f6glichkeiten: Ideen f\u00fcr eine fahrradfreundliche Stadt.",
    href: pageHref("radverkehr"),
  },
];

export const agenda = [
  {
    label: "Austausch",
    title: "Zukunft gemeinsam gestalten",
    text: "Ein beispielhaftes Stadtforum f\u00fcr Ideen, Fragen und neue Perspektiven.",
    href: pageHref("zukunftsforum"),
  },
  {
    label: "Drau\u00dfen",
    title: "Mobilit\u00e4ts- und Klimatag",
    text: "Ein Veranstaltungsbeispiel rund um nachhaltige Mobilit\u00e4t und einen bewussten Alltag.",
    href: pageHref("klimatag"),
  },
  {
    label: "Miteinander",
    title: "Nachbarschaft trifft sich",
    text: "Eine Idee f\u00fcr Begegnungen im Viertel: gemeinsam essen, reden und Kontakte kn\u00fcpfen.",
    href: pageHref("nachbarschaft"),
  },
  {
    label: "Mitgestalten",
    title: "Junge Perspektiven",
    text: "Ein beispielhafter Workshop, in dem junge Menschen ihre Ideen f\u00fcr die Stadt einbringen.",
    href: pageHref("jugendwerkstatt"),
  },
];

export const menuSections = [
  {
    id: "rathaus",
    title: "Rathaus & Politik",
    description: "Service, Kontakte und Entscheidungen.",
    items: [
      {
        title: "Serviceportal",
        text: "Digitale Dienstleistungen deiner Stadt",
        href: pageHref("serviceportal"),
      },
      {
        title: "Ratssitzungen",
        text: "Entscheidungen und Sitzungsinformationen",
        href: pageHref("ratssitzungen"),
      },
      {
        title: "Rufnummern",
        text: "Kontakte und Ansprechstellen im Rathaus",
        href: pageHref("kontakt"),
      },
    ],
  },
  {
    id: "familie",
    title: "Familie & Bildung",
    description: "Schule, Jugend und Angebote f\u00fcr Generationen.",
    items: [
      {
        title: "Schule",
        text: "Bildung und Schulalltag in deiner Stadt",
        href: pageHref("schule"),
      },
      {
        title: "Senioren",
        text: "Informationen f\u00fcr \u00e4ltere Menschen",
        href: pageHref("senioren"),
      },
      {
        title: "Jugendrat",
        text: "Mitwirkung und Beteiligung f\u00fcr junge Menschen",
        href: pageHref("jugendrat"),
      },
    ],
  },
  {
    id: "wohnen",
    title: "Leben & Wohnen",
    description: "Wohnen, Bauen und unterwegs sein.",
    items: [
      {
        title: "Aktuelle Baustellen",
        text: "Orientierung zu Baustellen und Umleitungen",
        href: pageHref("baustellen"),
      },
      {
        title: "Baugebiete",
        text: "Wohnen und neue Perspektiven im Quartier",
        href: pageHref("baugebiete"),
      },
      {
        title: "Stadtplan",
        text: "Orte, Wege und Orientierung",
        href: pageHref("stadtplan"),
      },
    ],
  },
  {
    id: "wirtschaft",
    title: "Wirtschaft",
    description: "Standort, Handel und gute Ideen.",
    items: [
      {
        title: "Wirtschaftsbereich",
        text: "Informationen f\u00fcr Unternehmen und Gr\u00fcndung",
        href: pageHref("wirtschaft"),
      },
      {
        title: "Ausschreibungen",
        text: "Auftr\u00e4ge und Vergabeverfahren",
        href: pageHref("ausschreibungen"),
      },
      {
        title: "Wochenmarkt",
        text: "Regional einkaufen und Menschen begegnen",
        href: pageHref("wochenmarkt"),
      },
    ],
  },
  {
    id: "kultur",
    title: "Kultur & Tourismus",
    description: "Kultur erleben und Lieblingsorte entdecken.",
    items: [
      {
        title: "Ausflugsziele",
        text: "Inspiration f\u00fcr die n\u00e4chste kleine Auszeit",
        href: pageHref("ausflugsziele"),
      },
      {
        title: "Kultursommer",
        text: "Musik und Begegnungen unter freiem Himmel",
        href: pageHref("kultursommer"),
      },
      {
        title: "Stadtb\u00fccherei",
        text: "Lesen, lernen und Neues entdecken",
        href: pageHref("stadtbuecherei"),
      },
    ],
  },
  {
    id: "sport",
    title: "Sport & Freizeit",
    description: "Aktiv werden und Freizeit genie\u00dfen.",
    items: [
      {
        title: "Sport & Freizeit",
        text: "Bewegung und freie Zeit in deiner Stadt",
        href: pageHref("sport"),
      },
      {
        title: "Sport im Park",
        text: "Gemeinsam drau\u00dfen aktiv werden",
        href: pageHref("sport-im-park"),
      },
      {
        title: "Mobilit\u00e4ts- und Klimatag",
        text: "Ein Veranstaltungsbeispiel zum Mitmachen",
        href: pageHref("klimatag"),
      },
    ],
  },
];

// Shared routes keep cards, search and submenu destinations consistent.
export const detailPages = new Map();
[
  ...menuSections.flatMap((section) =>
    section.items.map((item) => ({ ...item, category: section.title })),
  ),
  ...themes.map((item) => ({ ...item, category: "Themenwelt" })),
  ...quicklinks.map((item) => ({ ...item, category: "Service" })),
  ...news.map((item) => ({ ...item, category: "Beispielmeldung" })),
  ...agenda.map((item) => ({ ...item, category: "Beispieltermin" })),
].forEach((item) => {
  detailPages.set(new URLSearchParams(item.href).get("seite"), item);
});
