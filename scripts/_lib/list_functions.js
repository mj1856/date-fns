import path from 'path'
import fs from 'fs'

export default function listFunctions() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  return files
    .filter((file) => !file.startsWith('.'))
    .map((file) => { return {name: camelize(file), path: `./${file}`, fullPath: `./src/${file}/index.js`} })
}

function camelize(str) {
  return str
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word
      } else if (word === 'iso') {
        return 'ISO'
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join('')
}
