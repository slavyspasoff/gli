import process from 'process'
import { DistinctQuestion, Answers } from 'inquirer'

function quitOnExit<T extends Answers>(
  answer: Record<string, any>,
  questions: ReadonlyArray<DistinctQuestion<T>>
): void

function quitOnExit<T extends Answers>(
  answer: Record<string, any>,
  questions: string
): void

function quitOnExit(answer: any, questions: any): void {
  if (typeof questions === 'string') {
    if (answer[questions] !== 'Exit') return
    process.exit(-1)
  } else {
    const key = questions.at(-1)?.name as string
    if (answer[key] !== 'Exit') return
    process.exit(-1)
  }
}
export { quitOnExit }
