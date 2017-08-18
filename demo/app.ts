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
    <button (click)="changeText()">Change Text</button>
    <div style="height: 50px; width: 50px;" ellipsify>
      {{ text }}
    </div>
  `
})
class App {
  text: string;

  constructor() {
    this.text = 'a loooooooooooooooooooooooooooooooooooooooooog text';
  }

  changeText() {
    this.text = 'another looooooooooooooooooooooooooooooooooooooog text';
  }
}

@NgModule({
  imports: [BrowserModule, EllipsifyModule],
  declarations: [App],
  bootstrap: [App]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
