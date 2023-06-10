import router from '@system.router';

export default {
    data: {
        // TODO https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-container-swiper-0000001176909938
        // Swipe variable changes while swiping
        index: 0,
        weather: [
            {
                "icon": "",
                "coord": {
                    "lon": 119.3061,
                    "lat": 26.0614
                },
                "weather": {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                },
                "base": "stations",
                "main": {
                    "temp": 298.09,
                    "feels_like": 298.55,
                    "temp_min": 298.09,
                    "temp_max": 298.09,
                    "pressure": 1001,
                    "humidity": 73,
                    "sea_level": 1001,
                    "grnd_level": 999
                },
                "visibility": 10000,
                "wind": {
                    "speed": 1.73,
                    "deg": 170,
                    "gust": 1.86
                },
                "clouds": {
                    "all": 97
                },
                "dt": 1686385357,
                "sys": {
                    "type": 1,
                    "id": 9658,
                    "country": "CN",
                    "sunrise": 1686345015,
                    "sunset": 1686394448
                },
                "timezone": 28800,
                "id": 1810821,
                "name": "Fuzhou",
                "cod": 200
            },
            {
                "icon": "",
                "coord": {
                    "lon": 119.3794,
                    "lat": 25.725
                },
                "weather":
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                },
                "base": "stations",
                "main": {
                    "temp": 297.48,
                    "feels_like": 298.5,
                    "temp_min": 297.48,
                    "temp_max": 297.48,
                    "pressure": 1003,
                    "humidity": 97,
                    "sea_level": 1003,
                    "grnd_level": 1000
                },
                "visibility": 10000,
                "wind": {
                    "speed": 2.27,
                    "deg": 218,
                    "gust": 3.54
                },
                "clouds": {
                    "all": 82
                },
                "dt": 1686399158,
                "sys": {
                    "country": "CN",
                    "sunrise": 1686345041,
                    "sunset": 1686394387
                },
                "timezone": 28800,
                "id": 1797120,
                "name": "Fuqing",
                "cod": 200
            },
        ],
        cards: [],
        qr_col: '#87ceeb',
        qr_bcol: '#f0ffff',
        qr_value: 'https://github.com/Illzen/WatchCast',
    },
    onInit() {
        console.log("Weather.js/onInit() evoked");
        this.weather.forEach(element => {
            element.icon = this.getWeather(element.weather.main);
            console.log(element.icon);
        });
    },

    changeQrColor() {
        if (this.qr_col == '#87ceeb') {
            this.qr_col = '#fa8072';
        } else {
            this.qr_col = '#87ceeb';
        }
    },
    changeBackgroundColor() {
        if (this.qr_bcol = '#f0ffff') {
            this.qr_bcol = '#ffffe0';
        } else {
            this.qr_bcol = '#f0ffff';
        }
    },
    changeQrValue() {
        if (this.qr_value == 'value') {
            this.qr_value = 'change';
        } else {
            this.qr_value = 'value';
        }
    },
    //另一种实现,长按方法
    toInfoPage(city) {
        console.log("city:"+city);
        router.replace({
            uri: 'pages/info/info',
            params: {
                city: city,
            },
        });
    },

    // TODO dumb method and params not only city
    toCityPage
    () {
        switch (this.city) {
            case 'Fuzhou':
                router.replace({
                    uri: 'pages/info/info',
                    params: {
                        city: 'Fuzhou',
                        weather_icon: "/pages/image/icons/cloud_weather_forecast_rain_cloudy.png",
                        //TODO if variable works
                        weather: this.weather.main,
                        //: this.main.temp
                        //: this.feels_like
                    },
                });
                break;
            case 'Fuqin':
                router.replace({
                    uri: 'pages/info/info',
                    params: {
                        city: 'Fuqin',
                        weather_icon: "/pages/image/icons/cloud_weather_forecast_rain_cloudy.png",
                        //TODO if variable works
                        weather: this.weather.main,
                        //: this.main.temp
                        //: this.feels_like
                    },
                });
        }
    },
    toAnotherPage(e) {
        switch (e.direction) {
            case 'right':
                router.replace({
                    uri: 'pages/launcher/launcher'
                });
                break;
        // case 'bottom':
        //     router.replace({
        //         uri: 'pages/report2/report2'
        //     });
        }
    }
,
    getWeather
    (
        weather
    ) {
        switch (weather) {
            case 'Clouds':
                return 'pages/image/icons/cloud_weather_forecast_rain_cloudy.png'
                break;
            case 'Rain':
                return 'pages/image/icons/forecast_rain_cloud_weather_raining.png'
                break;
            case 'Clear':
                return 'pages/image/icons/sunny_sun_weather_climate_forecast.png'
                break;
            default:
                break;
        }
    }
}
