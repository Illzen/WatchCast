import router from '@system.router';

export default {
    data: {

    },
    onInit() {
        console.log("terminate.js/onInit is evoked")
    },
    terminate() {
        app.terminate();
        console.log("Exiting...")
    },
    toIndexPage() {
        if (e.direction == 'right') {
            router.replace({
                uri: 'pages/index/index'
            });

        }

    }
}
