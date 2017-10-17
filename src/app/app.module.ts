import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin.component';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    MnFullpageModule.forRoot(),

    RouterModule.forRoot([
      {
        path: 'admin',
        component: AdminComponent
      }, 
      {
        path: 'main',
        component: MainComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, MainComponent]
})
export class AppModule { }
