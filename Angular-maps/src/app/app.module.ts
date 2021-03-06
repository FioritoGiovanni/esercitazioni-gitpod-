import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyB-qsa3XVqn2eycx5uF9iKY5e7LUIp_GT0'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
