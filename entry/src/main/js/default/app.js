import file from '@system.file';
export default {
    onCreate() {
        console.info("Application onCreate");
        file.readText({
            uri: 'pages/weather/json/weather.json',
            success: function(data) {
                console.log(data.text);
            },
            fail: function(data, code) {
                console.error("fail " + code + ' ' + data.toString());
            }
        })
    },
    onDestroy() {
        console.info("Application onDestroy");
    }
};
