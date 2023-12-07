import promptEnv from './prompts/prompt_env.js';
import promptCredentials from './prompts/prompt_credentials.js';
async function main() {
    const config = {};
    Object.assign(config, await promptEnv());
    Object.assign(config, await promptCredentials());
    console.table(config);
}
main();
