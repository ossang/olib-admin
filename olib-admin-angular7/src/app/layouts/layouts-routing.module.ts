import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent }     from './layouts.component';

export const routes: Routes = [
  {
      path: '', component: LayoutsComponent,
      children: [
        { path: "menu1", loadChildren: "../modules/example/example.module#ExampleModule"},
        { path: "menu2", loadChildren: "../modules/example-menu/example-menu.module#ExampleMenuModule"},
        { path: "single", loadChildren: "../modules/single/single.module#SingleModule"}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { 

  // constructor(
  //   private jsonService : JsonService
  // ){
  //   this.initializeRoutes();
  // }

  // toModuleName(name : string){
  //   if(name){
  //     let minusIndex = name.indexOf('-');
  //     if(minusIndex > 0){
  //       let newName = name.substring(0,minusIndex) + name.charAt(minusIndex+1).toLocaleUpperCase() + name.substring(minusIndex+2, name.length);
  //       return this.toModuleName(newName);
  //     }
  //     return name.charAt(0).toLocaleUpperCase() + name.slice(1,name.length)+"Module";
  //   }
  // }

  // initializeRoutes(){

  //   this.jsonService.getMenu().subscribe(res=>{
  //     Object.keys(res.menu).forEach(key=>{
  //       let module = res.menu[key].module;
  //       let path = res.menu[key].path;
  //       let moduleName = this.toModuleName(module);
        
  //       routes[0].children.push({path:path,loadChildren:'../modules/'+module+"/"+module+".module#"+moduleName});
  //       console.log(routes[0])
  //     });
  //   });
  // }
}
