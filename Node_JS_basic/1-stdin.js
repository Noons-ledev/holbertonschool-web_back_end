console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const name = data;
  process.stdout.write(`Your name is: ${name}`);
  process.stdin.pause();
  if (process.stdin.isTTY) {
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
