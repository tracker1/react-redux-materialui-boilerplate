const env = process.env;

const express = {
  httpPort: env.PORT || 8080,
};

export default {
  isDev: env.NODE_ENV === 'development',
  express,
};
