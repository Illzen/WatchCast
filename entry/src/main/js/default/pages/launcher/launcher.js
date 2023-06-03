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
        }]
    },
    onInit() {
        this.title = "Hello World";
    },
    toIndexPage(e) {
        if (e.direction == 'down') {
            router.replace({
                uri: 'pages/index/index'
            });
        }
    },
    toWeatherPage(){
        router.replace({
            uri: 'pages/weather/weather'
        });
    }
}




