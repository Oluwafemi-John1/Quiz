if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js')
            .then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            // console.log(registration);
        })
            .catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    setTimeout(function () {
        loader ? loader.style.opacity = '0' : console.log('no loader found');
        setTimeout(function () {
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
