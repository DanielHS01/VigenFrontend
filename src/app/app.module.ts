import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FaIconLibrary,  FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RolesComponent } from './roles/roles.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroOrganizacionComponent } from './registro-organizacion/registro-organizacion.component';
import { RegistroSedesComponent } from './registro-sedes/registro-sedes.component';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RolesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    RegistroOrganizacionComponent,
    RegistroSedesComponent,
    RegistroUsuarioComponent,
    InformacionUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
 }
