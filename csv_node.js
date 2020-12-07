const fs = require('fs')
const args = process.argv.slice(2)


fs.readFile('employees.csv', 'utf8', function(err, data) {
  if (err) {
    console.log(err.message)
    return;
  }
  let headers = data.split(/\r?\n/)[0]
  headers = headers.split(",")
  let objectEmployee = {}

  data.split(/\r?\n/).forEach(function(row) {
    row.split(',').forEach(function(column, columnIndex) {
      if (columnIndex == 0 && column == args[0] ) {
        row.split(',').map(function(column, columnIndex) {
        objectEmployee[headers[columnIndex]] = column        
      })
      return
    }
    })  
  })

  
  if (args[1] != "" && args[1] != null) {
    console.log(objectEmployee[args[1]])
  } else {
    console.log(objectEmployee)
  }

})