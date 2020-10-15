import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

import { ValidationErrorsInterface } from '../interfaces/ValidationErrorsInteface';

export const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrorsInterface = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });
  
    return response.status(400).json({ message: 'Validation Fails', errors });
  }

  console.error(error);
  return response.status(500).json({ message: 'Internal Server Error' });
};
