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
      'modal.cancel': 'Annuler'
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
      'modal.cancel': 'Cancel'
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

  applyLang();
})();