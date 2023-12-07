import inquirer from 'inquirer';
const { prompt, Separator } = inquirer;
const questions = [
    {
        type: 'list',
        name: 'environment',
        message: 'Chose environment:',
        choices: ['production', 'development', Separator, 'Exit'],
    },
];
const getAnswers = async () => {
    const answer = await prompt(questions);
    console.table(answer);
};
export { getAnswers as default };
