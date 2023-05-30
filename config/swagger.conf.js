const path = require('path');

const processDirectory = process.cwd();

const jsDocs = [
  path.relative(processDirectory, path.resolve(__dirname, '..', 'controllers')) + '\\*_{version}.js',
  path.relative(processDirectory, path.resolve(__dirname, '..', 'data')) + '\\*_{version}.js',
];

const definition = {
  openapi: "3.0.0",
  info: {
    title: "Example Express Swagger",
    description:
      "This is an example web api made with Express and documented with Swagger",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
};

const getSwaggerOptions = function(version) {
  return { 
    definition: {
      ...definition,
      info: {
        ...definition.info,
        version,
      }
    }, 
    apis: jsDocs.map(x => x.replace('{version}', version))
  }
}

module.exports = { getSwaggerOptions };
