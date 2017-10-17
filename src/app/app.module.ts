import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

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
    ]),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent, MainComponent]
})
export class AppModule { }
