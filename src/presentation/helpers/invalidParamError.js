module.exports =
class InvalidParamError extends Error {
  constructor (paramName) {
    super(`Param invalid : ${paramName} `)
    this.name = 'InvalidParamError'
  }
}
