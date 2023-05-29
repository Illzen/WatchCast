import router from '@system.router';
import fetch from 'node-fetch';

export default {
    onInit() {

        let KEY = "8289fc0cb3cc706f3078a8c86bea911f";
        let ID = "1810821";
        const UNIT = 'metric';

        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${KEY}&id=${
        ID}&units=${UNIT}`)
            .then(response => response.json())
            .then(data => {
                // Do something with the data
                console.log(data);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    }
}

//export default {
//    data: {
//        title: ""
//    },
//    onInit() {
//        console.log("index.js/onInit() is evoked");
//    },
//    //        JSON.parse(https://api.openweathermap.org/data/2.5/forecast?id=1810821&appid=8289fc0cb3cc706f3078a8c86bea911f);
//    toWeatherPage(e) {
//        if (e.direction == 'down') {
//            router.replace({
//                uri: 'pages/weather/weather'
//            });
//        }
//    }
//}