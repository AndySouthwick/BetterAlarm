app.controller('weatherCtrl', function($scope, $http){
  $http.get("https://simple-weather.p.mashape.com/weatherdata?lat=40.618691&lng=-112.004918&mashape-key=DA0Uuhi5U8mshkZmeLlaBH6h4ekQp1RxmkbjsnCzVLVed42yUg")
  .then(function(response){
      $scope.weather = response.data;
  });
});