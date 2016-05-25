//SE CONNECTER VIA FACEBOOK
angular.module('SwaltyApp').factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://swaltyapp.firebaseio.com");
        return $firebaseAuth(ref);
    }
]);

//SE CONNECTER VIA FACEBOOK
angular.module('SwaltyApp').controller("UserController", ["$scope", "Auth",
    function($scope, Auth) {
        $scope.auth = Auth;

        // any time auth status updates, add the user data to scope
        $scope.auth.$onAuth(function(authData) {
            $scope.authData = authData;
        });
    }
]);

//AJOUTER DES RECETTES
angular.module('SwaltyApp').factory("Recettes", function($firebaseArray) {
    var itemsRef = new Firebase("https://swaltyapp.firebaseio.com/recettes");
    return $firebaseArray(itemsRef);
});

//AJOUTER DES RECETTES
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


//AFFICHER LES RECETTES
angular.module('SwaltyApp').controller('RecetteController', function($scope, Recettes){
    $scope.recettes = Recettes;
});


//AJOUTER DES RECETTES EN FAVORIS
angular.module("SwaltyApp").controller("FavController", function($scope) {


});

