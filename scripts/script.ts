// interface Reg {
//     active: null,
//     backgroundFetch: Object,
//     cookies: Object,
//     installing: null,
//     navigationPreload: Object,
//     onupdatefound: null,
//     paymentManager: Object,
//     periodicSync: Object,
//     pushManager: Object,
//     scope: String,
//     sync: Object,
//     updateViaCache: String,
//     waiting: null
// }

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration:ServiceWorkerRegistration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
                console.log(registration);
                
            })
            .catch((err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}