const { object, string } = require('zod')

const userSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 characters minimun'),
    confirmPassword: string({
      required_error: 'confirm Password is required',
    }),
    email: string({ required_error: 'email is required' }).email(
      'not a valid email'
    ),
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'password donot match',
    path: ['password confirmation'],
  }),
})

module.exports = {
  userSchema,
}
