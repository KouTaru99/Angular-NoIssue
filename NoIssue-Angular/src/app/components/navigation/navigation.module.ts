import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DragDropComponent } from '../drag-drop/drag-drop.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { IssueComponent } from '../issue/issue.component';
import { CreateProjectComponent } from '../project/create-project/create-project.component';
import { EditProjectComponent } from '../project/edit-project/edit-project.component';
import { ProjectComponent } from '../project/project.component';

const routes: Routes = [

  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'edit-profile', component: EditProfileComponent },
  // { path: 'drag-drop', component: DragDropComponent },
  // { path: 'project', component: ProjectComponent },
  // { path: 'edit-project', component: EditProjectComponent },
  // { path: 'create-project', component: CreateProjectComponent },
  // { path: 'issue', component: IssueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationModule {}
