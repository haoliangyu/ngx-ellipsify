import 'zone.js';
import 'reflect-metadata';
import 'rxjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EllipsifyModule } from '../src/module';

@Component({
  selector: 'app-demo',
  template: `
    <div style="height: 50px; width: 50px;" ellipsify>
      a loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog text
    </div>
  `,
})
class App {
  name: string;

  constructor() {
    console.log('hh');
    this.name = 'test';
  }
}

@NgModule({
  imports: [BrowserModule, EllipsifyModule],
  declarations: [App],
  bootstrap: [App]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
