import logger from './logger';

export default (req, res, next) => {
  res.status(404).json({ 
    error: {
      name: 'NotFoundError',
      status: 404, 
      message: 'Not Found',
    },
  });
};
