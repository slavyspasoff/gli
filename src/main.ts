import promptEnv, { type AnswerEnv } from './prompts/prompt_env.js'
import promptCredentials, {
  type AnswerCredential,
} from './prompts/prompt_credentials.js'

type Config = AnswerEnv & AnswerCredential

async function main() {
  const config: Config = {} as Config

  Object.assign(config, await promptEnv())
  Object.assign(config, await promptCredentials())

  console.table(config)
}

main()
