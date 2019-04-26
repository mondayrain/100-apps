console.log("Service Worker: I have been loaded!");

// INSTALLATION: Runs when the service worker is new or outdated to this browser
self.addEventListener('install', (event) => {
    console.log("Service Worker: I am now installing my stuff");
    console.log("This is the event I got: ");
    console.log(event);

    // TODO: Initialize a cache
    // TODO: Cache an App Shell & static assets using Cache API
});

// ACTIVATION: Runs once the service worker has been successfully registered and installed
self.addEventListener('activate', (event) => {
    console.log("Service Worker: Activation event!");
    console.log("This is the event I got: ");
    console.log(event);
});

// FETCH: Fired when a resource is requested on the network
// This les us _look into the cache_ before actually making the network request
self.addEventListener('fetch', (event) => {
    console.log("Service Worker: Fetch event!");
    // event.respondWith(
    //   caches.match(event.request)
    //     .then((response) => {
    //       if (response) { //entry found in cache
    //         return response
    //       }
    //       return fetch(event.request)
    //     }
    //   )
    // )
  })

  // SYNC: Background syncs allow outgoing connections to be deferred
  // until the user has a working network connection.
  // This ensures the user can use the app offline.