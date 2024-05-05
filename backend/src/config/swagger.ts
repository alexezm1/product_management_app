import swaggerJSDoc from 'swagger-jsdoc'
import { SwaggerUiOptions } from 'swagger-ui-express'

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [{
            name: 'Products',
            description: 'API operations related to products'
        }],
        info: {
            title: 'REST API Node.js / Express / Typescript',
            version: "1.0.0",
            description: "API Docs for Products"
        }
    },
    apis: ['./src/routes/productRouter.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUIOptions: SwaggerUiOptions = {
    customSiteTitle: 'REST API Product Management App Documentation'
}

export {
    swaggerSpec,
    swaggerUIOptions
}

