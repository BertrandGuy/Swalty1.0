// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//FIREBASE
angular.module('SwaltyApp', ['ionic', 'firebase'])


    .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})




.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('pre-home', {
      url: '/pre-home',
      templateUrl: 'templates/pre-home.html'
    });

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
      });

  $stateProvider
        .state('sucre', {
            url: '/sucre',
            templateUrl: 'templates/page-sucre.html'
        });

  $stateProvider
        .state('sel', {
            url: '/sel',
            templateUrl: 'templates/page-sel.html'
        });

  $stateProvider
        .state('gaufre', {
            url: '/gaufre',
            templateUrl: 'templates/recette-gaufre.html'
        });

    $stateProvider
        .state('ingre', {
            url: '/ingre',
            templateUrl: 'templates/ingredients.html'
        });

    $stateProvider
        .state('gaufre-sel', {
            url: '/gaufre-sel',
            templateUrl: 'templates/recette-gaufre-sel.html'
        });
    $stateProvider
        .state('testbdd', {
            url: '/testbdd',
            templateUrl: 'templates/testbdd.html'
        });
    $stateProvider
        .state('testAuth', {
            url: '/testAuth',
            templateUrl: 'templates/testAuth.html'
        });
    $stateProvider
        .state('testprogress', {
            url: '/testprogress',
            templateUrl: 'templates/testprogress.html'
        });
    $stateProvider
        .state('AuthEmail', {
            url: '/AuthEmail',
            templateUrl: 'templates/AuthEmail.html'
        });


  $urlRouterProvider.otherwise('/pre-home'); // la route par défaut

});


