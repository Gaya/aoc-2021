import fs from 'fs/promises'

fs.readdir(__dirname)
  .then((files) => files.filter((file) => file.match(/^(\d+)+.+$/)))
  .then(async (files) => {
    console.time('total time');

    await Promise.all(files.map((dir) => import(`${__dirname}/${dir}`)));

    console.timeEnd('total time');
  });
