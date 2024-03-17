import minimist from 'minimist';

export const getArgs = (args) => {
    /*
    We discard the first 2 elements from the argument array,
    since the first is the path to the node executable file,
    and the second is the path to the script.
    */
    return minimist(args.slice(2));
};