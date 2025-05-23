interface Project {
  id: string;
  title: string;
  location: string;
  client: string;
  investmentCost?: string;
  projectDuration?: string;
  implementationDate?: string;
  projectStage: string;
  description: string;
  projectManager: string;
  category: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "zeleznicni-most-luzec",
    title: "Železniční most ev. km 2,622",
    location: "Lužec nad Vltavou",
    client: "Česká Republika – Ředitelství vodních cest ČR",
    projectStage: "RDS",
    description: "Rekonstrukce původního železničního příhradového mostu přes plavební kanál Vraňany–Hořín včetně výměny konstrukce za nový zdvižný most s podjezdnou výškou 7 m a technologickými místnostmi v opěrách.",
    projectManager: "Ing. Jan Hamouz Sagasta",
    category: "Železniční infrastruktura",
    images: ["/projects/Zl.jpg"],
    featured: true
  },
  {
    id: "most-smutna",
    title: "I/29 most přes řeku Smutná, ev. č. 29-009",
    location: "řeka Smutná",
    client: "Ředitelství silnic a dálnic",
    investmentCost: "9 797 110 Kč",
    projectDuration: "2018",
    implementationDate: "2020",
    projectStage: "DSP, PDPS",
    description: "Sanace kamenné spodní stavby a nosné konstrukce třípolového klenbového mostu, demontáž a nahrazení můstku železobetonovou deskou, nové gabionové zídky.",
    projectManager: "Ing. Vít Hoznour Sagasta",
    category: "Stavební inženýrství",
    images: ["/projects/I29.jpg"],
    featured: true
  },
  {
    id: "plaska-roudne-chrastecka",
    title: "I/20 a II/231 v Plzni, Plaská-Na Roudné-Chrástecká, 2. etapa",
    location: "Plzeň",
    client: "Ředitelství silnic a dálnic",
    investmentCost: "SO 201 – 33 313 061 Kč; SO 202 – 14 745 819 Kč",
    projectDuration: "PDPS – 10/2017; RDS – 01/2020",
    implementationDate: "2020",
    projectStage: "PDPS, RDS",
    description: "Dva rámově integrované železniční mosty (rozpětí 46,0 m a 21,0 m) s deskovou konstrukcí a zabetonovanými svařovanými nosníky, založené na velkoprůměrových pilotách.",
    projectManager: "Ing. Zuzana Biela Sagasta",
    category: "Stavební inženýrství",
    images: [
      "/projects/I20 Plzen/plzen.jpg",
      "/projects/I20 Plzen/plzen-2.jpg"
    ],
    featured: true
  },
  {
    id: "netrebice-most",
    title: "I/3 Netřebice, most ev. č. 3-117",
    location: "Netřebice",
    client: "Ředitelství silnic a dálnic",
    investmentCost: "12 261 369 Kč",
    projectDuration: "2018",
    implementationDate: "2020",
    projectStage: "DSP, PDPS",
    description: "Jednopolový silniční most přes železniční trať s železobetonovou deskou a ocelovými nosníky IPE 400, doplněný gabionovými zdmi.",
    projectManager: "Ing. Vít Hoznour Sagasta",
    category: "Stavební inženýrství",
    images: [],
    featured: false
  },
  {
    id: "ssud-kaplice",
    title: "D3 SSÚD Kaplice vč. křižovatky Na Vyhlídce",
    location: "Kaplice",
    client: "Ředitelství silnic a dálnic ČR",
    investmentCost: "580 877 000 Kč",
    projectDuration: "2021",
    implementationDate: "2023",
    projectStage: "DSP, PDPS",
    description: "Komplexní areál Střediska správy a údržby dálnic včetně budov policie a IZS, solankového hospodářství, cvičné věže pro hasiče a přilehlých komunikací.",
    projectManager: "Ing. Hana Matoušková Sagasta",
    category: "Stavební inženýrství",
    images: [],
    featured: false
  },
  {
    id: "hala-stresovice",
    title: "Projekt na stavbu Haly pro deponaci silničních vozidel JHV Střešovice",
    location: "Praha-Střešovice",
    client: "Dopravní podnik hl. m. Prahy, a. s.",
    investmentCost: "100 000 000 Kč",
    projectDuration: "2019 – 2021",
    projectStage: "DSP, PDPS",
    description: "Nová hala ve stávajícím areálu vozovny a muzea MHD pro deponaci a údržbu vozidel, s výstavní částí v 2. NP a přizpůsobeným architektonickým řešením v památkové zóně.",
    projectManager: "Ing. arch. Vítězslav Glomb Sagasta",
    category: "Projektová dokumentace",
    images: [],
    featured: false
  },
  {
    id: "odbocka-rajhrad",
    title: "Výstavba odbočky Rajhrad",
    location: "Rajhrad",
    client: "Správa železnic, státní organizace",
    investmentCost: "300 000 000 Kč",
    projectDuration: "2017 – 2019",
    implementationDate: "2021",
    projectStage: "ZP, DÚR, DUSP, PDPS, AD",
    description: "Nová odbočka s 4 výhybkami pro 80 km/h, úprava GPK kolejí na 160 km/h, ETCS, trakční vedení a rekonstrukce výpravní budovy.",
    projectManager: "Ing. Emil Špaček Sagasta",
    category: "Železniční infrastruktura",
    images: [
      "/projects/Rajhrad/Rajhrad-1.jpeg",
      "/projects/Rajhrad/Rajhrad-2.jpeg"
    ],
    featured: true
  },
  {
    id: "plzen-jizni-predmesti",
    title: "Rekonstrukce výpravní budovy ŽST Plzeň-Jižní Předměstí",
    location: "Plzeň",
    client: "Správa železnic, státní organizace",
    projectDuration: "2018; 2020 – 2021",
    implementationDate: "2020 – 2024",
    projectStage: "DSP, PDPS",
    description: "Komplexní rekonstrukce stávající výpravní budovy včetně interiérů a fasády.",
    projectManager: "Ing. arch. Vítězslav Glomb Sagasta",
    category: "Železniční infrastruktura",
    images: [],
    featured: false
  },
  {
    id: "zst-sternberk",
    title: "Rekonstrukce výpravní budovy v ŽST Šternberk",
    location: "Šternberk",
    client: "Správa železnic, státní organizace",
    investmentCost: "40 452 000 Kč",
    projectDuration: "2017 – 2019",
    implementationDate: "2019 – 2021",
    projectStage: "DSP, PDPS",
    description: "Snížení a částečné odstranění křídel budovy, sanace interiérů, zachování střední části pro cestující, úprava technologie pro provoz trati.",
    projectManager: "Ing. arch. Vítězslav Glomb Sagasta",
    category: "Železniční infrastruktura",
    images: [],
    featured: false
  },
  {
    id: "trat-oldrichov-litvinov",
    title: "Revitalizace a elektrizace trati Oldřichov u Duchova – Litvínov",
    location: "trať z Oldřichova do Litvínova",
    client: "Správa železnic, státní organizace",
    investmentCost: "1,3 mld. Kč",
    projectDuration: "2016 – 2018",
    implementationDate: "2019 – 2021",
    projectStage: "DSP, PDPS, AD, akt. ZP",
    description: "Rekonstrukce 12 km tratě, úprava kolejišť, ETCS, trakční vedení, nové a rekonstruované stavby v železničních stanicích, nadjezdy, mostní objekty a propustky.",
    projectManager: "Ing. Emil Špaček Sagasta",
    category: "Železniční infrastruktura",
    images: [],
    featured: false
  },
  {
    id: "vb-kolin",
    title: "Zhotovení projektové dokumentace – oprava VB v ŽST Kolín",
    location: "Kolín",
    client: "Správa železnic, státní organizace",
    investmentCost: "72 000 000 Kč",
    projectDuration: "2017 – 2019",
    implementationDate: "2019 – 2020",
    projectStage: "DSP, PDPS",
    description: "Rekonstrukce výpravní a administrativní budovy v návaznosti na autobusový terminál.",
    projectManager: "Ing. Luboš Hubal Sagasta",
    category: "Projektová dokumentace",
    images: [],
    featured: false
  },
  {
    id: "hluboka-oprava",
    title: "Hluboká nad Vltavou – Oprava objektu – Projektová dokumentace",
    location: "Hluboká nad Vltavou",
    client: "Správa železnic, státní organizace",
    investmentCost: "15 000 000 Kč",
    projectDuration: "2018 – 2019",
    projectStage: "DSP, PDPS",
    description: "Oprava střechy, fasády, veřejných toalet a sítí, sanace sklepů, výměna septiků, zajištění bezbariérového přístupu a legislativních požadavků.",
    projectManager: "Ing. arch. Vítězslav Glomb",
    category: "Projektová dokumentace",
    images: [],
    featured: false
  },
  {
    id: "plaska-roudne-chrastecka-druha-etapa",
    title: "I/20 a II/231 v Plzni - druhá část",
    location: "Plzeň",
    client: "Ředitelství silnic a dálnic",
    investmentCost: "SO 202 – 14 745 819 Kč",
    projectDuration: "PDPS – 10/2017; RDS – 01/2020",
    implementationDate: "2020",
    projectStage: "PDPS, RDS",
    description: "Plaská-Na Roudné-Chrástecká, pokračování 2. etapy projektu.",
    projectManager: "Ing. Zuzana Biela Sagasta",
    category: "Stavební inženýrství",
    images: [],
    featured: true
  },
  {
    id: "odbočka-rajhrad-dokončení",
    title: "Odbočka Rajhrad - dokončení",
    location: "Rajhrad",
    client: "Správa železnic, státní organizace",
    investmentCost: "300 000 000 Kč",
    projectDuration: "2017 – 2019",
    implementationDate: "2021",
    projectStage: "ZP, DÚR, DUSP, PDPS, AD",
    description: "Finální fáze výstavby a modernizace železniční odbočky.",
    projectManager: "Ing. Emil Špaček Sagasta",
    category: "Železniční infrastruktura",
    images: [],
    featured: true
  }
];

// Generate categories dynamically from projects
const getUniqueCategories = () => {
  const categories = new Set<string>();
  categories.add("Vše");
  
  projects.forEach(project => {
    if (project.category) {
      categories.add(project.category);
    }
  });
  
  return Array.from(categories);
};

export const projectCategories = getUniqueCategories(); 