'use strict';
(() => {
// Edit these lists to add destinations. Countries with regions have a third level;
// countries without regions display only their country name.
const destinations = {
  visited: [
    {name:'Canada', flag:'🇨🇦', regions:[
      {name:'Ontario', cities:['Kenora','Dryden','Atikokan','Thunder Bay','Nipigon','Terrace Bay','Niagara Falls','Niagara-on-the-Lake','Toronto (GTA)','Belleville','Bancroft','Madoc','Kingston','Cornwall']},
      {name:'Manitoba', cities:['Winnipeg']},
      {name:'Quebec', cities:['Montreal','Quebec City']}
    ]},
    {name:'United States',flag:'🇺🇸',regions:[{name:'Minnesota',cities:['Duluth','Grand Marais']}]},
    {name:'Bangladesh',flag:'🇧🇩',cities:['Dhaka','Chittagong','Comilla',"Cox's Bazar"]},
    {name:'Saudi Arabia',flag:'🇸🇦',cities:['Jeddah','Taif']}
  ],
  wishlist: [
    {name:'Canada',flag:'🇨🇦',regions:[
      {name:'British Columbia',cities:['Victoria','Vancouver']},
      {name:'Alberta',cities:['Jasper / Banff','Calgary']},
      {name:'Saskatchewan',cities:['Saskatoon','Regina']},
      {name:'Manitoba',cities:['Brandon','Churchill']},
      {name:'Ontario',cities:['Windsor','London','Waterloo / Kitchener / Guelph','Sault Ste. Marie','Sudbury','Barrie / Orillia']},
      {name:'Nova Scotia',cities:['Halifax']},
      {name:'New Brunswick',cities:['Fredericton','Moncton']},
      {name:'Newfoundland and Labrador',cities:["St. John's"]},
      {name:'Prince Edward Island',cities:['Charlottetown']}
    ]},
    {name:'United States',flag:'🇺🇸',regions:[
      {name:'Washington',cities:['Seattle']},{name:'California'},{name:'Texas'},
      {name:'Minnesota',cities:['Minneapolis']},{name:'Wisconsin'},
      {name:'Michigan'},{name:'Illinois',cities:['Chicago']},
      {name:'North Carolina',cities:['Charlotte']},{name:'New Jersey'},
      {name:'New York'},{name:'Connecticut'},{name:'Maryland',cities:['Baltimore']},
      {name:'Washington, D.C.'}
    ]},
    // International wishlist: displayed as plain, non-expandable country tiles.
    {name:'Mexico',flag:'🇲🇽',continent:'northAmerica'},
    {name:'Greenland',flag:'🇬🇱',continent:'northAmerica'},
    {name:'Panama',flag:'🇵🇦',continent:'northAmerica'},
    {name:'Colombia',flag:'🇨🇴',continent:'southAmerica'},
    {name:'Brazil',flag:'🇧🇷',continent:'southAmerica'},
    {name:'Iceland',flag:'🇮🇸',continent:'europe'},
    {name:'United Kingdom',flag:'🇬🇧',continent:'europe'},
    {name:'Ireland',flag:'🇮🇪',continent:'europe'},
    {name:'France',flag:'🇫🇷',continent:'europe'},
    {name:'Belgium',flag:'🇧🇪',continent:'europe'},
    {name:'Netherlands',flag:'🇳🇱',continent:'europe'},
    {name:'Switzerland',flag:'🇨🇭',continent:'europe'},
    {name:'Denmark',flag:'🇩🇰',continent:'europe'},
    {name:'Finland',flag:'🇫🇮',continent:'europe'},
    {name:'Portugal',flag:'🇵🇹',continent:'europe'},
    {name:'Spain',flag:'🇪🇸',continent:'europe'},
    {name:'Italy',flag:'🇮🇹',continent:'europe'},
    {name:'Greece',flag:'🇬🇷',continent:'europe'},
    {name:'Ukraine',flag:'🇺🇦',continent:'europe'},
    {name:'Romania',flag:'🇷🇴',continent:'europe'},
    {name:'Türkiye',flag:'🇹🇷',continent:'europe'},
    {name:'Jordan',flag:'🇯🇴',continent:'middleEast'},
    {name:'Saudi Arabia',flag:'🇸🇦',continent:'middleEast'},
    {name:'United Arab Emirates',flag:'🇦🇪',continent:'middleEast'},
    {name:'Oman',flag:'🇴🇲',continent:'middleEast'},
    {name:'Qatar',flag:'🇶🇦',continent:'middleEast'},
    {name:'Egypt',flag:'🇪🇬',continent:'middleEast'},
    {name:'Pakistan',flag:'🇵🇰',continent:'southAsia'},
    {name:'India',flag:'🇮🇳',continent:'southAsia'},
    {name:'Sri Lanka',flag:'🇱🇰',continent:'southAsia'},
    {name:'Nepal',flag:'🇳🇵',continent:'southAsia'},
    {name:'Thailand',flag:'🇹🇭',continent:'southeastAsia'},
    {name:'Vietnam',flag:'🇻🇳',continent:'southeastAsia'},
    {name:'Malaysia',flag:'🇲🇾',continent:'southeastAsia'},
    {name:'Singapore',flag:'🇸🇬',continent:'southeastAsia'},
    {name:'Taiwan',flag:'🇹🇼',continent:'eastAsia'},
    {name:'Korea',flag:'🇰🇷',continent:'eastAsia'},
    {name:'Japan',flag:'🇯🇵',continent:'eastAsia'},
    {name:'Australia',flag:'🇦🇺',continent:'oceania'},
    {name:'New Zealand',flag:'🇳🇿',continent:'oceania'}
    
  ]
};
const translations = {
  en:{home:'Home',interests:'Hobbies & Interests',travel:'Travel',eyebrow:'DISCOVERING OUR WORLD',title:'My Travels',intro:'A collection of places I have explored, destinations I hope to discover, and a map bringing them together.',navVisited:'Where I Have Been',navWishlist:'Where I Want to Be',navMap:'My Travel Map',visitedTitle:'Where I Have Been',visitedDesc:'Countries and communities I have had the opportunity to explore.',wishlistTitle:'Where I Want to Be',wishlistDesc:'The places I hope to explore in the future, including countries I have only passed through.',wishlistNote:'The United Kingdom, Türkiye and the United Arab Emirates are future destinations, even though I have had layovers there.',mapTitle:'My Travel Map',mapDesc:'A visual overview of countries visited, airport layovers and future destinations.',mapCaption:'Map provided by Ashfi. Navy: visited · Red: layover · White: want to visit · Grey: other countries.',mapNote:'The map retains its original country-level colouring. The destination lists above provide more detailed locations in Canada and the United States.',footer:'Personal Website & Portfolio',layover:'Previously a layover · I want to explore this country properly.',countryOnly:'Country on my wishlist'},
  fr:{home:'Accueil',interests:'Loisirs et centres d’intérêt',travel:'Voyages',eyebrow:'À LA DÉCOUVERTE DU MONDE',title:'Mes voyages',intro:'Les endroits que j’ai explorés, les destinations que je rêve de découvrir et une carte qui les rassemble.',navVisited:'Où je suis allé',navWishlist:'Où je veux aller',navMap:'Ma carte de voyage',visitedTitle:'Où je suis allé',visitedDesc:'Les pays et les villes que j’ai eu la chance de découvrir.',wishlistTitle:'Où je veux aller',wishlistDesc:'Les destinations que je souhaite explorer, y compris les pays où je n’ai fait qu’une escale.',wishlistNote:'Le Royaume-Uni, la Türkiye et les Émirats arabes unis sont des destinations futures, même si j’y ai déjà fait escale.',mapTitle:'Ma carte de voyage',mapDesc:'Un aperçu des pays visités, des escales et des destinations souhaitées.',mapCaption:'Carte fournie par Ashfi. Bleu marine : visité · Rouge : escale · Blanc : envie de visiter · Gris : autres pays.',mapNote:'La carte conserve ses couleurs d’origine à l’échelle des pays. Les listes ci-dessus précisent les destinations au Canada et aux États-Unis.',footer:'Site personnel et portfolio',layover:'Escale précédente · Je souhaite découvrir ce pays pleinement.',countryOnly:'Pays sur ma liste de souhaits'}
};
const namesFr={Canada:'Canada','United States':'États-Unis',Bangladesh:'Bangladesh','Saudi Arabia':'Arabie saoudite','United Kingdom':'Royaume-Uni',Türkiye:'Türkiye','United Arab Emirates':'Émirats arabes unis', 'British Columbia':'Colombie-Britannique',Alberta:'Alberta',Saskatchewan:'Saskatchewan',Manitoba:'Manitoba',Ontario:'Ontario','Nova Scotia':'Nouvelle-Écosse','New Brunswick':'Nouveau-Brunswick','Newfoundland and Labrador':'Terre-Neuve-et-Labrador','Prince Edward Island':'Île-du-Prince-Édouard',Quebec:'Québec', 'North Carolina':'Caroline du Nord','New Jersey':'New Jersey','New York':'New York',Connecticut:'Connecticut',Washington:'Washington',California:'Californie',Texas:'Texas',Minnesota:'Minnesota',Wisconsin:'Wisconsin',Michigan:'Michigan',Illinois:'Illinois',Maryland:'Maryland','Washington, D.C.':'Washington, D.C.', 'Quebec City':'Québec',Montreal:'Montréal', 'Sault Ste. Marie':'Sault-Sainte-Marie',Panama: 'Panama',
Brazil: 'Brésil',
Finland: 'Finlande',
Colombia: 'Colombie',};
const regionHeadings = {
  en: {northAmerica:'North America', southAmerica:'South America',europe:'Europe',europeAsia:'Europe & Asia',middleEast:'Middle East & Africa',southAsia:'South Asia',southeastAsia:'Southeast Asia',eastAsia:'East Asia',oceania:'Oceania'},
  fr: {northAmerica:'Amérique du Nord',southAmerica:'Amérique du Sud',europe:'Europe',europeAsia:'Europe et Asie',middleEast:'Moyen-Orient & Afrique',southAsia:'Asie du Sud',southeastAsia:'Asie du Sud-Est',eastAsia:'Asie de l’Est',oceania:'Océanie'}
};
Object.assign(namesFr, {'Mexico':'Mexique','Greenland':'Groenland','Iceland':'Islande','Ireland':'Irlande','France':'France','Belgium':'Belgique','Netherlands':'Pays-Bas','Switzerland':'Suisse','Denmark':'Danemark','Portugal':'Portugal','Spain':'Espagne','Italy':'Italie','Greece':'Grèce','Ukraine':'Ukraine','Romania':'Roumanie','Jordan':'Jordanie','Oman':'Oman','Qatar':'Qatar','Egypt':'Égypte','Pakistan':'Pakistan','India':'Inde','Sri Lanka':'Sri Lanka','Nepal':'Népal','Thailand':'Thaïlande','Vietnam':'Vietnam','Malaysia':'Malaisie','Singapore':'Singapour','Australia':'Australie','New Zealand':'Nouvelle-Zélande','Taiwan':'Taïwan','South Korea':'Corée du Sud','Japan':'Japon'});
function label(value,lang){return lang==='fr'?(namesFr[value]||value):value;}
function make(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;}
function flagElement(item){
  const flag=make('span','travel-flag');
  const chars=Array.from(item.flag||'');
  const code=chars.length===2 ? chars.map(c=>String.fromCharCode(c.codePointAt(0)-127397)).join('').toLowerCase() : '';
  if(!/^[a-z]{2}$/.test(code)){flag.textContent=item.flag||'🌍';return flag;}
  const img=make('img','travel-flag-image');
  img.src=`https://flagcdn.com/w40/${code}.png`;
  img.alt=''; img.width=28; img.height=21; img.loading='lazy';
  img.onerror=()=>{flag.textContent=item.flag||'🌍';};
  flag.append(img);
  return flag;
}
function countryLabel(item,lang,tag,cls){
  const el=make(tag,cls);
  el.append(flagElement(item),document.createTextNode(label(item.name,lang)));
  return el;
}
function buildCountryTile(item,lang){
  return countryLabel(item,lang,'div','travel-country-tile');
}
function buildWishlist(lang){
  const fragment=document.createDocumentFragment();
  destinations.wishlist.filter(item=>!item.continent).forEach(item=>fragment.append(buildCard(item,lang)));
  const groups=Object.keys(regionHeadings.en);
  groups.forEach(group=>{
    const countries=destinations.wishlist.filter(item=>item.continent===group);
    if(!countries.length)return;
    const section=make('section','travel-continent-group');
    section.append(make('h3','travel-continent-heading',regionHeadings[lang][group]));
    const grid=make('div','travel-country-tile-grid');
    countries.sort((a,b)=>label(a.name,lang).localeCompare(label(b.name,lang),lang)).forEach(item=>grid.append(buildCountryTile(item,lang)));
    section.append(grid);
    fragment.append(section);
  });
  return fragment;
}

function buildCard(item, lang) {
  const details = make('details', 'country-card');
  const summary = countryLabel(item, lang, 'summary', '');
  details.append(summary);

  const body = make('div', 'country-body');

  if (item.regions) {
    item.regions.forEach(region => {
      if (region.cities?.length) {
        // Expandable province/state with cities
        const sub = make('details', 'region');
        sub.append(make('summary', '', label(region.name, lang)));

        const list = make('ul', 'city-list');

        region.cities.forEach(city => {
          list.append(make('li', '', label(city, lang)));
        });

        sub.append(list);
        body.append(sub);
      } else {
        // Province/state without cities: no expand/collapse
        const sub = make('div', 'region region-static');
        sub.textContent = label(region.name, lang);
        body.append(sub);
      }
    });
  } else if (item.cities?.length) {
    const list = make('ul', 'city-list');

    item.cities.forEach(city => {
      list.append(make('li', '', label(city, lang)));
    });

    body.append(list);
  } else {
    body.append(make(
      'p',
      'country-only',
      translations[lang][item.layover ? 'layover' : 'countryOnly']
    ));
  }

  details.append(body);
  return details;
}

function getLanguage(){try{return localStorage.getItem('ashfi-language')||((navigator.language||'en').toLowerCase().startsWith('fr')?'fr':'en');}catch{return 'en';}}
function renderTravel(lang){
  if(!translations[lang])lang='en';
  document.documentElement.lang=lang==='fr'?'fr-CA':'en-GB';
  document.querySelectorAll('#travel [data-i18n]').forEach(el=>{const value=translations[lang][el.dataset.i18n];if(value!==undefined)el.textContent=value;});
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  document.querySelectorAll('[data-alt-'+lang+']').forEach(el=>el.alt=el.getAttribute('data-alt-'+lang));
  ['visited','wishlist'].forEach(group=>{
    const container=document.getElementById(group+'-list');
    if(!container)return;
    const expanded=[...container.querySelectorAll('details')].map((el,i)=>el.open?i:null).filter(i=>i!==null);
    if(group==='wishlist')container.replaceChildren(buildWishlist(lang));
    else container.replaceChildren(...destinations[group].map(item=>buildCard(item,lang)));
    // Preserve open sections on language change by matching their order within each card.
    if(expanded.length){container.querySelectorAll('details').forEach((el,i)=>{if(expanded.includes(i))el.open=true;});}
  });
}
function init(){
  if (!document.getElementById('visited-list') || !document.getElementById('wishlist-list')) return;
  document.querySelectorAll('.language-switch [data-lang]').forEach(button => {
    button.addEventListener('click', () => renderTravel(button.dataset.lang));
  });
  renderTravel(getLanguage());
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
