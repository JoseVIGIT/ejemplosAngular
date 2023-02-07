/*	Controllers	*/

proyecto

   .controller('MainCtrl', 
      ['$scope', 'idiomas', 'leerDatos', 
      function ($scope, idiomas, leerDatos)	{
      
         function actualizaTextosIdioma () {
         
          console.log ($scope.datos);
          console.log ($scope.datos == undefined);
         
            $scope.txtLabelNombre = idiomas.traduccion[$scope.idioma].txtLabelNombre;
            $scope.txtLabelEdad = idiomas.traduccion[$scope.idioma].txtLabelEdad;
            $scope.txtBtnInsertar = idiomas.traduccion[$scope.idioma].txtBtnInsertar;
            $scope.txtBtn = idiomas.traduccion[$scope.idioma].txtBtnCargar;  
            $scope.txtEliminar = idiomas.traduccion[$scope.idioma].txtEliminar; 
            $scope.txtActualizar = idiomas.traduccion[$scope.idioma].txtActualizar;
            
            if ($scope.datos == undefined) {
               $scope.txtBtn = idiomas.traduccion[$scope.idioma].txtBtnCargar;
            } else {
               $scope.txtBtn = idiomas.traduccion[$scope.idioma].txtBtnVaciar;
            }         
         }

         $scope.nombreInsertar = '';
         $scope.edadInsertar = '';
         $scope.visible = false;
         
         // idiomas disponibles (leido desde constante)
         $scope.idiomas = idiomas.idioma;      
         // idioma en uso
         $scope.idioma = idiomas.idioma[1];   
         actualizaTextosIdioma ();
         
         $scope.definirIdioma = function () { 
            actualizaTextosIdioma ();
         }
         
         $scope.cargarListado = function () {
            $scope.datos = leerDatos;         
            if ($scope.datos.length > 0) {
               $scope.visible = !$scope.visible 
               if ($scope.visible) {
                  $scope.txtBtn = idiomas.traduccion[$scope.idioma].txtBtnOcultar;         
               } else {
                  $scope.txtBtn = idiomas.traduccion[$scope.idioma].txtBtnCargar;
               }         
            }
         }
         $scope.insertarElemento = function () {
            $scope.datos.push ({Nombre: $scope.nombreInsertar, Edad: $scope.edadInsertar});
            if ($scope.datos.length > 0) {
               $scope.txtBtn = idiomas.traduccion[$scope.idioma].txtBtnCargar;
            }
         }
         $scope.actualizarElemento = function (index) {
            alert (index);
         }      
         $scope.eliminarElemento = function (index) {  
            //datos.splice(index,1);
           $scope.datos = jQuery.grep($scope.datos, function(e){ 
               return e.Nombre != index; 
            });
            //$scope.datos = datos;
            $scope.visible = ($scope.datos.length > 0);
            if (!$scope.visible) {
               $scope.txtBtn = idiomas.traduccion[$scope.idioma].txtBtnVaciar;
            }
         }
   }]);
   
