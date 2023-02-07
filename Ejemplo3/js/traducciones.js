var idioma = new Array();

idioma["catalan"] = new Array();
idioma["catalan"].txtLabelNombre = "Nom";
idioma["catalan"].txtLabelEdad = "Edat";
idioma["catalan"].txtBtnCargar = "Carregar llistat";
idioma["catalan"].txtBtnOcultar = "Ocultar llistat";
idioma["catalan"].txtBtnVaciar = "Listat vuit";
idioma["catalan"].txtBtnInsertar = "Insertar dades";
idioma["catalan"].txtEliminar = "Eliminar";
idioma["catalan"].txtActualizar = "Actualitzar";

idioma["castellano"] = new Array();
idioma["castellano"].txtLabelNombre = "Nombre";
idioma["castellano"].txtLabelEdad = "Edad";
idioma["castellano"].txtBtnCargar = "Cargar listado";
idioma["castellano"].txtBtnOcultar = "Ocultar listado";
idioma["castellano"].txtBtnVaciar = "Listado vacío";
idioma["castellano"].txtBtnInsertar = "Insertar datos"; 
idioma["castellano"].txtEliminar = "Eliminar";
idioma["castellano"].txtActualizar = "Actualizar";

idioma["ingles"] = new Array();
idioma["ingles"].txtLabelNombre = "Name";
idioma["ingles"].txtLabelEdad = "Age";
idioma["ingles"].txtBtnCargar = "Load list";
idioma["ingles"].txtBtnOcultar = "Hide list";
idioma["ingles"].txtBtnVaciar = "Empty list";
idioma["ingles"].txtBtnInsertar = "Insert data"; 
idioma["ingles"].txtEliminar = "Delete";
idioma["ingles"].txtActualizar = "Update";

proyecto
   .constant('idiomas', {
      'idioma': ["catalan", "castellano", "ingles"],
      'traduccion': idioma
   });

