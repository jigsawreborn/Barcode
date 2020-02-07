if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/javascript-barcode/examples/pwa/service-worker.js')
        .then(function () {
            console.log('Service Worker Registered');
        });
}