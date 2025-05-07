// For standalone component approach look below
/*
  import { bootstrapApplication } from '@angular/platform-browser';

  import { AppComponent } from './app/app.component';
  import { HeaderComponent } from './app/header/header.component';

  bootstrapApplication(AppComponent).catch((err) => console.error(err));
  bootstrapApplication(HeaderComponent).catch((err)=>console.error(err));
*/

// For Module approach look below

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
