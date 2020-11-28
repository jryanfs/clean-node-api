module.exports =
class UnauthorizedError extends Error {
  constructor () {
    super('Internal Server Error')
    this.name = 'ServerError'
  }
}
