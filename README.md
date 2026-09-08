# Jinim

Site vitrine de Jinim — système d'exploitation souverain pour l'IA appliquée.

## Structure du projet

```
.
├── index.html          Page principale
├── css/
│   └── style.css       Styles (thème noir / blanc / gris)
├── js/
│   └── main.js         Interactions (modale de demande de démo)
└── assets/
    ├── jinim-logo.svg  Logo principal (blanc)
    └── favicon.svg     Icône du site
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
