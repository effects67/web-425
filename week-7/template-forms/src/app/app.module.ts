import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    FlexLayoutModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
