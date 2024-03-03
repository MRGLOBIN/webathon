const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const { _ } = require('ajv')
const ajv = new Ajv()

addFormats(ajv) // adding formats to ajv

ajv.addKeyword({
  keyword: 'passMatch',
  type: 'string',
  schemaType: 'boolean',
  error: {
    message: 'Password  donot match',
  },
  code(context) {
    // const {data, schema} =  context
    const password = data.password
    const confirm = data.passwordConfirmation
    context.fail(_`${password} !== ${confirm}`)
  },
})


ajv.addKeyword({
  keyword: 'bottom',
  type: 'object',
  schemaType: 'boolean',
  error: {
    message: "hello this is wrong "
  },
  code(context){
    const something = data.bottom?.color?._background

  
  }
})


const createUserSchema = {
  type: 'object',
  
  properties: {
    name: { type: 'string' },
    password: { type: 'string', minLength: 3 },
    passwordConfirmation: { type: 'string', minLength: 3, passMatch: true, },
    email: { type: 'string', format: 'email' },
    bottom: { type: 'object', }
  },
}

const data = {
  name: 'hello world',
  password: 'ztm hello',
  passwordConfirmation: 'ztm hell',
  email: 'xyz@gmail.com',
}

const validate = ajv.compile(createUserSchema)
const isvalid = validate(data)
console.log(isvalid)
console.log(validate.errors)

module.exports = {
  validate,
}
