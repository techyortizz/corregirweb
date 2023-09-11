"use strict";
const buscando = document.getElementById("buscando");
const inputBuscar = document.getElementById("input_buscar");
const listado = document.getElementById("listPrice");
const tem = document.getElementById("template").content;
const fragment = new DocumentFragment();
const btnEnviar= document.getElementById('btnSend');
btnEnviar.addEventListener("click",(e)=>{
e.preventDefault();
});
 

const fragment = new DocumentFragment();
buscando.addEventListener("click", (e) => {
  if (inputBuscar.classList.contains("buscarOculto")) {
    inputBuscar.classList.remove("buscarOculto");
    inputBuscar.classList.add("buscarVisible");
  } else if (inputBuscar.classList.add("buscarVisible")) {
    inputBuscar.classList.remove("buscarVisible");
    inputBuscar.classList.add("buscarOculto");
  }
});
async function obtenerLista() {
  const respuesta = await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      const resultado = response.data.results;
      let poke = [];
      for (const i in resultado) {
        poke.push(resultado[1]);
      }
      console.log(poke);
      return poke;
    })
    .catch((error) => {
      console.error(error);
      return 0;
    });
  return respuesta;
}
const data = await obtenerLista();
const comprobarTem = "content" in document.createElement("template");
if (comprobarTem) {
    data.forEach((element) => {
        console.log(element);
        tem.querySelector('#code').innerHTML = "Código:"+element.name;
        tem.querySelector('a').innerHTML = "URL:"+element.url;
    const myElement = tem.cloneNode(true);
    fragment.appendChild(myElement);
    });


}
listado.appendChild(fragment);
