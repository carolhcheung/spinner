const spinPin = ['|', '/', '-', '\\', '|', '/', '-', '|', '\n'];
let delay = 0;
for (let pin of spinPin) {
  setTimeout(() => {
    process.stdout.write(`\r${pin}   `);
  }, delay);
  delay += 100;
};