import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { provideRouter } from '@angular/router';
// import routeConfig from './app/routes';
import { AppModule } from './app/app.module';
// import * as dotenv from 'dotenv';

// dotenv.config();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
