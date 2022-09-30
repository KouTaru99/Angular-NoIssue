import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectObj:Project = {
    id: '',
    name: '',
    description: '',
    created_date: '',
    deadline: '',
    status: true
  }
  id= ''
  name= ''
  description= ''
  created_date= ''
  deadline= ''
  status = true
  constructor(private data:ProjectService, acRoute:ActivatedRoute) {

   }


  ngOnInit(): void {

  }

  onUpdateProject(project:Project) {
  this.id = project.id
  console.log(this.id);

  }


  resetForm() {
    this.id= ''
    this.name= ''
    this.description= ''
    this.created_date= ''
    this.deadline= ''
    this.status = true
  }
}
