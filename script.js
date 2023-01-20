var textarea = document.querySelector(".areaTexto");
var mensaje = document.querySelector(".rectangulo");
var dibujo = document.querySelector(".munieco");

function botonEncriptar(){
    var textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    dibujo.style.display = "none"
          
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(var i = 0 ; i< matrizCodigo.length ; i++){
        
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
        
    }
    return stringEncriptada 
}

function botonDesencriptar(){
    var textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    
    
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(var i = 0 ; i< matrizCodigo.length ; i++){
        
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
        
    }
    return stringEncriptada 
}