const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

const basicInformation = {
    info: {
        version: "1.0.0",
        title: "AntognoniWebApp",
        description: "Complemento de Documentación"
    },
}
swaggerAutogen(outputFile, endpointsFiles, basicInformation);