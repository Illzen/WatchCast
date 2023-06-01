import router from '@system.router';

export default {
    data: {
        title: ""
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
    }
}


