const translations = {
  en: {
    navAbout:'About',navWork:'Portfolio',navContact:'Contact',welcome:'WELCOME · BIENVENUE',
    heroTitle:"Hello, I'm Ashfi.",heroSubtitle:'MSc Computing Student · Researcher · Developer',
    heroCopy:'Explore my academic journey, research, projects and professional experience.',
    portfolioButton:'My Portfolio',aboutButton:'About Me',aboutTitle:'About Me',
    aboutCopy:"I'm a Computing master's student with interests in research, software development and the social applications of technology. This website brings together my academic and creative work.",
    workTitle:'Explore My Work',educationTitle:'Education',educationCopy:'My academic journey and qualifications.',
    researchTitle:'Research',researchCopy:'Research interests and ongoing work.',
    projectsTitle:'Projects',projectsCopy:'Software and creative projects.',
    contactTitle:'Contact',contactCopy:'Professional contact details and links will appear here.',
    footerText:'Personal Website & Portfolio',
    hobbiesTitle: "My Hobbies & Interests",
    hobbyTechnology: "Technology",
    hobbyHardware: "Computer Hardware",
    hobbyGaming: "Gaming",
    hobbyTransportation: "Transportation",
    hobbyArchitecture: "Architecture",
    hobbyUrban: "Urban Design",
    hobbyHistory: "History",
    hobbyGeography: "Geography",
    hobbyCycling: "Cycling",
      hobbyMusic: "Music",
      musicIntroduction: "Music deeply inspires me to keep pushing forwards. I believe that music is an important form of self-expression, and I use it to communicate my feelings, even as they evolve over the years. Here is a collection of songs you can find on my playlists:",
    musicSignatureHeading: "Main Favourites",
    musicRepresentative: "A Song That Represents Me",
    musicFavourite: "My All-Time Favourite Song",
    musicYearsHeading: "Ashfi Songs of the Year",
    musicComingSoon: "Stay tuned — to be revealed in December!",
    musicTie: "Tied with",
    musicHonourableHeading: "Honourable Mentions",
    musicListenSpotify: "Listen on Spotify ↗",
  },
  fr: {
    navAbout:'À propos',navWork:'Portfolio',navContact:'Coordonnées',welcome:'BIENVENUE · WELCOME',
    heroTitle:'Bonjour, moi, c’est Ashfi.',heroSubtitle:'Étudiant à la maîtrise en informatique · Chercheur · Développeur',
    heroCopy:'Découvrez mon parcours universitaire, mes recherches, mes projets et mon expérience professionnelle.',
    portfolioButton:'Mon portfolio',aboutButton:'À propos de moi',aboutTitle:'À propos de moi',
    aboutCopy:'Je suis étudiant à la maîtrise en informatique. Je m’intéresse à la recherche, au développement logiciel et aux applications sociales de la technologie. Ce site rassemble mes travaux universitaires et mes projets créatifs.',
    workTitle:'Découvrez mes réalisations',educationTitle:'Formation',educationCopy:'Mon parcours universitaire et mes diplômes.',
    researchTitle:'Recherche',researchCopy:'Mes champs d’intérêt et mes travaux de recherche en cours.',
    projectsTitle:'Projets',projectsCopy:'Mes projets logiciels et créatifs.',
    contactTitle:'Coordonnées',contactCopy:'Mes coordonnées professionnelles et les liens vers mes profils seront ajoutés ici.',
    footerText:'Site personnel et portfolio',
    hobbiesTitle: "Mes loisirs et centres d'intérêt",
    hobbyTechnology: "Technologie",
    hobbyHardware: "Matériel informatique",
    hobbyGaming: "Jeux vidéo",
    hobbyTransportation: "Transport",
    hobbyArchitecture: "Architecture",
    hobbyUrban: "Urbanisme",
    hobbyHistory: "Histoire",
    hobbyGeography: "Géographie",
    hobbyCycling: "Vélo",
    hobbyMusic: "Musique",
    musicIntroduction: "La musique m’inspire profondément à continuer d’avancer. Je crois que la musique est une forme importante d’expression de soi, et je l’utilise pour communiquer mes sentiments, même lorsqu’ils évoluent au fil des années. Voici une collection de chansons que vous pouvez trouver dans mes listes de lecture :",
    musicSignatureHeading: "Mes chansons préférées",
    musicRepresentative: "Une chanson qui me représente",
    musicFavourite: "Ma chanson préférée de tous les temps",
    musicYearsHeading: "Chansons préférées de l'année d'Ashfi",
    musicComingSoon: "Restez à l'écoute — à découvrir en décembre !",
    musicTie: "Ex æquo avec",
    musicHonourableHeading: "Mentions honorables",
    musicListenSpotify: "Écouter sur Spotify ↗",  
  }
};
function browserLanguage(){
  const languages = navigator.languages || [navigator.language || 'en'];
  for(const language of languages){const code=language.toLowerCase().split('-')[0];if(code==='en'||code==='fr')return code;}
  return 'en';
}
function getSavedLanguage(){try{return localStorage.getItem('ashfi-language')}catch{return null}}
function saveLanguage(lang){try{localStorage.setItem('ashfi-language',lang)}catch{}}
function setLanguage(lang,remember=false){
  if(!translations[lang])lang='en';
  document.documentElement.lang=lang==='fr'?'fr-CA':'en-GB';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[lang][el.dataset.i18n];if(value!==undefined)el.textContent=value});
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  document.title=lang==='fr'?'Ashfi | Portfolio personnel':'Ashfi | Personal Portfolio';
  if(remember)saveLanguage(lang);
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang,true)));
document.getElementById('year').textContent=new Date().getFullYear();
const saved=getSavedLanguage();setLanguage(saved&&translations[saved]?saved:browserLanguage());
