import { ValidationError } from "express-validator"; // Use to describe the requirements for the errors assigned to RequestValidationError

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Only b/c we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
