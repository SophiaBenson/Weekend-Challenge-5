console.log('script.js is working');

//angular
var myApp = angular.module("myApp", []);

//angular controller
myApp.controller("BATMAN", ["$scope", "$http", function($scope, $http){
  $scope.addAnimal= function () {
    event.preventDefault();
    var animalToSend ={
      name: $scope.nameIn,
      animal: $scope.animalIn,
      age: $scope.ageIn,
      image: $scope.imageIn
    };
    $http({
      method: 'POST',
      url:'testPost',
      data: animalToSend
    });
    //clear inputs
    $scope.nameIn = '';
    $scope.animalIn = '';
    $scope.ageIn = '';
    $scope.imageIn = '';
  };//end addAnimal

  $http({
    method:'GET',
    url:'/getAnimals'
  }).then(function(response){
    $scope.allTheAnimals = response.data;
    console.log($scope.allTheAnimals);
  });//end getAnimals

}]);///end batman controller
