import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'typescript-express boilerplate',
      version: '1.0.0',
      description: 'Docs',
    },
  },

  apis:['./spec/api.yaml']
};


export default swaggerJSDoc(options)