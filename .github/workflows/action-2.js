import * as core from '@actions/core'

export const main = async () => {
  try {
    const inputValue = core.getInput('input_name');

    core.setOutput('output_name', 'output value');
  } catch (err) {
    core.setFailed(
      err instanceof Error || typeof err === 'string'? err : err + '');
  }
}

main()