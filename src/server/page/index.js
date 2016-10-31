
export default function registerApp(app) {
  app.use('/', (req, res) => {
    // TODO: load extra details...
    res.render('page', {});
  });
}
