const handlebars = require('handlebars')
const nodeSass   = require('node-sass')

const stylesheetList = [
  {
    inputFile: 'src/theme-dark.scss',
    outputFile: 'public/css/theme-dark.css'
  }, {
    inputFile: 'src/theme-light.scss',
    outputFile: 'public/css/theme-light.css'
  }
]

stylesheetList.forEach((elem)=>{
  nodeSass.render({
    file: elem.inputFile,
    outFile: elem.outputFile,
    outputStyle: 'compressed'
  }, (e,r)=>{
    if(e) {
      console.log(e.message)
    } else {
      console.log(`[node-sass] Build for file ${elem.inputFile} complete, result placed under ${elem.outputFile}.`)
    }
  })
})
