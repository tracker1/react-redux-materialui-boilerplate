import path from 'path';
import express from 'express';

export default async function registerApp(app) {
  app.use('/public', express.static(path.resolve(__dirname, '../../public')));
}
