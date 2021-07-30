export const success = (req, res, status = 200, data) => {
  return res.status(status).json({ status, error: null, data });
};

export const errorResponse = (req, res, status = 500, data) => {
  return res.status(status).json({ status, error: true, data });
};

