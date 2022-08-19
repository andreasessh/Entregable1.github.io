let listaDeAutos = [];
// creamos un array que va a contener los elementos del json de autos.

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM.
function mostrarListaDeAutos(array){
    let htmlContentToAppend = "";
    console.log(array);
    
    //el for lo utilizamos para hacer un recorrido por cada elemento del array de autos, posteriormente utilizamos un string template para crea el listado de autos
    //con la ayuda de boostraps utilizando el list group.
    for(let i = 0; i < array.products.length; i++){ 
        let autos = array.products[i];
        console.log(autos);
        
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + autos.image + `" alt="product image" class="img-thumbnail" style="border-radius:25px; background-color:#85C1E9;">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h2 style=" font-weight:bold; color:#5DADE2;">`+ autos.name +`</h2> 
                        <p> `+ autos.description +`</p> 
                        </div>
                        <small class="text-muted">` + autos.cost + ` `+  autos.currency +` </small>
                         
                        <small class="text-muted">` + autos.soldCount + ` cantidad vendidos </small>
                        

                    </div>

                </div>
            </div>
        </div>
        `
        //aca identificamos el div contenedor del porducts html donde vamos a mandar la lista de autos y lo escribimos gracias al innerhtml que nos permite
        //que el HTML nos reconozca las etiquetas que estamos mandando en el el template que contiene el HTML contentToAppend.
        document.getElementById('autos-list-container').innerHTML = htmlContentToAppend; 
    }
}



// creoamos el DOM para editar el html desde js y este DOM nos permite obtener la lista de autos, desde AUTOS_URL. 
//lo que hace esta funcion es verificar los datos del json y si esta todo bien los almacena en nuestro array listaDeAutos
//posteriormente llamamos a la funcion listaDeAutos.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            listaDeAutos = resultObj.data;
            mostrarListaDeAutos(listaDeAutos);
        }
    });
});