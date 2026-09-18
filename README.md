# LoL Draft

Assistant de draft League of Legends : il propose un champion et des runes selon
la draft en cours, **et il explique pourquoi**. L'explication est le cœur du
projet, pas un bonus.

## Prérequis

- [Node.js](https://nodejs.org) 20 ou plus (`node --version` pour vérifier)
- [git](https://git-scm.com)

## Installation

```bash
git clone https://github.com/kourossalari/LoL-Draft.git
cd LoL-Draft
npm install
```

## Organisation du dépôt

On reste sur un dépôt simple tant qu'il n'y a que le moteur et la web app.
Le découpage en paquets séparés viendra si l'application desktop arrive.

## Travailler à deux

On ne pousse jamais directement sur `main`. Chacun travaille sur sa branche,
puis ouvre une pull request.

```bash
git pull                          # récupérer le travail de l'autre
git switch -c ma-branche          # créer sa branche de travail
# ... modifications ...
git add -A
git commit -m "ce que j'ai fait"
git push -u origin ma-branche     # puis ouvrir la pull request sur GitHub
```

## Sources de données

Les données champions et runes viennent de **CommunityDragon** (gratuit, sans clé
API, suit le patch live). Le CDN de Meraki Analytics est figé depuis août 2025 :
ne pas s'en servir comme dépendance.

L'API du client League (LCU) n'est pas officiellement supportée par Riot et impose
un enregistrement au Developer Portal avant toute diffusion publique.
