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
navigator.serviceWorker.register('sw.js').then(function (registration) {
    registration.addEventListener('updatefound', function () {
        var newWorker = registration.installing;
        if (newWorker) {
            newWorker.addEventListener('statechange', function () {
                if (newWorker.state === 'activated') {
                    window.location.reload(); // Force reload to apply updates
                }
            });
        }
    });
});
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
var toaster = function (message, pos, grav, duration, background, color) {
    Toastify({
        text: message,
        duration: duration,
        newWindow: true,
        close: true,
        gravity: grav, // `top` or `bottom`
        position: pos, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: background,
            color: color
        },
        onClick: function () { } // Callback after click
    }).showToast();
};
var btn = document.getElementById('bSubmit');
if (btn) {
    btn.addEventListener('click', function () {
        var fullname = document.getElementById('fName');
        var username = document.getElementById('uName');
        var mail = document.getElementById('eMail');
        var password = document.getElementById('pWord');
        if (!fullname || !username || !mail || !password) {
            console.error('One or more elements are missing!');
        }
        else if (fullname.value === '' || username.value === '' || mail.value === '' || password.value === '') {
            console.error('All input must be filled');
            toaster('Fill all inputs', 'center', 'top', 3000, '#14110d', '#f00');
        }
        else {
            var userObj = {
                fullname: fullname.value || null,
                username: username.value || null,
                mail: mail.value || null,
                password: password.value || null
            };
            console.log(userObj);
        }
    });
}
