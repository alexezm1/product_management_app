import { Router } from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, hideProduct, updateAvailability, updateProduct } from '../controllers/product'
import { createProductValidation, getProductByIdValidation, patchValidation, updateProductValidation } from '../middleware'

const productRouter = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties: 
 *              id:
 *                  type: integer
 *                  description: Product Id
 *                  example: 1
 *              name:
 *                  type: string
 *                  description: Product Name
 *                  example: "Mouse Logitech"
 *              price:
 *                  type: number
 *                  description: Product Price
 *                  example: "300"
 *              availability:
 *                  type: boolean
 *                  description: Product Availability
 *                  example: true
 *              hidden:
 *                  type: boolean
 *                  description: Product Hidden. Use to hide product from appearing in UI
 *                  example: true
 */

/**
 * @swagger
 * /api/products:
 *  get: 
 *      summary: Get a list of products
 *      tags:
 *          - Products
 *      description: Return a list of products
 *      responses: 
 *          200: 
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 */
productRouter.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return a product by its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to return
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: Product Not Found
 *          400:
 *              description: Bad Request - Invalid ID
 */

productRouter.get('/:id', getProductByIdValidation, getProductById)

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Updated a Product with user input
 *      tags:
 *          - Products
 *      description: Returns the updated product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to return
 *          required: true
 *          schema:
 *              type: integer
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Mouse Logitech"
 *                          price:
 *                              type: number
 *                              example: 399
 *                          availability:
 *                              type: boolean
 *                              example: true
 *                          hidden:
 *                              type: boolean
 *                              example: false
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: Product Not Found
 *          400:
 *              description: Bad Request - Invalid ID or Invalid Input Data
 */

productRouter.put('/:id', getProductByIdValidation, updateProductValidation, updateProduct)

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Update Product Availability
 *      tags:
 *          - Products
 *      description: Return the updated availability
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to return
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: Product Not Found
 *          400:
 *              description: Bad Request - Invalid ID
 */

productRouter.patch('/:id', getProductByIdValidation, patchValidation, updateAvailability)

/**
 * @swagger
 * /api/products/{id}/hide:
 *  patch:
 *      summary: Hide Product. Prevents the product to be shown in UI
 *      tags:
 *          - Products
 *      description: Return the updated hidden property
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to return
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: Product Not Found
 *          400:
 *              description: Bad Request - Invalid ID
 */

productRouter.patch('/:id/hide', getProductByIdValidation, patchValidation, hideProduct)

/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Create a new Product
 *      tags:
 *          - Products
 *      description: Return a new Product record in the database
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Mouse Logitech"
 *                          price:
 *                              type: number
 *                              example: 399
 *      responses:
 *          201:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid Input Data
 */

productRouter.post('/', createProductValidation, createProduct)

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Delete Product
 *      tags:
 *          - Products
 *      description: Deletes product from database and Returns a confirmation message. NOT RECOMMENDED - Instead use PATCH request to hide product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to return
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          value: "Product has been deleted"
 *                                      
 *          404:
 *              description: Product Not Found
 * 
 */

productRouter.delete('/:id', getProductByIdValidation, deleteProduct)

export { productRouter }

