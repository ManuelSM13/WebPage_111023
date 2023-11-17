// Eventos del Service Worker

/* // No borres esto xd, si funciona xd

            // Carpeta CSS

            './CSS', 

            // Lo que se encuentra dentro de la carpeta de imágenes

            './Images', 
            './Images/altar.jpg',
            './Images/comida.jpg',
            './Images/historia.jpg',
            './Images/icono.png',
            './Images/uttec.png',
            './Images/worldwide.jpg',

            // Lo que se encuentra en Imágenes/Iconos

            './Images/icons', 
            './Images/icons/icon.ico',
            './Images/icons/icono_16.ico',
            './Images/icons/icono_32.ico',
            './Images/icons/icono_64.ico',
            './Images/icons/icono_128.ico',
            './Images/icons/icono_256.ico',

            // Carpeta JavaScript

            './JavaScript', 

            // Lo que se encuentra a nivel raíz

            'index.html',
            'main.js',
            'manifest.json',
            'sw.js'
*/


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mi-cache').then((cache) =>{
            return cache.addAll([
                './'
            ])
        })
    )
})

// Activación del Service Worker

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if(cacheName != 'mi-cache'){
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})

// Intercepta las solicitudes y maneja las respuestas desde la memoria caché

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    ); //respondWith
}); //addEventListener