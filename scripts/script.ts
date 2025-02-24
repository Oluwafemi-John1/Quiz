// import { app } from "./firebase";

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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Notify the user to refresh the page
        if (confirm('A new version is available! Refresh to update?')) {
            window.location.reload();
        }
    });
}

navigator.serviceWorker.register('sw.js').then((registration: ServiceWorkerRegistration) => {
    registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'activated') {
                    window.location.reload(); // Force reload to apply updates
                }
            });
        }
    });
});




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

interface User {
    fullname: String | null,
    username: String | null,
    mail: String | null,
    password: String | null
}

const toaster = (message: string, pos: "left" | "center" | "right" | undefined, grav: "top" | "bottom" | undefined, duration: number, background: string, color: string) => {
    Toastify({
        text: message,
        duration,
        newWindow: true,
        close: true,
        gravity: grav, // `top` or `bottom`
        position: pos, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


const btn: HTMLElement | null = document.getElementById('bSubmit');
if (btn) {
    btn.addEventListener('click', () => {
        const fullname = document.getElementById('fName') as HTMLInputElement | null
        const username = document.getElementById('uName') as HTMLInputElement | null
        const mail = document.getElementById('eMail') as HTMLInputElement | null
        const password = document.getElementById('pWord') as HTMLInputElement | null

        if (!fullname || !username || !mail || !password) {
            console.error('One or more elements are missing!')
        } else if (fullname.value === '' || username.value === '' || mail.value === '' || password.value === '') {
            console.error('All input must be filled')
            toaster('Fill all inputs', 'center', 'top', 3000, '#000', '#f00')
        } else {
            const fullnameRegex = /^([A-Z]{1})([a-z]{1,})$/
            const usernameRegex = /^([a-z]{2,})$/

            const testRegex1 = fullnameRegex.test(fullname.value)
            const testRegex2 = usernameRegex.test(username.value)
            console.log(testRegex1, testRegex2);
            

            !testRegex1?toaster('Full name should begin with an uppercase letter and not less than 2 characters','right','top',2000,'#000','#ff0'):console.info('Passed!')

            !testRegex2?toaster('Username should not be less than 2 characters','right','top',2000,'#000','#0f0'):console.info('Passed!')

            if (testRegex1 && testRegex2) {
                let userObj: User = {
                    fullname: fullname.value || null,
                    username: username.value || null,
                    mail: mail.value || null,
                    password: password.value || null
                }
                console.log(userObj);
            }

        }
    });
}