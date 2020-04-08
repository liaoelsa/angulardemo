import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { WelcomeComponent } from './component/home/welcome/welcome.component';
import { SettingComponent } from './component/home/setting/setting.component';
import { PcateComponent } from './component/product/pcate/pcate.component';
import { PlistComponent } from './component/product/plist/plist.component';


const routes: Routes = [
  {
    path:"home", component: HomeComponent,
    children:[
      {path: "welcome", component: WelcomeComponent},
      {path: "setting", component: SettingComponent},
      {path: "**", redirectTo: "welcome"}
    ]
  },
  {
    path:"product", component: ProductComponent,
    children:[
      {path:"cate", component: PcateComponent},
      {path:"list", component: PlistComponent},
      {path:"**", redirectTo: "cate"}
    ]
  },
  {path:"**", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
