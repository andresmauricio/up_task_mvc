export const success = (req, res, status = 200, data) => {
  return res.status(status).json({ status, error: null, data });
};
