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

        navigator.serviceWorker.register('sw.js').then((registration: ServiceWorkerRegistration) => {
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                if(newWorker) {
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'activated') {
                            window.location.reload(); // Force reload to apply updates
                        }
                    });
                }
            });
        });
    });

}




window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        loader ? loader.style.opacity = '0' : console.log('no loader found');
        setTimeout(() => {
            loader ? loader.style.display = 'none' : console.log('no loader found');
            content ? content.style.display = 'block' : console.log('content not found');
        }, 500);
    }, 2000);
});

window.onload = function () {
    if (!sessionStorage.getItem('reload')) {
        sessionStorage.setItem('reload', 'true');
        window.location.reload();
    }
};
