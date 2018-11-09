const quest = require('quest')
const fs = require('fs')

const PACKD_URL = 'https://packd.now.sh/'

exports.fetch = name => quest.fetch(PACKD_URL + name)
exports.download = (name, dest) =>
  new Promise((resolve, reject) => {
    quest
      .stream(PACKD_URL + name)
      .on('error', reject)
      .pipe(fs.createWriteStream(dest))
      .on('finish', () => resolve())
  })
