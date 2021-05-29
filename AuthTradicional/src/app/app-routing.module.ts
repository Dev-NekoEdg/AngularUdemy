import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { AuthGuardGuard } from './securtity/auth-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuardGuard ] },
  { path: 'professor', component: ProfessorComponent },
  { path: 'student', component: StudentsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch:'full', redirectTo:'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
