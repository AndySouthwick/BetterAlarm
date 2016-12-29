app.controller('weatherCtrl', function($scope, $http){

     //$scope.localWeather = function(location){

           

                $scope.westJordan = function(){
                $scope.location = "lat=40.618691&lng=-112.004918";
                console.log($scope.location);
             $http.get("https://simple-weather.p.mashape.com/weatherdata?"+ $scope.location + "&mashape-key=DA0Uuhi5U8mshkZmeLlaBH6h4ekQp1RxmkbjsnCzVLVed42yUg")
    .then(function(response){
        $scope.weather = response.data;
  });}
                $scope.chicago = function(){
                    $scope.location = "lat=41.8336479&lng=-87.8722357";
                console.log($scope.location);     
            $http.get("https://simple-weather.p.mashape.com/weatherdata?"+ $scope.location + "&mashape-key=DA0Uuhi5U8mshkZmeLlaBH6h4ekQp1RxmkbjsnCzVLVed42yUg")
    .then(function(response){
        $scope.weather = response.data;
  });}
            
           
       
    // }


});

//west jordan 