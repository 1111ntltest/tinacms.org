import * as core from '@actions/core'

export const main = async () => {
  try {
    const inputValue = core.getInput('SECRET_NAME');
    const inputValue2 = core.getInput('SECRET_NAME2');

    core.setOutput('output_name', 'output value');
  } catch (err) {
    core.setFailed(
      err instanceof Error || typeof err === 'string'? err : err + '');
  }
}

main()