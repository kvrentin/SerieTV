# Netflex

Netflex est une application web équivalante à une To-Do-List, qui permet de gérer les séries que l'on souhaite regarder. Celle-ci permet de créer une "WatchList" et d’obtenir des informations (synopsis, nombre de saisons, nombre d’épisodes...) sur les séries.

![alt text](http://image.noelshack.com/fichiers/2018/50/7/1544971871-screen.png)

## Statut de développement

Release 1 :
* Ajout d’une série,
* Supprimer une série,
* Fiche information de la série (réalisateur, acteurs, nombre de saisons...),
* La barre de recherche est synchronisée avec l’API et propose des suggestions d’autocompletion,
* “Ma Watchlist” : regroupement des séries ajoutées par l’utilisate

## Fonctionnalités

* Implémentation de l'API TheMovieDataBase : récupération des données liées à une série via des requêtes,
* Barre de recherche avec autocompletion,
* Modal relative à chaque série ajoutée (Nom de la série, synopsis),
* Bouton de suppression pour retirer un élément de la liste.

### Plugins & API

* [TheMovieDataBase](https://www.themoviedb.org)

* [jQueryUI](http://jqueryui.com)

## Installation

```
npm i
npm install
```
## Language

* SCSS

## Auteurs

* **Alexandre Nugues** - *Front-end / Graphiste* - [Jaka](https://github.com/jaka)
* **Corentin Moiszan** - *Developpeur* - [kvrentin](https://github.com/kvrentin)

## License

[LICENSE.md](LICENSE.md)
