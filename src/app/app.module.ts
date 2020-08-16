import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { ContinuaraPipe } from './continuara.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SwitchTestComponent,
    PipesTestComponent,
    ContinuaraPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
