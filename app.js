
let amigos = [];

//Funcion para adicionar amigos
function agregarAmigo() {
    const nombreIngresado = document.getElementById("amigo").value;
    console.log(nombreIngresado);//Imprime el nombre ingresado
   
    //Verifica si el campo esta vacio
    if (amigos===""){
        alert("Por favor ingrese un nombre");
        return;
    }
    
    //Adiciona nombres a la lista
    amigos.push(nombreIngresado);
    nombreIngresado.value = " ";
}
//Funcion par actualizar la lista
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

//Recorrido array y creacion de lista
for (listaAmigos of amigos){
    const li = document.createElement('li');
    li.textContent = amigos
}
}

//Funcion sorteo de amigos

function sortearAmigo() {
    // Verifica lista de amigos
    if (amigos.length === 0) {
      alert('Adicione un nombre valido.');
      return;
    }
    // Generar un nombre aleatorio
    const Sorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[Sorteado];
    // Muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
  }



