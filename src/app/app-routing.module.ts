import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginComponent } from './login/login.component';
import { RolesComponent } from './roles/roles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { RegistroOrganizacionComponent } from './registro-organizacion/registro-organizacion.component';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';
import { InformacionOrganizacionComponent } from './informacion-organizacion/informacion-organizacion.component';
import { HomeOrganizacionComponent } from './home-organizacion/home-organizacion.component';
import { FormComponent } from './form/form.component';

const extraOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [

  {path: '', redirectTo:'/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent,},
  {path: 'aboutUs', component: AboutUsComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'roles', component: RolesComponent,},
  {path: 'registroUsuarios', component: RegistroUsuarioComponent,},
  {path: 'ayuda', component: AyudaComponent,},
  {path: 'registroOrganizacion', component: RegistroOrganizacionComponent,},
  {path: 'informacionUsuario', component: InformacionUsuarioComponent,},
  {path: 'homeOrganizacion', component: HomeOrganizacionComponent,},
  {path: 'informacionOrganizacion', component: InformacionOrganizacionComponent,},
  {path: 'forms', component: FormComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  ngOnInit(): void {
    const routing = RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
  }
 }
