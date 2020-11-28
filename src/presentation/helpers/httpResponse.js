const MissingParamError = require('./missingParamError')
const UnauthorizedError = require('./unauthorizedError')
const ServerError = require('./serverError')

module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static internalServerError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static success (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
