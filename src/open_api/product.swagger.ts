
const index = {
  tags: ['Products'],
  description: "List all existent products on database",
  operationId: "getProducts",
  responses: {
    "200": {
      description: "A list of products.",
      "content": {
      "application/json": {
        schema: {
          type: "array",
          items:{
            type: "object",
              properties: {
                name: {
                  type: 'string',
                  description: "Product Name"
                },
                price: {
                  type: "number",
                  description: "Product Price"
                },
                size: {
                  type: "number",
                  description: "Product Size"
                },
                weight: {
                  type: "number",
                  description: "Product Weight"
                },
                color: {
                  type: "string",
                  description: "Product Color"
                }
              }
            }
          }
        }
      }
    }
  }
}

const show = {
  tags: ["Products"],
  description: "Present the data of one specific product based on id",
  operationId: "getProducts",
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Id of the product',
      required: true,
      schema: {
        type: 'string'
      }
    }
  ],
  responses: {
    "200": {
      description: "One product information.",
      "content": {
      "application/json": {
        schema: {
          type: "object",
          properties: {
              name: {
                type: 'string',
                description: "Product Name"
              },
              price: {
                type: "number",
                description: "Product Price"
              },
              size: {
                type: "number",
                description: "Product Size"
              },
              weight: {
                type: "number",
                description: "Product Weight"
              },
              color: {
                type: "string",
                description: "Product Color"
              }
            }
          }
        }
      }
    }
  }
}

const create = {
  tags: ["Products"],
  description: "Create products on the system",
  operationId: "postProduct",
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Id of the product',
      required: true,
      schema: {
        type: 'string'
      }
    },
    {
      name: 'name',
      in: 'body',
      description: 'Name of the product.',
      required: false
    },
    {
      name: 'price',
      in: 'body',
      description: 'Price of the product.',
      required: false
    },
    {
      name: 'size',
      in: 'body',
      description: 'Size of the product.',
      required: false
    },
    {
      name: 'weight',
      in: 'body',
      description: 'Weight of the product.',
      required: false
    },
    {
      name: 'color',
      in: 'body',
      description: 'Color of the product.',
      required: false
    }
  ],
  responses: {
    "200": {
      description: "Product created successfully",
      "content": {
      "application/json": {
        schema: {
          type: "array",
          items:{
            type: "object",
              properties: {
                name: {
                  type: 'string',
                  description: "Product Name"
                },
                price: {
                  type: "number",
                  description: "Product Price"
                },
                size: {
                  type: "number",
                  description: "Product Size"
                },
                weight: {
                  type: "number",
                  description: "Product Weight"
                },
                color: {
                  type: "string",
                  description: "Product Color"
                }
              }
            }
          }
        }
      }
    }
  }
}

const update = {
  tags: ["Products"],
  description: "Update products based on id",
  operationId: "patchProduct",
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Id of the product',
      required: true,
      schema: {
        type: 'string'
      }
    },
    {
      name: 'name',
      in: 'body',
      description: 'Name of the product.',
      required: false
    },
    {
      name: 'price',
      in: 'body',
      description: 'Price of the product.',
      required: false
    },
    {
      name: 'size',
      in: 'body',
      description: 'Size of the product.',
      required: false
    },
    {
      name: 'weight',
      in: 'body',
      description: 'Weight of the product.',
      required: false
    },
    {
      name: 'color',
      in: 'body',
      description: 'Color of the product.',
      required: false
    }
  ],
  responses: {
    "200": {
      description: "Product updated successfully.",
      "content": {
      "application/json": {
        schema: {
          type: "object",
          properties: {
              n: {
                type: 'integer',
                description: "Number of itens sent to be updated"
              },
              nModified: {
                type: "integer",
                description: "Number of itens modified"
              },
              ok: {
                type: "integer",
                description: "Number of itens updated successfully"
              }
            }
          }
        }
      }
    }
  }
}

const destroy =  {
  tags: ["Products"],
  description: "Delete products based on id",
  operationId: "deleteProduct",
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Id of the product',
      required: true,
      schema: {
        type: 'string'
      }
    }
  ],
  responses: {
    "200": {
      description: "Product deleted successfully",
      "content": {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            n: {
              type: 'integer',
              description: "Number of itens sent to be deleted"
            },
            ok: {
              type: "integer",
              description: "Number of itens deleted"
            },
            deletedCount: {
              type: "integer",
              description: "Number of itens deleted successfully"
            }
            }
          }
        }
      }
    }
  }
}



module.exports = {
  index,
  show ,
  create ,
  update ,
  destroy
}
