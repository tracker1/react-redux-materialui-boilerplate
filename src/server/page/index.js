import path from 'path';

export default function registerApp(app) {
  // TODO: detect if valid route, for now, always send the app html
  app.use('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
  });
}
