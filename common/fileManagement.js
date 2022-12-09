import fs from 'fs'
import events from 'events'
import readline from 'readline'

export async function readFileIterator(path,callback) {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(path),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      callback(line)      
    });

    await events.once(rl, 'close');

    const used = process.memoryUsage().heapUsed / 1024 / 1024;
  } catch (err) {
    console.error(err);
  }
}