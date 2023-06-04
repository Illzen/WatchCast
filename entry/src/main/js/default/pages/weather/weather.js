import router from '@system.router';

export default {
    data: {
        weather : [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
        main : {'temp': 25.94, 'feels_like': 26.97, 'temp_min': 25.94, 'temp_max': 25.94, 'pressure': 1004, 'humidity': 91, 'sea_level': 1004, 'grnd_level': 1003},
        sys : {'type': 1, 'id': 9658, 'country': 'CN', 'sunrise': 1685567465, 'sunset': 1685616615},
        name : Fuzhou,
    },
    onInit() {
        console.log("Weather.js/onInit() evoked")
    },
    switchWeatherCode(){
        // TODO switch {{weather.icon}}
        
        switch () {
		    case '50d':
			    weather_icon=" "
			    weather_quote="Forecast says it's misty \nMake sure you don't get lost on your way..."
			    weather_hex="#84afdb"
			    break;
		    case '50n':
			    weather_icon=" "
			    weather_quote="Forecast says it's a misty night \nDon't go anywhere tonight or you might get lost..."
			    weather_hex="#84afdb"
			    break;
		    case '01d':
    			weather_icon=" "
    			weather_quote="It's a sunny day, gonna be fun! \nDon't go wandering all by yourself though..."
    			weather_hex="#ffd86b"
    		    break;
    		case '01n':
    			weather_icon=" "
    			weather_quote="It's a clear night \nYou might want to take a evening stroll to relax..."
    			weather_hex="#fcdcf6"
    		    break;
    		case '02d':
    			weather_icon=" "
    			weather_quote="It's  cloudy, sort of gloomy \nYou'd better get a book to read..."
    			weather_hex="#adadff"
    		    break;
    		case '02n':
    			weather_icon=" "
    			weather_quote="It's a cloudy night \nHow about some hot chocolate and a warm bed?"
    			weather_hex="#adadff"
    		    break;
    		case '03d':
    			weather_icon=" "
    			weather_quote="It's  cloudy, sort of gloomy \nYou'd better get a book to read..."
    			weather_hex="#adadff"
    		    break;
    		case '03n':
    			weather_icon=" "
    			weather_quote="It's a cloudy night \nHow about some hot chocolate and a warm bed?"
    			weather_hex="#adadff"
    		    break;
    		case '04d':
    			weather_icon=" "
    			weather_quote="It's  cloudy, sort of gloomy \nYou'd better get a book to read..."
    			weather_hex="#adadff"
    		    break;
    		case '04n':
    			weather_icon=" "
    			weather_quote="It's a cloudy night \nHow about some hot chocolate and a warm bed?"
    			weather_hex="#adadff"
    		    break;
    		case '09d':
    			weather_icon=" "
    			weather_quote="It's rainy, it's a great day! \nGet some ramen and watch as the rain falls..."
    			weather_hex="#6b95ff"
    		    break;
    		case '09n':
    			weather_icon=" "
    			weather_quote=" It's gonna rain tonight it seems \nMake sure your clothes aren't still outside..."
    			weather_hex="#6b95ff"
    		    break;
    		case '10d':
    			weather_icon=" "
    			weather_quote="It's rainy, it's a great day! \nGet some ramen and watch as the rain falls..."
    			weather_hex="#6b95ff"
    		    break;
    		case '10n':
    			weather_icon=" "
    			weather_quote=" It's gonna rain tonight it seems \nMake sure your clothes aren't still outside..."
    			weather_hex="#6b95ff"
    		    break;
    		case '11d':
    			weather_icon=""
    			weather_quote="There's storm for forecast today \nMake sure you don't get blown away..."
    			weather_hex="#ffeb57"
    		    break;
    		case '11n':
    			weather_icon=""
    			weather_quote="There's gonna be storms tonight \nMake sure you're warm in bed and the windows are shut..."
    			weather_hex="#ffeb57"
    		    break;
    		case '13d':
    			weather_icon=" "
    			weather_quote="It's gonna snow today \nYou'd better wear thick clothes and make a snowman as well!"
    			weather_hex="#e3e6fc"
    		    break;
    		case '13n':
    			weather_icon=" "
    			weather_quote="It's gonna snow tonight \nMake sure you get up early tomorrow to see the sights..."
    			weather_hex="#e3e6fc"
    		    break;
    		case '40d':
    			weather_icon=" "
    			weather_quote="Forecast says it's misty \nMake sure you don't get lost on your way..."
    			weather_hex="#84afdb"
    		    break;
    		case '40n':
    			weather_icon=" "
    			weather_quote="Forecast says it's a misty night \nDon't go anywhere tonight or you might get lost..."
    			weather_hex="#84afdb"
    		    break;
    		default: 
    			weather_icon=" "
    			weather_quote="Sort of odd, I don't know what to forecast \nMake sure you have a good time!"
    			weather_hex="#adadff"
    			break;
        }
    },
    toDetailPage(){
        router.replace({
            uri: 'pages/info/info'
        });
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


}






