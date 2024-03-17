import chalk from 'chalk';

/*
Making more beautiful text output to the console using chalk.
*/

export const printErr = (err) => {
    console.log(chalk.red(' ERROR: ') + err);
};

export const printSucc = (msg) => {
    console.log(chalk.green(' SUCCESS: ') + msg);
};

export const printHelp = () => {
    console.log(`${chalk.yellow(' HELPER: ')}
    ${chalk.green(' -c {CITY} to display the weather in the city ')}
    ${chalk.yellow(' -h for a hint ')}
    ${chalk.bgRed(' to view the weather, set the token using -t {TOKEN} ')}`);
};

export const printWeather = (data) => {
    console.log(chalk.blue(' Weather: '));
    console.log(`
    In the city ${data.name}
    ${data.weather[0].description}
    Temperature ${data.main.temp}
    `);
};