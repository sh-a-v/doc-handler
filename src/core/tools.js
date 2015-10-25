export let checkArgs = args => {
  if (!args) {
    throw 'Error: required arg is missing!';
  }
}
