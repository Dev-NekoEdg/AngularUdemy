import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'student', component: StudentsComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
