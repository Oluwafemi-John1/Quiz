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

const showLoader = () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'block';
    }
}