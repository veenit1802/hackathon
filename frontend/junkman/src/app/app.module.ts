import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconModule } from '@progress/kendo-angular-icons';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ScrollviewComponent } from './homepage/scrollview/scrollview.component';
import { FormsModule } from '@angular/forms';
import { CardimageComponent } from './homepage/cardimage/cardimage.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FooterComponent } from './footer/footer.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DropDownButton, DropDownButtonModule } from '@progress/kendo-angular-buttons';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScrollviewComponent,
    CardimageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    NavigationModule,
    IconModule,
    ScrollViewModule,
    FormsModule,
    LayoutModule,
    ScrollViewModule,
    GridModule,
    DropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
