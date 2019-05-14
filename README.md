# Checkpoint n°2 - **4h**

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)

## **!!! PREMIERE ÉTAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

- Clone ce projet
- Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)

## Pré-requis (outils installés)

- NodeJS
- NPM
- [create-react-app ](https://github.com/facebook/create-react-app)

## Étape 1 - Quiz

- Pour répondre au quiz rend toi sur [cette application](http://checkpoint-quiz.campus-bordeaux.ovh/).
- Réponds aux questions du Quiz `Checkpoint 2 - JS`
- Une fois le quiz terminé, copie et colle le lien fourni par l'application dans un fichier Quiz.md à la racine de ton projet, et `commit`

## Étape 2 - React

<img src="https://media.giphy.com/media/XZcMJBP1RVSmI/giphy.gif" height="100">

Pour cet exercice tu vas devoir créer un projet se nommant **list-games** grâce à `create-react-app`.
Dans ce projet tu devras créer 2 composants : `<GameList />` et `<Game />`.

Tu devras récupérer les informations (au format JSON) en appelant l'url suivante: [http://www.campus-bordeaux.ovh:3002/joysticks/api/games](http://www.campus-bordeaux.ovh:3002/joysticks/api/games)
Tu peux utiliser au choix [Axios](https://github.com/axios/axios) ou [Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) pour récupérer les données.

- `<GameList />` devra récupérer les jeux de l'API et devra les afficher via des composants `<Game />`.
- `<Game />` devra récupérer via des _props_ les informations de chaque jeu (titre, description, image etc...) et les afficher au format de ton choix.
- Ajoute un bouton `supprimer` au composant `Game` qui permettra de supprimer un jeu au clic

## Étape 4 - Bonus

Il te reste du temps ? Parfait ! Tu vas pouvoir ajouter quelques fonctionnalités utiles à ton projet React !

- ajoute un `select` qui liste tous les thémes et qui permet de filtrer la liste affichée.
- ajoute un bouton `voir la promo` pour chaque jeu et utilise react-router pour afficher l'image `promo` et/ou la vidéo `trailer` sur une page avec une url de type `http://localhost:3000/jeu/promo/5` ou 5 est l'id du jeu selectionné.

## Étape 5 - Et voilà...

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !!

**NB : Tu ne dois pas commencer par cette étape... ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)
