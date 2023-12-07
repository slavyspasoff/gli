import process from 'process';
function quitOnExit(answer, questions) {
    if (typeof questions === 'string') {
        if (answer[questions] !== 'Exit')
            return;
        process.exit(-1);
    }
    else {
        const key = questions.at(-1)?.name;
        if (answer[key] !== 'Exit')
            return;
        process.exit(-1);
    }
}
export { quitOnExit };
