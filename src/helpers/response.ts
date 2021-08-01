import { validationResult } from "express-validator";

export const success = (req, res, status = 200, data) => {
  return res.status(status).json({ status, error: null, data });
};

export const errorResponse = (req, res, status = 500, data) => {
  return res.status(status).json({ status, error: true, data });
};

export const errorValidations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(req, res, 400, errors.array());
  }
  next();
};

