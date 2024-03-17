import { getArgs } from './options/args.js'
import { printHelp, printSucc, printErr, printWeather } from './output/console.js';
import { saveValue } from './options/storage.js';
import { getWeather } from './services/api.weather.js';


const initCLIWeather = async() => {
    printSucc(' Start app ... ');
    /*
    Pass all command line arguments to the function to process them.
    */
    const args = getArgs(process.argv);
    if (args.h) {
        /*
        If the -h argument is found in the console, display a hint.
        */
        printHelp();
    } else if (args.t) {
        /*
        If the -t argument is found in the console, save the token.
        */
        try {
            await saveValue('token', args.t);
            printSucc('Token saved');
        } catch (e) {
            printErr(e.message);
        }

    } else if (args.c) {
        /*
        Show the weather if a city is entered.
        */
        try {
            let res = await getWeather(args.c);
            printWeather(res);
        } catch (e) {
            printErr(e.message);
        }
    }
}

initCLIWeather();