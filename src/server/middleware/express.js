import path from 'path';
import helmet from 'helmet';
import hpp from 'hpp';
import bodyParser from 'body-parser';
import cfg from '../config';


export default async function addExpressMiddleware(app) {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.set('port', cfg.express.port);

  // some secure headers
  app.use(helmet.xssFilter());
  app.use(helmet.frameguard('sameorigin'));
  app.use(helmet.hidePoweredBy());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());

  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(bodyParser.json());

  app.use(hpp());
}
