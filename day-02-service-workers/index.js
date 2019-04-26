if ('serviceWorker' in navigator) {
    // Register service worker 1
    navigator.serviceWorker.register('./serviceworker.js')
    .then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}
