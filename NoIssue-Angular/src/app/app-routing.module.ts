import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { IssueComponent } from './components/issue/issue.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { ProjectComponent } from './components/project/project.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  {
    path: 'navigation',
    component: NavigationComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'drag-drop', component: DragDropComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'edit-project', component: EditProjectComponent },
      { path: 'create-project', component: CreateProjectComponent },
      { path: 'issue', component: IssueComponent },
    ],
  },

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
