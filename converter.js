const fs = require('fs');
_ = require('underscore');

const convertToJson = input => {
    fs.readFile(input, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        const lines = data.split('\n')
        const result = []
        const headers = lines[0].split(',')

        lines.map(l => {
            const obj = {}
            const line = l.split(',')

            headers.map((h, i) => {
                obj[h] = line[i]
            })

            result.push(obj)
        })
        return JSON.stringify(result);
      })
}

exports.convertToJson = convertToJson;