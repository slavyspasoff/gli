import inquirer, { DistinctQuestion } from 'inquirer'
import { quitOnExit } from '../utils.js'
const { prompt, Separator } = inquirer

type Answer = {
  language: string
  environment: string
}

const questions: ReadonlyArray<DistinctQuestion<Answer>> = [
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
      quitOnExit(answers, 'language')
      return true
    },
  },
]

const getAnswers = async () => {
  const answer = await prompt(questions)
  quitOnExit(answer, questions)
  return answer
}

export { getAnswers as default, type Answer as AnswerEnv }
