const env = process.env;

const express = {
  httpPort: env.PORT || 3000,
};

export default {
  isDev: env.NODE_ENV === 'development',
  express,
};
