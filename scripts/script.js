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
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js')
            .then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            console.log(registration);
        })
            .catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
