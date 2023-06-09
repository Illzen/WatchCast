import router from '@system.router';
import app from '@system.app';

export default {
    data: {
        title: ""
    },
    onInit() {
        console.log("index.js/onInit() is evoked");
        router.replace({
            // uri: "pages/report2/report2",
//            uri: "pages/report3/report3",
        });
    },
    onReady() {
        console.log("index.js/onReady() is evoked");
    },
    onShow() {
        console.log("index.js/onShow() is evoked");
    },
    onDestroy() {
        console.log("index.js/onDestroy() is evoked");
    },
    terminate(){
        app.terminate();
    },
    //        JSON.parse(https://api.openweathermap.org/data/2.5/forecast?id=1810821&appid=8289fc0cb3cc706f3078a8c86bea911f);
    toWeatherPage(e) {
        if (e.direction == 'up') {
            router.replace({
                uri: 'pages/launcher/launcher'
            });
        }
    },
        toTerminatePage() {
            router.replace({
                uri: 'pages/terminate/terminate'
            });
    }

}
