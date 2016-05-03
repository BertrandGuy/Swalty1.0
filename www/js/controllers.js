angular.module('starter').controller('RecetteController', function($scope){
   $scope.recettes = [
       {id: 1, title: "titre de la recette 1", duree:"3"},
       {id: 2, title: "titre de la recette 2", duree:"20"},
       {id: 3, title: "titre de la recette 3", duree:"10"},
       {id: 4, title: "titre de la recette 4", duree:"4"},
       {id: 5, title: "titre de la recette 5", duree:"15"}
   ]
});

