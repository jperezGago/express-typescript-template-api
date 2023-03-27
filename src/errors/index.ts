export class CustomError extends Error {
  statusCode: number

  constructor(statuscode: number, message: string) {
    super(message)
    this.statusCode = statuscode
  }
}
