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

        // we would probably save a profile when we register new users on our site
        // we could also read the profile to see if it's null
        // here we will just simulate this with an isNewUser boolean
        var isNewUser = true;

        var ref = new Firebase("https://swaltyapp.firebaseio.com");
        ref.onAuth(function(authData) {
            if (authData && isNewUser) {
                // save the user's profile into the database so we can list users,
                // use them in Security and Firebase Rules, and show profiles
                ref.child("users").child(authData.uid).set({
                    provider: authData.provider,
                    name: getName(authData),
                    fav: 0,
                    sucre: 0,
                    sel: 0
                });
            }
        });

        // find a suitable name based on the meta info given by each provider
        function getName(authData) {
            switch(authData.provider) {
                case 'password':
                    return authData.password.email.replace(/@.*/, '');
                case 'twitter':
                    return authData.twitter.displayName;
                case 'facebook':
                    return authData.facebook.displayName;
            }
        }
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
        var ingredient = [
                "fraise",
                "farine"
            ]
        for (var i=0; i< ingredient.length; i++){
            i = ingredient[i];
        }

        $scope.recettes.$add({
            "titre": titre,
            "description": description,
            "difficulte": difficulte,
            "temps": temps,
            "nbPersonne": nbPersonne,
            "ingredient": ingredient
        });

    };
});


//AFFICHER LES RECETTES
angular.module('SwaltyApp').controller('RecetteController', function($scope, Recettes){



    //$scope.recettes = Recettes;
});


//AJOUTER DES RECETTES EN FAVORIS
angular.module("SwaltyApp").controller("FavController", function($scope) {


});

//authInscription
angular.module('SwaltyApp').controller('AuthController', function($scope) {

    $scope.addUser = function() {
        var ref = new Firebase("https://swaltyapp.firebaseio.com");
        pseudo = this.pseudo;
        mail = this.email;
        mdp = this.mdp;
        mdpConf = this.mdpConf;

        if(mdp == mdpConf) {

            ref.createUser({
                "email": mail,
                "password": mdp
            }, function (error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        }

    }


});


//authConnexion
angular.module('SwaltyApp').controller('ConnexionController', function($scope) {

    $scope.userConnexion = function() {
    var ref = new Firebase("https://swaltyapp.firebaseio.com");

        pseudo = this.pseudo;
        mdp = this.mdp;

    ref.auth("AUTH_TOKEN", function(error, result) {
        if (error) {
            console.log("Authentication Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", result.auth);
            console.log("Auth expires at:", new Date(result.expires * 1000));
        }

        })
    }
});




