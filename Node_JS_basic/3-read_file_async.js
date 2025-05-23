const fs = require('node:fs/promises');

function readDatabase(path) {
  return fs.readFile(path, 'utf8');
}

async function countStudents(path) {
  try {
    const data = await readDatabase(path);
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

    process.stdout.write(`Number of students: ${totalStudents}\n`);
    for (const [field, names] of Object.entries(studentsByField)) {
      process.stdout.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
