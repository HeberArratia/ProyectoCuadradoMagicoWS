// Creamos una matriz de 3x3
var matriz=new Array(3);
for (i = 0; i < 3; i++){
    matriz[i]=new Array(3);
}

// Metodo que permite guardar un dato en una posicion especifica de la matriz
function guardarDato(fila,columna,dato){
			// Guardamos el dato el variable aux
            var aux = $(dato).val();
            // Si el dato ingresado es distinto de "vacio"
            if (aux!="") {
            // Si todas las validaciones son verdaderas	
                if((esNumero(aux)) && (validarRango(aux)) && (validarRepetido(aux)) ){
                	// Entonces guardamos el dato en la matriz
                     matriz[fila][columna] = aux;
                    console.log(matriz[fila][columna] + " fila: " + fila + " columna: " + columna);
                     $("#mensajes").text("El dato ingresado es valido");
              /* De lo contrario guardamos un 0 en la matriz, esto con el fin de que si se modifica
                 o borra un dato, al ingresarlo otra vez no se encuentre repetido */
                } else {
                console.log("error en condicion");
                matriz[fila][columna] = 0;
                $(dato).val("");
            }
        }
        
}

// Metodo que recorre las posiciones de la matriz e imprime su contenido
function imprimirMatriz(){
     for (i=0; i<3; i++) {
        for (e=0; e<3; e++){
            alert(matriz[i][e]);
        }
    }
}

// Metodo que valida si un dato se encuentra repetido
function validarRepetido(dato){
	// Se crea una variable que comienza como true
    var comprobar = true;
    // Se recorre la matriz
    for (i=0; i<3; i++) {
        for (e=0; e<3; e++){
        /* Si el dato es igual a uno existente en la matriz, comprobar 
        	cambia a false */
           if (dato==matriz[i][e]){
                console.log("repetido");
                comprobar = false;
                // Se modifica el texto del parrafo con id "mensajes"
                $("#mensajes").text("El dato ingresado se encuentra repetido");
           }
        }
    }
    console.log(comprobar);
    // Se retorna la variable comprobar
    return comprobar;
}

// Metodo que valida si un dato es numero o no
function esNumero(dato){
	/* The isNaN() function determines whether a value is an illegal number (Not-a-Number).
      This function returns true if the value is NaN, and false if not. */
            if(isNaN(dato)){
        // Si isNaN retorna true, entonces el valor no es numero
        // Se modifica el texto del parrafo con id "mensajes"
        // La funcion esNumero retorna false
                $("#mensajes").text("El dato ingresado no es un numero");
                return false;
            }else{
        // La funcion retorna true 
                return true;
            }     
      }

// Metodo que valida que el dato se encuentre en un rango de 1 a 9
      function validarRango(dato){
    // Si el dato es mayor que 0 y menor e igual que 9	  
            if ((dato>0) && (dato<=9)){
       // La funcion retorna true
               return true;
            } else{
       /* De lo contrario se modifica el texto del parrafo con id "mensajes"
         y la funcion retorna un false */        	
              $("#mensajes").text("El dato ingresado no se encuentra entre 1 y 9");
                return false;
            }
      }