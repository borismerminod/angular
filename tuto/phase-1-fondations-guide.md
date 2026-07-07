# Guide détaillé — Phase 1 : Fondations Angular

**Fil rouge de cette phase (et uniquement de cette phase) : "Carnet de contacts"**

On va construire une mini-application qui affiche des fiches contact, avec un composant "appel en cours" pour observer le cycle de vie. Chaque phase suivante du [manifest](angular-learning-manifest.md) aura son propre fil rouge — celui-ci ne sert qu'à illustrer les 5 sujets de la Phase 1.

> 🔦 **Aperçu Phase 2** : à deux endroits (Étape 4), on utilise `(click)` et `*ngIf` pour rendre la démo interactive. Ce sont des sujets de la Phase 2 — ici on ne les explique pas en détail, on les utilise juste comme outils pour déclencher le cycle de vie d'un composant.

**Prérequis** : Angular CLI est déjà installé à la racine du repo (`@angular/cli` v19.2.13). On garde la même version majeure pour rester cohérent avec le reste du repo (`tuto_youtube/`).

---

## Étape 1 — Création du projet Angular CLI

### Concept

`ng new` génère un projet Angular complet et fonctionnel : configuration de build, serveur de dev, structure de dossiers standard. Les options qu'on utilise :

| Option | Rôle |
|---|---|
| `--style=scss` | utilise SCSS au lieu de CSS brut pour les feuilles de style |
| `--routing=false` | pas de `app.routes.ts` généré — le routing est un sujet de Phase 4 |
| `--ssr=false` | pas de rendu côté serveur (Angular Universal), hors scope pour l'instant |

Arborescence générée (fichiers clés) :

```
phase-1-fondations/
├── src/
│   ├── app/
│   │   ├── app.ts            # composant racine (classe)
│   │   ├── app.html           # template du composant racine
│   │   ├── app.scss           # styles du composant racine
│   │   ├── app.config.ts      # configuration de l'application (providers globaux)
│   │   └── app.spec.ts        # test unitaire du composant racine
│   ├── main.ts                # point d'entrée, démarre l'application
│   ├── index.html             # page HTML hôte
│   └── styles.scss            # styles globaux
├── angular.json                # configuration du CLI (build, serve, test)
├── package.json
└── tsconfig*.json              # configuration TypeScript
```

- **`main.ts`** : bootstrap l'application avec `bootstrapApplication(App, appConfig)`.
- **`app.config.ts`** : là où on déclarera les providers globaux (services, futur routing en Phase 4).
- **`angular.json`** : décrit comment `ng serve` / `ng build` / `ng test` doivent s'exécuter.

### Commande

Depuis `tuto/` :

```bash
ng new phase-1-fondations --style=scss --routing=false --ssr=false
cd phase-1-fondations
```

### Cas pratique

1. Lance le serveur de dev :
   ```bash
   ng serve
   ```
2. Ouvre [http://localhost:4200](http://localhost:4200) — tu dois voir la page Angular par défaut.
3. Personnalise le titre : ouvre `src/app/app.ts`, change la propriété `title` (ou équivalent), et `src/app/app.html` pour afficher `Carnet de contacts` à la place du contenu par défaut. Vérifie que le rechargement à chaud (`ng serve` watch) applique le changement sans redémarrer le serveur.

**Vérifier avant de continuer** : la page affiche "Carnet de contacts" sur [http://localhost:4200](http://localhost:4200).

---

## Étape 2 — Anatomie d'un composant (`@Component`, template, styles, sélecteur)

### Concept

Un composant Angular = une classe TypeScript décorée par `@Component`. Le décorateur configure :

- **`selector`** : le nom de balise HTML utilisé pour insérer ce composant ailleurs (`<app-contact-card>`).
- **`templateUrl`** (fichier séparé) ou **`template`** (inline) : le HTML du composant.
- **`styleUrl`** (fichier séparé) ou **`styles`** (inline) : le CSS/SCSS scoping au composant.
- **`imports`** : les autres composants/directives/pipes que ce composant utilise dans son template (voir Étape 3).

### Exemple de code

Génère le composant avec le CLI :

```bash
ng generate component shared/ui/contact-card
```

Cela crée `src/app/shared/ui/contact-card/` avec 4 fichiers. Voici l'anatomie commentée :

```typescript
// src/app/shared/ui/contact-card/contact-card.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-card',        // balise HTML : <app-contact-card>
  templateUrl: './contact-card.html',  // template dans un fichier séparé
  styleUrl: './contact-card.scss',     // styles scopés à ce composant
  standalone: true,                    // voir Étape 3
})
export class ContactCard {
  // pour l'instant, rien ici — le contact est codé en dur dans le template
}
```

```html
<!-- src/app/shared/ui/contact-card/contact-card.html -->
<!-- Contact statique pour l'instant : l'interpolation dynamique {{ }} est un sujet de Phase 2 -->
<div class="contact-card">
  <span class="avatar">🧑</span>
  <p class="name">Camille Dubois</p>
  <p class="phone">06 12 34 56 78</p>
  <p class="email">camille.dubois@example.com</p>
</div>
```

```scss
// src/app/shared/ui/contact-card/contact-card.scss
.contact-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  max-width: 240px;
}
```

### Cas pratique

1. Crée le composant `contact-card` comme ci-dessus, avec un contact codé en dur.
2. Intègre-le dans le composant racine : ouvre `src/app/app.ts`, ajoute `ContactCard` dans `imports: [...]`.
3. Dans `src/app/app.html`, utilise le sélecteur :
   ```html
   <h1>Carnet de contacts</h1>
   <app-contact-card></app-contact-card>
   ```
4. Recharge la page : la carte de contact statique doit s'afficher sous le titre.

**Vérifier avant de continuer** : la carte de contact s'affiche via `<app-contact-card>`, tu peux expliquer à voix haute le rôle de `selector`, `templateUrl` et `styleUrl`.

---

## Étape 3 — Standalone components vs NgModules

### Concept

- **Avant Angular 14** : chaque composant devait être déclaré dans un `NgModule` (`declarations: [...]`) pour être utilisable, et exporté (`exports: [...]`) pour être utilisé par d'autres modules. Beaucoup de code de "câblage".
- **Depuis Angular 14+ (et par défaut depuis Angular 19, comme dans ce projet)** : les composants sont **standalone**. Ils déclarent directement leurs dépendances dans `imports: [...]` au niveau du `@Component`, sans NgModule intermédiaire.

C'est pour ça qu'aucun fichier `*.module.ts` n'existe dans le projet généré à l'Étape 1 — et c'est aussi la convention utilisée dans tous les projets `tuto_youtube/` existants.

### Exemple de code — comparaison

**Approche moderne (standalone) — ce qu'on utilise réellement :**

```typescript
@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [], // dépendances déclarées ici, directement
  templateUrl: './contact-card.html',
})
export class ContactCard {}
```

**Équivalent NgModule (legacy) — extrait conceptuel, non exécuté dans ce projet :**

```typescript
// AVANT (approche historique — juste pour comprendre du code legacy)
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.html',
  // pas de "standalone", pas de "imports" ici
})
export class ContactCard {}

@NgModule({
  declarations: [ContactCard],   // il faut déclarer le composant...
  exports: [ContactCard],        // ...puis l'exporter pour qu'il soit utilisable ailleurs
  imports: [CommonModule],
})
export class ContactCardModule {}
```

Avec l'approche `NgModule`, il faut un fichier de module en plus par groupe de composants, et importer ce module (pas juste le composant) là où on veut l'utiliser. L'approche standalone supprime cette couche.

### Cas pratique

Pas de nouveau fichier ici — exercice de lecture :

1. Ouvre `src/app/app.ts` et `src/app/shared/ui/contact-card/contact-card.ts`.
2. Trouve la propriété `standalone` (ou son absence — depuis Angular 19, `standalone: true` est implicite, tu ne le verras peut-être même pas écrit).
3. Cherche `*.module.ts` dans tout le projet (`Ctrl+Shift+F` dans ton éditeur) : confirme qu'il n'y en a aucun.
4. Explique en une phrase pourquoi `ContactCard` est directement utilisable dans `app.ts` sans étape intermédiaire.

**Vérifier avant de continuer** : tu peux expliquer sans notes la différence standalone vs NgModule, et pourquoi Angular a adopté standalone par défaut.

---

## Étape 4 — Cycle de vie d'un composant

### Concept

Angular appelle automatiquement certaines méthodes ("hooks") à des moments précis de la vie d'un composant, si la classe les implémente (via les interfaces `OnChanges`, `OnInit`, `OnDestroy`, etc.) :

| Hook | Quand | Cas d'usage typique |
|---|---|---|
| `constructor` | création de l'instance (avant Angular) | injection de dépendances basique |
| `ngOnChanges` | à chaque changement d'un `@Input` | réagir à une nouvelle valeur reçue du parent |
| `ngOnInit` | une fois, après le premier `ngOnChanges` | initialisation (ex: démarrer un minuteur) |
| `ngOnDestroy` | juste avant la destruction du composant | nettoyage (ex: arrêter un minuteur, se désabonner) |

Ordre d'exécution typique : `constructor` → `ngOnChanges` → `ngOnInit` → ... → `ngOnDestroy`.

### Exemple de code

```bash
ng generate component features/carnet-contacts/appel-en-cours
```

```typescript
// src/app/features/carnet-contacts/appel-en-cours/appel-en-cours.ts
import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

export interface Contact {
  nom: string;
  telephone: string;
}

@Component({
  selector: 'app-appel-en-cours',
  templateUrl: './appel-en-cours.html',
  styleUrl: './appel-en-cours.scss',
})
export class AppelEnCours implements OnChanges, OnInit, OnDestroy {
  @Input({ required: true }) contact!: Contact;

  constructor() {
    console.log('📦 constructor : instance créée');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔄 ngOnChanges : contact reçu ->', changes['contact']?.currentValue);
  }

  ngOnInit(): void {
    console.log(`▶️ ngOnInit : appel démarré avec ${this.contact.nom}`);
  }

  ngOnDestroy(): void {
    console.log(`⏹️ ngOnDestroy : appel terminé avec ${this.contact.nom}`);
  }
}
```

```html
<!-- src/app/features/carnet-contacts/appel-en-cours/appel-en-cours.html -->
<div class="appel-en-cours">
  📞 En appel avec <strong>{{ contact.nom }}</strong>...
</div>
```

> 🔦 **Aperçu Phase 2** : `{{ contact.nom }}` ci-dessus est de l'interpolation, et `[contact]="..."` /  `(click)` ci-dessous sont du property/event binding — tous des sujets de la Phase 2. On les utilise ici uniquement pour observer le cycle de vie en action.

Dans `contact-card.html`, ajoute un bouton :

```html
<div class="contact-card">
  <span class="avatar">🧑</span>
  <p class="name">Camille Dubois</p>
  <p class="phone">06 12 34 56 78</p>
  <button (click)="appeler.emit()">📞 Appeler</button>
</div>
```

```typescript
// contact-card.ts — on ajoute un événement de sortie pour prévenir le parent
import { Component, Output, EventEmitter } from '@angular/core';

@Component({ /* ... */ })
export class ContactCard {
  @Output() appeler = new EventEmitter<void>();
}
```

Dans `app.html`, on affiche/masque `AppelEnCours` conditionnellement :

```html
<h1>Carnet de contacts</h1>
<app-contact-card (appeler)="contactEnAppel = { nom: 'Camille Dubois', telephone: '06 12 34 56 78' }"></app-contact-card>

@if (contactEnAppel) {
  <app-appel-en-cours [contact]="contactEnAppel"></app-appel-en-cours>
  <button (click)="contactEnAppel = null">Raccrocher</button>
}
```

```typescript
// app.ts
export class App {
  contactEnAppel: Contact | null = null;
}
```

### Cas pratique

1. Crée `AppelEnCours` comme ci-dessus.
2. Câble le bouton "Appeler" sur `ContactCard` et l'affichage conditionnel dans `App`.
3. Ouvre la console du navigateur (F12), clique sur "📞 Appeler", puis sur "Raccrocher".
4. Observe l'ordre exact des logs : `constructor` → `ngOnChanges` → `ngOnInit` au clic sur "Appeler", puis `ngOnDestroy` au clic sur "Raccrocher".

**Vérifier avant de continuer** : tu vois les 4 logs dans le bon ordre dans la console, et tu peux expliquer pourquoi `ngOnDestroy` se déclenche à la disparition du composant.

---

## Étape 5 — Convention de structuration de projet (feature-based, core/shared)

### Concept

Une convention courante en entreprise pour organiser `src/app/` :

- **`core/`** : services transverses à toute l'application, fournis une seule fois (singletons). Vide pour l'instant — on le peuplera en Phase 3 (services & DI).
- **`shared/`** : composants/pipes/directives réutilisables **sans logique métier** (ex: `contact-card` — une carte générique, elle ne sait rien du "carnet de contacts" en tant que domaine).
- **`features/`** : le code propre à un domaine métier, isolé des autres features (ex: `carnet-contacts/` regroupe tout ce qui concerne ce domaine, comme `appel-en-cours`).

### Exemple — arborescence cible

```
src/app/
├── core/
│   └── README.md              # placeholder, sera peuplé en Phase 3 (services)
├── shared/
│   └── ui/
│       └── contact-card/      # réutilisable, pas de logique métier
├── features/
│   └── carnet-contacts/
│       └── appel-en-cours/    # propre au domaine "carnet de contacts"
├── app.ts
├── app.html
└── app.config.ts
```

### Cas pratique

1. Crée `src/app/core/` avec un `README.md` : *"Dossier réservé aux services transverses (auth, logging, config...). Sera peuplé en Phase 3 — Services & injection de dépendances."*
2. Vérifie que `contact-card` est bien dans `shared/ui/` (déjà fait si tu as suivi l'Étape 2 telle quelle).
3. Vérifie que `appel-en-cours` est bien dans `features/carnet-contacts/` (déjà fait si tu as suivi l'Étape 4 telle quelle).
4. Si besoin, déplace les fichiers et corrige les chemins d'import dans `app.ts` (le CLI ne met pas à jour les imports automatiquement lors d'un déplacement manuel — vérifie chaque `import ... from '...'`).
5. Relance `ng serve` et confirme que l'application fonctionne toujours (carte de contact, appel, cycle de vie inchangés).

**Vérifier avant de continuer** : l'arborescence correspond au schéma ci-dessus, et `ng serve` tourne sans erreur.

---

## Checklist finale — Phase 1

- [ ] Projet Angular CLI généré et je sais expliquer le rôle de `main.ts`, `app.config.ts`, `angular.json`
- [ ] Composant `contact-card` créé, anatomie `@Component` (selector/templateUrl/styleUrl) comprise
- [ ] Je peux expliquer standalone vs NgModule et pourquoi ce projet n'a aucun `*.module.ts`
- [ ] Composant `appel-en-cours` créé, ordre des hooks du cycle de vie observé dans la console
- [ ] Projet réorganisé en `core/` / `shared/` / `features/`, `ng serve` fonctionne toujours

**Rappel** : ce fil rouge ("Carnet de contacts") est propre à la Phase 1. La Phase 2 (templates, binding, directives) aura son propre thème et reviendra en détail sur `{{ }}`, `[prop]`, `(event)` et `*ngIf`/`@if` que l'on a juste esquissés ici.
