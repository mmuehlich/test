import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
