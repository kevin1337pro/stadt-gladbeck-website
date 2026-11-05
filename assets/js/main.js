const CONTENT_STAND = "23.04.2026";
const OFFICIAL_BASE = "https://www.gladbeck.de";
const EXTERNAL_ATTRS = 'rel="external"';

const pulseItems = [
  {
    label: "23.04.2026",
    title: "Heimat-Preis 2026: Engagement auszeichnen",
    text: "5.000 Euro f\u00fcr ehrenamtliches Engagement: Die Stadt informierte im April \u00fcber den Heimat-Preis 2026.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5524`,
  },
  {
    label: "23.04.2026",
    title: "Ein Sommer voller Kultur",
    text: "Konzerte, Sommerabende und Begegnungen unter freiem Himmel: ein Blick auf das Sommerprogramm 2026.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
  },
  {
    label: "22.04.2026",
    title: "Ellinghorst kommt ins Gespr\u00e4ch",
    text: "Im direkten Austausch mit der B\u00fcrgermeisterin ging es um Fragen und Ideen aus dem Stadtteil.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5526`,
  },
  {
    label: "21.04.2026",
    title: "Junge Ideen f\u00fcr Europa",
    text: "Die vierte Jugendkonferenz im Mai 2026 stand im Zeichen von Europa und internationalem Austausch.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5521`,
  },
  {
    label: "17.04.2026",
    title: "Neue Wege f\u00fcr Gladbeck",
    text: "Im April begannen Stra\u00dfensanierungen in mehreren Stadtteilen. Details und Hintergr\u00fcnde im offiziellen Beitrag.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5519`,
  },
];

const quicklinks = [
  {
    tone: "lime",
    label: "24/7 erledigen",
    title: "Serviceportal",
    text: "Digitale Dienstleistungen f\u00fcr Pass-, Melde-, Gewerbe- und Lebensthemen zentral erreichbar.",
    meta: "Offiziell",
    href: "https://serviceportal.gladbeck.de/",
  },
  {
    tone: "navy",
    label: "Termin sichern",
    title: "Online-Termine",
    text: "Termine im B\u00fcrgeramt und Ausl\u00e4nderamt direkt online buchen.",
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
    text: "Video\u00fcbertragungen und politische Sitzungsinformationen transparent aufbereitet.",
    meta: "Livestream",
    href: `${OFFICIAL_BASE}/Rathaus_Politik/Politik/Rat_der_Stadt/Videouebertragungen.asp`,
  },
  {
    tone: "navy",
    label: "Verkehr",
    title: "Aktuelle Baustellen",
    text: "Sperrungen, Sanierungen und laufende Verkehrsmassnahmen in Gladbeck.",
    meta: "Mobilit\u00e4t",
    href: `${OFFICIAL_BASE}/Leben_Wohnen/Ingenieuramt_Beta/Aktuelle_Baustellen/autostart.asp`,
  },
];

const themes = [
  {
    id: "rathaus",
    tone: "navy",
    label: "Rathaus & Politik",
    title: "Rathaus & Politik",
    text: "Dein Kontakt zur Verwaltung. Entscheidungen verstehen und die eigene Stadt mitgestalten.",
    tags: ["Heimat-Preis 2026", "Rathaus News", "Ratssitzungen"],
    href: `${OFFICIAL_BASE}/Rathaus_Politik/autostart.asp`,
  },
  {
    id: "familie",
    tone: "lime",
    label: "Familie & Bildung",
    title: "Familie & Bildung",
    text: "Von den ersten Schritten bis ins hohe Alter: Angebote f\u00fcr jede Generation.",
    tags: [
      "Fr\u00fche Bildung",
      "Spielplatz Hunsr\u00fcckstra\u00dfe",
      "Seniorenprogramm",
    ],
    href: `${OFFICIAL_BASE}/Familie_Bildung/autostart.asp`,
  },
  {
    id: "wohnen",
    tone: "light",
    label: "Leben & Wohnen",
    title: "Leben & Wohnen",
    text: "Ein Zuhause finden, mobil bleiben und das eigene Quartier kennenlernen.",
    tags: ["Radvorrangroute", "Europabr\u00fccke", "Baustellen"],
    href: `${OFFICIAL_BASE}/Leben_Wohnen/autostart.asp`,
  },
  {
    id: "wirtschaft",
    tone: "sand",
    label: "Wirtschaft",
    title: "Wirtschaft & Arbeit",
    text: "Raum f\u00fcr gute Ideen: Standort, Handel, Ausschreibungen und wirtschaftliche Entwicklung.",
    tags: ["Feierabendmarkt", "Ausschreibungen", "Standort"],
    href: `${OFFICIAL_BASE}/Wirtschaft/index2.asp`,
  },
  {
    id: "kultur",
    tone: "navy",
    label: "Kultur & Tourismus",
    title: "Kultur & Entdecken",
    text: "Neue Lieblingsorte, gute Geschichten und Kultur direkt vor der Haust\u00fcr.",
    tags: ["Open-Air-Sommer", "Stadtb\u00fccherei", "Sehensw\u00fcrdigkeiten"],
    href: `${OFFICIAL_BASE}/Kultur_Tourismus/autostart.asp`,
  },
  {
    id: "sport",
    tone: "lime",
    label: "Sport & Freizeit",
    title: "Sport & Freizeit",
    text: "In Bewegung kommen, gemeinsam aktiv sein oder einfach die freie Zeit genie\u00dfen.",
    tags: ["Beachanlage Nordpark", "Hallenbad", "Freizeit"],
    href: `${OFFICIAL_BASE}/Sport_Freizeit/autostart.asp`,
  },
];

const stories = [
  {
    title: "Wittringen von oben",
    badge: "Lieblingsorte",
    text: "Ein neuer Blick auf das Wasserschloss und die gr\u00fcnen Wege rundherum.",
    image: new URL(
      "../../Gladnbeck_schloss_luftaufnahme_v16_9_1200.jpeg",
      import.meta.url,
    ).href,
    alt: "Luftaufnahme vom Wasserschloss Wittringen in Gladbeck",
    position: "center center",
    href: `${OFFICIAL_BASE}/Kultur_Tourismus/Sehenswuerdigkeiten/autostart.asp`,
  },
  {
    title: "Wittringen & Rundtour",
    badge: "Stadt entdecken",
    text: "Am Wasser entlang und mitten ins Gr\u00fcne. Finde deine n\u00e4chste kleine Auszeit.",
    image: new URL(
      "../../csm_gladbeck_gladbecker-rundtour_bild01_1deed78dfb.jpg",
      import.meta.url,
    ).href,
    alt: "Wasserschloss Wittringen mit Spiegelung im Wasser",
    position: "center center",
    href: `${OFFICIAL_BASE}/Kultur_Tourismus/Sehenswuerdigkeiten/autostart.asp`,
  },
  {
    title: "Rathaus & Politik",
    badge: "Service direkt",
    text: "Ein Haus f\u00fcr die Stadt: Menschen, Politik und deine Anliegen an einem Ort.",
    image: new URL(
      "../../1906_115772_Rathaus_Gladbeck_klein (1).jpg",
      import.meta.url,
    ).href,
    alt: "Historische Ansicht des Rathauses Gladbeck",
    position: "center top",
    href: `${OFFICIAL_BASE}/Rathaus_Politik/autostart.asp`,
  },
  {
    title: "Erinnerungsorte",
    badge: "Kulturraum",
    text: "Orte, die Geschichte erz\u00e4hlen. Entdecke das kulturelle Ged\u00e4chtnis Gladbecks.",
    image: new URL("../../3L_12_01_ehrm_01_td.jpg", import.meta.url).href,
    alt: "Steinb\u00f6gen im Ehrenmal Gladbeck",
    position: "center center",
    href: `${OFFICIAL_BASE}/Kultur_Tourismus/autostart.asp`,
  },
];

const videoSlots = [
  {
    tone: "navy",
    badge: "Rathaus News",
    title: "26. Ausgabe online",
    text: "Die April-Ausgabe b\u00fcndelt aktuelle Themen aus der Stadtverwaltung in einem modularen Redaktionsformat.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5517`,
    cta: "Zur Meldung",
  },
  {
    tone: "lime",
    badge: "Event-Teaser",
    title: "Mobilit\u00e4ts- und Klimatag",
    text: "Sonntag, 26. April 2026, 10 bis 15 Uhr am Wasserschloss Wittringen.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5498`,
    cta: "Zum Termin",
  },
  {
    tone: "light",
    badge: "Sommerprogramm",
    title: "Open-Air-Sommer",
    text: "Das Sommerprogramm 2026: Musik, Begegnungen und Kultur unter freiem Himmel.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
    cta: "Zum Programm",
  },
];

const news = [
  {
    tone: "feature",
    label: "Kultur",
    date: "23.04.2026",
    title: "Ein Sommer voller Kultur",
    text: "Musik und Begegnungen unter freiem Himmel: ein R\u00fcckblick auf das Sommerprogramm 2026.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
  },
  {
    label: "F\u00f6rderung",
    date: "23.04.2026",
    title: "Heimat-Preis 2026 startet mit Bewerbungsphase",
    text: "Ein Preis f\u00fcr Menschen, die sich vor Ort engagieren. Die Meldung zur Bewerbungsphase im April 2026.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5524`,
  },
  {
    label: "Dialog",
    date: "22.04.2026",
    title: "Ellinghorst: Stadtgespr\u00e4ch mit der B\u00fcrgermeisterin",
    text: "Fragen stellen, Ideen teilen und miteinander ins Gespr\u00e4ch kommen: der Dialog in Ellinghorst.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5526`,
  },
  {
    label: "Europa",
    date: "21.04.2026",
    title: "Jugendkonferenz 2026 setzt europ\u00e4ischen Akzent",
    text: "Die vierte Jugendkonferenz brachte im Mai 2026 junge Menschen zum europ\u00e4ischen Austausch zusammen.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5521`,
  },
  {
    label: "Mobilit\u00e4t",
    date: "17.04.2026",
    title: "Stra\u00dfensanierungen starten in mehreren Stadtteilen",
    text: "Hintergr\u00fcnde zu den im April gestarteten Arbeiten und den betroffenen Stadtteilen.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5519`,
  },
  {
    label: "Stadtentwicklung",
    date: "31.03.2026",
    title: "Radvorrangroute: Gladbeck plant Anschluss ab 2027",
    text: "Die Planungen zum Anschluss Gladbecks an die Radvorrangroute im \u00dcberblick.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5507`,
  },
];

const agenda = [
  {
    label: "23.04.2026",
    title: "Zukunftsforum 'Gladbeck 2035'",
    text: "\u00d6ffentliche Veranstaltung am 23. April 2026, 17 bis 18.30 Uhr, im Ratssaal des Alten Rathauses.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5516`,
  },
  {
    label: "26.04.2026",
    title: "Mobilit\u00e4ts- und Klimatag",
    text: "Familienfest rund um nachhaltige Mobilit\u00e4t und Klimaschutz am Wasserschloss Wittringen.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5498`,
  },
  {
    label: "30.04.2026",
    title: "Empfang der Arbeitnehmer:innen",
    text: "B\u00fcrgermeisterin Bettina Weist l\u00e4dt um 18.30 Uhr in den Ratssaal des Alten Rathauses ein.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5514`,
  },
  {
    label: "Mai 2026",
    title: "Europ\u00e4ische Jugendkonferenz",
    text: "Gladbeck baut die internationale Zusammenarbeit mit Jugendlichen weiter aus.",
    href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5521`,
  },
];

const menuSections = [
  {
    id: "rathaus",
    title: "Rathaus & Politik",
    description: "Service, Kontakte und Entscheidungen.",
    items: [
      {
        title: "Serviceportal",
        text: "Digitale Dienstleistungen der Stadt Gladbeck",
        href: "https://serviceportal.gladbeck.de/",
      },
      {
        title: "Ratssitzungen",
        text: "Video\u00fcbertragungen und Sitzungsinformationen",
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
    description: "Schule, Jugend und Angebote f\u00fcr Generationen.",
    items: [
      {
        title: "Schule",
        text: "Schulbereich der Stadt Gladbeck",
        href: `${OFFICIAL_BASE}/Familie_Bildung/Bildung/Schulen/autostart.asp`,
      },
      {
        title: "Senioren",
        text: "Angebote und Informationen f\u00fcr \u00e4ltere Menschen",
        href: `${OFFICIAL_BASE}/Familie_Bildung/Senioren/autostart.asp`,
      },
      {
        title: "Jugendrat",
        text: "Mitwirkung und Beteiligung f\u00fcr junge Gladbecker:innen",
        href: `${OFFICIAL_BASE}/Familie_Bildung/Jugend/Jugendrat/autostart.asp`,
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
        text: "Sperrungen und Verkehrslagen",
        href: `${OFFICIAL_BASE}/Leben_Wohnen/Ingenieuramt_Beta/Aktuelle_Baustellen/autostart.asp`,
      },
      {
        title: "Baugebiete",
        text: "Wohnen und neue Fl\u00e4chen in Gladbeck",
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
    description: "Standort, Handel und gute Ideen.",
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
    description: "Kultur erleben und Lieblingsorte entdecken.",
    items: [
      {
        title: "Sehensw\u00fcrdigkeiten",
        text: "Klassische touristische Einstiege",
        href: `${OFFICIAL_BASE}/Kultur_Tourismus/Sehenswuerdigkeiten/autostart.asp`,
      },
      {
        title: "Open-Air-Sommer",
        text: "Aktuelles Sommerprogramm der Stadt",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5525`,
      },
      {
        title: "Stadtb\u00fccherei",
        text: "Kleinkunst, Lesung und Kindertheater",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5522`,
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
        text: "Offizieller Bereich der Stadt",
        href: `${OFFICIAL_BASE}/Sport_Freizeit/autostart.asp`,
      },
      {
        title: "Beachanlage Nordpark",
        text: "Die Anlage ist seit dem 7. April 2026 wieder ge\u00f6ffnet",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5508`,
      },
      {
        title: "Mobilit\u00e4ts- und Klimatag",
        text: "Familienfest mit Aktivitaeten am Wasserschloss Wittringen",
        href: `${OFFICIAL_BASE}/index.asp?form=detail&db=404&id=5498`,
      },
    ],
  },
];

const accessFeatures = [
  {
    label: "Orientierung",
    title: "Direkt zum Inhalt",
    text: "Mit dem ersten Tastatursprung gelangst du zum Hauptinhalt. Klare \u00dcberschriften helfen bei der Orientierung.",
  },
  {
    label: "Men\u00fc",
    title: "So, wie du navigierst",
    text: "Men\u00fc und Meldungen lassen sich per Tastatur, Touch und Maus bedienen. Der Tastaturfokus bleibt sichtbar.",
  },
  {
    label: "Lesbarkeit",
    title: "In deinem Tempo",
    text: "Text liegt auf ruhigen Fl\u00e4chen. Wenn dein Ger\u00e4t weniger Bewegung bevorzugt, werden Animationen ausgeschaltet.",
  },
  {
    label: "Reichweite",
    title: "Mehr Platz zum Treffen",
    text: "Gut erreichbare Schaltfl\u00e4chen und umbrochene Texte erleichtern die Bedienung auch auf kleinen Bildschirmen.",
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
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function renderPulse() {
  pulseGrid.innerHTML = pulseItems
    .map(
      (item, index) => `
        <a class="pulse-card ${index === 0 ? "pulse-card--feature" : ""}" href="${item.href}" ${EXTERNAL_ATTRS}>
          <div class="pulse-card__meta">
            <span>${item.label}</span>
            <span>${String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <span class="pulse-card__cta">Beitrag lesen</span>
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
              <span>Mehr entdecken</span>
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
  if (
    !newsletterForm ||
    !newsletterEmail ||
    !newsletterConsent ||
    !newsletterFeedback
  ) {
    return;
  }

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterFeedback.classList.remove("is-error", "is-success");

    if (!newsletterEmail.checkValidity()) {
      newsletterFeedback.textContent =
        "Bitte gib eine g\u00fcltige E-Mail-Adresse ein.";
      newsletterFeedback.classList.add("is-error");
      newsletterEmail.reportValidity();
      return;
    }

    if (!newsletterConsent.checked) {
      newsletterFeedback.textContent =
        "Bitte best\u00e4tige, dass du das Formular ausprobieren m\u00f6chtest.";
      newsletterFeedback.classList.add("is-error");
      newsletterConsent.focus();
      return;
    }

    newsletterFeedback.textContent =
      "Das Formular ist korrekt ausgef\u00fcllt. In dieser Demo wurden keine Daten gespeichert und keine E-Mails versendet.";
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

function setupCardSpotlights() {
  if (prefersReducedMotion || !window.matchMedia("(hover: hover)").matches)
    return;
  document
    .querySelectorAll(".pulse-card, .theme-card, .news-card")
    .forEach((card) => {
      let frame = 0;
      card.addEventListener("pointermove", (event) => {
        if (event.pointerType === "touch") return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty(
            "--spotlight-x",
            String(event.clientX - rect.left) + "px",
          );
          card.style.setProperty(
            "--spotlight-y",
            String(event.clientY - rect.top) + "px",
          );
        });
      });
      card.addEventListener("pointerleave", () => {
        cancelAnimationFrame(frame);
        card.style.removeProperty("--spotlight-x");
        card.style.removeProperty("--spotlight-y");
      });
    });
}

function setupDragScroll(container, axis, onRelease) {
  const horizontal = axis === "x";
  const property = horizontal ? "scrollLeft" : "scrollTop";
  let pressed = false;
  let dragging = false;
  let pointerId = null;
  let start = 0;
  let crossStart = 0;
  let startScroll = 0;
  let suppressClick = false;

  container.addEventListener("pointerdown", (event) => {
    if (
      event.pointerType !== "mouse" ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey
    )
      return;
    if (
      horizontal
        ? container.scrollWidth <= container.clientWidth + 1
        : container.scrollHeight <= container.clientHeight + 1
    )
      return;
    suppressClick = false;
    pressed = true;
    dragging = false;
    pointerId = event.pointerId;
    start = horizontal ? event.clientX : event.clientY;
    crossStart = horizontal ? event.clientY : event.clientX;
    startScroll = container[property];
  });
  container.addEventListener("dragstart", (event) => {
    if (pressed) event.preventDefault();
  });
  window.addEventListener(
    "pointermove",
    (event) => {
      if (!pressed || event.pointerId !== pointerId) return;
      const delta = (horizontal ? event.clientX : event.clientY) - start;
      const cross = (horizontal ? event.clientY : event.clientX) - crossStart;
      if (!dragging && Math.abs(delta) < 7) return;
      if (!dragging && Math.abs(cross) > Math.abs(delta)) {
        pressed = false;
        return;
      }
      if (!dragging) {
        dragging = true;
        container.classList.add("is-dragging");
        container.setPointerCapture(event.pointerId);
        window.getSelection()?.removeAllRanges();
      }
      event.preventDefault();
      container[property] = startScroll - delta;
    },
    { passive: false },
  );

  const stop = (event) => {
    if (
      !pressed ||
      (event.pointerId !== undefined && event.pointerId !== pointerId)
    )
      return;
    pressed = false;
    if (container.hasPointerCapture(pointerId))
      container.releasePointerCapture(pointerId);
    if (dragging) {
      suppressClick = true;
      container.classList.remove("is-dragging");
      onRelease?.();
    }
    dragging = false;
    pointerId = null;
  };
  window.addEventListener("pointerup", stop);
  window.addEventListener("pointercancel", stop);
  window.addEventListener("blur", stop);
  container.addEventListener(
    "click",
    (event) => {
      if (suppressClick && event.detail !== 0) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }
    },
    true,
  );
}

function setupPulseRail() {
  if (!pulseViewport || !pulseGrid) return;
  const cards = [...pulseGrid.querySelectorAll(".pulse-card")];
  const counter = document.querySelector("[data-pulse-counter]");
  let wheelTimer;
  let frame = 0;
  const maxLeft = () =>
    Math.max(0, pulseViewport.scrollWidth - pulseViewport.clientWidth);
  const positions = () => {
    const bounds = pulseViewport.getBoundingClientRect();
    return cards.map((card) =>
      Math.max(
        0,
        Math.min(
          maxLeft(),
          card.getBoundingClientRect().left -
            bounds.left +
            pulseViewport.scrollLeft,
        ),
      ),
    );
  };
  const closestIndex = () =>
    positions().reduce(
      (best, position, index, all) =>
        Math.abs(position - pulseViewport.scrollLeft) <
        Math.abs(all[best] - pulseViewport.scrollLeft)
          ? index
          : best,
      0,
    );
  const goTo = (index) => {
    const target = Math.max(0, Math.min(index, cards.length - 1));
    pulseViewport.scrollTo({
      left: positions()[target],
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };
  const sync = () => {
    const atStart = pulseViewport.scrollLeft <= 2;
    const atEnd = pulseViewport.scrollLeft >= maxLeft() - 2;
    pulsePrevButton.disabled = atStart;
    pulseNextButton.disabled = atEnd;
    if (counter)
      counter.textContent =
        String(closestIndex() + 1).padStart(2, "0") +
        " / " +
        String(cards.length).padStart(2, "0");
  };
  pulsePrevButton.addEventListener("click", () => goTo(closestIndex() - 1));
  pulseNextButton.addEventListener("click", () => goTo(closestIndex() + 1));
  pulseViewport.addEventListener(
    "wheel",
    (event) => {
      if (
        event.ctrlKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        !event.deltaY
      )
        return;
      const delta =
        event.deltaY *
        (event.deltaMode === 1
          ? 20
          : event.deltaMode === 2
            ? pulseViewport.clientWidth
            : 1);
      if (
        (delta < 0 && pulseViewport.scrollLeft <= 1) ||
        (delta > 0 && pulseViewport.scrollLeft >= maxLeft() - 1)
      )
        return;
      event.preventDefault();
      pulseViewport.classList.add("is-wheeling");
      pulseViewport.scrollLeft += delta * (Math.abs(delta) > 40 ? 2 : 1);
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        const index = closestIndex();
        pulseViewport.classList.remove("is-wheeling");
        goTo(index);
      }, 160);
    },
    { passive: false },
  );
  pulseViewport.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const activeCard = event.target.closest(".pulse-card");
    const current = activeCard ? cards.indexOf(activeCard) : closestIndex();
    let next;
    if (event.key === "ArrowRight") next = current + 1;
    if (event.key === "ArrowLeft") next = current - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = cards.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    const target = Math.max(0, Math.min(next, cards.length - 1));
    if (activeCard) cards[target].focus({ preventScroll: true });
    goTo(target);
  });
  pulseViewport.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    },
    { passive: true },
  );
  setupDragScroll(pulseViewport, "x", () => goTo(closestIndex()));
  new ResizeObserver(sync).observe(pulseViewport);
  sync();
}

function renderMenu() {
  const root =
    '<section class="menu-level menu-level--root" data-panel="root" aria-label="Alle Themen">' +
    '<div class="menu-level__header"><h3>Entdecke deine Stadt</h3><span class="menu-level__count">06 Themenwelten</span></div>' +
    '<div class="menu-wheel-group" data-menu-wheel-group><div class="menu-wheel-viewport"><ul class="menu-list menu-wheel-list">' +
    menuSections
      .map(
        (section) =>
          '<li><button class="menu-entry menu-wheel-item" type="button" data-open-panel="' +
          section.id +
          '" data-menu-item aria-expanded="false" aria-controls="menu-panel-' +
          section.id +
          '">' +
          '<span class="menu-entry__label"><strong>' +
          section.title +
          "</strong><span>" +
          section.description +
          '</span></span><span class="menu-entry__arrow" aria-hidden="true">&rarr;</span></button></li>',
      )
      .join("") +
    '</ul></div><div class="menu-wheel" role="group" aria-label="Thema ausw\u00e4hlen"></div></div></section>';
  const details = menuSections
    .map(
      (section) =>
        '<section class="menu-level" id="menu-panel-' +
        section.id +
        '" data-panel="' +
        section.id +
        '" aria-label="' +
        section.title +
        '" hidden inert>' +
        '<button class="menu-back" type="button" data-back-panel="root"><span aria-hidden="true">&larr;</span> Alle Themen</button>' +
        '<div class="menu-level__header"><p class="eyebrow">Deine Themenwelt</p><h3>' +
        section.title +
        "</h3><p>" +
        section.description +
        "</p></div>" +
        '<div class="menu-wheel-group" data-menu-wheel-group><div class="menu-wheel-viewport"><ul class="menu-sublist menu-wheel-list">' +
        section.items
          .map(
            (item) =>
              '<li><a class="menu-wheel-item" href="' +
              item.href +
              '" ' +
              EXTERNAL_ATTRS +
              " data-menu-item><strong>" +
              item.title +
              "</strong><span>" +
              item.text +
              "</span></a></li>",
          )
          .join("") +
        '</ul></div><div class="menu-wheel" role="group" aria-label="Dienstleistung ausw\u00e4hlen"></div></div></section>',
    )
    .join("");
  menuTrack.innerHTML = root + details;
}

function setupMenuFocusWheel() {
  document.querySelectorAll("[data-menu-wheel-group]").forEach((group) => {
    const items = [...group.querySelectorAll("[data-menu-item]")];
    const list = group.querySelector(".menu-wheel-list");
    const wheel = group.querySelector(".menu-wheel");
    let active = -1;
    let frame = 0;
    wheel.innerHTML = items
      .map(
        (item, index) =>
          '<button class="menu-wheel__dot" type="button" aria-label="' +
          item.querySelector("strong").textContent +
          ' fokussieren" data-wheel-index="' +
          index +
          '"></button>',
      )
      .join("");
    const dots = [...wheel.children];
    const applyState = (next) => {
      const index = Math.max(0, Math.min(next, items.length - 1));
      if (index === active) return;
      active = index;
      items.forEach((item, i) => {
        const distance = Math.abs(i - active);
        ["is-active", "is-near", "is-mid", "is-far"].forEach((name) =>
          item.classList.remove(name),
        );
        item.classList.add(
          distance === 0
            ? "is-active"
            : distance === 1
              ? "is-near"
              : distance === 2
                ? "is-mid"
                : "is-far",
        );
        dots[i].classList.toggle("is-active", i === active);
        dots[i].classList.toggle("is-near", distance === 1);
        if (i === active) dots[i].setAttribute("aria-current", "true");
        else dots[i].removeAttribute("aria-current");
      });
    };
    const syncFromScroll = () => {
      if (
        !list.clientHeight ||
        group.closest("[inert]") ||
        menuPanel.classList.contains("is-reflow")
      )
        return;
      const top = list.getBoundingClientRect().top + 8;
      const closest = items.reduce(
        (best, item, i) =>
          Math.abs(item.getBoundingClientRect().top - top) <
          Math.abs(items[best].getBoundingClientRect().top - top)
            ? i
            : best,
        0,
      );
      applyState(closest);
    };
    const focusItem = (next, focus = true, smooth = true) => {
      const index = Math.max(0, Math.min(next, items.length - 1));
      const item = items[index];
      applyState(index);
      if (menuPanel.classList.contains("is-reflow")) {
        const bounds = menuPanel.getBoundingClientRect();
        const rect = item.getBoundingClientRect();
        const top =
          bounds.top +
          menuPanel.querySelector(".menu-panel__top").offsetHeight +
          20;
        if (rect.top < top || rect.bottom > bounds.bottom - 16) {
          menuPanel.scrollTo({
            top: menuPanel.scrollTop + rect.top - top,
            behavior: "instant",
          });
        }
        if (focus) item.focus({ preventScroll: true });
        return;
      }
      list.scrollTo({
        top:
          list.scrollTop +
          item.getBoundingClientRect().top -
          list.getBoundingClientRect().top -
          8,
        behavior: smooth && !prefersReducedMotion ? "smooth" : "instant",
      });
      if (focus) item.focus({ preventScroll: true });
    };
    const refresh = () => {
      if (!list.clientHeight) return;
      list.style.setProperty(
        "--wheel-tail",
        Math.max(8, list.clientHeight - items.at(-1).offsetHeight - 8) + "px",
      );
    };
    items.forEach((item, index) =>
      item.addEventListener("focus", () => {
        const rect = item.getBoundingClientRect();
        const bounds = list.getBoundingClientRect();
        applyState(index);
        if (rect.top < bounds.top + 4 || rect.bottom > bounds.bottom - 8)
          focusItem(index, false);
      }),
    );
    dots.forEach((dot, i) => dot.addEventListener("click", () => focusItem(i)));
    group.addEventListener("keydown", (event) => {
      const item = event.target.closest("[data-menu-item]");
      if (!item) return;
      const index = items.indexOf(item);
      let next;
      if (event.key === "ArrowDown") next = index + 1;
      if (event.key === "ArrowUp") next = index - 1;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = items.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      focusItem(next);
    });
    list.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(syncFromScroll);
      },
      { passive: true },
    );
    setupDragScroll(list, "y", () => {
      syncFromScroll();
      focusItem(active, false);
    });
    new ResizeObserver(refresh).observe(list);
    group.menuFocusWheel = { applyState, syncFromScroll, focusItem, refresh };
    applyState(0);
  });
}

function normalizeSearch(value) {
  return value
    .toLocaleLowerCase("de")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ae/g, "a")
    .replace(/oe/g, "o")
    .replace(/ue/g, "u")
    .replace(/\u00df/g, "ss");
}

function setupMenu() {
  const search = document.querySelector("#menu-search");
  const contrastButton = document.querySelector(".menu-contrast");
  const stage = document.querySelector(".menu-stage");
  const results = document.querySelector("#menu-search-results");
  const resultList = document.querySelector("#menu-results");
  const status = document.querySelector("#menu-search-status");
  const panels = [...menuTrack.querySelectorAll("[data-panel]")];
  const background = [
    ...document.querySelectorAll(
      "body > header, body > main, body > footer, body > .skip-link",
    ),
  ];
  const inertState = new Map();
  let previousFocus;
  let returnPanel = "root";
  let lastSection = null;
  const refreshLayout = () => {
    menuPanel.classList.toggle(
      "is-reflow",
      Number.parseFloat(getComputedStyle(document.documentElement).fontSize) >
        20,
    );
  };
  const layoutObserver = new ResizeObserver(refreshLayout);
  layoutObserver.observe(menuPanel);
  layoutObserver.observe(menuPanel.querySelector(".menu-panel__top"));
  refreshLayout();
  const applyContrast = (enabled) => {
    menuOverlay.classList.toggle("is-readable", enabled);
    contrastButton.setAttribute("aria-pressed", String(enabled));
  };
  let readable = window.matchMedia("(prefers-contrast: more)").matches;
  try {
    readable =
      readable || localStorage.getItem("gladbeck-menu-contrast") === "true";
  } catch {
    /* Device preferences also work when storage is unavailable. */
  }
  applyContrast(readable);
  contrastButton.addEventListener("click", () => {
    readable = !readable;
    applyContrast(readable);
    try {
      localStorage.setItem("gladbeck-menu-contrast", String(readable));
    } catch {
      /* Keep the preference for this page view. */
    }
  });
  const aliases = {
    Serviceportal:
      "Antrag Pass Personalausweis Reisepass Ummelden Meldebescheinigung Gewerbe",
    "Online-Termine": "Termin buchen B\u00fcrgeramt Ausl\u00e4nderamt",
    Rufnummern: "Telefon Kontakt Ansprechperson",
    "Arbeiten bei der Stadt": "Stellen Ausbildung Karriere Jobs",
    Schule: "Schulen Bildung Kinder",
    Senioren: "Seniorinnen Alter Pflege",
  };
  const entries = new Map();
  [
    ...quicklinks.map((item) => ({ ...item, category: "Service" })),
    ...menuSections.flatMap((section) => [
      {
        title: section.title,
        text: section.description,
        href: themes.find((theme) => theme.id === section.id).href,
        category: "Themenwelt",
      },
      ...section.items.map((item) => ({ ...item, category: section.title })),
    ]),
  ].forEach((entry) => {
    const existing = entries.get(entry.href);
    if (existing)
      existing.keywords +=
        " " +
        entry.title +
        " " +
        entry.text +
        " " +
        (aliases[entry.title] || "");
    else
      entries.set(entry.href, {
        ...entry,
        keywords:
          entry.title +
          " " +
          entry.text +
          " " +
          entry.category +
          " " +
          (aliases[entry.title] || ""),
      });
  });
  const isOpen = () => menuOverlay.classList.contains("is-open");
  const getActiveGroup = () =>
    menuTrack.querySelector(
      ':scope > [data-panel="' + returnPanel + '"] [data-menu-wheel-group]',
    );
  const setPanel = (requested, focus = true) => {
    const id = panels.some((panel) => panel.dataset.panel === requested)
      ? requested
      : "root";
    returnPanel = id;
    panels.forEach((panel) => {
      const active = panel.dataset.panel === id;
      if (panel.dataset.panel !== "root") {
        if (id !== "root") panel.hidden = !active;
      }
      panel.inert = !active;
      panel.setAttribute("aria-hidden", String(!active));
    });
    menuTrack
      .querySelectorAll("[data-open-panel]")
      .forEach((button) =>
        button.setAttribute(
          "aria-expanded",
          String(button.dataset.openPanel === id),
        ),
      );
    menuTrack.dataset.currentPanel = id;
    menuTrack.style.transform =
      id === "root" ? "translateX(0)" : "translateX(-100%)";
    requestAnimationFrame(() => {
      if (returnPanel !== id) return;
      const group = getActiveGroup();
      group.menuFocusWheel.refresh();
      const index =
        id === "root" && lastSection
          ? menuSections.findIndex((section) => section.id === lastSection)
          : 0;
      group.menuFocusWheel.focusItem(Math.max(0, index), false, false);
      if (!focus) return;

      const focusPanel = () => {
        if (
          isOpen() &&
          returnPanel === id &&
          !stage.hidden &&
          document.activeElement !== search
        ) {
          group.menuFocusWheel.focusItem(Math.max(0, index), true, false);
        }
      };
      const animations = [
        ...menuPanel.getAnimations(),
        ...menuTrack.getAnimations(),
      ];
      if (animations.length) {
        Promise.allSettled(
          animations.map((animation) => animation.finished),
        ).then(focusPanel);
      } else focusPanel();
    });
  };
  const clearSearch = () => {
    search.value = "";
    stage.hidden = false;
    stage.inert = false;
    results.hidden = true;
    resultList.replaceChildren();
    status.textContent = "";
    getActiveGroup()?.menuFocusWheel.refresh();
  };
  const openMenu = (focusSearch = false) => {
    if (!isOpen()) {
      refreshLayout();
      previousFocus = document.activeElement;
      menuOverlay.inert = false;
      menuOverlay.setAttribute("aria-hidden", "false");
      menuOverlay.classList.add("is-open");
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
      background.forEach((element) => {
        inertState.set(element, element.inert);
        element.inert = true;
      });
      lastSection = null;
      clearSearch();
      setPanel("root", !focusSearch);
    }
    if (focusSearch) search.focus({ preventScroll: true });
  };
  const closeMenu = (anchor) => {
    background.forEach((element) => {
      element.inert = inertState.get(element) ?? false;
    });
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    const hash = anchor?.getAttribute("href");
    const destination = hash?.startsWith("#")
      ? document.getElementById(hash.slice(1))
      : null;
    if (destination) {
      const heading = destination.querySelector("h1, h2") || destination;
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", "-1");
        heading.addEventListener(
          "blur",
          () => heading.removeAttribute("tabindex"),
          { once: true },
        );
      }
      heading.focus({ preventScroll: true });
      history.pushState(null, "", hash);
      destination.scrollIntoView({
        behavior: prefersReducedMotion ? "instant" : "smooth",
        block: "start",
      });
    } else previousFocus?.focus({ preventScroll: true });
    menuOverlay.classList.remove("is-open");
    menuOverlay.setAttribute("aria-hidden", "true");
    menuOverlay.inert = true;
    clearSearch();
  };

  menuToggle.addEventListener("click", () => openMenu());
  menuOverlay.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-panel]");
    if (event.target.closest("[data-menu-close]")) closeMenu();
    else if (trigger) {
      lastSection = trigger.dataset.openPanel;
      setPanel(lastSection);
    } else if (event.target.closest("[data-back-panel]")) setPanel("root");
    else {
      const anchor = event.target.closest("a[href]");
      if (anchor && !event.defaultPrevented) {
        if (anchor.getAttribute("href").startsWith("#")) event.preventDefault();
        closeMenu(anchor);
      }
    }
  });
  search.addEventListener("input", () => {
    const query = normalizeSearch(search.value.trim());
    if (!query) {
      clearSearch();
      return;
    }
    const terms = query.split(/\s+/);
    const matches = [...entries.values()].filter((entry) =>
      terms.every((term) => normalizeSearch(entry.keywords).includes(term)),
    );
    stage.hidden = true;
    stage.inert = true;
    results.hidden = false;
    resultList.replaceChildren();
    matches.forEach((entry) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      const title = document.createElement("strong");
      const description = document.createElement("span");
      link.href = entry.href;
      title.textContent = entry.title;
      description.textContent = entry.category + " \u00b7 " + entry.text;
      link.append(title, description);
      li.append(link);
      resultList.append(li);
    });
    if (!matches.length) {
      const empty = document.createElement("li");
      empty.className = "menu-empty";
      empty.textContent =
        "Kein Treffer. Versuche zum Beispiel \u201eTermin\u201c, \u201eSchule\u201c oder \u201eKontakt\u201c.";
      resultList.append(empty);
    }
    status.textContent =
      matches.length +
      (matches.length === 1 ? " Ergebnis" : " Ergebnisse") +
      " gefunden.";
  });
  search.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" && !results.hidden) {
      event.preventDefault();
      resultList.querySelector("a")?.focus();
    }
  });
  menuPanel.addEventListener("keydown", (event) => {
    if (!isOpen()) return;
    if (event.key === "Escape") {
      event.preventDefault();
      if (search.value) {
        clearSearch();
        search.focus({ preventScroll: true });
      } else closeMenu();
      return;
    }
    if (event.key === "/" && !event.target.matches("input, textarea")) {
      event.preventDefault();
      search.focus();
      return;
    }
    if (
      event.key === "ArrowLeft" &&
      returnPanel !== "root" &&
      event.target.closest(".menu-level")
    ) {
      event.preventDefault();
      setPanel("root");
      return;
    }
    if (event.key === "ArrowRight") {
      const button = event.target.closest("[data-open-panel]");
      if (button) {
        event.preventDefault();
        button.click();
      }
    }
    if (event.key !== "Tab") return;
    const focusable = [
      ...menuPanel.querySelectorAll(
        'a[href], button:not([disabled]), input, [tabindex="0"]',
      ),
    ].filter(
      (element) =>
        !element.closest("[hidden], [inert]") &&
        element.getClientRects().length,
    );
    const first = focusable[0];
    const last = focusable.at(-1);
    if (
      event.shiftKey &&
      (document.activeElement === first || document.activeElement === menuPanel)
    ) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
  setPanel("root", false);
  const params = new URLSearchParams(window.location.search);
  if (params.get("menu") === "open") {
    openMenu();
    if (params.has("panel")) setPanel(params.get("panel"));
  }
}

function setupReveal() {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -25px 0px" },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
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
