import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

/*
We use join to create a file path more intelligently,
as well as homedir to get the path to the home directory regardless of the operating system.
*/
const pathFile = join(homedir(), 'weather.json');


/*
we use promises so as not to block the flow and not receive a callback.
*/
export const saveValue = async(key, value) => {
    const data = {
        [key]: value
    };
    await promises.writeFile(pathFile, JSON.stringify(data));
};

/*
We check the presence of the file. If successful, return the value by key.
*/
export const getValue = async(key) => {
    if (await isExist(pathFile)) {
        const file = await promises.readFile(pathFile);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
};


/*
The function checks whether the file exists at the specified path.
If the file exists returns true.
*/
const isExist = async(path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }
};