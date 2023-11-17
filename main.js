//alert('hola')
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js') //Ruta del archivo del Service Worker
    .then(function(registration){
        console.log('Service Worker registrado con éxito!', registration); //Service Worker registrado correctamente
    })
    .catch(function(error){
        console.error('Error al registrar el Service Worker: ', error); //Error al registrar el Service Worker
    }); 
}else{
    console.error('Service Worker no soportado: ', error); //Otro error ajeno
}

