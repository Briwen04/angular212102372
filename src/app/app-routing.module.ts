import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { ContactComponent } from './contact/contact.component';
import { OtentikasiGuard } from './otentikasi.guard';
import { ForexComponent } from './forex/forex.component';
import { CuacaComponent } from './cuaca/cuaca.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate : [OtentikasiGuard]},
  { path: 'dashboard2', component: Dashboard2Component, canActivate : [OtentikasiGuard]},
  { path: 'dashboard3', component: Dashboard3Component, canActivate : [OtentikasiGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mahasiswa', component: MahasiswaComponent, canActivate : [OtentikasiGuard]},
  { path: 'contact', component: ContactComponent},
  { path: 'forex', component: ForexComponent, canActivate : [OtentikasiGuard]},
  { path: 'cuaca', component: CuacaComponent, canActivate : [OtentikasiGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
