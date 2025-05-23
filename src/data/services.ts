interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "basic-consulting",
    title: "Základní poradenství (primeconsult)",
    description: "Poskytujeme odborné konzultace a poradenství v oblasti dopravní infrastruktury a stavebního inženýrství.",
    icon: "LightbulbIcon",
    featured: true
  },
  {
    id: "technical-studies",
    title: "Technicko-hospodářské studie",
    description: "Zpracováváme komplexní studie proveditelnosti a ekonomické analýzy pro infrastrukturní projekty.",
    icon: "ChartBarIcon",
    featured: true
  },
  {
    id: "project-documentation",
    title: "Projektové dokumentace k povolovacím řízením",
    description: "Připravujeme kompletní dokumentaci pro územní rozhodnutí, stavební povolení a realizaci stavby.",
    icon: "DocumentIcon",
    featured: true
  },
  {
    id: "conceptual-planning",
    title: "Koncepční plánování",
    description: "Vytváříme strategické plány a koncepce pro rozvoj dopravní infrastruktury.",
    icon: "PuzzlePieceIcon"
  },
  {
    id: "construction-supervision",
    title: "Vrchní vedení staveb, stavební dozor",
    description: "Zajišťujeme profesionální dohled nad realizací stavebních projektů.",
    icon: "BuildingOfficeIcon"
  },
  {
    id: "implementation-projects",
    title: "Prováděcí projekty",
    description: "Zpracováváme detailní prováděcí dokumentaci pro realizaci staveb.",
    icon: "WrenchIcon"
  },
  {
    id: "tender-evaluation",
    title: "Vyhodnocování nabídek",
    description: "Poskytujeme expertní analýzu a hodnocení nabídek ve výběrových řízeních.",
    icon: "DocumentCheckIcon"
  },
  {
    id: "tender-preparation",
    title: "Příprava a vypisování výběrových řízení",
    description: "Komplexní příprava zadávací dokumentace a organizace výběrových řízení.",
    icon: "ClipboardDocumentListIcon"
  },
  {
    id: "organizational-support",
    title: "Organizační zajištění",
    description: "Poskytujeme podporu při řízení a koordinaci projektů.",
    icon: "UsersIcon"
  },
  {
    id: "urban-planning",
    title: "Stupně územního plánování",
    description: "Zpracováváme dokumentaci pro územní plánování a rozvoj.",
    icon: "MapIcon"
  },
  {
    id: "environmental",
    title: "Oblast životního prostředí",
    description: "Zajišťujeme environmentální studie a hodnocení vlivů na životní prostředí.",
    icon: "TreeIcon"
  },
  {
    id: "other-services",
    title: "Jiné druhy projektového a inženýrského servisu",
    description: "Poskytujeme další specializované služby dle potřeb klienta.",
    icon: "CubeIcon"
  }
]; 