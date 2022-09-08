import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule,DxTileViewModule } from "devextreme-angular";
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DxDrawerModule,
    DxListModule,
    DxRadioGroupModule,
    DxToolbarModule,
    DxTileViewModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
