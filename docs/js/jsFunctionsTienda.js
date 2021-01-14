document.addEventListener("DOMContentLoaded", function(event) {
    loadTiendas();
  
});

var Tiendas = [];

function loadTiendas() {

    var url = "controller/cGetAllTiendas.php";

    fetch(url, {
            method: 'GET',
        })
        .then(res => res.json()).then(result => {
            Tiendas = result.list;

        

        })
        .catch(error => console.error('Error status:', error));
};