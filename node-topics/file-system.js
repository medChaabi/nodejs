import fs from 'fs';


//readfile
fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//write file
fs.writeFile('text.txt', 'hello world', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
