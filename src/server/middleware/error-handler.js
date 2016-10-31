/* eslint no-unused-vars:"off" */

import fclone from 'fclone';
import logger from '../logger';

function errorHandler(err, req, res, next) {
  const message = (err && String(err.message).toString().trim()) || 'Unexpected Server Error';
  const errorObject = Object.assign(
    {
      title: 'Error',
      status: 500,
    },
    typeof err === 'object' ? fclone(err) : { message }
  );

  res.status(errorObject.status || 500);

  if (req.accepts('json')) {
    res.json({ ...errorObject, stack: undefined });
  } else {
    res.render('error', errorObject);
  }
}

export default async function registerApp(app) {
  app.get('/error', async (req, res) => {
    throw new Error('Test Error.');
  });
  app.use(errorHandler);
}
