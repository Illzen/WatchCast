import router from '@system.router';

export default {
    data: {
        lineData: [{
            strokeColor: '#0081ff',
            fillColor: '#cce5ff',
            data: [763, 550, 551, 554, 731, 654, 525, 696, 595, 628, 791, 505, 613, 575, 475, 553, 491, 680, 657, 716],
            gradient: true,
        }],
        lineOps: {
            xAxis: {
                min: 0,
                max: 20,
                display: false,
            },
            yAxis: {
                min: 0,
                max: 1000,
                display: false,
            },
            series: {
                lineStyle: {
                    width: "5px",
                    smooth: true,
                },
                headPoint: {
                    shape: "circle",
                    size: 10,
                    strokeWidth: 5,
                    fillColor: '#ffffff',
                    strokeColor: '#007aff',
                    display: true,
                },
                loop: {
                    margin: 2,
                }
            },
            sys: {
                'country': 'CN',
                'sunrise': 1685567465,
                'sunset': 1685616615
            },
            cod: 200,
            visibility: 10000,
            wind: {
                "speed": 0.44,
                "deg": 176,
                "gust": 0.72
            },
            clouds: {
                "all": 7
            },
            timezone: 28800,
            id: 1810821,
            city: 'Default',
            weather_quote: "It's a clear night \nYou might want to take a evening stroll to relax..."
        },


        onInit() {
            console.log("info.js/onInit is envoked");
            // TODO params such as city; city position; city air quality; wind speed......
            console.log("Current city: " + this.city);

        },

        addData() {
            this.$refs.linechart.append({
                serial: 0,
                data: [Math.floor(Math.random() * 400) + 400]
            })
        },


        toAnotherPage(e) {
            switch (e.direction) {
                case 'right':
                    router.replace({
                        uri: 'pages/weather/weather'
                    });
                    break;
                    // case 'bottom':
                    //     router.replace({
                    //         uri: 'pages/report2/report2'
                    //     });
            }
        },
    }
