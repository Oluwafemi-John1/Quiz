declare module 'toastify-js' {
    interface ToastifyOptions {
        text: string;
        duration?: number;
        destination?: string;
        newWindow?: boolean;
        close?: boolean;
        gravity?: "top" | "bottom";
        position?: "left" | "center" | "right";
        stopOnFocus?: boolean;
        style?: Record<string, string>;
        onClick?: () => void;
    }

    interface Toastify {
        (options: ToastifyOptions): Toastify;
        showToast(): void;
    }

    const Toastify: Toastify;
    export default Toastify;
}