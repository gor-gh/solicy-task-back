exports.pageNotFound = (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'The requested endpoint was not found.',
    data: null,
  });
}
exports.internalServerError = (error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    status: 'failed',
    message: error.message,
    data: null,
  });
}