
var matriz=new Array(3);

for (i = 0; i < 3; i++){
    matriz[i]=new Array(3);
}

function guardarDato(fila,columna,dato){
            var aux = $(dato).val();
            if (aux!="") {
                //var nuevodato = "#" + dato;    
                if((esNumero(aux)) && (validarRango(aux)) && (validarRepetido(aux)) ){
                     matriz[fila][columna] = aux;
                    console.log(matriz[fila][columna] + " fila: " + fila + " columna: " + columna);
                     $("#mensajes").text("El dato ingresado es valido");
                } else {
                console.log("error en condicion");
                matriz[fila][columna] = 0;
                $(dato).val("");
            }
        }
        
}


function imprimirMatriz(){
     for (i=0; i<3; i++) {
        for (e=0; e<3; e++){
            alert(matriz[i][e]);
        }
    }
}

function validarRepetido(dato){
    var comprobar = true;
    for (i=0; i<3; i++) {
        for (e=0; e<3; e++){
           if (dato==matriz[i][e]){
                console.log("repetido");
                comprobar = false;
                $("#mensajes").text("El dato ingresado se encuentra repetido");
           }
        }
    }
    console.log(comprobar);
    return comprobar;
}

function esNumero(dato){
            if(isNaN(dato)){
                $("#mensajes").text("El dato ingresado no es un numero");
                return false;
            }else{
                return true;
            }     
      }

      function validarRango(dato){
            if ((dato>0) && (dato<=9)){

               return true;
            } else{
                $("#mensajes").text("El dato ingresado no se encuentra entre 1 y 9");
                return false;
            }
      }