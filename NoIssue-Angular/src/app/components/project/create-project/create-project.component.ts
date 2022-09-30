import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
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
  acRoute: any;
  constructor(private data:ProjectService, acRoute:ActivatedRoute) {
    

   }

  ngOnInit(): void {

  }

  addProject() {
    this.projectObj.id = '';
    this.projectObj.name= this.name;
    this.projectObj.description= this.description;
    this.projectObj.created_date= this.created_date;
    this.projectObj.deadline= this.deadline;
    this.projectObj.status= this.status;

    this.data.addProject(this.projectObj);
    this.resetForm();

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
