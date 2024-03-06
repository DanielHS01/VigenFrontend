import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginComponent } from './login/login.component';
import { RolesComponent } from './roles/roles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';

const routes: Routes = [

  {path: '', redirectTo:'/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent,},
  {path: 'aboutUs', component: AboutUsComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'roles', component: RolesComponent,},
  {path: 'registroUsuarios', component: RegistroUsuarioComponent,},
  {path: 'ayuda', component: AyudaComponent,},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
