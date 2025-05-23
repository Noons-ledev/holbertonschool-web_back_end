const express = require('express');
const fs = require('node:fs/promises');
const path = require('path');

const app = express();
const host = 'localhost';
const port = 1245;

async function countStudents(dbPath) {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const firstnameIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    const validLines = lines.slice(1).filter((line) => line.trim() !== '');
    const totalStudents = validLines.length;

    const studentsByField = validLines
      .map((line) => line.split(','))
      .reduce((acc, fields) => {
        const field = fields[fieldIndex];
        const firstname = fields[firstnameIndex];

        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(firstname);
        return acc;
      }, {});

    let response = `Number of students: ${totalStudents}`;
    for (const [field, names] of Object.entries(studentsByField)) {
      response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return response;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = path.join(__dirname, 'database.csv');
  try {
    const output = await countStudents(databasePath);
    res.type('text').send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
