import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { PcateComponent } from './component/product/pcate/pcate.component';
import { PlistComponent } from './component/product/plist/plist.component';
import { SettingComponent } from './component/home/setting/setting.component';
import { WelcomeComponent } from './component/home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    PcateComponent,
    PlistComponent,
    SettingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
