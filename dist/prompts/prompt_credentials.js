import inquirer from 'inquirer';
const { prompt, Separator } = inquirer;
import { join, sep } from 'path';
import { cwd } from 'process';
import { readFile } from 'fs/promises';
import { quitOnExit } from '../utils.js';
const getInputCredentials = async () => {
    const questions = [
        {
            type: 'input',
            name: 'username',
            message: 'Enter username (Exit to exit): ',
            validate(input) {
                if (input === 'Exit') {
                    process.exit(-1);
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'password',
            message: 'Enter username (Exit to exit):',
            validate(input) {
                if (input === 'Exit') {
                    process.exit(-1);
                }
                return true;
            },
        },
    ];
    return await prompt(questions);
};
const getCredentials = async () => {
    const question = [
        {
            type: 'list',
            name: 'readFromFile',
            message: 'Should the credentials be read from a file?',
            choices: ['Yes', 'No', new Separator(), 'Exit'],
        },
    ];
    const isReadFromFile = await prompt(question);
    quitOnExit(isReadFromFile, question);
    let answer;
    if (isReadFromFile.readFromFile === 'Yes') {
        const path = join(cwd(), sep, 'secret.json');
        console.log(path);
        const file = await readFile(path, { encoding: 'utf-8' });
        answer = JSON.parse(file);
        return answer;
    }
    else {
        answer = await getInputCredentials();
        return answer;
    }
};
export { getCredentials as default };
