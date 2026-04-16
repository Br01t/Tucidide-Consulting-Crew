export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  iconText: string;
  category: string;
  useCases: string[];
  implementations: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: 'zonerun',
    title: 'ZoneRun',
    subtitle: 'Conquista Urbana Digitale',
    description: 'Una piattaforma di fitness gamified che trasforma la corsa urbana in una competizione tattica per il controllo del territorio.',
    fullDescription: 'ZoneRun (zonerun.xyz) è l\'avanguardia dello sport tecnocratico. Integrando sistemi di geolocalizzazione ad alta precisione con dinamiche di controllo territoriale ispirate alle strategie di espansione coloniale greca, la piattaforma divide i centri urbani in "Zone" che i corridori devono conquistare e difendere tramite la propria performance atletica.',
    image: 'https://picsum.photos/seed/cyber-runner-city/1200/800',
    iconText: 'Z',
    category: 'Sport-Tech',
    useCases: [
      'Engagement cittadino tramite maratone tattiche di quartiere',
      'Programmi di wellness aziendale basati sulla competizione a squadre',
      'Iniziative di turismo attivo per l\'esplorazione di siti storici'
    ],
    implementations: [
      'Integrazione con dispositivi wearable per il monitoraggio biometrico',
      'Creazione di "Guerre di Lega" stagionali con premi digitali',
      'Visualizzazione in Realtà Aumentata delle zone conquistate'
    ],
    url: 'https://zonerun.xyz'
  },
  {
    id: 'grapplink',
    title: 'GrappLink',
    subtitle: 'Lotta Pro & Ranking',
    description: 'La prima federazione di Brazilian Jiu-Jitsu professionistico in Italia, dove l\'arte del contatto incontra la precisione del dato.',
    fullDescription: 'GrappLink digitalizza l\'essenza della lotta. Ispirandosi alla "Pale" (la lotta olimpica dell\'antica Grecia), abbiamo creato un ecosistema dove ogni sottomissione è un bit di informazione. La piattaforma gestisce ranking dinamici, eventi Superfight in streaming e tornei Grand Prix con un sistema di Round Robin automatizzato che garantisce il merito assoluto degli atleti.',
    image: 'https://picsum.photos/seed/bjj-combat-tech/1200/800',
    iconText: 'G',
    category: 'Combat-Tech',
    useCases: [
      'Gestione eventi sportivi Pro in live streaming',
      'Sistemi di ranking meritocratici per accademie internazionali',
      'Matchmaking algoritmico basato sulle statistiche di sottomissione'
    ],
    implementations: [
      'Integrazione di sistemi Pay-Per-View sicuri',
      'Sviluppo di app per atleti con tracking delle performance',
      'Data-analytics avanzata per la prevenzione degli infortuni'
    ],
    url: 'https://grapplink.it'
  },
  {
    id: 'gym-hero',
    title: 'Gym Hero Rankings',
    subtitle: 'Olimpo dell\'Allenamento',
    description: 'Un ecosistema di ranking per atleti che trasforma la palestra in un\'arena di sfida meritocratica e costante.',
    fullDescription: 'Gym Hero Rankings (RankArena) è la digitalizzazione del Gymnasion greco. La piattaforma permette agli atleti di sfidarsi su test fisici predefiniti, scalando classifiche globali e locali. Ogni sollevamento, ogni scatto e ogni ripetizione viene validato e inserito in un sistema di punteggio complesso che definisce "l\'atleta perfetto" a 360 gradi.',
    image: 'https://picsum.photos/seed/gym-tech-neon/1200/800',
    iconText: 'A',
    category: 'Athletic-Intelligence',
    useCases: [
      'Classifiche interne per box di CrossFit e centri fitness',
      'Tornei virtuali "Hero WOD" con partecipazione remota',
      'Tracking del progresso atletico basato su standard olimpici'
    ],
    implementations: [
      'Integrazione con sistemi di video-analisi per la validazione delle rep',
      'Dashboard social per la condivisione delle sfide "Arena"',
      'Generazione di profili atletici basati su radar-chart'
    ],
    url: 'https://gymherorankings.com'
  },
  {
    id: 'bjj-hub',
    title: 'BJJ Event Hub',
    subtitle: 'Nesso delle Competizioni',
    description: 'Il punto di riferimento centrale per la scoperta di tornei, seminari e open mat di Brazilian Jiu-Jitsu in tutta Italia.',
    fullDescription: 'BJJ Event Hub (bjjeventhub.com) funge da "Agorà" per la community del Jiu-Jitsu. È una piattaforma centralizzata che aggrega ogni evento, dal piccolo seminario tecnico al grande torneo internazionale. Utilizzando un sistema di filtraggio avanzato per data, località e federazione, permette ad atleti e appassionati di pianificare la propria stagione agonistica con precisione millimetrica.',
    image: 'https://picsum.photos/seed/bjj-tatami-blue/1200/800',
    iconText: 'E',
    category: 'Community-Nexus',
    useCases: [
      'Pianificazione stagionale per atleti agonisti',
      'Promozione di seminari tecnici per accademie locali',
      'Scoperta di Open Mat gratuiti per il networking sportivo'
    ],
    implementations: [
      'Integrazione con calendari digitali (Google/iCal)',
      'Sistema di notifiche push per nuovi eventi nei paraggi',
      'Dashboard per organizzatori con analisi del reach dell\'evento'
    ],
    url: 'https://bjjeventhub.com'
  },
  {
    id: 'scuola-fatoma',
    title: 'Scuola Fatoma',
    subtitle: 'Alfabetizzazione & Integrazione',
    description: 'Un hub educativo dedicato all\'insegnamento della lingua italiana e all\'integrazione sociale in contesti migratori complessi.',
    fullDescription: 'Scuola Fatoma (scuolafatoma.it) è un progetto di "Paideia" moderna situato a Borgo Mezzanone. In un contesto dove la lingua è il primo pilastro della libertà, la scuola offre corsi di italiano base, alfabetizzazione e attività didattiche trasversali (sport, arte, sicurezza) per facilitare l\'incontro tra culture e l\'autonomia degli individui.',
    image: 'https://picsum.photos/seed/school-books-hope/1200/800',
    iconText: 'F',
    category: 'Social-Impact',
    useCases: [
      'Corsi di lingua italiana per residenti stranieri',
      'Workshop di integrazione tramite lo sport e l\'espressione artistica',
      'Campagne di crowdfunding e trasparenza per il supporto sociale'
    ],
    implementations: [
      'Piattaforma digitale per la gestione di iscrizioni e volontari',
      'Dashboard di trasparenza finanziaria in tempo reale per i donatori',
      'Sistemi di monitoraggio dell\'impatto educativo individuale'
    ],
    url: 'https://scuolafatoma.it'
  },
  {
    id: 'amici-san-raffaele',
    title: 'Amici del San Raffaele',
    subtitle: 'Hospitality & Care',
    description: 'Una piattaforma di accoglienza che facilita l\'alloggio temporaneo per pazienti e parenti vicino al Polo Ospedaliero San Raffaele di Milano.',
    fullDescription: 'Amici del San Raffaele (amicidelsanraffaele.com) incarna il concetto di "Xenia" (l\'ospitalità sacra del mondo greco) applicata alla sanità moderna. La piattaforma offre appartamenti e alloggi confortevoli a pochi minuti dall\'ospedale, garantendo un rifugio sicuro e dignitoso per chi affronta percorsi di cura complessi.',
    image: 'https://picsum.photos/seed/apartment-milan-modern/1200/800',
    iconText: 'X',
    category: 'Hospitality-Tech',
    useCases: [
      'Prenotazione di alloggi a breve/medio termine per motivi sanitari',
      'Gestione automatizzata delle disponibilità per i gestori',
      'Assistenza informativa sulle strutture ospedaliere limitrofe'
    ],
    implementations: [
      'Sistema di booking integrato con calendari real-time',
      'Tour virtuali degli appartamenti in 3D',
      'Integrazione con servizi di trasporto e logistica medica'
    ],
    url: 'https://amicidelsanraffaele.com'
  },
  {
    id: 'questhub',
    title: 'QuestHub',
    subtitle: 'Analisi & Feedback Digitale',
    description: 'Un sistema avanzato per la creazione, gestione e analisi di questionari di valutazione strutturati.',
    fullDescription: 'QuestHub rappresenta il "Tabellarium" moderno dell\'era dell\'informazione. È una piattaforma dedicata alla raccolta e all\'analisi di feedback tramite questionari dinamici. Progettata per massimizzare il tasso di risposta e la precisione dei dati, trasforma opinioni individuali in dataset strutturati pronti per l\'elaborazione statistica.',
    image: 'https://picsum.photos/seed/survey-data-obsidian/1200/800',
    iconText: 'Q',
    category: 'Data Management',
    useCases: [
      'Valutazione del clima aziendale e feedback dei dipendenti',
      'Survey post-evento per l\'analisi della customer satisfaction',
      'Raccolta dati strutturati per ricerche accademiche e sociologiche'
    ],
    implementations: [
      'Esportazione dati multiformato in tempo reale',
      'Sistema di crittografia per garantire l\'anonimato dei rispondenti',
      'Generazione automatica di report grafici e dashboard analitiche'
    ],
    url: 'https://br01t.github.io/questHub/'
  },
  {
    id: 'laccademia-kids',
    title: 'L\'Accademia Kids',
    subtitle: 'Disciplina & Crescita',
    description: 'Un programma educativo di Brazilian Jiu Jitsu progettato specificamente per bambini e ragazzi all\'interno delle istituzioni scolastiche.',
    fullDescription: 'L\'Accademia Kids Program porta i valori della disciplina, del rispetto e della resilienza delle arti marziali nelle scuole. Attraverso il Brazilian Jiu Jitsu, i giovani atleti sviluppano non solo abilità fisiche, ma anche una mentalità di crescita e una profonda comprensione del rispetto reciproco, integrando i principi educativi della "Polis" moderna nel contesto dello sport giovanile.',
    image: 'https://picsum.photos/seed/kids-martial-arts/1200/800',
    iconText: 'K',
    category: 'Edu-Sport',
    useCases: [
      'Corsi extra-curriculari di BJJ per scuole primarie e secondarie',
      'Summer Camp e Campus estivi focalizzati sullo sport e la disciplina',
      'Programmi di prevenzione del bullismo tramite la fiducia in se stessi'
    ],
    implementations: [
      'Piattaforma di iscrizione e gestione per programmi scolastici',
      'Monitoraggio dei progressi educativi e atletici dei ragazzi',
      'Integrazione di moduli pedagogici con l\'insegnamento tecnico del BJJ'
    ],
    url: 'https://kids.laccademiabjj.it/'
  },
  {
    id: 'yoga-accademia',
    title: 'Yoga L\'Accademia',
    subtitle: 'Equilibrio & Ataraxia',
    description: 'Un percorso di benessere psicofisico che unisce le antiche tradizioni dello Yoga con la precisione del movimento moderno.',
    fullDescription: 'Yoga L\'Accademia (yoga.laccademiabjj.it) porta la ricerca della "Sophrosyne" (equilibrio e moderazione) nel cuore di Milano. Attraverso stili diversi come Hatha, Vinyasa e il metodo Satyananda, la piattaforma offre un rifugio digitale e fisico per chi cerca la stabilità mentale e la forza corporea, integrando la sapienza millenaria dell\'India con un approccio didattico contemporaneo e accessibile.',
    image: 'https://picsum.photos/seed/yoga-zen-garden/1200/800',
    iconText: 'Y',
    category: 'Wellness-Tech',
    useCases: [
      'Lezioni di Hatha e Vinyasa Yoga per tutti i livelli di esperienza',
      'Workshop di meditazione e rilassamento per la riduzione dello stress',
      'Integrazione di pratiche respiratorie (Pranayama) nel training atletico'
    ],
    implementations: [
      'Piattaforma di prenotazione lezioni online e in presenza',
      'Libreria di contenuti video on-demand per la pratica domestica',
      'Sistema di feedback personalizzato per il monitoraggio della flessibilità e del benessere'
    ],
    url: 'https://yoga.laccademiabjj.it/'
  },
  {
    id: 'assess-lab',
    title: 'Assess Lab',
    subtitle: 'Valutazione & Riabilitazione',
    description: 'Una piattaforma dedicata alla valutazione professionale guidata per la fisioterapia e la performance sportiva.',
    fullDescription: 'Assess Lab rappresenta l\'evolution digitale del "Iatreion" (l\'antico ambulatorio medico-ginnico). La piattaforma guida i professionisti della salute e dello sport attraverso protocolli di valutazione rigorosi, trasformando test fisici e clinici in dati precisi per la riabilitazione e il miglioramento della performance, integrando la logica clinica con interfacce digitali intuitive.',
    image: 'https://picsum.photos/seed/med-tech-precision/1200/800',
    iconText: 'L',
    category: 'Med-Sport Tech',
    useCases: [
      'Valutazione clinica e funzionale per pazienti fisioterapici',
      'Screening della performance per atleti d\'élite',
      'Monitoraggio dei progressi nel tempo tramite test standardizzati'
    ],
    implementations: [
      'Protocolli di valutazione guidati step-by-step',
      'Generazione automatica di report clinici e grafici di performance',
      'Archivio digitale sicuro per la gestione dello storico paziente/atleta'
    ],
    url: 'https://br01t.github.io/assess_lab/'
  },
  {
    id: 'gloed-shop',
    title: 'Glöed',
    subtitle: 'Estetica & Commercio Culturale',
    description: 'Una piattaforma e-commerce d\'alta gamma che ridefinisce l\'esperienza di shopping per gli amanti della moda contemporanea.',
    fullDescription: 'Glöed (gloedshop.lovable.app) è la manifestazione digitale della "Kalokagathia" (la fusione di bellezza e valore morale) applicata al retail. Non è un semplice shop online, ma una curatela estetica che trasforma l\'acquisto in un atto di espressione culturale. La piattaforma integra un\'interfaccia utente fluida con un sistema di gestione avanzato, elevando il prodotto da semplice merce a oggetto di desiderio e identità.',
    image: 'https://picsum.photos/seed/fashion-luxury-gold/1200/800',
    iconText: 'G',
    category: 'Luxury E-commerce',
    useCases: [
      'Curatela di collezioni moda esclusive per un pubblico internazionale',
      'Shopping experience immersiva con focus sulla qualità visiva e d\'uso',
      'Gestione centralizzata di ordini e inventario per brand di lusso'
    ],
    implementations: [
      'Infrastruttura di checkout sicura e ottimizzata per le conversioni',
      'Design responsivo ad alte prestazioni con caricamento progressivo degli asset',
      'Motore di ricerca semantico per la scoperta di tendenze e abbinamenti'
    ],
    url: 'https://gloedshop.lovable.app'
  },
  {
    id: 'runners-hub',
    title: 'Runners Hub',
    subtitle: 'Comunità & Performance',
    description: 'Il nesso digitale per la community del running, dove l\'esperienza collettiva incontra l\'analisi tecnica della corsa.',
    fullDescription: 'Runners Hub (runners-hub.org) funge da punto di raccordo per corridori di ogni livello. Ispirandosi all\'idea di un "Koinoi" del fitness, la piattaforma aggrega eventi, percorsi e database tecnici per ottimizzare l\'allenamento quotidiano. È un ecosistema dove la condivisione di obiettivi e la precisione dei dati biometrici creano un ambiente stimolante per il superamento dei propri limiti atletici.',
    image: 'https://picsum.photos/seed/running-track-dawn/1200/800',
    iconText: 'R',
    category: 'Running-Tech',
    useCases: [
      'Organizzazione e scoperta di eventi di corsa locali e nazionali',
      'Analisi comparativa delle performance e tracking dei percorsi',
      'Creazione di gruppi di allenamento e networking per runner'
    ],
    implementations: [
      'Database centralizzato degli eventi podistici con filtri avanzati',
      'Integrazione con API di geolocalizzazione per la mappatura dei percorsi',
      'Dashboard social per la condivisione delle milestone e dei record personali'
    ],
    url: 'https://www.runners-hub.org/'
  },
  {
    id: 'urban-yoroi',
    title: 'Urban Yoroi',
    subtitle: 'Armatura Urbana & Techwear',
    description: 'Un e-commerce d\'avanguardia dedicato al techwear e all\'abbigliamento tattico urbano d\'ispirazione orientale.',
    fullDescription: 'Urban Yoroi (urbanyoroishop.com) è la fusione definitiva tra l\'estetica dei "Bushi" e la funzionalità del modernismo tecnico. La piattaforma offre una curatela di abbigliamento "Yoroi" (armatura) ripensato per la giungla urbana contemporanea. Ogni capo è selezionato per bilanciare protezione, utilità tattica e uno stile iconico che attinge profondamente dalla tradizione marziale asiatica, servito attraverso un\'interfaccia e-commerce brutale ma raffinata.',
    image: 'https://picsum.photos/seed/cyber-ninja-tactical/1200/800',
    iconText: 'U',
    category: 'Tactical E-commerce',
    useCases: [
      'Vendita di abbigliamento tecnico ad alte prestazioni (Techwear)',
      'Creazione di una vetrina digitale per prodotti con estetica Cyberpunk/Shinobi',
      'Gestione di spedizioni internazionali per una nicchia di collezionisti globali'
    ],
    implementations: [
      'Integrazione di sistemi di pagamento crittografati e sicuri',
      'Design dell\'interfaccia focalizzato sulla leggibilità e sull\'impatto visivo dark',
      'Sistema di filtraggio avanzato per specifiche tecniche dei tessuti (impermeabilità, traspirabilità)'
    ],
    url: 'https://urbanyoroishop.com/'
  }
];
