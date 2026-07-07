# Manifest — Plan d'apprentissage Angular

**Objectif** : revoir Angular de fond en comble pour être prêt(e) pour un poste ou une mission professionnelle.

## Comment utiliser ce document

- Avance phase par phase, dans l'ordre — chaque phase s'appuie sur la précédente.
- Chaque phase a un critère **"Done when"** : ne passe à la suivante que si tu peux le valider sans notes.
- Coche les cases `[ ]` au fur et à mesure (remplace par `[x]`).
- Prérequis : bases JS/TS déjà acquises — ce plan se concentre exclusivement sur Angular.

---

## Phase 1 — Fondations Angular

**Sujets**
- [ ] Architecture d'un projet Angular CLI (`ng new`, structure de dossiers)
- [ ] Composants : `@Component`, template, styles, sélecteur
- [ ] Standalone components vs NgModules (approche moderne recommandée)
- [ ] Cycle de vie d'un composant (`ngOnInit`, `ngOnDestroy`, `ngOnChanges`, etc.)
- [ ] Convention de structuration d'un projet (feature-based, core/shared)

**Done when** : tu peux générer un projet propre, expliquer le rôle de chaque fichier généré, et justifier standalone vs NgModule.

---

## Phase 2 — Templates, binding & directives

**Sujets**
- [ ] Interpolation `{{ }}`
- [ ] Property binding `[prop]`, event binding `(event)`, two-way binding `[(ngModel)]`
- [ ] Directives structurelles classiques : `*ngIf`, `*ngFor`, `*ngSwitch`
- [ ] Nouvelle syntaxe control-flow : `@if`, `@for`, `@switch`
- [ ] Directives custom (attribut / structurelle)
- [ ] Pipes intégrés et pipes custom

**Done when** : tu peux construire une UI dynamique complète sans copier-coller depuis un tuto.

---

## Phase 3 — Services & injection de dépendances

**Sujets**
- [ ] `@Injectable`, création et usage d'un service
- [ ] Hiérarchie des injecteurs (root, module, composant)
- [ ] `providedIn: 'root'` vs fourniture au niveau composant
- [ ] `inject()` function API (alternative au constructeur)

**Done when** : tu peux expliquer la portée (scope) d'un service selon l'endroit où il est fourni.

---

## Phase 4 — Routing & navigation

**Sujets**
- [ ] `RouterModule` / configuration des routes
- [ ] Routes enfants, paramètres de route, query params
- [ ] Guards (`CanActivate`, `CanDeactivate`, `CanMatch`)
- [ ] Lazy loading des routes
- [ ] Resolvers

**Done when** : tu peux construire une app multi-pages avec sections protégées et chargement différé.

---

## Phase 5 — Formulaires

**Sujets**
- [ ] Template-driven forms
- [ ] Reactive Forms : `FormGroup`, `FormControl`, `FormArray`
- [ ] Validators intégrés et validators custom (sync/async)
- [ ] Gestion des erreurs et UX de validation

**Done when** : tu peux construire un formulaire complexe avec validation asynchrone et bon feedback utilisateur.

---

## Phase 6 — Communication HTTP & API

**Sujets**
- [ ] `HttpClient` : GET/POST/PUT/DELETE, typage des réponses
- [ ] Intercepteurs (auth, gestion d'erreurs, logging)
- [ ] Gestion centralisée des erreurs HTTP
- [ ] Bonnes pratiques de typage des modèles API

**Done when** : tu peux brancher une app sur une API REST avec une gestion d'erreurs propre et centralisée.

---

## Phase 7 — RxJS & programmation réactive

**Sujets**
- [ ] Observables vs Promises
- [ ] Opérateurs clés : `map`, `switchMap`, `mergeMap`, `debounceTime`, `combineLatest`, `catchError`
- [ ] Gestion des souscriptions et désabonnements (éviter les fuites mémoire)
- [ ] `async` pipe dans les templates

**Done when** : tu sais choisir le bon opérateur selon le cas d'usage et éviter les fuites mémoire.

---

## Phase 8 — Gestion d'état (state management)

**Sujets**
- [ ] Signals (API moderne Angular) : `signal`, `computed`, `effect`
- [ ] Quand utiliser les signals vs RxJS
- [ ] Notions de state management avancé (NgRx ou équivalent) et quand ça devient nécessaire

**Done when** : tu peux justifier le choix entre signals seuls et une librairie de state management selon la taille du projet.

---

## Phase 9 — Tests

**Sujets**
- [ ] Jasmine/Karma (ou Jest) : mise en place et fonctionnement
- [ ] `TestBed`, tests unitaires de composants, services, pipes
- [ ] Mocking de dépendances (services, HTTP)
- [ ] Tests d'intégration légers

**Done when** : tu peux écrire des tests qui couvrent la logique métier d'un composant, pas juste son rendu.

---

## Phase 10 — Performance & bonnes pratiques

**Sujets**
- [ ] Change Detection et stratégie `OnPush`
- [ ] Lazy loading, tree-shaking, analyse de bundle
- [ ] Accessibilité (a11y) de base
- [ ] Standalone components comme architecture par défaut

**Done when** : tu peux auditer et optimiser une app Angular existante.

---

## Phase 11 — Écosystème & outillage pro

**Sujets**
- [ ] Angular Material ou librairie de composants UI
- [ ] Nx ou monorepo (notions de base)
- [ ] CI/CD basique (lint, build, tests automatisés)
- [ ] ESLint / Prettier
- [ ] Déploiement (Vercel, Netlify, Docker...)

**Done when** : tu peux configurer un pipeline simple, de la CLI jusqu'au déploiement.

---

## Phase 12 — Projet fil rouge

- [ ] Choisir un projet complet mobilisant toutes les phases précédentes (ex : app de gestion de tâches, mini e-commerce, dashboard avec API)
- [ ] Router, formulaires, appels API, gestion d'état, tests, déploiement
- [ ] Publier le projet sur GitHub / portfolio

**Done when** : le projet est déployé, testé, et présentable en entretien.

---

## Phase 13 — Préparation entretien / mission pro

**À savoir expliquer à l'oral**
- [ ] Change Detection et `OnPush` : pourquoi et comment
- [ ] Différence standalone components vs NgModules
- [ ] Cycle de vie d'un composant et cas d'usage de chaque hook
- [ ] RxJS : gestion des souscriptions, opérateurs courants
- [ ] Différence Reactive vs Template-driven forms
- [ ] Stratégies de state management et quand les utiliser
- [ ] Bonus : notions de SSR / Angular Universal

**Autres actions**
- [ ] Relire et être capable de justifier chaque choix technique du projet fil rouge
- [ ] S'entraîner à faire une revue de code d'un projet Angular existant

---

## Ressources générales

- Documentation officielle : [angular.dev](https://angular.dev)
- Suivre le changelog des versions récentes pour rester à jour sur les nouveautés (signals, control-flow syntax, standalone par défaut, etc.)
