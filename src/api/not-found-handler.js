// If a request was not resolve, raise a 440 error
export default (req, res, next) => next({
  message: 'Not Found',
  code: 404,
});
