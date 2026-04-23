const CONTENT_STAND = "23.04.2026";
const OFFICIAL_BASE = "https://www.gladbeck.de";
const EXTERNAL_ATTRS = 'target="_blank" rel="noreferrer noopener"';

const pulseItems = [
  {
    label: "23.04.2026",
    title: "Heimat-Preis 2026: Bewerbungen sind ab sofort moeglich",
    text: "Bewerbungen fuer den Heimat-Preis laufen jetzt. Buergermeisterin Bettina Weist lobt erneut 5.000 Euro aus.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5524`,
  },
  {
    label: "23.04.2026",
    title: "Open-Air-Sommer in Gladbeck mit vollem Programm",
    text: "Die Stadt buendelt Konzerte, Sommerabende und Veranstaltungshighlights in einer klar sichtbaren Programmlinie.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
  },
  {
    label: "22.04.2026",
    title: "Dialogveranstaltung in Ellinghorst mit der Buergermeisterin",
    text: "Das Format 'Triff die Buergermeisterin' zeigt, wie lokale Rueckmeldungen sichtbarer in die Startseite koennen.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5526`,
  },
  {
    label: "21.04.2026",
    title: "Europaeische Jugendkonferenz 2026 staerkt internationale Zusammenarbeit",
    text: "Im Mai 2026 findet die vierte Jugendkonferenz statt und setzt einen klaren Schwerpunkt auf Europa und Austausch.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5521`,
  },
  {
    label: "17.04.2026",
    title: "Strassensanierungen laufen seit Montag, 20. April, in mehreren Stadtteilen",
    text: "Verkehrs- und Baustellenhinweise bekommen hier einen schnelleren, sichtbaren Einstieg als im aktuellen Auftritt.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5519`,
  },
];

const quicklinks = [
  {
    tone: "lime",
    label: "24/7 erledigen",
    title: "Serviceportal",
    text: "Digitale Dienstleistungen fuer Pass-, Melde-, Gewerbe- und Lebensthemen zentral erreichbar.",
    meta: "Offiziell",
    href: "https://serviceportal.gladbeck.de/",
  },
  {
    tone: "navy",
    label: "Termin sichern",
    title: "Online-Termine",
    text: "Buergeramt und Auslaenderamt koennen direkt online gebucht werden.",
    meta: "Rathaus",
    href: `${OFFICIAL_BASE}/onlinetermin`,
  },
  {
    tone: "light",
    label: "Rathaus direkt",
    title: "Rufnummern im Rathaus",
    text: "Kontakte, Durchwahlen und wichtige Ansprechstellen ohne Suchwege finden.",
    meta: "Kontakt",
    href: `${OFFICIAL_BASE}/Rathaus_Politik/Rathaus/Rathaus_kompakt/Rufnummern.asp`,
  },
  {
    tone: "sand",
    label: "Karriere",
    title: "Arbeiten bei der Stadt",
    text: "Stellen, Ausbildung und Arbeitgebermarke der Stadt Gladbeck an einem Ort.",
    meta: "Jobs",
    href: `${OFFICIAL_BASE}/Rathaus_Politik/Rathaus/Arbeiten_bei_der_Stadt_Gladbeck/autostart.asp?highmain=2&highsub=11&highsubsub=0`,
  },
  {
    tone: "light",
    label: "Politik live",
    title: "Ratssitzungen",
    text: "Videouebertragungen und politische Sitzungsinformationen transparent aufbereitet.",
    meta: "Livestream",
    href: `${OFFICIAL_BASE}/Rathaus_Politik/Politik/Rat_der_Stadt/Videouebertragungen.asp`,
  },
  {
    tone: "navy",
    label: "Verkehr",
    title: "Aktuelle Baustellen",
    text: "Sperrungen, Sanierungen und laufende Verkehrsmassnahmen in Gladbeck.",
    meta: "Mobilitaet",
    href: `${OFFICIAL_BASE}/Leben_Wohnen/Ingenieuramt_Beta/Aktuelle_Baustellen/autostart.asp`,
  },
];

const themes = [
  {
    id: "rathaus",
    tone: "navy",
    label: "Rathaus & Politik",
    title: "Heimat-Preis, Rathaus News und Ratssitzungen bekommen hier eine staerkere Buehne.",
    text: "Verwaltung und Politik werden nicht nur verlinkt, sondern mit aktuellen Schwerpunkten lesbar gemacht.",
    tags: ["Heimat-Preis 2026", "Rathaus News", "Ratssitzungen"],
    href: `${OFFICIAL_BASE}/Rathaus_Politik/autostart.asp`,
  },
  {
    id: "familie",
    tone: "lime",
    label: "Familie & Bildung",
    title: "Fruehkindliche Bildung, Spielplaetze und Angebote fuer Generationen werden sichtbarer.",
    text: "Der Bereich kann aktuelle Familien-, Schul- und Beteiligungsthemen deutlich naeher am Alltag ausspielen.",
    tags: ["Fruehe Bildung", "Spielplatz Hunsrueckstrasse", "Seniorenprogramm"],
    href: `${OFFICIAL_BASE}/Familie_Bildung/autostart.asp`,
  },
  {
    id: "wohnen",
    tone: "light",
    label: "Leben & Wohnen",
    title: "Radvorrangroute, Strassensanierungen und Baustellen werden zu klaren Stadtinfos.",
    text: "Genau hier zeigt sich der Mehrwert eines portalfesten News- und Servicelayers fuer Mobilitaet und Quartiere.",
    tags: ["Radvorrangroute", "Europabruecke", "Baustellen"],
    href: `${OFFICIAL_BASE}/Leben_Wohnen/autostart.asp`,
  },
  {
    id: "wirtschaft",
    tone: "sand",
    label: "Wirtschaft",
    title: "Vom Feierabendmarkt bis zum Standortthema kann Gladbeck wirtschaftlich profilierter auftreten.",
    text: "Der Wirtschaftsbereich braucht Raum fuer Projekte, Ausschreibungen, Entwicklung und lokalen Handel.",
    tags: ["Feierabendmarkt", "Ausschreibungen", "Standort"],
    href: `${OFFICIAL_BASE}/Wirtschaft/index2.asp`,
  },
  {
    id: "kultur",
    tone: "navy",
    label: "Kultur & Tourismus",
    title: "Open-Air-Sommer, Stadtbuecherei und kulturelle Reihen werden deutlich atmosphaerischer.",
    text: "Kultur profitiert am staerksten von der neuen Gewichtung aus Bild, Termin und Storytelling.",
    tags: ["Open-Air-Sommer", "Stadtbuecherei", "Sehenswuerdigkeiten"],
    href: `${OFFICIAL_BASE}/Kultur_Tourismus/autostart.asp`,
  },
  {
    id: "sport",
    tone: "lime",
    label: "Sport & Freizeit",
    title: "Beachanlage, Hallenbad und Freizeitthemen koennen im Alltag sichtbarer werden.",
    text: "Sport und Freizeit verdienen einen aufgeraeumten Bereich mit aktuellen Hinweisen, Terminen und Bewegtbild.",
    tags: ["Beachanlage Nordpark", "Hallenbad", "Freizeit"],
    href: `${OFFICIAL_BASE}/Sport_Freizeit/autostart.asp`,
  },
];

const stories = [
  {
    title: "Mobilitaets- und Klimatag",
    badge: "26.04.2026",
    text: "Das Wasserschloss kann als 9:16-Einstieg fuer Eventteaser, Familienangebote und nachhaltige Mobilitaet dienen.",
    image: "Gladnbeck_schloss_luftaufnahme_v16_9_1200.jpeg",
    alt: "Luftaufnahme vom Wasserschloss Wittringen in Gladbeck",
    position: "center center",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5498`,
  },
  {
    title: "Wittringen & Rundtour",
    badge: "Stadt entdecken",
    text: "Tourismus, Sommerprogramm und kurze Videoformate koennen ueber reale Gladbeck-Motive deutlich atmosphaerischer starten.",
    image: "csm_gladbeck_gladbecker-rundtour_bild01_1deed78dfb.jpg",
    alt: "Wasserschloss Wittringen mit Spiegelung im Wasser",
    position: "center center",
    href: `${OFFICIAL_BASE}/Kultur_Tourismus/Sehenswuerdigkeiten/autostart.asp`,
  },
  {
    title: "Rathaus & Politik",
    badge: "Service direkt",
    text: "Das Rathaus bekommt eine eigene Bildsprache fuer politische Transparenz, Rufnummern und digitale Dienstleistungen.",
    image: "1906_115772_Rathaus_Gladbeck_klein (1).jpg",
    alt: "Historische Ansicht des Rathauses Gladbeck",
    position: "center top",
    href: `${OFFICIAL_BASE}/Rathaus_Politik/autostart.asp`,
  },
  {
    title: "Erinnerungsorte",
    badge: "Kulturraum",
    text: "Auch kulturelle und historische Orte funktionieren als ruhige, hochwertige Story-Einstiege fuer die Stadt.",
    image: "3L_12_01_ehrm_01_td.jpg",
    alt: "Steinboegen im Ehrenmal Gladbeck",
    position: "center center",
    href: `${OFFICIAL_BASE}/Kultur_Tourismus/autostart.asp`,
  },
];

const videoSlots = [
  {
    tone: "navy",
    badge: "Rathaus News",
    title: "26. Ausgabe online",
    text: "Die April-Ausgabe buendelt aktuelle Themen aus der Stadtverwaltung in einem modularen Redaktionsformat.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5517`,
    cta: "Zur Meldung",
  },
  {
    tone: "lime",
    badge: "Event-Teaser",
    title: "Mobilitaets- und Klimatag",
    text: "Sonntag, 26. April 2026, 10 bis 15 Uhr am Wasserschloss Wittringen.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5498`,
    cta: "Zum Termin",
  },
  {
    tone: "light",
    badge: "Sommerprogramm",
    title: "Open-Air-Sommer",
    text: "Ein Slot fuer Teaser-Reels, Programmlinien, Social-Clips und spaetere Ticket- oder Ablaufmodule.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
    cta: "Zum Programm",
  },
];

const news = [
  {
    tone: "feature",
    label: "Kultur",
    date: "23.04.2026",
    title: "Open-Air-Sommer in Gladbeck mit vollem Programm",
    text: "Wer gerne unter freiem Himmel feiert, Live-Musik geniesst und sommerliche Stadtmomente sucht, bekommt 2026 eine sichtbare Programmbuehne.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
  },
  {
    label: "Foerderung",
    date: "23.04.2026",
    title: "Heimat-Preis 2026 startet mit Bewerbungsphase",
    text: "Der mit 5.000 Euro dotierte Preis macht lokales Engagement zum redaktionellen Schwerpunkt.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5524`,
  },
  {
    label: "Dialog",
    date: "22.04.2026",
    title: "Ellinghorst: Stadtgespraech mit der Buergermeisterin",
    text: "Direkter Austausch im Stadtteil wird zu einem sichtbaren Format auf der Startseite.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5526`,
  },
  {
    label: "Europa",
    date: "21.04.2026",
    title: "Jugendkonferenz 2026 setzt europaeischen Akzent",
    text: "Gladbeck fuehrt den Jugendaustausch mit einer vierten Konferenz im Mai 2026 fort.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5521`,
  },
  {
    label: "Mobilitaet",
    date: "17.04.2026",
    title: "Strassensanierungen starten in mehreren Stadtteilen",
    text: "Seit Montag, 20. April 2026, laufen umfangreiche Massnahmen mit hohem Servicebedarf fuer Verkehr und Orientierung.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5519`,
  },
  {
    label: "Stadtentwicklung",
    date: "31.03.2026",
    title: "Radvorrangroute: Gladbeck plant Anschluss ab 2027",
    text: "Mobilitaetsprojekte wie diese brauchen eine prominentere Darstellung zwischen News, Karte und Baustellenlayer.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5507`,
  },
];

const agenda = [
  {
    label: "23.04.2026",
    title: "Zukunftsforum 'Gladbeck 2035'",
    text: "Oeffentliche Veranstaltung heute von 17 bis 18.30 Uhr im Ratssaal des Alten Rathauses.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5516`,
  },
  {
    label: "26.04.2026",
    title: "Mobilitaets- und Klimatag",
    text: "Familienfest rund um nachhaltige Mobilitaet und Klimaschutz am Wasserschloss Wittringen.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5498`,
  },
  {
    label: "30.04.2026",
    title: "Empfang der Arbeitnehmer:innen",
    text: "Buergermeisterin Bettina Weist laedt um 18.30 Uhr in den Ratssaal des Alten Rathauses ein.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5514`,
  },
  {
    label: "Mai 2026",
    title: "Europaeische Jugendkonferenz",
    text: "Gladbeck baut die internationale Zusammenarbeit mit Jugendlichen weiter aus.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5521`,
  },
];

const menuSections = [
  {
    id: "rathaus",
    title: "Rathaus & Politik",
    description: "Rathausdienste, politische Transparenz und Kontaktwege auf direkter Route.",
    items: [
      {
        title: "Serviceportal",
        text: "Digitale Dienstleistungen der Stadt Gladbeck",
        href: "https://serviceportal.gladbeck.de/",
      },
      {
        title: "Ratssitzungen",
        text: "Videouebertragungen und Sitzungsinformationen",
        href: `${OFFICIAL_BASE}/Rathaus_Politik/Politik/Rat_der_Stadt/Videouebertragungen.asp`,
      },
      {
        title: "Rufnummern",
        text: "Kontakte und Durchwahlen im Rathaus",
        href: `${OFFICIAL_BASE}/Rathaus_Politik/Rathaus/Rathaus_kompakt/Rufnummern.asp`,
      },
    ],
  },
  {
    id: "familie",
    title: "Familie & Bildung",
    description: "Schule, Jugend, Senioren und alltagsnahe Angebote fuer unterschiedliche Lebensphasen.",
    items: [
      {
        title: "Schule",
        text: "Schulbereich der Stadt Gladbeck",
        href: `${OFFICIAL_BASE}/Familie_Bildung/Bildung/Schulen/autostart.asp`,
      },
      {
        title: "Senioren",
        text: "Angebote und Informationen fuer aeltere Menschen",
        href: `${OFFICIAL_BASE}/Familie_Bildung/Senioren/autostart.asp`,
      },
      {
        title: "Jugendrat",
        text: "Mitwirkung und Beteiligung fuer junge Gladbecker:innen",
        href: `${OFFICIAL_BASE}/Familie_Bildung/Jugend/Jugendrat/autostart.asp`,
      },
    ],
  },
  {
    id: "wohnen",
    title: "Leben & Wohnen",
    description: "Mobilitaet, Stadtentwicklung, Baugebiete und Orientierung im Stadtalltag.",
    items: [
      {
        title: "Aktuelle Baustellen",
        text: "Sperrungen und Verkehrslagen",
        href: `${OFFICIAL_BASE}/Leben_Wohnen/Ingenieuramt_Beta/Aktuelle_Baustellen/autostart.asp`,
      },
      {
        title: "Baugebiete",
        text: "Wohnen und neue Flaechen in Gladbeck",
        href: `${OFFICIAL_BASE}/Leben_Wohnen/Bauen_Wohnen/Baugebiete_in_Gladbeck.asp`,
      },
      {
        title: "Geodatenportal",
        text: "Karten, Daten und Raumbezug",
        href: "http://www.gladbeck.de/geodatenportal",
      },
    ],
  },
  {
    id: "wirtschaft",
    title: "Wirtschaft",
    description: "Standort, Ausschreibungen und lokale Entwicklung mit staerkerem Profil.",
    items: [
      {
        title: "Wirtschaftsbereich",
        text: "Offizieller Einstieg in den Wirtschaftsauftritt",
        href: `${OFFICIAL_BASE}/Wirtschaft/index2.asp`,
      },
      {
        title: "Ausschreibungen",
        text: "UVGO- und VOB-Ausschreibungen der Stadt",
        href: `${OFFICIAL_BASE}/Rathaus_Politik/Rathaus/Ausschreibungen.asp?highmain=2&highsub=8&highsubsub=0`,
      },
      {
        title: "Feierabendmarkt",
        text: "Neustart der Veranstaltungsreihe auf dem Willy-Brandt-Platz",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5506`,
      },
    ],
  },
  {
    id: "kultur",
    title: "Kultur & Tourismus",
    description: "Programm, Orte und Reihen mit mehr Atmosphaere und staerkerer Sichtbarkeit.",
    items: [
      {
        title: "Sehenswuerdigkeiten",
        text: "Klassische touristische Einstiege",
        href: `${OFFICIAL_BASE}/Kultur_Tourismus/Sehenswuerdigkeiten/autostart.asp`,
      },
      {
        title: "Open-Air-Sommer",
        text: "Aktuelles Sommerprogramm der Stadt",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
      },
      {
        title: "Stadtbuecherei",
        text: "Kleinkunst, Lesung und Kindertheater",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5522`,
      },
    ],
  },
  {
    id: "sport",
    title: "Sport & Freizeit",
    description: "Freizeitorte, sportliche Infrastruktur und Events fuer aktive Nutzung.",
    items: [
      {
        title: "Sport & Freizeit",
        text: "Offizieller Bereich der Stadt",
        href: `${OFFICIAL_BASE}/Sport_Freizeit/autostart.asp`,
      },
      {
        title: "Beachanlage Nordpark",
        text: "Die Anlage ist seit dem 7. April 2026 wieder geoeffnet",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5508`,
      },
      {
        title: "Mobilitaets- und Klimatag",
        text: "Familienfest mit Aktivitaeten am Wasserschloss Wittringen",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5498`,
      },
    ],
  },
];

const accessFeatures = [
  {
    label: "Orientierung",
    title: "Skip-Link und klare Seitenbereiche",
    text: "Der Einstieg springt direkt in den Hauptinhalt. Header, Hauptbereich, Menue und Inhaltssektionen bleiben semantisch sauber getrennt.",
  },
  {
    label: "Menue",
    title: "Swipe, Drag und Tastatur im selben Muster",
    text: "Das Menue laesst sich mit Touch, Maus, Mausrad und Pfeiltasten nutzen. Der Fokus bleibt sichtbar und folgt der aktiven Position.",
  },
  {
    label: "Lesbarkeit",
    title: "Kontraststarke Bild-Overlays und ruhige Bewegung",
    text: "Text liegt auf lesbaren Flaechen, Fokusmarken sind deutlich sichtbar und reduzierte Bewegung wird automatisch respektiert.",
  },
  {
    label: "Reichweite",
    title: "Grosse Touchziele und ausbaubare Oeffentlichkeit",
    text: "Grosszuegige Klickflaechen helfen vielen Nutzergruppen sofort. Das Konzept laesst sich spaeter um Leichte Sprache und DGS-Module erweitern.",
  },
];

const pulseGrid = document.querySelector("#pulse-grid");
const pulseViewport = document.querySelector("[data-pulse-viewport]");
const pulsePrevButton = document.querySelector("[data-pulse-prev]");
const pulseNextButton = document.querySelector("[data-pulse-next]");
const quicklinksGrid = document.querySelector("#quicklinks-grid");
const themesGrid = document.querySelector("#themes-grid");
const storiesRail = document.querySelector("#stories-rail");
const videoSlotsGrid = document.querySelector("#video-slots");
const accessGrid = document.querySelector("#access-grid");
const newsGrid = document.querySelector("#news-grid");
const agendaList = document.querySelector("#agenda-list");
const menuTrack = document.querySelector("#menu-track");
const menuOverlay = document.querySelector("#menu-overlay");
const menuPanel = document.querySelector(".menu-panel");
const menuToggle = document.querySelector(".menu-toggle");
const footerYear = document.querySelector("#footer-year");
const footerContentDate = document.querySelector("#footer-content-date");
const newsletterForm = document.querySelector("#newsletter-form");
const newsletterEmail = document.querySelector("#newsletter-email");
const newsletterConsent = document.querySelector("#newsletter-consent");
const newsletterFeedback = document.querySelector("#newsletter-feedback");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderPulse() {
  pulseGrid.innerHTML = pulseItems
    .map(
      (item, index) => `
        <a class="pulse-card ${index === 0 ? "pulse-card--feature" : ""}" href="${item.href}" ${EXTERNAL_ATTRS}>
          <div class="pulse-card__meta">
            <span>${item.label}</span>
            <span>gladbeck.de</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <span class="pulse-card__cta">Offiziellen Beitrag oeffnen</span>
        </a>
      `,
    )
    .join("");
}

function renderQuicklinks() {
  quicklinksGrid.innerHTML = quicklinks
    .map(
      (item) => `
        <a class="quicklink-card quicklink-card--${item.tone}" href="${item.href}" ${EXTERNAL_ATTRS}>
          <div class="quicklink-card__meta">
            <span>${item.label}</span>
            <span>${item.meta}</span>
          </div>
          <div class="quicklink-card__body">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
          <div class="quicklink-card__footer">
            <span class="quicklink-card__cta">Zum offiziellen Ziel</span>
            <span class="quicklink-card__arrow" aria-hidden="true">&rarr;</span>
          </div>
        </a>
      `,
    )
    .join("");
}

function renderThemes() {
  themesGrid.innerHTML = themes
    .map(
      (theme) => `
        <a class="theme-card theme-card--${theme.tone}" id="${theme.id}" href="${theme.href}" ${EXTERNAL_ATTRS}>
          <div class="theme-card__meta">
            <span>${theme.label}</span>
            <span class="theme-card__arrow" aria-hidden="true">&rarr;</span>
          </div>
          <h3>${theme.title}</h3>
          <p>${theme.text}</p>
          <ul class="theme-card__tags">
            ${theme.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </a>
      `,
    )
    .join("");
}

function renderStories() {
  storiesRail.innerHTML = stories
    .map(
      (story) => `
        <a class="story-card" href="${story.href}" ${EXTERNAL_ATTRS}>
          <img src="${story.image}" alt="${story.alt}" loading="lazy" style="object-position: ${story.position};" />
          <div class="story-card__content">
            <span class="story-card__badge">${story.badge}</span>
            <h3>${story.title}</h3>
            <p>${story.text}</p>
            <div class="story-card__footer">
              <span>Offizielles Thema</span>
              <span class="story-card__arrow" aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </a>
      `,
    )
    .join("");
}

function renderAccess() {
  accessGrid.innerHTML = accessFeatures
    .map(
      (feature) => `
        <article class="access-card">
          <span class="access-card__label">${feature.label}</span>
          <h3>${feature.title}</h3>
          <p>${feature.text}</p>
        </article>
      `,
    )
    .join("");
}

function setupNewsletter() {
  if (!newsletterForm || !newsletterEmail || !newsletterConsent || !newsletterFeedback) {
    return;
  }

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterFeedback.classList.remove("is-error", "is-success");

    if (!newsletterEmail.checkValidity()) {
      newsletterFeedback.textContent = "Bitte gib eine gueltige E-Mail-Adresse ein.";
      newsletterFeedback.classList.add("is-error");
      newsletterEmail.reportValidity();
      return;
    }

    if (!newsletterConsent.checked) {
      newsletterFeedback.textContent = "Bitte bestaetige zuerst die Zustimmung fuer den Prototyp.";
      newsletterFeedback.classList.add("is-error");
      newsletterConsent.focus();
      return;
    }

    newsletterFeedback.textContent = "Vorgemerkt. Im Livebetrieb wuerde diese Anmeldung jetzt an den Newsletter-Dienst uebergeben.";
    newsletterFeedback.classList.add("is-success");
    newsletterForm.reset();
  });
}

function renderVideoSlots() {
  videoSlotsGrid.innerHTML = videoSlots
    .map(
      (slot) => `
        <a class="video-slot video-slot--${slot.tone}" href="${slot.href}" ${EXTERNAL_ATTRS}>
          <span class="video-slot__badge">${slot.badge}</span>
          <span class="video-slot__play" aria-hidden="true">&#9658;</span>
          <h3>${slot.title}</h3>
          <p>${slot.text}</p>
          <span class="video-slot__cta">${slot.cta}</span>
        </a>
      `,
    )
    .join("");
}

function renderNews() {
  newsGrid.innerHTML = news
    .map(
      (item) => `
        <a class="news-card ${item.tone ? `news-card--${item.tone}` : ""}" href="${item.href}" ${EXTERNAL_ATTRS}>
          <div class="news-card__meta">
            <span>${item.label}</span>
            <span>${item.date}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <span class="news-card__cta">Weiter auf gladbeck.de</span>
        </a>
      `,
    )
    .join("");
}

function setupCardSpotlights() {
  document.querySelectorAll(".pulse-card, .theme-card, .news-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--spotlight-x", `${x}%`);
      card.style.setProperty("--spotlight-y", `${y}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--spotlight-x");
      card.style.removeProperty("--spotlight-y");
    });
  });
}

function setupPulseRail() {
  if (!pulseViewport || !pulseGrid) {
    return;
  }

  const getStep = () => {
    const firstCard = pulseGrid.querySelector(".pulse-card");

    if (!firstCard) {
      return 320;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = Number.parseFloat(window.getComputedStyle(pulseGrid).columnGap || "16");
    return cardWidth + gap;
  };

  const scrollRail = (direction) => {
    pulseViewport.scrollBy({
      left: getStep() * direction,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const syncControls = () => {
    const maxScrollLeft = Math.max(0, pulseViewport.scrollWidth - pulseViewport.clientWidth);
    const currentScrollLeft = Math.round(pulseViewport.scrollLeft);
    const atStart = currentScrollLeft <= 1;
    const atEnd = currentScrollLeft >= maxScrollLeft - 1;

    if (pulsePrevButton) {
      pulsePrevButton.disabled = atStart;
      pulsePrevButton.setAttribute("aria-disabled", String(atStart));
    }

    if (pulseNextButton) {
      pulseNextButton.disabled = atEnd;
      pulseNextButton.setAttribute("aria-disabled", String(atEnd));
    }
  };

  pulsePrevButton?.addEventListener("click", () => scrollRail(-1));
  pulseNextButton?.addEventListener("click", () => scrollRail(1));

  pulseViewport.addEventListener("wheel", (event) => {
    const dominantDelta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

    if (dominantDelta === 0) {
      return;
    }

    event.preventDefault();
    pulseViewport.scrollLeft += dominantDelta;
  }, {
    passive: false,
  });

  let dragPointerId = null;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartLeft = 0;
  let isDragging = false;
  let isPressed = false;
  let dragPointerType = "mouse";

  pulseViewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragPointerId = event.pointerId;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragStartLeft = pulseViewport.scrollLeft;
    isDragging = false;
    isPressed = true;
    dragPointerType = event.pointerType;

    if (event.pointerType === "mouse") {
      pulseViewport.classList.add("is-pressed");
    }
  });

  const handlePointerMove = (event) => {
    if (!isPressed || event.pointerId !== dragPointerId) {
      return;
    }

    const deltaX = event.clientX - dragStartX;
    const deltaY = event.clientY - dragStartY;

    if (dragPointerType !== "mouse") {
      if (!isDragging && Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
        isDragging = true;
      }

      return;
    }

    if (!isDragging && Math.abs(deltaX) < 6) {
      return;
    }

    isDragging = true;
    pulseViewport.classList.add("is-dragging");
    pulseViewport.scrollLeft = dragStartLeft - deltaX;

    if (event.cancelable) {
      event.preventDefault();
    }
  };

  const stopDrag = (event) => {
    if (!isPressed || event.pointerId !== dragPointerId) {
      return;
    }

    const draggedInThisTurn = isDragging;
    dragPointerId = null;
    isDragging = false;
    isPressed = false;
    dragPointerType = "mouse";
    pulseViewport.classList.remove("is-pressed", "is-dragging");

    if (draggedInThisTurn) {
      pulseViewport.dataset.dragLock = "true";
      window.setTimeout(() => {
        delete pulseViewport.dataset.dragLock;
      }, 120);
    }
  };

  window.addEventListener("pointermove", handlePointerMove, {
    passive: false,
  });
  window.addEventListener("pointerup", stopDrag);
  window.addEventListener("pointercancel", stopDrag);

  pulseViewport.addEventListener("click", (event) => {
    if (pulseViewport.dataset.dragLock === "true") {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  pulseViewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollRail(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollRail(-1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      pulseViewport.scrollTo({
        left: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }

    if (event.key === "End") {
      event.preventDefault();
      pulseViewport.scrollTo({
        left: pulseViewport.scrollWidth,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  });

  pulseViewport.addEventListener("scroll", syncControls, {
    passive: true,
  });
  window.addEventListener("resize", syncControls, {
    passive: true,
  });

  syncControls();
}

function renderAgenda() {
  agendaList.innerHTML = agenda
    .map(
      (item) => `
        <a class="agenda-item" href="${item.href}" ${EXTERNAL_ATTRS}>
          <div class="agenda-item__meta">
            <span>${item.label}</span>
            <span>Termin</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </a>
      `,
    )
    .join("");
}

function renderMenu() {
  const rootPanel = `
    <section class="menu-level menu-level--root" data-panel="root">
      <div class="menu-level__header">
        <p class="eyebrow">Navigation</p>
        <h3>Schnell rein, klar weiter.</h3>
        <p>Die erste Menue-Ebene oeffnet von rechts. Danach kannst du die Liste ziehen oder nach unten wischen, waehrend die letzte Karte im Randbereich verschwindet.</p>
      </div>
      <div class="menu-wheel-group" data-menu-wheel-group>
        <div class="menu-wheel-viewport">
          <ul class="menu-list menu-wheel-list">
            ${menuSections
              .map(
                (section) => `
                  <li>
                    <button class="menu-entry menu-wheel-item" type="button" data-open-panel="${section.id}" data-menu-item>
                      <span class="menu-entry__label">
                        <strong>${section.title}</strong>
                        <span>${section.description}</span>
                      </span>
                      <span class="menu-entry__arrow" aria-hidden="true">&rarr;</span>
                    </button>
                  </li>
                `,
              )
              .join("")}
          </ul>
        </div>
        <div class="menu-wheel" role="group" aria-label="Menueposition"></div>
      </div>
    </section>
  `;

  const detailPanels = menuSections
    .map(
      (section) => `
        <section class="menu-level" data-panel="${section.id}">
          <button class="menu-back" type="button" data-back-panel="root">
            <span aria-hidden="true">&larr;</span>
            <span>Zurueck</span>
          </button>
          <div class="menu-level__header">
            <p class="eyebrow">Themenwelt</p>
            <h3>${section.title}</h3>
            <p>${section.description}</p>
          </div>
          <div class="menu-wheel-group menu-wheel-group--detail" data-menu-wheel-group>
            <div class="menu-wheel-viewport">
              <ul class="menu-sublist menu-wheel-list">
                ${section.items
                  .map(
                    (item) => `
                      <li>
                        <a class="menu-wheel-item" href="${item.href}" ${EXTERNAL_ATTRS} data-menu-item>
                          <strong>${item.title}</strong>
                          <span>${item.text}</span>
                        </a>
                      </li>
                    `,
                  )
                  .join("")}
              </ul>
            </div>
            <div class="menu-wheel" role="group" aria-label="Menueposition"></div>
          </div>
        </section>
      `,
    )
    .join("");

  menuTrack.innerHTML = rootPanel + detailPanels;
}

function setupMenuFocusWheel() {
  document.querySelectorAll("[data-menu-wheel-group]").forEach((group) => {
    const items = [...group.querySelectorAll("[data-menu-item]")];
    const wheel = group.querySelector(".menu-wheel");
    const scrollContainer = group.querySelector(".menu-wheel-list");

    if (!items.length || !wheel || !scrollContainer) {
      return;
    }

    wheel.innerHTML = items
      .map(
        (_, index) => `
          <button
            class="menu-wheel__dot"
            type="button"
            aria-label="Menueintrag ${index + 1} fokussieren"
            data-wheel-index="${index}"
          ></button>
        `,
      )
      .join("");

    const dots = [...wheel.querySelectorAll(".menu-wheel__dot")];
    let activeIndex = 0;

    const setStateClass = (element, distance) => {
      element.classList.remove("is-active", "is-near", "is-mid", "is-far");

      if (distance === 0) {
        element.classList.add("is-active");
      } else if (distance === 1) {
        element.classList.add("is-near");
      } else if (distance === 2) {
        element.classList.add("is-mid");
      } else {
        element.classList.add("is-far");
      }
    };

    const applyState = (nextIndex) => {
      activeIndex = Math.max(0, Math.min(nextIndex, items.length - 1));

      items.forEach((item, index) => {
        const distance = Math.abs(index - activeIndex);
        setStateClass(item, distance);
      });

      dots.forEach((dot, index) => {
        const distance = Math.abs(index - activeIndex);
        setStateClass(dot, distance);
      });
    };

    const syncFromScroll = () => {
      const bounds = scrollContainer.getBoundingClientRect();
      const focusY = bounds.top + bounds.height / 2;

      let bestIndex = activeIndex;
      let bestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - focusY);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      applyState(bestIndex);
    };

    const focusItem = (index, shouldScroll = true) => {
      const item = items[index];

      if (!item) {
        return;
      }

      applyState(index);

      if (shouldScroll) {
        item.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "center",
          inline: "nearest",
        });
      }

      item.focus({
        preventScroll: true,
      });
    };

    items.forEach((item, index) => {
      item.addEventListener("focus", () => applyState(index));
      item.addEventListener("mouseenter", () => applyState(index));
      item.addEventListener("pointerdown", () => applyState(index));
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => focusItem(index));
    });

    let dragPointerId = null;
    let dragStartY = 0;
    let dragStartTop = 0;
    let hasDragged = false;
    let isPointerPressed = false;

    scrollContainer.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) {
        return;
      }

      dragPointerId = event.pointerId;
      dragStartY = event.clientY;
      dragStartTop = scrollContainer.scrollTop;
      hasDragged = false;
      isPointerPressed = true;
      scrollContainer.classList.add("is-pressed");
    });

    const handlePointerMove = (event) => {
      if (!isPointerPressed || event.pointerId !== dragPointerId) {
        return;
      }

      const deltaY = event.clientY - dragStartY;

      if (!hasDragged && Math.abs(deltaY) < 6) {
        return;
      }

      if (!hasDragged) {
        hasDragged = true;
        scrollContainer.setPointerCapture?.(event.pointerId);
      }

      scrollContainer.classList.add("is-dragging");
      scrollContainer.scrollTop = dragStartTop - deltaY;

      if (event.cancelable) {
        event.preventDefault();
      }
    };

    const stopDrag = (event) => {
      if (!isPointerPressed || event.pointerId !== dragPointerId) {
        return;
      }

      const draggedInThisTurn = hasDragged;
      dragPointerId = null;
      hasDragged = false;
      isPointerPressed = false;
      scrollContainer.classList.remove("is-pressed", "is-dragging");
      if (scrollContainer.hasPointerCapture?.(event.pointerId)) {
        scrollContainer.releasePointerCapture(event.pointerId);
      }

      if (draggedInThisTurn) {
        scrollContainer.dataset.dragLock = "true";
        window.setTimeout(() => {
          delete scrollContainer.dataset.dragLock;
        }, 0);
      }

      window.requestAnimationFrame(syncFromScroll);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: false,
    });
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);

    scrollContainer.addEventListener("click", (event) => {
      if (scrollContainer.dataset.dragLock === "true") {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);

    group.addEventListener("keydown", (event) => {
      const currentIndex = items.indexOf(event.target.closest("[data-menu-item]"));

      if (currentIndex === -1) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        focusItem(currentIndex + 1);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        focusItem(currentIndex - 1);
      }
    });

    scrollContainer.addEventListener("scroll", syncFromScroll, {
      passive: true,
    });

    group.addEventListener("wheel", () => {
      window.requestAnimationFrame(syncFromScroll);
    }, {
      passive: true,
    });

    group.menuFocusWheel = {
      applyState,
      syncFromScroll,
    };

    applyState(0);
    window.requestAnimationFrame(syncFromScroll);
  });
}

function setupMenu() {
  const panelIds = ["root", ...menuSections.map((section) => section.id)];
  const panelIndex = Object.fromEntries(panelIds.map((id, index) => [id, index]));
  let previousActiveElement = null;
  const resetMenuLists = () => {
    menuTrack.querySelectorAll(".menu-wheel-list").forEach((list) => {
      list.scrollTop = 0;
    });
  };

  const getFocusableElements = () =>
    [...menuOverlay.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')].filter(
      (element) => !element.closest("[inert]"),
    );

  const setPanel = (panelId, options = {}) => {
    const { focusFirstItem = false } = options;
    const index = panelIndex[panelId] ?? 0;
    menuTrack.style.transform = `translateX(-${index * 100}%)`;
    menuTrack.dataset.panel = panelId;
    menuTrack.querySelectorAll("[data-panel]").forEach((panel) => {
      const isActive = panel.dataset.panel === panelId;
      panel.setAttribute("aria-hidden", String(!isActive));
      panel.toggleAttribute("inert", !isActive);
    });

    window.requestAnimationFrame(() => {
      const activePanel = menuTrack.querySelector(`[data-panel="${panelId}"]`);
      const focusGroup = activePanel?.querySelector("[data-menu-wheel-group]");
      focusGroup?.menuFocusWheel?.syncFromScroll();

      if (focusFirstItem) {
        const firstItem = activePanel?.querySelector("[data-menu-item]");
        focusGroup?.menuFocusWheel?.applyState(0);
        firstItem?.focus({
          preventScroll: true,
        });
      }
    });
  };

  const openMenu = () => {
    previousActiveElement = document.activeElement;
    resetMenuLists();
    menuOverlay.classList.add("is-open");
    menuOverlay.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    setPanel("root", {
      focusFirstItem: true,
    });
  };

  const closeMenu = () => {
    menuOverlay.classList.remove("is-open");
    menuOverlay.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    setPanel("root");
    previousActiveElement?.focus?.({
      preventScroll: true,
    });
  };

  menuToggle.addEventListener("click", openMenu);

  menuOverlay.addEventListener("click", (event) => {
    if (event.target.closest("[data-menu-close]")) {
      closeMenu();
      return;
    }

    const openTrigger = event.target.closest("[data-open-panel]");
    if (openTrigger) {
      setPanel(openTrigger.dataset.openPanel, {
        focusFirstItem: true,
      });
      return;
    }

    const backTrigger = event.target.closest("[data-back-panel]");
    if (backTrigger) {
      setPanel(backTrigger.dataset.backPanel, {
        focusFirstItem: true,
      });
      return;
    }

    if (event.target.closest(".menu-sublist a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOverlay.classList.contains("is-open")) {
      closeMenu();
    }
  });

  menuPanel.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !menuOverlay.classList.contains("is-open")) {
      return;
    }

    const focusable = getFocusableElements();
    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  setPanel("root");

  const params = new URLSearchParams(window.location.search);
  if (params.get("menu") === "open") {
    openMenu();
    const requestedPanel = params.get("panel");
    if (requestedPanel && panelIndex[requestedPanel] !== undefined) {
      setPanel(requestedPanel, {
        focusFirstItem: true,
      });
    }
  }
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function init() {
  renderPulse();
  renderQuicklinks();
  renderThemes();
  renderStories();
  renderVideoSlots();
  renderAccess();
  renderNews();
  renderAgenda();
  renderMenu();
  setupCardSpotlights();
  setupPulseRail();
  setupMenuFocusWheel();
  setupMenu();
  setupNewsletter();
  setupReveal();
  footerYear.textContent = new Date().getFullYear();
  footerContentDate.textContent = CONTENT_STAND;
}

init();
