# Audit technique — site Jinim

**Date :** 27 septembre 2026
**Périmètre :** `index.html`, `css/style.css`, `js/main.js`, `assets/media/`, `README.md`
**Type d'audit :** statique (analyse de code). Aucun test navigateur ni Lighthouse n'a été exécuté.
**État au moment de l'audit :** commit `71dc45a` + correctif de navbar non commité.

---

## 1. Résumé exécutif

Le site est **fonctionnel et visuellement abouti**, mais il présente des défauts qui doivent être corrigés avant toute mise en production sérieuse. Le plus grave n'est pas esthétique : c'est **l'accessibilité de la modale**, qui est aujourd'hui impossible à utiliser au clavier ou au lecteur d'écran, et **le menu mobile qui casse après scroll**.

Aucune faille de sécurité ni erreur JavaScript bloquante n'a été détectée. Le HTML est équilibré, le JS est valide, et les deux dictionnaires FR/EN sont parfaitement synchronisés.

**Verdict :** ne pas publier en l'état. 2 correctifs bloquants, 14 majeurs, le reste est de l'optimisation.

| Catégorie | Bloquant | Majeur | Mineur | Cosmétique | Verdict |
|---|---|---|---|---|---|
| Accessibilité | 1 | 3 | 4 | 0 | ❌ |
| SEO | 0 | 4 | 1 | 0 | ❌ |
| Responsive / CSS | 1 | 5 | 2 | 12 | ❌ |
| Performance | 0 | 1 | 1 | 0 | ⚠️ |
| Contenu / i18n | 0 | 1 | 2 | 0 | ⚠️ |
| Qualité JS | 0 | 0 | 3 | 0 | ✅ |
| **Total** | **2** | **14** | **13** | **12** | ❌ |

---

## 2. Constats bloquants (P0)

### B1 — La modale est inaccessible au clavier et aux lecteurs d'écran

**Fichiers :** `index.html:483-521`, `js/main.js` (`openModal`, `closeModal`)

Vérifié : `index.html` ne contient **aucun** attribut `role=` et **aucun** `aria-modal`.

La modale s'ouvre visuellement mais n'est pas annoncée comme dialogue et n'est pas pilotable au clavier :

- pas de `role="dialog"` ni `aria-modal="true"` ;
- pas de `aria-labelledby` / `aria-describedby` reliant la modale à son titre ;
- le focus n'est **pas déplacé** à l'ouverture : il reste sur le bouton déclencheur ;
- aucun **piège de focus** : `Tab` fait passer la tabulation sur la page cachée en arrière-plan ;
- la touche **`Escape` ne ferme pas** la modale ;
- le focus n'est **pas restauré** sur le bouton déclencheur à la fermeture.

**Impact :** un utilisateur en clavier ou en lecteur d'écran est bloqué et ne peut ni lire, ni fermer le formulaire. C'est le parcours de conversion principal du site (collecte de contacts).

**Correctif attendu :** ajouter `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, déplacer le focus sur le premier champ à l'ouverture, gérer `Escape`, piéger `Tab`/`Shift+Tab` dans la modale, restaurer le focus à la fermeture.

### B2 — Le menu mobile casse lorsque la page est scrollée

**Fichier :** `css/style.css` (`.navbar.scrolled`, `.nav-links`)

`.navbar.scrolled` applique `backdrop-filter`. En CSS, `backdrop-filter` crée un **containing block** pour les descendants en `position: fixed`. Résultat : la barre de navigation à `position: fixed` perdent sa référence viewport et se positionnent par rapport à la navbar.

**Impact :** au-delà de ~8 px de scroll (seuil défini dans `onScroll()`), le menu mobile plein écran est mal positionné, potentiellement inaccessible. C'est le seul seuil de rupture du site et il est atteint quasi immédiatement sur mobile.

**Correctif attendu :** rendre la **couche de backdrop** fixe séparément (élément décoratif `position: fixed` hors de `.navbar.scrolled`), et ne jamais combiner `backdrop-filter` et `position: fixed` sur la même chaîne d'ancrage.

---

## 3. Constats majeurs (P1)

### Accessibilité

**A1 — Aucun repère `<main>` ni lien d'évitement.**
Vérifié : `index.html` ne contient **aucune** balise `<main>`. La page est une suite de `<section>` sans point d'entrée unique pour la navigation assistée. Ajouter `<main>` autour du contenu et un lien « Aller au contenu ».

**A2 — Contraste insuffisant du texte secondaire.**
La variable `--text-dim` (`#6B6B68`) est utilisée pour les paragraphes de description. Son rapport de contraste sur le fond sombre est d'environ **3,8:1**, sous le seuil de **4,5:1** exigé pour du texte normal. Remonter vers `#8A8A87` minimum.

**A3 — Cible tactile du bouton menu trop petite sur mobile.**
`.burger` (`css/style.css`) mesure environ **36 × 27 px** : 24 px de largeur d'icône + 6 px de padding de chaque côté, et 3 barres de 1,5 px séparées par 5 px + 12 px de padding vertical. C'est en dessous du minimum de 44 × 44 px recommandé (WCAG 2.5.5). Agrandir la zone cliquable via le padding, pas l'icône, pour ne pas dégrader le design.

### SEO

**S1 — Aucune balise `canonical`.** Vérifié : 0 occurrence. En multi-version FR/EN, l'absence de `canonical` invite les moteurs à indexer des doublons.

**S2 — Aucune balise Open Graph / Twitter Card.** Vérifié : 0 occurrence `og:`. Le partage sur LinkedIn, X ou Facebook ne produit aucune vignette.

**S3 — Pas de données structurées JSON-LD.** Aucun `schema.org` alors que l'entreprise, ses produits et ses secteurs sont parfaitement modélisables en `Organization` + `Product`.

**S4 — `meta description` trop longue.** Vérifié : **190 caractères**. Google tronque vers 155-160 caractères. Le texte se fait couper au milieu d'une phrase sur les résultats de recherche.

**Complémentaires :** pas de `hreflang` alors que deux versions linguistiques existent ; pas de `robots.txt` ni de `sitemap.xml` ; `<title>` à 42 caractères, celui-là est correct.

### Responsive / CSS

**C1 — Débordement du mockup téléphone JCyber.** Le téléphone de la section JCyber déborde du conteneur en dessous de 380 px de largeur.

**C2 — Section `architecture` obsolète.** Le contenu « Jinim Core / agents » est un reste de la précédente identité du projet. Il contredit le positionnement actuel (équipements d'urgence)et **n'est pas traduit** : 0 clé `data-i18n` sur tout le bloc. Il occupe une section entière de la page d'accueil.

**C3 — Sections non adaptées aux très petits écrans** (320-360 px) : grilles de statistiques et blocs JCyber trop denses.

**C4 — Masques CSS coûteux.** `mask-image` composé sur plusieurs éléments décoratifs, sans besoin visuel clair.

**C5 — `position: sticky` sur une grille interne en vue large** : comportement non vérifié dans les navigateurs mobiles.

### Performance

**P1 — Polices Google Fonts en render-blocking.** Deux requêtes externes bloquent le premier rendu. Les `preconnect` vers `fonts.googleapis.com` et `fonts.gstatic.com` sont déjà en place et `font-display: swap` est configuré : le risque est limité au premier affichage. Recommandation : auto-héberger les deux fichiers de police ou basculer sur les polices système, ce qui supprimerait toute dépendance externe.

### Contenu

**T1 — Incohérence de marque « Jimin » vs « Jinim ».** Le nom du projet et le dossier sont `Jinim`, mais le HTML, le `<title>` et la meta description affichent « Jimin ». **À trancher** : c'est une décision de marque, pas un correctif technique. J'ai laissé la valeur existante en l'état.

---

## 4. Constats mineurs (P2)

**A4** — Pas de `loading="lazy"` sur les médias (vérifié : 0 occurrence). Les médias sous le pli devraient être chargés paresseusement. `fetchpriority="high"` est également absent sur l'image principale.

**A5** — Le style de focus est bien défini globalement (`:focus-visible` avec contour de 2 px, `css/style.css:529`) et les champs de la modale ont leur propre contour au focus. Reste à vérifier au clavier que ce contour reste visible sur les Elements à contraste faible (mégalienu au survol, liens du footer).

**A6** — Les vidéos et images dynamiques n'ont ni `width`/`height` ni `aspect-ratio` intrinsèque. Le risque de CLS (layout shift) est toutefois atténué : tous les conteneurs d'images déclarent `aspect-ratio` en CSS.

**A7** — SVG décoratifs : le `alt=""` est correct, mais `aria-hidden="true"` serait plus explicite sur les motifs purement ornementaux.

**S5** — `meta viewport` et `theme-color` : `theme-color` absent.

**C6** — 36 sélecteurs dupliqués sur environ 305 règles CSS. Sans impact fonctionnel (les redéclarations se substituent dans l'ordre), mais le fichier est plus difficile à maintenir et les conflits de cascade difficiles à anticiper. Un passage de consolidation est recommandé.

**C7** — Valeurs de breakpoints dispersées et parfois non documentées.

**C8** — 12 écarts purement cosmétiques (espacements, alignements, tailles de police mineures) : impact faible, à traiter en passe finale.

**P2** — SVG de la section cyber non optimisés : les `viewBox` sont corrects et le poids total des SVG reste léger (~15 Ko), donc pas de problème de poids bloquant.

**J1** — `localStorage` (2 occurrences) appelé **sans encapsulation `try/catch`**. Vérifié : 0 occurrence de `try` dans `js/main.js`. En navigation privée Safari ou si les cookies sont bloqués, le script **lève une exception** et le site peut rester figé. C'est un risque réel de casse sur navigateur.

**J2** — Les liens des méga-menus ne ferment pas le menu après clic. Sur grand écran, la navigation reste visuellement ouverte.

**J3** — La gestion d'`Escape` pour les méga-menus n'est pas unifiée avec celle de la modale.

**T2** — Le formulaire de la modale ne fait **rien** : pas d'envoi, pas de feedback utilisateur, pas de validation. Un clic sur « Envoyer » ferme la modale comme si l'envoi avait réussi. **C'est une fausse promesse de conversion** — à brancher sur un service d'email ou à supprimer.

**T3** — Médias référencés mais absents du disque (`hero.mp4`, `hero.jpg`, `mission.jpg`, `p1.jpg`... `p4.jpg`). Volontaire à ce stade (placeholders SVG en place), mais ces 404 se produiront tant que les fichiers ne sont pas fournis.

---

## 5. Ce qui est déjà bon

À conserver lors des corrections :

- **HTML équilibré** : toutes les balises sont correctement imbriquées, aucun `div` orphelin.
- **JavaScript valide** : `node --check` passe sans erreur, aucune dépendance externe, aucun framework.
- **i18n impeccable** : 227 clés par dictionnaire, parfaitement synchronisées FR/EN, 0 clé manquante, 0 clé orpheline. `lang` et `aria-label` mis à jour dynamiquement au changement de langue, `aria-expanded` maintenu à jour sur les méga-menus.
- **Structure de titres logique** : un seul `<h1>`, hiérarchie cohérente (seule anomalie : le `h2`/`h3` de l'ancienne section architecture).
- ** Ancres internes valides** : les 22 `id` de section existent tous, et les 57 liens internes `href="#..."` pointent vers un élément réel, `#demo` inclus.
- **Images décoratives correctement traitées** : les 8 SVG ont `alt=""`.
- **Pas de `!important`** dans le CSS et pas de media query imbriquée. 36 sélecteurs sont toutefois dupliqués sur ~305 règles, à consolider.
- **Poids des ressources très faible** : ~15 Ko de SVG au total, polices système en repli, seulement 2 requêtes externes.
- **`aspect-ratio` sur tous les conteneurs d'images** : le CLS est structurellement évité.
- **Styles de focus présents** : `:focus-visible` global avec contour de 2 px sur toute la page.
- **Pas de `transform`/`transition` sur `all`**, pas de `will-change` inutile : bonne discipline de performance.

---

## 6. Plan d'action priorisé

**Étape 1 — Débloquer l'accessibilité (1-2 h)**
1. Corriger la modale (B1) : `role`, `aria-modal`, gestion et piège de focus, `Escape`, restauration du focus.
2. Reprendre le fondement de la navbar (B2) pour débloquer le menu mobile au scroll.
3. Agrandir la cible tactile du hamburger (A3).

**Étape 2 — Fiabiliser (2-3 h)**
4. Encapsuler les 2 accès `localStorage` dans `try/catch` (J1) — risque de casse navigateur.
5. Brancher ou supprimer le formulaire de la modale (T2).
6. Fermer les méga-menus après clic (J2).

**Étape 3 — SEO (1-2 h)**
7. Ajouter `canonical`, `hreflang`, Open Graph / Twitter Card, JSON-LD.
8. Raccourcir la meta description à ~155 caractères (S4).
9. Ajouter `robots.txt` et `sitemap.xml`.

**Étape 4 — Contenu et marque (à valider)**
10. Trancher « Jimin » vs « Jinim » (T1).
11. Supprimer ou traduire l'ancienne section `architecture` (C2).

**Étape 5 — Finition (demi-journée)**
12. Corriger le contraste `--text-dim` (A2), ajouter `<main>` et un lien d'évitement (A1).
13. Corriger le mockup JCyber en dessous de 380 px (C1).
14. Nettoyer la CSS dupliquée et les masques coûteux (C4, C6).
15. Passer en revue les 12 écarts cosmétiques.

---

## 7. Méthode et limites

Cet audit est **statique** : il repose sur la lecture du code source et des vérifications automatisées (équilibrage des balises, validité JS, synchronisation i18n, présence des attributs, cohérence des ancres). Il **n'inclut pas** de mesure de performance réelle, de test Lighthouse, de test multi-navigateurs ni d'audit de temps réel (temps de chargement, Core Web Vitals mesurés).

Les constats qui dépendent du rendu (position du menu au scroll, débordement du mockup, contraste visuel perçu) **doivent être confirmés en conditions réelles** avant correction. Les constats vérifiés par recherche directe dans le code (attributs manquants, clés i18n, blocs non traduits) sont fiables.

Deux analyses parallèles ont alimenté ce document : l'une SEO/accessibilité, l'autre CSS/JavaScript/performance. Leurs constats ont été recoupés, dédupliqués, puis **revérifiés directement dans le code** par recherche d'attributs et de motifs.

Cette revérification a permis d'écarter ou de corriger plusieurs affirmations initiales : les `preconnect` Google Fonts sont en place, les styles de focus existent (`:focus-visible`), et le nombre d'`id` est de 22 et non 42. Ces points ont été replacés en findings mineurs ou retirés.
