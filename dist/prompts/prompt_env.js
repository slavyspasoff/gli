import inquirer from 'inquirer';
import { quitOnExit } from '../utils.js';
const { prompt, Separator } = inquirer;
const questions = [
    {
        type: 'list',
        name: 'language',
        message: 'Chose environment:',
        choices: ['Java', 'Kotlin', new Separator(), 'Exit'],
    },
    {
        type: 'list',
        name: 'environment',
        message: 'Chose environment:',
        choices: ['production', 'development', new Separator(), 'Exit'],
        when(answers) {
            quitOnExit(answers, 'language');
            return true;
        },
    },
];
const getAnswers = async () => {
    const answer = await prompt(questions);
    quitOnExit(answer, questions);
    return answer;
};
export { getAnswers as default };
