# Jinim

Site vitrine de **Jinim** — voir, protéger, soigner.

Jinim conçoit les équipements d'urgence qui équipent les armées, les forces de sécurité et les secours : drones de reconnaissance et de surveillance, caméras fixes et corporelles, équipements médicaux de soins rapides — ainsi que les logiciels **JCyber** (cybersécurité mobile) et **Jinim Lab** (formation gratuite aux métiers techniques).

## Structure du projet

```
.
├── index.html           Page principale (bilingue FR/EN)
├── css/
│   └── style.css        Thème noir / blanc / accent
├── js/
│   └── main.js          i18n FR/EN, navigation, modale de démo
└── assets/
    ├── jinim-logo.svg   Logo principal (blanc)
    ├── favicon.svg      Icône du site
    └── media/           Placeholders SVG et médias réels (photos/vidéos)
```

## Développement local

Aucune dépendance, aucun build : ouvrez simplement `index.html` dans un navigateur,
ou servez le dossier avec un petit serveur statique, par exemple :

```bash
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000`.

## Déploiement

Le site est 100% statique (HTML/CSS/JS) et peut être déployé tel quel sur
GitHub Pages, ou tout hébergeur statique.