import router from '@system.router';

export default {
    data: {
        title: "",
        logoList:[ {
            src : "/pages/image/logo3.png",
            text : "Calculator"
        },{
            src : "/pages/image/logo1.png",
            text : "Radio"
        },{
            src : "/pages/image/logo2.png",
            text : "Terminal"
        },{
            src : "/pages/image/logo.png",
            text : "WatchCast"
        }],
        // coord : {'lon': 119.3061, 'lat': 26.0614},
        weather : [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
        // base : stations,
        main : {'temp': 25.94, 'feels_like': 26.97, 'temp_min': 25.94, 'temp_max': 25.94, 'pressure': 1004, 'humidity': 91, 'sea_level': 1004, 'grnd_level': 1003},
        visibility : 10000,
        wind : {'speed': 0.44, 'deg': 176, 'gust': 0.72},
        clouds : {'all': 7},
        // dt : 1685627436,
        sys : {'type': 1, 'id': 9658, 'country': 'CN', 'sunrise': 1685567465, 'sunset': 1685616615},
        timezone : 28800,
        // id : 1810821,
        name : Fuzhou,
        cod : 200,
    },
    onInit() {
        console.log("Weather.js/onInit() evoked")
    },
        toAnotherPage(e) {
        switch (e.direction) {
            case 'left':
                router.replace({
                    uri: 'pages/launcher/launcher'
                });
                break;
            // case 'bottom':
            //     router.replace({
            //         uri: 'pages/report2/report2'
            //     });
        }
    },
    toDetailPage(){
        router.replace({
            uri: 'pages/info/info'
        });
    }


}






