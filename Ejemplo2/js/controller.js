/*	Controllers	*/

angular.module('calculadoraControllers',[]).

   controller('MainCtrl', ['$scope', function ($scope, $filter)	{
      $scope.valor1 = 0;
      $scope.valor2 = 0; 
      $scope.valor3 = 2;   
      $scope.calcular = function () {
         $scope.resultado = 1*$scope.valor1+1*$scope.valor2;
      }    
   }])
   
;
