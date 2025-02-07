if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration: ServiceWorkerRegistration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
                // console.log(registration);
            })
            .catch((err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}


window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        loader?loader.style.opacity = '0':console.log('no loader found');
        setTimeout(() => {
            loader?loader.style.display = 'none':console.log('no loader found');
            content?content.style.display = 'block':console.log('content not found');
        }, 500);
    }, 2000);
});