// On récupère le bloc du menu déroulant "Mes projets"
const navcenter = document.getElementById('navcenter');

// Quand on clique sur le bouton "Mes projets", on ouvre/ferme le menu
document.getElementById('navbtn').addEventListener('click', () => {
  navcenter.classList.toggle('open');
});

// Si on clique n'importe où EN DEHORS du menu, on le referme automatiquement
document.addEventListener('click', (event) => {
  if (!navcenter.contains(event.target)) {
    navcenter.classList.remove('open');
  }
});

// --- Le carrousel (uniquement présent sur la page d'accueil) ---

const track = document.getElementById('track');

if (track) {
  const dots = document.querySelectorAll('#dots span');
  const slideCount = document.querySelectorAll('.slide').length;
  let index = 0;

  // Déplace le carrousel jusqu'à l'image numéro "i"
  function goTo(i) {
    // Cette formule permet de boucler : si on dépasse la dernière image,
    // on revient à la première (et inversement en arrière)
    index = (i + slideCount) % slideCount;

    // On décale visuellement le "rail" d'images vers la gauche ou la droite
    track.style.transform = `translateX(-${index * 100}%)`;

    // On met à jour quel petit point est allumé en dessous
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => goTo(index + 1));
  document.getElementById('prevBtn').addEventListener('click', () => goTo(index - 1));
}

// --- Traduction FR / EN ---

const TRANSLATIONS = {
  'nav.projects': { fr: 'Mes projets', en: 'Projects' },
  'nav.kind.web': { fr: 'web', en: 'web' },
  'nav.kind.mobile': { fr: 'mobile', en: 'mobile' },
  'nav.kind.extension': { fr: 'extension', en: 'extension' },
  'nav.kind.agent': { fr: 'agent IA', en: 'AI agent' },

  'hero.eyebrow': { fr: 'Étudiant en cybersécurité', en: 'Cybersecurity student' },
  'hero.title': {
    fr: 'Je construis des outils qui vérifient avant de faire confiance.',
    en: 'I build tools that verify before they trust.',
  },
  'hero.bio': {
    fr: "Je suis étudiant en cybersécurité, à la recherche d'un stage à l'étranger. Je construis mes propres outils de sécurité en dehors des cours — un scanner web, une appli mobile, une extension Chrome — pour comprendre chaque ligne de code, pas juste le résultat final.",
    en: "I'm a cybersecurity student looking for an internship abroad. I build my own security tools outside of class — a web scanner, a mobile app, a Chrome extension — to understand every line of code, not just the end result.",
  },
  'hero.cv': { fr: 'Télécharger mon CV ↓', en: 'Download my CV ↓' },

  'carousel.heading': { fr: 'Mes projets', en: 'My projects' },
  'carousel.scanner.kind': { fr: 'Web · Python / Flask', en: 'Web · Python / Flask' },
  'carousel.scanner.desc': {
    fr: 'Détecte headers manquants, cookies non sécurisés, XSS et injection SQL, avec résumé IA.',
    en: 'Detects missing headers, insecure cookies, XSS and SQL injection, with an AI summary.',
  },
  'carousel.mobile.kind': { fr: 'Mobile · React Native', en: 'Mobile · React Native' },
  'carousel.mobile.desc': {
    fr: 'Vérifie si un lien est malveillant via Google Safe Browsing et des heuristiques maison.',
    en: 'Checks whether a link is malicious via Google Safe Browsing and custom heuristics.',
  },
  'carousel.extension.kind': { fr: 'Extension · JavaScript', en: 'Extension · JavaScript' },
  'carousel.extension.desc': {
    fr: "Le même moteur de détection, accessible d'un clic droit dans le navigateur.",
    en: 'The same detection engine, one right-click away in the browser.',
  },
  'carousel.travel.kind': { fr: 'Agent IA · Python / Flask', en: 'AI Agent · Python / Flask' },
  'carousel.travel.desc': {
    fr: 'Planifie un voyage complet avec de vraies recherches web, budget et globe 3D interactif.',
    en: 'Plans a complete trip with real web research, budget tracking and an interactive 3D globe.',
  },

  'footer.text': {
    fr: 'Site construit à la main — HTML, CSS et JavaScript.',
    en: 'Hand-built — HTML, CSS and JavaScript.',
  },

  'project.back': { fr: '← Retour aux projets', en: '← Back to projects' },
  'project.repoLink': { fr: 'Voir le code sur GitHub →', en: 'View the code on GitHub →' },
  'video.fallback': {
    fr: 'Ton navigateur ne supporte pas la lecture de cette vidéo.',
    en: "Your browser doesn't support video playback.",
  },

  'project.scanner.kind': { fr: 'Web · Python / Flask', en: 'Web · Python / Flask' },
  'project.scanner.desc': {
    fr: "Un scanner de vulnérabilités web que j'ai construit et compris ligne par ligne. L'outil explore automatiquement un site (crawler maison), puis teste chaque page trouvée contre 4 failles courantes : headers de sécurité manquants, cookies mal configurés, XSS réfléchi et injection SQL. Les résultats sont ensuite résumés et priorisés par l'API Claude, avec un chat pour poser des questions de suivi sur les failles détectées. Disponible en ligne de commande et en appli web Flask.",
    en: "A web vulnerability scanner I built and understand line by line. The tool automatically crawls a site (custom-built crawler), then tests every page it finds against 4 common flaws: missing security headers, misconfigured cookies, reflected XSS and SQL injection. Results are then summarized and prioritized by the Claude API, with a chat to ask follow-up questions about the flaws found. Available as a command-line tool and a Flask web app.",
  },

  'project.mobile.kind': { fr: 'Mobile · React Native / Expo', en: 'Mobile · React Native / Expo' },
  'project.mobile.desc': {
    fr: "Une appli mobile Android qui vérifie si un lien reçu par SMS, email ou réseau social est malveillant, avant même de cliquer dessus. Elle croise deux sources : l'API Google Safe Browsing (la même utilisée par Chrome) pour les menaces déjà connues, et des heuristiques que j'ai codées moi-même (raccourcisseurs d'URL, adresses IP à la place d'un nom de domaine, mots-clés de phishing) pour repérer les liens suspects qui ne sont pas encore répertoriés.",
    en: "An Android app that checks whether a link received by text, email or social media is malicious — before you even click it. It cross-references two sources: the Google Safe Browsing API (the same one Chrome uses) for already-known threats, and heuristics I coded myself (URL shorteners, IP addresses instead of domain names, phishing keywords) to catch suspicious links that aren't listed yet.",
  },

  'project.extension.kind': { fr: 'Extension · JavaScript', en: 'Extension · JavaScript' },
  'project.extension.desc': {
    fr: "Le même moteur de détection que l'appli mobile (API Safe Browsing + heuristiques maison), mais directement intégré au navigateur Chrome. Deux façons de l'utiliser : cliquer sur l'icône de l'extension pour vérifier un lien copié, ou faire un simple clic droit sur n'importe quel lien d'une page pour le vérifier instantanément — le résultat s'affiche via une notification système. La logique de détection est partagée entre le popup et le service worker d'arrière-plan, pour ne l'écrire qu'une seule fois.",
    en: "The same detection engine as the mobile app (Safe Browsing API + custom heuristics), built directly into Chrome. Two ways to use it: click the extension icon to check a copied link, or simply right-click any link on a page to check it instantly — the result shows up as a system notification. The detection logic is shared between the popup and the background service worker, so it's written only once.",
  },

  'project.travel.kind': { fr: 'Agent IA · Python / Flask', en: 'AI Agent · Python / Flask' },
  'project.travel.desc': {
    fr: "Un agent de voyage autonome propulsé par l'API Claude. À partir d'une destination, d'une durée, d'un budget et de centres d'intérêt, l'agent utilise la recherche web en temps réel pour trouver la météo, les prix et les attractions, puis construit un itinéraire jour par jour avec horaires et trajets, en respectant le budget donné. L'accueil propose un globe 3D interactif pour choisir sa destination, et le résultat s'affiche sous forme de carte d'embarquement cliquable.",
    en: "An autonomous travel agent powered by the Claude API. Given a destination, a duration, a budget and interests, the agent uses real-time web search to find the weather, prices and attractions, then builds a day-by-day itinerary with times and travel legs, staying within budget. The homepage features an interactive 3D globe to pick a destination, and the result is shown as a clickable boarding pass."
  },
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const entry = TRANSLATIONS[key];
    if (entry) {
      el.textContent = entry[lang];
    }
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'fr' ? 'EN' : 'FR';
  }
}

function getStoredLanguage() {
  try {
    return localStorage.getItem('lang') || 'fr';
  } catch (e) {
    return 'fr';
  }
}

function setStoredLanguage(lang) {
  try {
    localStorage.setItem('lang', lang);
  } catch (e) {
    // localStorage indisponible (navigation privée, etc.) : on continue sans mémoriser
  }
}

const langToggleBtn = document.getElementById('langToggle');
let currentLang = getStoredLanguage();
applyLanguage(currentLang);

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    setStoredLanguage(currentLang);
    applyLanguage(currentLang);
  });
}
