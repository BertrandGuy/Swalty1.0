
angular.module('SwaltyApp').factory("Recettes", function($firebaseArray) {
    var itemsRef = new Firebase("https://swaltyapp.firebaseio.com/recettes");
    return $firebaseArray(itemsRef);
});


angular.module('SwaltyApp').controller("AddRecetteController", function($scope, Recettes) {

    $scope.recettes = Recettes;

    $scope.addRecette = function() {
        titre = this.titre;
        description = this.description;
        difficulte = this.difficulte;
        temps = this.temps;
        nbPersonne = this.nbPersonne;

        $scope.recettes.$add({
            "titre": titre,
            "description": description,
            "difficulte": difficulte,
            "temps": temps,
            "nbPersonne": nbPersonne
        });

    };
});

/* angular.module('SwaltyApp').controller('RecetteController', function($scope){
   $scope.recettes = [
       {id: 1, title: "titre de la recette 1", duree:"3"},
       {id: 2, title: "titre de la recette 2", duree:"20"},
       {id: 3, title: "titre de la recette 3", duree:"10"},
       {id: 4, title: "titre de la recette 4", duree:"4"},
       {id: 5, title: "titre de la recette 5", duree:"15"}
   ]
}); */



angular.module("SwaltyApp").controller("FavController", function($scope) {


});

