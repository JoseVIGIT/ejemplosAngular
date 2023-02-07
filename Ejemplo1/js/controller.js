/*	Controllers	*/

angular.module('helloWorldControllers',[]).

   controller('MainCtrl', ['$scope', '$filter', function ($scope, $filter)	{
      date = new Date();      
      $scope.date = $filter('date')(new Date(),"EEEE, dd/MM/yyyy - HH:mm").toString() + " - desde el controlador";
		$scope.message	=	"Hello World - etiqueta";
   }]).
   
   controller('JQueryCtrl', ['$scope', function ($scope)	{ 
      $scope.contador = 0;
      $scope.visible = false;
      $scope.txtBoton = "Mostrar texto";
      $scope.rellenaSpan = function rellenaSpan () {
         $scope.contador += 1;
         $scope.visible = !$scope.visible;
         if ($scope.visible) {
             $scope.txtBoton = "Ocultar texto";
         } else {
             $scope.txtBoton = "Mostrat texto";
         }
      }		
   }])
   
;
