(function(){
  'use strict';

  /* ---------- Traductions FR / EN ---------- */
  var DICT = {
    fr: {
      'meta.title': 'Jimin — L\'équipement qui protège et soigne',
      'meta.desc': 'Jimin développe les équipements d\'urgence qui protègent et soignent : drones de reconnaissance et de surveillance, caméras fixes et corporelles, soins rapides pour les troupes et les civils.',
      'nav.products': 'Produits',
      'nav.industries': 'Industries',
      'nav.mission': 'Notre mission',
      'nav.news': 'Actualités',
      'nav.investors': 'Investisseurs',
      'nav.careers': 'Carrières',
      'nav.demo': 'Demander une démo',
      'nav.back': 'Retour',
      'mega.products.cat': 'Produits',
      'mega.products.title': 'Équiper ceux qui protègent et soignent',
      'mega.products.desc': 'Trois familles d\'équipements critiques, pensées pour la première ligne.',
      'mega.products.cta': 'Voir tous les produits',
      'mega.products.g1': 'Drones',
      'mega.products.g1.l1': 'Reconnaissance ISR',
      'mega.products.g1.l2': 'Surveillance continue',
      'mega.products.g1.l3': 'Protection de site',
      'mega.products.g2': 'Caméras & capteurs',
      'mega.products.g2.l1': 'Caméras de surveillance',
      'mega.products.g2.l2': 'Caméras corporelles',
      'mega.products.g2.l3': 'Vision thermique & nocturne',
      'mega.products.g3': 'Médical',
      'mega.products.g3.l1': 'Soins rapides de combat',
      'mega.products.g3.l2': 'Secours civils',
      'mega.products.g3.l3': 'Kits & dispositifs d\'urgence',
      'mega.industries.cat': 'Industries',
      'mega.industries.title': 'Des équipements pour chaque terrain',
      'mega.industries.desc': 'De l\'opération militaire à la catastrophe civile, la même exigence : voir, protéger, soigner.',
      'mega.industries.cta': 'Tous les secteurs',
      'mega.industries.g1': 'Défense',
      'mega.industries.g1.l1': 'Reconnaissance & ISR',
      'mega.industries.g1.l2': 'Protection des forces',
      'mega.industries.g1.l3': 'Soins aux troupes',
      'mega.industries.g2': 'Sécurité intérieure',
      'mega.industries.g2.l1': 'Surveillance urbaine',
      'mega.industries.g2.l2': 'Caméras corporelles',
      'mega.industries.g2.l3': 'Infrastructures critiques',
      'mega.industries.g3': 'Médical & civil',
      'mega.industries.g3.l1': 'Secours & catastrophes',
      'mega.industries.g3.l2': 'Soins rapides civils',
      'mega.industries.g3.l3': 'Hôpitaux & cliniques',
      'hero.label': 'Équipements critiques — défense & secours',
      'hero.title': 'voir. protéger. soigner.',
      'hero.desc': 'Jimin développe le matériel d\'urgence qui équipe les armées, les forces de sécurité et les secours : drones de reconnaissance et de surveillance, caméras fixes et corporelles, et équipements médicaux de soins rapides.',
      'hero.cta.primary': 'Explorer les solutions',
      'hero.cta.secondary': 'Construire avec Jimin',
      'hero.console': 'jimin ops // réseau déployé',
      'hero.console2': 'drones : 12 · caméras : 214 · soins : prêts',
      'hero.stat1.t': 'Drones ISR',
      'hero.stat1.d': 'Détection, poursuite et reporting automatiques des zones à risque.',
      'hero.stat2.t': 'Caméras & capteurs',
      'hero.stat2.d': 'Caméras fixes et corporelles, vision thermique et nocturne.',
      'hero.stat3.t': 'Soins rapides',
      'hero.stat3.d': 'Équipements d\'urgence pour stabiliser et soigner sans attendre.',
      'mission.label': 'Notre mission',
      'mission.t1': 'Devancer le danger.',
      'mission.t2': 'Soigner sans attendre.',
      'mission.desc': 'L\'opérateur reste au centre de la décision. Jimin conçoit les équipements qui étendent sa perception — drones et caméras — et stabilisent la blessure avant l\'arrivée du soin, pour les troupes comme pour les civils.',
      'products.label': 'Produits',
      'products.title': 'La chaîne d\'équipements de la première ligne',
      'products.desc': 'Quatre familles complètes et complémentaires, conçues pour la détection, la protection et le soin — déployables ensemble sur un même théâtre.',
      'products.filter.all': 'Tous',
      'products.filter.drones': 'Drones ISR',
      'products.filter.cameras': 'Caméras & Capteurs',
      'products.filter.medical': 'Soins & Survie',
      'products.more': 'En savoir plus',
      'products.p1.tag': 'Reconnaissance & surveillance autonome',
      'products.p1.name': 'Drone J-ISR',
      'products.p1.desc': 'Détection, poursuite et éclairage de zone en continu, de jour comme de nuit, avec renvoi de la vidéo en temps réel au poste de commandement.',
      'products.p1.s1': 'autonomie 45 min',
      'products.p1.s2': 'portée 12 km',
      'products.p1.s3': 'vision thermique',
      'products.p1.s4': 'anti-brouillage',
      'products.p2.tag': 'Surveillance fixe, vision de nuit',
      'products.p2.name': 'Caméra J-SCAM',
      'products.p2.desc': 'Caméras réseau robustes pour la protection des sites sensibles, des frontières et des zones urbaines, avec analyse embarquée.',
      'products.p2.s1': '4K HDR',
      'products.p2.s2': 'vision nocturne IR',
      'products.p2.s3': 'indice IP67',
      'products.p2.s4': 'analyse embarquée',
      'products.p3.tag': 'Preuve intégrale d\'intervention',
      'products.p3.name': 'Bodycam J-BWC',
      'products.p3.desc': 'Caméras portées par les forces, les policiers et les secouristes pour documenter chaque intervention avec chiffrement de bout en bout.',
      'products.p3.s1': 'enreg. 12 h',
      'products.p3.s2': 'chiffrement AES-256',
      'products.p3.s3': 'déclenchement partagé',
      'products.p3.s4': 'anti-altération',
      'products.p4.tag': 'Stabiliser avant l\'arrivée du secours',
      'products.p4.name': 'J-CARE Soins rapides',
      'products.p4.desc': 'Kits, garrots, pansements hémostatiques et dispositifs de stabilisation pour prendre en charge un blessé en moins de quelques minutes — troupe ou civil.',
      'products.p4.s1': 'pose < 60 s',
      'products.p4.s2': 'poids < 1 kg',
      'products.p4.s3': 'usage unique',
      'products.p4.s4': 'certifié ISO 13485',
      'products.p5.tag': 'Sac à dos haute technologie',
      'products.p5.name': 'Sac J-HighTech',
      'products.p5.desc': 'Sac multifonctionnel équipé pour les situations d\'urgence et de survie en milieu difficile.',
      'products.p5.s1': 'Multiple fonctions',
      'products.p5.s2': 'Compatible masque gaz et oxygène',
      'products.p5.s3': 'Compartiment étanche combinaison légère',
      'products.p5.s4': 'Réservoir eau 2L avec raccord boisson',
      'products.p5.s5': 'Stockage oxygène 3kg avec masque',
      'products.p5.s6': '2 compartiments effets personnels',
      'products.p5.s7': 'Écran 7" intégré survie',
      'industries.label': 'Industries',
      'industries.title': 'Une chaîne d\'équipements pour chaque terrain',
      'industries.desc': 'Les armées, les forces de sécurité et les secours affrontent les mêmes contraintes : agir vite, voir large, protéger et soigner. Jimin équipe chacune de ces missions.',
      'industries.more': 'Découvrir',
      'industries.g1': 'Défense',
      'industries.g1.l1': 'Reconnaissance & ISR',
      'industries.g1.l2': 'Protection des forces',
      'industries.g1.l3': 'Soins rapides aux troupes',
      'industries.g2': 'Sécurité intérieure',
      'industries.g2.l1': 'Surveillance urbaine',
      'industries.g2.l2': 'Caméras corporelles',
      'industries.g2.l3': 'Infrastructures critiques',
      'industries.g3': 'Médical & civil',
      'industries.g3.l1': 'Secours & catastrophes',
      'industries.g3.l2': 'Soins rapides civils',
      'industries.g3.l3': 'Hôpitaux & cliniques',
      'industries.s1': 'surveillance & vigie continues',
      'industries.s2': 'délai de pose des soins d\'urgence',
      'industries.s3': 'poids du kit de soin du combattant',
      'industries.s4': 'console unique de commandement',
      'eco.label': 'Écosystème',
      'eco.title': 'Un écosystème ouvert d\'équipements et de partenaires',
      'eco.desc': 'Jimin s\'appuie sur un marché ouvert : constructeurs de drones, fabricants de capteurs, intégrateurs et développeurs relient leurs solutions à un socle commun — données, montage et certification.',
      'eco.l1': 'Publier des équipements et des modules sur le marché Jimin',
      'eco.l2': 'Brancher drone, caméra ou dispositif médical en jours, pas en mois',
      'eco.l3': 'Certifier vos produits Jimin Certified™ pour un déploiement garanti',
      'eco.cta': 'Devenir partenaire',
      'eco.cert': 'Jimin Certified™',
      'eco.cert.note': 'déploiement garanti',
      'eco.t1': 'Drones ISR',
      'eco.t2': 'Capteurs',
      'eco.t3': 'Caméras fixes',
      'eco.t4': 'Bodycams',
      'eco.t5': 'Soins rapides',
      'eco.t6': 'Radars',
      'eco.t7': 'Vision thermique',
      'eco.t8': 'Intégrateurs',
      'eco.t9': 'Systèmes de commandement',
      'eco.t10': 'Distributeurs',
      'eco.cert.title': 'Programme Jimin Certified™',
      'eco.cert.desc': 'Chaque équipement est testé pour la violence des usages militaires et de secours.',
      'cyber.label': 'Logiciels & cyberdéfense',
      'cyber.sub': 'Application mobile de cybersécurité des équipes',
      'cyber.desc': 'JCyber protège le téléphone des combattants, secouristes et forces de l\'ordre : chiffrement des échanges, détection des menaces autour de vous et canal de commandement sécurisé.',
      'cyber.cta': 'Réserver la démo',
      'cyber.avail': 'Android · iOS',
      'cyber.score': 'indice de sécurité',
      'cyber.secure': 'système verrouillé',
      'cyber.scan': 'Scanner la zone',
      'cyber.feed1': 'liaison chiffrée active',
      'cyber.feed2': 'menace bloquée — wifi piégé',
      'cyber.feed3': 'VPN tactique : zone nord',
      'cyber.feed4': 'accès biométrique validé',
      'cyber.f1.t': 'Détection de menaces en temps réel',
      'cyber.f1.d': 'Alerte wifi piégé, Bluetooth suspect et attaques de proximité.',
      'cyber.f2.t': 'Canal de commandement chiffré',
      'cyber.f2.d': 'Communications tactiques chiffrées de bout en bout.',
      'cyber.f3.t': 'VPN tactique embarqué',
      'cyber.f3.d': 'Masque le trafic et garde la liaison même en zone hostile.',
      'cyber.f4.t': 'Carte des risques locale',
      'cyber.f4.d': 'Niveaux de menace cyber géolocalisés zone par zone.',
      'cyber.f5.t': 'Contrôle biométrique',
      'cyber.f5.d': 'Ouverture par visage et code anti-extorsion.',
      'cyber.f6.t': 'Anti-hameçonnage',
      'cyber.f6.d': 'Détecte les SMS et liens piégés avant l\'équipe.',
      'cyber.f7.t': 'Quarantaine automatique',
      'cyber.f7.d': 'Isole toute application compromise en quelques secondes.',
      'cyber.f8.t': 'Mode furtif',
      'cyber.f8.d': 'L\'application se masque : aucune trace visible à l\'écran.',
      'lab.label': 'Formation & apprentissage',
      'lab.sub': 'Le logiciel qui forme les métiers de demain',
      'lab.desc': 'Jinim Lab embarque des centaines de tutoriels gratuits, des parcours métiers guidés et des certificats — pour apprendre aux jeunes les savoir-faire de la défense, de la tech et du secours.',
      'lab.cta': 'Commencer gratuitement',
      'lab.term': 'jimin lab — parcours en cours',
      'lab.run': '▶ Lancer l\'exercice',
      'lab.term1': 'Cyberdéfense — niveau 1',
      'lab.term2': 'Pilotage drone ISR',
      'lab.term3': 'Électronique & drones',
      'lab.term4': 'Secourisme tactique',
      'lab.termfree': 'gratuit · certificat à la clé',
      'lab.f1.t': 'Tutoriels 100 % gratuits',
      'lab.f1.d': 'Vidéos, guides pas à pas et exercices pratiques.',
      'lab.f2.t': 'Parcours métiers guidés',
      'lab.f2.d': 'Pilote ISR, technicien drone, cyber, électronicien, secouriste…',
      'lab.f3.t': 'Simulateurs & sandbox',
      'lab.f3.d': 'S\'entraîner sur du matériel numérique, sans risque.',
      'lab.f4.t': 'Certificats Jimin Lab',
      'lab.f4.d': 'Reconnus par les partenaires de l\'écosystème, partageables.',
      'lab.f5.t': 'Communauté & clubs',
      'lab.f5.d': 'Mentorat, groupes locaux et concours pour progresser ensemble.',
      'lab.s1': 'jeunes formés',
      'lab.s2': 'tutoriels gratuits',
      'lab.s3': 'parcours métiers',
      'lab.s4': 'gratuit, sans conditions',
      'cta.deploy.label': 'Première ligne',
      'cta.deploy.title': 'Équipez vos forces et vos secours',
      'cta.deploy.desc': 'Drones, caméras et soins rapides, intégrés à votre chaîne de commandement existante.',
      'cta.deploy.cta': 'Demander une démo',
      'cta.build.label': 'Partenaires',
      'cta.build.title': 'Construisez avec Jimin',
      'cta.build.desc': 'Intégrez vos équipements à l\'écosystème et rejoignez le programme Jimin Certified™.',
      'cta.build.cta': 'Devenir partenaire',
      'footer.tag': 'Jimin conçoit les équipements d\'urgence qui protègent et soignent — voir, protéger, soigner.',
      'footer.c1': 'Équipements',
      'footer.c1.l1': 'Drones ISR',
      'footer.c1.l2': 'Caméras de surveillance',
      'footer.c1.l3': 'Caméras corporelles',
      'footer.c1.l4': 'Soins rapides',
      'footer.c1.l5': 'JCyber',
      'footer.c1.l6': 'Jinim Lab',
      'footer.c2': 'Secteurs',
      'footer.c2.l1': 'Défense',
      'footer.c2.l2': 'Sécurité intérieure',
      'footer.c2.l3': 'Médical & civil',
      'footer.c3': 'Entreprise',
      'footer.c3.l1': 'Notre mission',
      'footer.c3.l2': 'Actualités',
      'footer.c3.l3': 'Investisseurs',
      'footer.c3.l4': 'Carrières',
      'footer.c4': 'Contact',
      'footer.c4.l1': 'Demander une démo',
      'footer.c4.l2': 'Contacter l\'équipe',
      'footer.legal': '© 2026 Jimin. Tous droits réservés.',
      'footer.priv': 'Confidentialité',
      'footer.terms': 'Conditions',
      'footer.cookies': 'Cookies',
      'modal.close': 'Fermer',
      'modal.title': 'Demander une démo',
      'modal.sub': 'Équipement d\'intérêt — nous revenons vers vous sous 24 h.',
      'modal.name': 'Nom complet',
      'modal.email': 'Email professionnel',
      'modal.case': 'Domaine d\'intérêt',
      'modal.opt1': 'Défense & drones ISR',
      'modal.opt2': 'Sécurité intérieure & caméras',
      'modal.opt3': 'Médical & soins rapides',
      'modal.opt4': 'Partenariat',
      'modal.send': 'Envoyer',
      'modal.cancel': 'Annuler',
      'nav.top': 'Haut de page'
    },
    en: {
      'meta.title': 'Jimin — The equipment that protects and heals',
      'meta.desc': 'Jimin builds the emergency equipment that protects and heals: reconnaissance and surveillance drones, fixed and body-worn cameras, rapid-care medical gear for troops and civilians.',
      'nav.products': 'Products',
      'nav.industries': 'Industries',
      'nav.mission': 'Our mission',
      'nav.news': 'News',
      'nav.investors': 'Investors',
      'nav.careers': 'Careers',
      'nav.demo': 'Request demo',
      'nav.back': 'Back',
      'mega.products.cat': 'Products',
      'mega.products.title': 'Equipping those who protect and heal',
      'mega.products.desc': 'Three families of critical equipment, built for the front line.',
      'mega.products.cta': 'See all products',
      'mega.products.g1': 'Drones',
      'mega.products.g1.l1': 'ISR reconnaissance',
      'mega.products.g1.l2': 'Persistent surveillance',
      'mega.products.g1.l3': 'Site protection',
      'mega.products.g2': 'Cameras & sensors',
      'mega.products.g2.l1': 'Surveillance cameras',
      'mega.products.g2.l2': 'Body-worn cameras',
      'mega.products.g2.l3': 'Thermal & low-light vision',
      'mega.products.g3': 'Medical',
      'mega.products.g3.l1': 'Combat rapid care',
      'mega.products.g3.l2': 'Civilian first response',
      'mega.products.g3.l3': 'Emergency kits & devices',
      'mega.industries.cat': 'Industries',
      'mega.industries.title': 'Equipment for every terrain',
      'mega.industries.desc': 'From military operations to civilian disasters, the same standard: see, protect, heal.',
      'mega.industries.cta': 'All industries',
      'mega.industries.g1': 'Defense',
      'mega.industries.g1.l1': 'Reconnaissance & ISR',
      'mega.industries.g1.l2': 'Force protection',
      'mega.industries.g1.l3': 'Troop medical care',
      'mega.industries.g2': 'Homeland security',
      'mega.industries.g2.l1': 'City surveillance',
      'mega.industries.g2.l2': 'Body-worn cameras',
      'mega.industries.g2.l3': 'Critical infrastructure',
      'mega.industries.g3': 'Medical & civilian',
      'mega.industries.g3.l1': 'Disaster response',
      'mega.industries.g3.l2': 'Civilian rapid care',
      'mega.industries.g3.l3': 'Hospitals & clinics',
      'hero.label': 'Critical equipment — defense & first response',
      'hero.title': 'see. protect. heal.',
      'hero.desc': 'Jimin builds the emergency equipment that equips armed forces, security services and first responders: reconnaissance and surveillance drones, fixed and body-worn cameras, and rapid-care medical equipment.',
      'hero.cta.primary': 'Explore solutions',
      'hero.cta.secondary': 'Build with Jimin',
      'hero.console': 'jimin ops // network deployed',
      'hero.console2': 'drones: 12 · cameras: 214 · medics: ready',
      'hero.stat1.t': 'ISR Drones',
      'hero.stat1.d': 'Automated detection, tracking and reporting of at-risk zones.',
      'hero.stat2.t': 'Cameras & sensors',
      'hero.stat2.d': 'Fixed and body-worn cameras, thermal and low-light vision.',
      'hero.stat3.t': 'Rapid care',
      'hero.stat3.d': 'Emergency equipment to stabilize and treat without delay.',
      'mission.label': 'Our mission',
      'mission.t1': 'Anticipate the danger.',
      'mission.t2': 'Heal without delay.',
      'mission.desc': 'The operator stays at the center of every decision. Jimin designs the equipment that extends their perception — drones and cameras — and stabilizes the wounded before care arrives, for troops and civilians alike.',
      'products.label': 'Products',
      'products.title': 'The complete frontline equipment line',
      'products.desc': 'Four complete, complementary families built for detection, protection and care — deployable together on a single theater.',
      'products.filter.all': 'All',
      'products.filter.drones': 'ISR Drones',
      'products.filter.cameras': 'Cameras & Sensors',
      'products.filter.medical': 'Medical & Survival',
      'products.more': 'Learn more',
      'products.p1.tag': 'Autonomous reconnaissance & surveillance',
      'products.p1.name': 'J-ISR Drone',
      'products.p1.desc': 'Continuous detection, tracking and area illumination day and night, streaming live video back to the command post.',
      'products.p1.s1': '45 min endurance',
      'products.p1.s2': '12 km range',
      'products.p1.s3': 'thermal imaging',
      'products.p1.s4': 'anti-jamming',
      'products.p2.tag': 'Fixed surveillance, night vision',
      'products.p2.name': 'J-SCAM Camera',
      'products.p2.desc': 'Rugged network cameras for critical sites, borders and urban areas, with onboard analytics.',
      'products.p2.s1': '4K HDR',
      'products.p2.s2': 'IR night vision',
      'products.p2.s3': 'IP67 rating',
      'products.p2.s4': 'onboard analytics',
      'products.p3.tag': 'Full intervention evidence',
      'products.p3.name': 'J-BWC Body Camera',
      'products.p3.desc': 'Cameras worn by forces, police and first responders to document every intervention with end-to-end encryption.',
      'products.p3.s1': '12 h recording',
      'products.p3.s2': 'AES-256 encryption',
      'products.p3.s3': 'shared trigger',
      'products.p3.s4': 'tamper-proof',
      'products.p4.tag': 'Stabilize before care arrives',
      'products.p4.name': 'J-CARE Rapid Care',
      'products.p4.desc': 'Kits, tourniquets, hemostatic dressings and stabilization devices to treat a casualty within minutes — soldier or civilian.',
      'products.p4.s1': 'applied < 60 s',
      'products.p4.s2': 'weight < 1 kg',
      'products.p4.s3': 'single use',
      'products.p4.s4': 'ISO 13485 certified',
      'products.p5.tag': 'High-tech backpack',
      'products.p5.name': 'J-HighTech Pack',
      'products.p5.desc': 'Multi-functional backpack equipped for emergency and survival in harsh conditions.',
      'products.p5.s1': 'Multiple functions',
      'products.p5.s2': 'Gas mask and oxygen compatible',
      'products.p5.s3': 'Lightweight waterproof compartment',
      'products.p5.s4': '2L water reservoir with drink connector',
      'products.p5.s5': '3kg oxygen storage with mask',
      'products.p5.s6': '2 personal effects compartments',
      'products.p5.s7': '7" integrated survival screen',
      'industries.label': 'Industries',
      'industries.title': 'An equipment line for every terrain',
      'industries.desc': 'Armed forces, security services and first responders face the same constraints: act fast, see wide, protect and heal. Jimin equips each of these missions.',
      'industries.more': 'Discover',
      'industries.g1': 'Defense',
      'industries.g1.l1': 'Reconnaissance & ISR',
      'industries.g1.l2': 'Force protection',
      'industries.g1.l3': 'Rapid troop care',
      'industries.g2': 'Homeland security',
      'industries.g2.l1': 'Urban surveillance',
      'industries.g2.l2': 'Body-worn cameras',
      'industries.g2.l3': 'Critical infrastructure',
      'industries.g3': 'Medical & civilian',
      'industries.g3.l1': 'Disaster response',
      'industries.g3.l2': 'Civilian rapid care',
      'industries.g3.l3': 'Hospitals & clinics',
      'industries.s1': 'continuous surveillance & watch',
      'industries.s2': 'time to apply emergency care',
      'industries.s3': 'weight of combat care kit',
      'industries.s4': 'single command console',
      'eco.label': 'Ecosystem',
      'eco.title': 'An open ecosystem of equipment and partners',
      'eco.desc': 'Jimin builds on an open marketplace: drone makers, sensor manufacturers, integrators and developers connect their solutions to a common core — data, integration and certification.',
      'eco.l1': 'Publish equipment and modules on the Jimin marketplace',
      'eco.l2': 'Hook up a drone, camera or medical device in days, not months',
      'eco.l3': 'Certify your products Jimin Certified™ for guaranteed deployment',
      'eco.cta': 'Become a partner',
      'eco.cert': 'Jimin Certified™',
      'eco.cert.note': 'guaranteed deployment',
      'eco.t1': 'ISR Drones',
      'eco.t2': 'Sensors',
      'eco.t3': 'Fixed cameras',
      'eco.t4': 'Bodycams',
      'eco.t5': 'Rapid care',
      'eco.t6': 'Radars',
      'eco.t7': 'Thermal imaging',
      'eco.t8': 'Integrators',
      'eco.t9': 'Command systems',
      'eco.t10': 'Distributors',
      'eco.cert.title': 'Jimin Certified™ program',
      'eco.cert.desc': 'Every piece of equipment is tested for the harshness of military and emergency use.',
      'cyber.label': 'Software & cyber defense',
      'cyber.sub': 'Team cybersecurity mobile app',
      'cyber.desc': 'JCyber protects the phones of soldiers, first responders and law enforcement: encrypted comms, threats detected around you and a secure command channel.',
      'cyber.cta': 'Book the demo',
      'cyber.avail': 'Android · iOS',
      'cyber.score': 'security score',
      'cyber.secure': 'system locked',
      'cyber.scan': 'Scan local area',
      'cyber.feed1': 'encrypted link active',
      'cyber.feed2': 'threat blocked — rogue wifi',
      'cyber.feed3': 'tactical VPN: north zone',
      'cyber.feed4': 'biometric access granted',
      'cyber.f1.t': 'Real-time threat detection',
      'cyber.f1.d': 'Alerts for rogue wifi, suspicious Bluetooth and proximity attacks.',
      'cyber.f2.t': 'Encrypted command channel',
      'cyber.f2.d': 'End-to-end encrypted tactical communications.',
      'cyber.f3.t': 'Tactical embedded VPN',
      'cyber.f3.d': 'Hides traffic and keeps the link even in hostile areas.',
      'cyber.f4.t': 'Local risk map',
      'cyber.f4.d': 'Geolocated cyber threat levels, zone by zone.',
      'cyber.f5.t': 'Biometric control',
      'cyber.f5.d': 'Face unlock and anti-coercion code.',
      'cyber.f6.t': 'Anti-phishing',
      'cyber.f6.d': 'Detects malicious SMS and links before they reach the team.',
      'cyber.f7.t': 'Automatic quarantine',
      'cyber.f7.d': 'Isolates any compromised app within seconds.',
      'cyber.f8.t': 'Stealth mode',
      'cyber.f8.d': 'The app hides itself: no visible trace on screen.',
      'lab.label': 'Education & learning',
      'lab.sub': 'The software that teaches tomorrow\'s trades',
      'lab.desc': 'Jinim Lab packs hundreds of free tutorials, guided career tracks and certificates — teaching young people the skills of defense, tech and emergency.',
      'lab.cta': 'Start for free',
      'lab.term': 'jimin lab — courses in progress',
      'lab.run': '▶ Run exercise',
      'lab.term1': 'Cyber defense — level 1',
      'lab.term2': 'ISR drone piloting',
      'lab.term3': 'Electronics & drones',
      'lab.term4': 'Tactical first aid',
      'lab.termfree': 'free · certificate included',
      'lab.f1.t': '100% free tutorials',
      'lab.f1.d': 'Videos, step-by-step guides and hands-on exercises.',
      'lab.f2.t': 'Guided career tracks',
      'lab.f2.d': 'ISR pilot, drone tech, cyber, electronics, first aid…',
      'lab.f3.t': 'Simulators & sandbox',
      'lab.f3.d': 'Train on digital gear, with zero risk.',
      'lab.f4.t': 'Jimin Lab certificates',
      'lab.f4.d': 'Recognized by ecosystem partners, shareable.',
      'lab.f5.t': 'Community & clubs',
      'lab.f5.d': 'Mentoring, local groups and contests to grow together.',
      'lab.s1': 'young people trained',
      'lab.s2': 'free tutorials',
      'lab.s3': 'career tracks',
      'lab.s4': 'free, no strings attached',
      'cta.deploy.label': 'Front line',
      'cta.deploy.title': 'Equip your forces and first responders',
      'cta.deploy.desc': 'Drones, cameras and rapid care, integrated into your existing command chain.',
      'cta.deploy.cta': 'Request demo',
      'cta.build.label': 'Partners',
      'cta.build.title': 'Build with Jimin',
      'cta.build.desc': 'Integrate your equipment into the ecosystem and join the Jimin Certified™ program.',
      'cta.build.cta': 'Become a partner',
      'footer.tag': 'Jimin builds the emergency equipment that protects and heals — see, protect, heal.',
      'footer.c1': 'Equipment',
      'footer.c1.l1': 'ISR Drones',
      'footer.c1.l2': 'Surveillance cameras',
      'footer.c1.l3': 'Body-worn cameras',
      'footer.c1.l4': 'Rapid care',
      'footer.c1.l5': 'JCyber',
      'footer.c1.l6': 'Jinim Lab',
      'footer.c2': 'Industries',
      'footer.c2.l1': 'Defense',
      'footer.c2.l2': 'Homeland security',
      'footer.c2.l3': 'Medical & civilian',
      'footer.c3': 'Company',
      'footer.c3.l1': 'Our mission',
      'footer.c3.l2': 'News',
      'footer.c3.l3': 'Investors',
      'footer.c3.l4': 'Careers',
      'footer.c4': 'Contact',
      'footer.c4.l1': 'Request demo',
      'footer.c4.l2': 'Contact the team',
      'footer.legal': '© 2026 Jimin. All rights reserved.',
      'footer.priv': 'Privacy',
      'footer.terms': 'Terms',
      'footer.cookies': 'Cookies',
      'modal.close': 'Close',
      'modal.title': 'Request a demo',
      'modal.sub': 'Equipment of interest — we\'ll get back to you within 24 hours.',
      'modal.name': 'Full name',
      'modal.email': 'Work email',
      'modal.case': 'Area of interest',
      'modal.opt1': 'Defense & ISR drones',
      'modal.opt2': 'Homeland security & cameras',
      'modal.opt3': 'Medical & rapid care',
      'modal.opt4': 'Partnership',
      'modal.send': 'Send',
      'modal.cancel': 'Cancel',
      'nav.top': 'Back to top'
    }
  };

  /* ---------- Langue ---------- */
  var lang = localStorage.getItem('jm-lang') || 'fr';
  if (['fr','en'].indexOf(lang) === -1) lang = 'fr';
  var langBtn = document.getElementById('langToggle');

  function applyLang(){
    document.documentElement.lang = lang;
    var t = DICT[lang];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++){
      var k = nodes[i].getAttribute('data-i18n');
      if (t[k]) nodes[i].textContent = t[k];
    }
    var pageTitle = document.getElementById('pageTitle');
    var metaDesc = document.getElementById('metaDesc');
    if (pageTitle && t['meta.title']) pageTitle.textContent = t['meta.title'];
    if (metaDesc && t['meta.desc']) metaDesc.setAttribute('content', t['meta.desc']);
    var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
    for (var a = 0; a < ariaNodes.length; a++){
      var ak = ariaNodes[a].getAttribute('data-i18n-aria');
      if (t[ak]) ariaNodes[a].setAttribute('aria-label', t[ak]);
    }
    if (langBtn){
      langBtn.textContent = (lang === 'fr') ? 'EN' : 'FR';
      langBtn.setAttribute('aria-label', (lang === 'fr') ? 'Switch to English' : 'Passer en français');
    }
  }

  if (langBtn){
    langBtn.addEventListener('click', function(){
      lang = (lang === 'fr') ? 'en' : 'fr';
      localStorage.setItem('jm-lang', lang);
      applyLang();
    });
  }

  /* ---------- Navigation & méga-menus ---------- */
  var header = document.getElementById('navbar');
  var burger = document.getElementById('burger');
  var triggers = document.querySelectorAll('.nav-mega-trigger');
  var megas = document.querySelectorAll('.mega');

  function onScroll(){
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  function closeMegas(except){
    for (var i = 0; i < megas.length; i++){
      if (megas[i] !== except) megas[i].classList.remove('active');
    }
    for (var j = 0; j < triggers.length; j++){
      triggers[j].setAttribute('aria-expanded', 'false');
    }
    header.classList.remove('mega-open');
  }

  for (var i = 0; i < triggers.length; i++){
    triggers[i].addEventListener('click', function(e){
      e.stopPropagation();
      var id = this.getAttribute('data-menu-id');
      var panel = document.querySelector('.mega[data-menu-id="' + id + '"]');
      var alreadyOpen = panel.classList.contains('active');
      closeMegas();
      if (!alreadyOpen){
        panel.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        header.classList.add('mega-open');
        var first = panel.querySelector('a, button');
        if (first && window.innerWidth <= 920) first.focus();
      }
    });
  }

  document.addEventListener('click', function(e){
    if (header.classList.contains('mega-open') && !e.target.closest('header')){
      closeMegas();
    }
  });

  var backBtns = document.querySelectorAll('[data-menu-back]');
  for (var b = 0; b < backBtns.length; b++){
    backBtns[b].addEventListener('click', function(){ closeMegas(); });
  }

  if (burger){
    burger.addEventListener('click', function(e){
      e.stopPropagation();
      document.body.classList.toggle('menu-open');
      burger.classList.toggle('open');
      closeMegas();
    });
  }

  document.addEventListener('click', function(e){
    if (e.target.closest('.nav-links a')){
      closeMegas();
      document.body.classList.remove('menu-open');
      if (burger) burger.classList.remove('open');
    }
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
      closeMegas();
      document.body.classList.remove('menu-open');
      if (burger) burger.classList.remove('open');
    }
  });

  /* ---------- Modale de démo ---------- */
  function openModal(){ document.getElementById('modalOverlay').classList.add('open'); }
  function closeModal(){ document.getElementById('modalOverlay').classList.remove('open'); }
  document.getElementById('modalOverlay').addEventListener('click', function(e){
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeModal();
  });

  window.openModal = openModal;
  window.closeModal = closeModal;

  /* ---------- Smooth Scrolling & Navigation ---------- */
  var isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var progressTrack = document.getElementById('progressTrack');
  var backToTopBtn = document.getElementById('backToTop');
  var heroSection = document.getElementById('top');
  var missionSection = document.getElementById('mission');
  var radarEl = document.querySelector('.radar');
  var heroMedia = document.querySelector('.hero-media');
  var cyberGrid = document.querySelector('.cyber-grid');
  var cyberPhone = document.querySelector('.cyber-phone');

  // Custom high-precision smooth scroll for anchor navigation (fast & snappy)
  var activeScrollAnim = null;
  function smoothScrollTo(targetY, duration, callback) {
    if (activeScrollAnim) {
      cancelAnimationFrame(activeScrollAnim);
      activeScrollAnim = null;
    }
    if (isReducedMotion) {
      window.scrollTo(0, targetY);
      if (typeof callback === 'function') callback();
      return;
    }
    var startY = window.pageYOffset || document.documentElement.scrollTop;
    var distance = targetY - startY;
    if (Math.abs(distance) < 2) {
      window.scrollTo(0, targetY);
      if (typeof callback === 'function') callback();
      return;
    }
    var startTime = null;
    duration = duration || Math.min(320, Math.max(180, Math.abs(distance) * 0.15));

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var ease = easeOutQuart(progress);
      window.scrollTo(0, Math.round(startY + distance * ease));
      if (progress < 1) {
        activeScrollAnim = requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
        activeScrollAnim = null;
        if (typeof callback === 'function') callback();
      }
    }
    activeScrollAnim = requestAnimationFrame(step);
  }

  // Intercept internal anchor navigation for instant & smooth section jump
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href === '#') return;

    var hasModalAction = link.getAttribute('onclick') && link.getAttribute('onclick').indexOf('openModal') !== -1;

    if (href === '#top') {
      e.preventDefault();
      closeMegas();
      document.body.classList.remove('menu-open');
      if (burger) burger.classList.remove('open');
      smoothScrollTo(0, 260, function() {
        if (history.pushState) history.pushState(null, '', window.location.pathname);
      });
      return;
    }

    var targetEl = document.querySelector(href);
    if (targetEl) {
      if (!hasModalAction) {
        e.preventDefault();
        closeMegas();
        document.body.classList.remove('menu-open');
        if (burger) burger.classList.remove('open');
      }
      var navHeight = header ? header.offsetHeight : 72;
      var targetY = Math.max(0, targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight);
      smoothScrollTo(targetY, 280, function() {
        if (!hasModalAction && history.pushState) history.pushState(null, '', href);
      });
    }
  });

  // Back to top floating button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo(0, 260);
    });
  }

  /* ---------- Scroll HUD & Zoom Transition Controller ---------- */
  var ticking = false;

  function onScrollFrame() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // 1. Update Scroll Progress HUD
    if (progressTrack && docHeight > 0) {
      var progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      progressTrack.style.width = progress + '%';
    }

    // 2. Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 400) backToTopBtn.classList.add('visible');
      else backToTopBtn.classList.remove('visible');
    }

    // 3. Hero Section Parallax Zoom
    if (!isReducedMotion && heroSection) {
      var heroHeight = heroSection.offsetHeight || 700;
      if (scrollY <= heroHeight) {
        var heroRatio = Math.min(1, Math.max(0, scrollY / heroHeight));
        if (radarEl) {
          radarEl.style.transform = 'scale(' + (1 + heroRatio * 0.22) + ') translate3d(0, ' + (heroRatio * 45) + 'px, 0)';
          radarEl.style.opacity = (1 - heroRatio * 0.7);
        }
        if (heroMedia) {
          var bgImg = heroMedia.querySelector('.media-bg');
          if (bgImg) bgImg.style.transform = 'scale(' + (1 + heroRatio * 0.1) + ') translate3d(0, ' + (heroRatio * 25) + 'px, 0)';
        }
      }
    }

    // 4. Mission Section Parallax Zoom
    if (!isReducedMotion && missionSection) {
      var mRect = missionSection.getBoundingClientRect();
      if (mRect.top < window.innerHeight && mRect.bottom > 0) {
        var mProgress = (window.innerHeight - mRect.top) / (window.innerHeight + mRect.height);
        var mediaEl = missionSection.querySelector('.media-bg');
        if (mediaEl && missionSection.classList.contains('is-in-view')) {
          var scaleVal = 1 + Math.max(0, (mProgress - 0.3) * 0.08);
          mediaEl.style.transform = 'scale(' + scaleVal + ')';
        }
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(onScrollFrame);
      ticking = true;
    }
  }, { passive: true });
  onScrollFrame();

  /* ---------- Interactive 3D Phone Tilt & Zoom (Cyber Section) ---------- */
  if (!isReducedMotion && cyberGrid && cyberPhone) {
    cyberGrid.addEventListener('mousemove', function(e) {
      if (window.innerWidth <= 920) return;
      var rect = cyberPhone.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      var deltaY = (e.clientY - centerY) / (window.innerHeight / 2);
      var rotateY = deltaX * 12;
      var rotateX = -deltaY * 12;
      cyberPhone.style.transform = 'perspective(900px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) scale(1.04) translateY(-4px)';
    });

    cyberGrid.addEventListener('mouseleave', function() {
      cyberPhone.style.transform = '';
    });
  }

  /* ---------- IntersectionObserver for Section Zooms & Reveals ---------- */
  function assignStagger(selector, maxStagger) {
    var containers = document.querySelectorAll(selector);
    for (var c = 0; c < containers.length; c++) {
      var children = containers[c].children;
      for (var i = 0; i < children.length; i++) {
        var sIndex = (i % (maxStagger || 4)) + 1;
        children[i].classList.add('stagger-' + sIndex);
      }
    }
  }
  assignStagger('.product-grid', 5);
  assignStagger('.ind-grid', 3);
  assignStagger('.ind-stats', 4);
  assignStagger('.cyber-feats', 4);
  assignStagger('.lab-feats', 5);
  assignStagger('.lab-stats', 4);
  assignStagger('.hero-stats', 3);

  // Number Counter Animation Helper
  function animateValue(el, start, end, duration, prefix, suffix) {
    if (isReducedMotion) {
      el.textContent = (prefix || '') + end + (suffix || '');
      return;
    }
    var startTime = null;
    duration = duration || 1200;
    function countStep(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(start + (end - start) * ease);
      el.textContent = (prefix || '') + current.toLocaleString('fr-FR') + (suffix || '');
      if (progress < 1) {
        requestAnimationFrame(countStep);
      } else {
        el.textContent = (prefix || '') + end.toLocaleString('fr-FR') + (suffix || '');
      }
    }
    requestAnimationFrame(countStep);
  }

  var animatedCounters = new Set();
  function triggerCounters(section) {
    if (section.id === 'cyber' && !animatedCounters.has('cyber')) {
      animatedCounters.add('cyber');
      var ringSpan = section.querySelector('.cp-ring span');
      if (ringSpan) animateValue(ringSpan, 0, 95, 650);
    }
    if (section.id === 'lab' && !animatedCounters.has('lab')) {
      animatedCounters.add('lab');
      var statNums = section.querySelectorAll('.lab-stat-num');
      if (statNums[0]) animateValue(statNums[0], 0, 10000, 700, '', '+');
      if (statNums[1]) animateValue(statNums[1], 0, 250, 600, '', '+');
      if (statNums[2]) animateValue(statNums[2], 0, 12, 450, '', '');
      if (statNums[3]) animateValue(statNums[3], 0, 100, 550, '', ' %');
    }
  }

  // Section observer for zoom transitions
  var zoomSections = document.querySelectorAll('.zoom-hero, .zoom-mission, .zoom-products, .zoom-architecture, .zoom-industries, .zoom-ecosystem, .zoom-cyber, .zoom-lab, .zoom-cta');
  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function(entries) {
      for (var s = 0; s < entries.length; s++) {
        if (entries[s].isIntersecting) {
          entries[s].target.classList.add('is-in-view');
          triggerCounters(entries[s].target);
        }
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    for (var z = 0; z < zoomSections.length; z++) {
      sectionObserver.observe(zoomSections[z]);
    }

    // Element reveal observer
    var revealElements = document.querySelectorAll('.product-card, .layer, .ind-card, .ind-stat, .cyber-feat, .lab-feats li, .lab-stat, .hero-stat');
    var elementObserver = new IntersectionObserver(function(entries, observer) {
      for (var e = 0; e < entries.length; e++) {
        if (entries[e].isIntersecting) {
          entries[e].target.classList.add('is-revealed');
          observer.unobserve(entries[e].target);
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    for (var r = 0; r < revealElements.length; r++) {
      elementObserver.observe(revealElements[r]);
    }
  } else {
    for (var i = 0; i < zoomSections.length; i++) zoomSections[i].classList.add('is-in-view');
    var allItems = document.querySelectorAll('.product-card, .layer, .ind-card, .ind-stat, .cyber-feat, .lab-feats li, .lab-stat, .hero-stat');
    for (var j = 0; j < allItems.length; j++) allItems[j].classList.add('is-revealed');
  }

  applyLang();

  /* =====================================================================
     CUSTOM CURSOR
     ===================================================================== */
  if (!isReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    // Build DOM
    var curEl   = document.createElement('div'); curEl.className = 'cur';
    var curRing = document.createElement('div'); curRing.className = 'cur-ring';
    var curDot  = document.createElement('div'); curDot.className = 'cur-dot';
    var curCross= document.createElement('div'); curCross.className = 'cur-cross';
    curEl.appendChild(curRing);
    var curEl2  = document.createElement('div'); curEl2.className = 'cur';
    curEl2.appendChild(curDot);
    var curEl3  = document.createElement('div'); curEl3.className = 'cur';
    curEl3.appendChild(curCross);
    document.body.appendChild(curEl);
    document.body.appendChild(curEl2);
    document.body.appendChild(curEl3);

    var mx = -100, my = -100; // start offscreen
    var rx = -100, ry = -100; // ring (lagged)

    function moveCursor(e) { mx = e.clientX; my = e.clientY; }
    document.addEventListener('mousemove', moveCursor, { passive: true });

    var curRaf;
    function animCursor() {
      // Dot & cross: instant
      curEl2.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      curEl3.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      // Ring: lerp for smooth follow
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      curEl.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      curRaf = requestAnimationFrame(animCursor);
    }
    curRaf = requestAnimationFrame(animCursor);

    // Hover state on interactive elements
    var hoverTargets = 'a, button, [role="button"], .product-card, .ind-card, .cyber-feat, .lab-feats li, .cta-panel, .layer, input, select';
    document.addEventListener('mouseover', function(e) {
      if (e.target.closest(hoverTargets)) document.body.classList.add('cur-hover');
    }, { passive: true });
    document.addEventListener('mouseout', function(e) {
      if (e.target.closest(hoverTargets)) document.body.classList.remove('cur-hover');
    }, { passive: true });

    // Click feedback
    document.addEventListener('mousedown', function() {
      document.body.classList.add('cur-click');
    }, { passive: true });
    document.addEventListener('mouseup', function() {
      document.body.classList.remove('cur-click');
    }, { passive: true });

    // Hide when leaving window
    document.addEventListener('mouseleave', function() {
      curEl.style.opacity = '0';
      curEl2.style.opacity = '0';
      curEl3.style.opacity = '0';
    }, { passive: true });
    document.addEventListener('mouseenter', function() {
      curEl.style.opacity = '';
      curEl2.style.opacity = '';
      curEl3.style.opacity = '';
    }, { passive: true });
  }

  /* =====================================================================
     RIPPLE EFFECT ON BUTTONS & LINKS.BTN
     ===================================================================== */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn');
    if (!btn) return;
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 1.6;
    var x = e.clientX - rect.left - size / 2;
    var y = e.clientY - rect.top  - size / 2;
    var wave = document.createElement('span');
    wave.className = 'ripple-wave';
    wave.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + x + 'px;top:' + y + 'px;';
    btn.appendChild(wave);
    wave.addEventListener('animationend', function() { wave.remove(); });
  }, { passive: true });

  /* =====================================================================
     3D TILT ON PRODUCT CARDS
     ===================================================================== */
  if (!isReducedMotion) {
    var productCards = document.querySelectorAll('.product-card');
    for (var pc = 0; pc < productCards.length; pc++) {
      (function(card) {
        card.addEventListener('mousemove', function(e) {
          if (window.innerWidth <= 920) return;
          var rect = card.getBoundingClientRect();
          var cx   = rect.left + rect.width  / 2;
          var cy   = rect.top  + rect.height / 2;
          var dx   = (e.clientX - cx) / (rect.width  / 2);
          var dy   = (e.clientY - cy) / (rect.height / 2);
          var rotX = (-dy * 6).toFixed(2);
          var rotY = ( dx * 6).toFixed(2);
          card.style.transform = 'perspective(900px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-6px) scale(1.015)';
        });
        card.addEventListener('mouseleave', function() {
          card.style.transform = '';
        });
      })(productCards[pc]);
    }

    /* 3D TILT ON IND CARDS */
    var indCards = document.querySelectorAll('.ind-card');
    for (var ic = 0; ic < indCards.length; ic++) {
      (function(card) {
        card.addEventListener('mousemove', function(e) {
          if (window.innerWidth <= 920) return;
          var rect = card.getBoundingClientRect();
          var dx   = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
          var dy   = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
          card.style.transform = 'perspective(700px) rotateX(' + (-dy * 4).toFixed(2) + 'deg) rotateY(' + (dx * 4).toFixed(2) + 'deg) translateY(-5px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
          card.style.transform = '';
        });
      })(indCards[ic]);
    }
  }

  /* =====================================================================
     MAGNETIC BUTTONS (hero CTA + nav demo btn)
     ===================================================================== */
  if (!isReducedMotion) {
    var magnetBtns = document.querySelectorAll('.hero-actions .btn, .nav-actions .btn-ghost');
    for (var mb = 0; mb < magnetBtns.length; mb++) {
      (function(btn) {
        btn.addEventListener('mousemove', function(e) {
          if (window.innerWidth <= 920) return;
          var rect = btn.getBoundingClientRect();
          var dx   = (e.clientX - (rect.left + rect.width  / 2)) * 0.22;
          var dy   = (e.clientY - (rect.top  + rect.height / 2)) * 0.22;
          btn.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px) scale(1.04)';
        });
        btn.addEventListener('mouseleave', function() {
          btn.style.transform = '';
        });
      })(magnetBtns[mb]);
    }
  }

  /* =====================================================================
     ACTIVE NAV LINK on scroll (highlight current section)
     ===================================================================== */
  var navSections = ['top','mission','products','architecture','industries','ecosystem','cyber','lab','cta'];
  var navLinks2 = document.querySelectorAll('.nav-list a[href^="#"]');
  function updateActiveNav() {
    var scrollY = window.pageYOffset;
    var current = navSections[0];
    for (var ns = 0; ns < navSections.length; ns++) {
      var sec = document.getElementById(navSections[ns]);
      if (sec && sec.getBoundingClientRect().top <= 100) current = navSections[ns];
    }
    for (var nl = 0; nl < navLinks2.length; nl++) {
      var href2 = navLinks2[nl].getAttribute('href').replace('#','');
      if (href2 === current) navLinks2[nl].classList.add('active');
      else navLinks2[nl].classList.remove('active');
    }
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* =====================================================================
     INTERACTIVE PRODUCT FILTERS
     ===================================================================== */
  var filterBtns = document.querySelectorAll('.p-filter-btn');
  var prodCards = document.querySelectorAll('.product-card');

  for (var f = 0; f < filterBtns.length; f++) {
    filterBtns[f].addEventListener('click', function() {
      var filter = this.getAttribute('data-filter');
      for (var b = 0; b < filterBtns.length; b++) {
        filterBtns[b].classList.remove('active');
        filterBtns[b].setAttribute('aria-selected', 'false');
      }
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      for (var c = 0; c < prodCards.length; c++) {
        var card = prodCards[c];
        var cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('is-hidden');
          card.classList.remove('filter-anim');
          void card.offsetWidth; // reflow
          card.classList.add('filter-anim');
        } else {
          card.classList.add('is-hidden');
        }
      }
    });
  }

  /* =====================================================================
     PRODUCT QUICK-VIEW MODAL
     ===================================================================== */
  var PRODUCT_DATA = {
    fr: {
      p1: {
        tag: 'Reconnaissance & surveillance autonome',
        name: 'Drone J-ISR',
        desc: 'Détection, poursuite et éclairage de zone en continu, de jour comme de nuit, avec renvoi de la vidéo en temps réel au poste de commandement.',
        img: 'assets/media/p1-ph.svg',
        cert: 'MIL-STD-810H // IP67',
        specs: [
          'Autonomie en vol : 45 min continue',
          'Portée opérationnelle : 12 km liaison LOS',
          'Capteur optronique : Vision thermique 640x512',
          'Contre-mesures : Anti-brouillage GNSS',
          'Plafond opérationnel : 4 500 m d\'altitude',
          'Liaison chiffrée : AES-256 OFDM'
        ],
        deploy: 'Déploiement en moins de 90 secondes sans outil. Décollage et atterrissage verticaux autonomes en milieu exigu.',
        security: 'Cryptage matériel de bout en bout des flux vidéo. Absence totale de transmission de données non autorisées.'
      },
      p2: {
        tag: 'Surveillance fixe, vision de nuit',
        name: 'Caméra J-SCAM',
        desc: 'Caméras réseau robustes pour la protection des sites sensibles, des frontières et des zones urbaines, avec analyse embarquée.',
        img: 'assets/media/p2-ph.svg',
        cert: 'IK10 // IP67 // NEMA 4X',
        specs: [
          'Capteur optique : 4K Ultra-HDR 60 fps',
          'Éclairage infrarouge : Portée 150 m nocturne',
          'Traitement IA embarqué : Classification véhicules et piétons',
          'Boîtier durci : Températures extrêmes -40°C à +65°C',
          'Alimentation : PoE+ et batterie de secours tampon 48h',
          'Réseau : Fibre optique et repli 5G tactique chiffré'
        ],
        deploy: 'Installation sur mât, façade ou remorque autonome tactique. Raccordement automatique à la Console Jinim.',
        security: 'Module TPM 2.0 embarqué. Protection physique contre le sabotage et détection d\'occultation automatique.'
      },
      p3: {
        tag: 'Preuve intégrale d\'intervention',
        name: 'Bodycam J-BWC',
        desc: 'Caméras portées par les forces, les policiers et les secouristes pour documenter chaque intervention avec chiffrement de bout en bout.',
        img: 'assets/media/p3-ph.svg',
        cert: 'AES-256 // FIPS 140-3',
        specs: [
          'Autonomie continue : 12 heures d\'enregistrement',
          'Champ de vision : 140° ultra grand-angle',
          'Déclenchement groupé : Par détection d\'impact',
          'Scellement cryptographique : Hash par seconde',
          'Mémoire interne : 128 Go chiffrés matériellement',
          'Localisation : GNSS multi-fréquence'
        ],
        deploy: 'Fixation magnétique ou Molle tactique anti-arrachement. Déchargement automatique et effacement sécurisé au dock.',
        security: 'Fichiers inaltérables et inviolables. Chaîne de traçabilité juridique certifiée.'
      },
      p4: {
        tag: 'Stabiliser avant l\'arrivée du secours',
        name: 'J-CARE Soins rapides',
        desc: 'Kits, garrots, pansements hémostatiques et dispositifs de stabilisation pour prendre en charge un blessé en moins de quelques minutes.',
        img: 'assets/media/p4-ph.svg',
        cert: 'CE 0123 // ISO 13485',
        specs: [
          'Délai de pose : Garrot tactique en moins de 60 secondes',
          'Poids du pack complet : Moins de 950 grammes',
          'Conditionnement : Pochette hermétique étanche',
          'Pansements hémostatiques : Chitosane haute efficacité',
          'Compatibilité : Dotation individuelle militaire et secours',
          'Traçabilité : QR code RFID inventaire péremption'
        ],
        deploy: 'Conception ergonomique utilisable d\'une seule main sous stress intense ou obscurité totale.',
        security: 'Matériaux biocompatibles stériles certifiés normes internationales de médecine de guerre (TCCC).'
      },
      p5: {
        tag: 'Sac à dos haute technologie',
        name: 'Sac J-HighTech',
        desc: 'Sac multifonctionnel équipé pour les situations d\'urgence et de survie en milieu hostile, NBC et haute altitude.',
        img: 'assets/media/p5-ph.svg',
        cert: 'CBRN / NBC READY',
        specs: [
          'Réservoir eau potable : 2L avec raccord rapide boisson filtré',
          'Stockage oxygène d\'urgence : Bouteille composite 3kg avec masque',
          'Compartiment étanche : Pour combinaison légère de protection',
          'Console intégrée : Écran 7" tactile anti-reflet pour télémétrie survie',
          'Poches modulaires : 2 compartiments effets personnels protégés',
          'Châssis ergonomique : Répartition dynamique de charge en Cordura 1000D'
        ],
        deploy: 'Emport immédiat sur alerte. Raccordement direct aux systèmes de ventilation et monitoring vital.',
        security: 'Tissu ignifugé et imperméable aux agents toxiques chimiques et biologiques.'
      }
    },
    en: {
      p1: {
        tag: 'Autonomous reconnaissance & surveillance',
        name: 'J-ISR Drone',
        desc: 'Continuous detection, tracking and area illumination day and night, streaming live video back to the command post.',
        img: 'assets/media/p1-ph.svg',
        cert: 'MIL-STD-810H // IP67',
        specs: [
          'Flight endurance: 45 min continuous',
          'Operational range: 12 km LOS datalink',
          'Optronic sensor: 640x512 thermal imaging',
          'Countermeasures: Anti-jamming GNSS',
          'Operational ceiling: 4,500 m altitude',
          'Encrypted link: AES-256 OFDM'
        ],
        deploy: 'Toolless deployment in under 90 seconds. Autonomous VTOL in confined zones.',
        security: 'Hardware end-to-end encryption for video feeds. Zero unauthorized telemetry transmission.'
      },
      p2: {
        tag: 'Fixed surveillance, night vision',
        name: 'J-SCAM Camera',
        desc: 'Rugged network cameras for critical sites, borders and urban areas, with onboard analytics.',
        img: 'assets/media/p2-ph.svg',
        cert: 'IK10 // IP67 // NEMA 4X',
        specs: [
          'Optical sensor: 4K Ultra-HDR 60 fps',
          'Infrared illuminator: 150 m night range',
          'Onboard AI: Vehicle and pedestrian classification',
          'Hardened casing: -40°C to +65°C extremes',
          'Power: PoE+ and 48h emergency battery buffer',
          'Network: Fiber optics & fallback tactical 5G'
        ],
        deploy: 'Mounting on mast, wall or tactical mobile trailer. Automatic pairing with Jinim Console.',
        security: 'Built-in TPM 2.0 module. Anti-tamper physical housing and anti-masking detection.'
      },
      p3: {
        tag: 'Full intervention evidence',
        name: 'J-BWC Body Camera',
        desc: 'Body-worn cameras for forces, police and paramedics documenting interventions with end-to-end encryption.',
        img: 'assets/media/p3-ph.svg',
        cert: 'AES-256 // FIPS 140-3',
        specs: [
          'Continuous recording: 12 hours battery',
          'Field of view: 140° ultra wide-angle',
          'Group trigger: Triggered by impact or holster draw',
          'Cryptographic sealing: Second-by-second hash',
          'Secure storage: 128 GB hardware encrypted',
          'Location: Multi-frequency GNSS'
        ],
        deploy: 'Magnetic mount or tactical Molle anti-snatch clip. Automatic dock offload & secure wipe.',
        security: 'Tamper-proof file system. Legally compliant evidentiary chain of custody.'
      },
      p4: {
        tag: 'Stabilize before care arrives',
        name: 'J-CARE Rapid Care',
        desc: 'Kits, tourniquets, hemostatic dressings and stabilization devices to treat casualties within minutes.',
        img: 'assets/media/p4-ph.svg',
        cert: 'CE 0123 // ISO 13485',
        specs: [
          'Application time: Tactical tourniquet < 60 seconds',
          'Kit weight: Under 950 grams',
          'Packaging: Hermetic blood- and water-proof pouch',
          'Hemostatic gauze: High-efficiency chitosan',
          'Compatibility: Standard military & rescue issue',
          'Traceability: RFID QR code for expiration tracking'
        ],
        deploy: 'One-handed ergonomic design under extreme stress or total darkness.',
        security: 'Biocompatible sterile materials certified to international TCCC military standards.'
      },
      p5: {
        tag: 'High-tech backpack',
        name: 'J-HighTech Pack',
        desc: 'Multi-functional backpack equipped for emergency and survival in hostile environments, CBRN and high altitude.',
        img: 'assets/media/p5-ph.svg',
        cert: 'CBRN / NBC READY',
        specs: [
          'Drinking water reservoir: 2L with inline filter drink tube',
          'Emergency oxygen: 3kg composite tank with mask',
          'Waterproof compartment: For lightweight hazmat suit',
          'Integrated console: 7" anti-glare touchscreen for vital telemetry',
          'Modular pockets: 2 protected personal gear compartments',
          'Ergonomic frame: 1000D Cordura dynamic weight distribution'
        ],
        deploy: 'Immediate quick-grab on alert. Direct hookup to breathing and vital telemetry systems.',
        security: 'Flame-retardant fabric impervious to toxic chemical and biological agents.'
      }
    }
  };

  var pmOverlay = document.getElementById('productModalOverlay');
  var pmClose = document.getElementById('productModalClose');
  var pmBtnCancel = document.getElementById('pmBtnCancel');
  var pmCtaDemo = document.getElementById('pmCtaDemo');
  var activeProductKey = 'p1';

  function openProductModal(pid) {
    var curLang = lang || 'fr';
    var dict = PRODUCT_DATA[curLang] || PRODUCT_DATA.fr;
    var data = dict[pid];
    if (!data || !pmOverlay) return;
    activeProductKey = pid;

    document.getElementById('pmTag').textContent = data.tag;
    document.getElementById('pmTitle').textContent = data.name;
    document.getElementById('pmDesc').textContent = data.desc;
    document.getElementById('pmImage').src = data.img;
    document.getElementById('pmHudCert').textContent = data.cert;

    var specsList = document.getElementById('pmSpecsList');
    specsList.innerHTML = '';
    for (var s = 0; s < data.specs.length; s++) {
      var li = document.createElement('li');
      li.textContent = data.specs[s];
      specsList.appendChild(li);
    }
    document.getElementById('pmDeployTxt').textContent = data.deploy;
    document.getElementById('pmSecurityTxt').textContent = data.security;

    // Reset tabs
    var pmTabs = pmOverlay.querySelectorAll('.pm-tab');
    for (var t = 0; t < pmTabs.length; t++) pmTabs[t].classList.remove('active');
    if (pmTabs[0]) pmTabs[0].classList.add('active');
    document.getElementById('pmPaneSpecs').style.display = 'block';
    document.getElementById('pmPaneDeployment').style.display = 'none';
    document.getElementById('pmPaneSecurity').style.display = 'none';

    pmOverlay.classList.add('open');
    pmOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeProductModal() {
    if (!pmOverlay) return;
    pmOverlay.classList.remove('open');
    pmOverlay.setAttribute('aria-hidden', 'true');
  }

  if (pmClose) pmClose.addEventListener('click', closeProductModal);
  if (pmBtnCancel) pmBtnCancel.addEventListener('click', closeProductModal);
  if (pmOverlay) {
    pmOverlay.addEventListener('click', function(e) {
      if (e.target === this) closeProductModal();
    });
  }

  // Hook product detail triggers
  var detailTriggers = document.querySelectorAll('.p-detail-trigger');
  for (var dt = 0; dt < detailTriggers.length; dt++) {
    detailTriggers[dt].addEventListener('click', function(e) {
      e.preventDefault();
      var pid = this.getAttribute('data-product-id');
      openProductModal(pid);
    });
  }

  // Switch tabs in product modal
  var pmTabsList = document.querySelectorAll('.pm-tab');
  for (var pt = 0; pt < pmTabsList.length; pt++) {
    pmTabsList[pt].addEventListener('click', function() {
      for (var p = 0; p < pmTabsList.length; p++) pmTabsList[p].classList.remove('active');
      this.classList.add('active');
      var ptab = this.getAttribute('data-ptab');
      document.getElementById('pmPaneSpecs').style.display = (ptab === 'specs') ? 'block' : 'none';
      document.getElementById('pmPaneDeployment').style.display = (ptab === 'deployment') ? 'block' : 'none';
      document.getElementById('pmPaneSecurity').style.display = (ptab === 'security') ? 'block' : 'none';
    });
  }

  // CTA demo from product modal pre-selects select option in demo modal
  if (pmCtaDemo) {
    pmCtaDemo.addEventListener('click', function() {
      closeProductModal();
      var usecaseSelect = document.getElementById('usecase');
      if (usecaseSelect) {
        if (activeProductKey === 'p1') usecaseSelect.selectedIndex = 0;
        else if (activeProductKey === 'p2' || activeProductKey === 'p3') usecaseSelect.selectedIndex = 1;
        else usecaseSelect.selectedIndex = 2;
      }
      openModal();
    });
  }

  /* =====================================================================
     INTERACTIVE ARCHITECTURE ACCORDION
     ===================================================================== */
  var layerAccordions = document.querySelectorAll('.layer-accordion');
  for (var la = 0; la < layerAccordions.length; la++) {
    layerAccordions[la].addEventListener('click', function() {
      var isOpen = this.classList.contains('open');
      for (var l = 0; l < layerAccordions.length; l++) {
        layerAccordions[l].classList.remove('open');
        layerAccordions[l].setAttribute('aria-expanded', 'false');
      }
      if (!isOpen) {
        this.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
    // Keyboard accessibility
    layerAccordions[la].addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }

  /* =====================================================================
     INTERACTIVE JCYBER PHONE
     ===================================================================== */
  var cpScanBtn = document.getElementById('cpScanBtn');
  var cpScanTxt = document.getElementById('cpScanTxt');
  var cpScoreVal = document.getElementById('cpScoreVal');
  var cpFeed = document.getElementById('cpFeed');
  var cpChips = document.querySelectorAll('.cp-chip');
  var cpNavDots = document.querySelectorAll('.cp-nav-dot');

  // 1. Scan button
  if (cpScanBtn) {
    cpScanBtn.addEventListener('click', function() {
      if (cpScanBtn.disabled) return;
      cpScanBtn.disabled = true;
      var origText = cpScanTxt.textContent;
      cpScanTxt.textContent = (lang === 'fr') ? 'Scan de zone en cours...' : 'Scanning area...';
      cpScanBtn.style.opacity = '0.7';

      setTimeout(function() {
        if (cpScoreVal) cpScoreVal.textContent = '99';
        if (cpFeed) {
          var newItem = document.createElement('div');
          newItem.className = 'cp-feed-item';
          newItem.innerHTML = '<span class="dot"></span><span>' + ((lang === 'fr') ? 'Scan terminé — 0 anomalie' : 'Scan complete — 0 threats') + '</span>';
          cpFeed.insertBefore(newItem, cpFeed.firstChild);
        }
        cpScanTxt.textContent = (lang === 'fr') ? '✔ Périmètre sécurisé' : '✔ Perimeter secured';
        cpScanBtn.style.background = 'rgba(127,213,155,0.25)';

        setTimeout(function() {
          cpScanTxt.textContent = origText;
          cpScanBtn.disabled = false;
          cpScanBtn.style.opacity = '';
          cpScanBtn.style.background = '';
        }, 3000);
      }, 1200);
    });
  }

  // 2. Clickable chips
  for (var ch = 0; ch < cpChips.length; ch++) {
    cpChips[ch].addEventListener('click', function() {
      var isNowOn = !this.classList.contains('on');
      this.classList.toggle('on');
      this.setAttribute('aria-pressed', isNowOn ? 'true' : 'false');
      var chipType = this.getAttribute('data-chip');

      if (chipType === 'vpn') {
        if (cpScoreVal) cpScoreVal.textContent = isNowOn ? '95' : '74';
      } else if (chipType === 'scram') {
        document.body.classList.toggle('scram-mode', isNowOn);
      }
    });
  }

  // 3. Phone navigation tabs
  for (var nd = 0; nd < cpNavDots.length; nd++) {
    cpNavDots[nd].addEventListener('click', function() {
      for (var d = 0; d < cpNavDots.length; d++) cpNavDots[d].classList.remove('active');
      this.classList.add('active');
      var tab = this.getAttribute('data-tab');

      var dashEl = document.getElementById('cpScreenDash');
      var radarEl2 = document.getElementById('cpScreenRadar');
      var cryptEl = document.getElementById('cpScreenCrypt');

      if (dashEl) dashEl.style.display = (tab === 'dash') ? 'block' : 'none';
      if (radarEl2) radarEl2.style.display = (tab === 'radar') ? 'block' : 'none';
      if (cryptEl) cryptEl.style.display = (tab === 'crypt') ? 'block' : 'none';
    });
  }

  /* =====================================================================
     INTERACTIVE JINIM LAB SIMULATOR
     ===================================================================== */
  var labRows = document.querySelectorAll('.lab-row');
  var lscTxt = document.getElementById('lscTxt');
  var lscStat = document.getElementById('lscStat');
  var labRunBtn = document.getElementById('labRunBtn');
  var labRunTxt = document.getElementById('labRunTxt');

  var courseTitles = {
    1: 'Cyberdéfense — niveau 1',
    2: 'Pilotage drone ISR',
    3: 'Électronique & drones',
    4: 'Secourisme tactique'
  };

  for (var lr = 0; lr < labRows.length; lr++) {
    labRows[lr].addEventListener('click', function() {
      for (var r = 0; r < labRows.length; r++) labRows[r].classList.remove('active');
      this.classList.add('active');
      var cId = this.getAttribute('data-course');
      if (lscTxt) lscTxt.textContent = 'Module actif : ' + (courseTitles[cId] || 'Formation');
      if (lscStat) lscStat.textContent = '[SYNCHRONISÉ] Simulateur prêt · Cliquez pour lancer l\'exercice';
    });
  }

  if (labRunBtn) {
    labRunBtn.addEventListener('click', function() {
      if (labRunBtn.disabled) return;
      labRunBtn.disabled = true;
      var activeRow = document.querySelector('.lab-row.active') || labRows[0];
      if (labRunTxt) labRunTxt.textContent = 'Simulation en cours...';

      if (lscStat) lscStat.textContent = '[EXÉCUTION] Évaluation des compétences en temps réel...';

      setTimeout(function() {
        if (activeRow) {
          var progEl = activeRow.querySelector('.lab-prog');
          var valEl = activeRow.querySelector('.lab-val');
          var currentVal = parseInt(valEl.textContent) || 50;
          var newVal = Math.min(100, currentVal + 5);
          if (progEl) progEl.style.setProperty('--p', newVal + '%');
          if (valEl) valEl.textContent = newVal + ' %';
        }
        if (lscStat) lscStat.textContent = '✔ [SUCCÈS] Exercice validé avec mention ! +5% acquis';
        if (labRunTxt) labRunTxt.textContent = '✔ Exercice validé';

        setTimeout(function() {
          labRunBtn.disabled = false;
          if (labRunTxt) labRunTxt.textContent = (lang === 'fr') ? '▶ Lancer l\'exercice' : '▶ Run exercise';
        }, 2500);
      }, 1000);
    });
  }

  /* =====================================================================
     INTERACTIVE ECO-TAGS
     ===================================================================== */
  var ecoTags = document.querySelectorAll('.eco-tag');
  for (var et = 0; et < ecoTags.length; et++) {
    ecoTags[et].addEventListener('click', function() {
      this.classList.toggle('on');
    });
  }

})();