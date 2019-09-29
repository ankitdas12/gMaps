import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { GmapComponent } from './module/gmap/gmap.component';


const routes: Routes = 
[
  
  { 
    path: 'module', 
    component: ModuleComponent,
    // children: [
    //   {
    //     path: 'gmap', 
    //     component: GmapComponent,
    //   }
    // ] 
  },
  { path: '**', redirectTo: 'module' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
