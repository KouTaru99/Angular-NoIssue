import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { AuthService } from 'src/app/shared/auth.service';
import { ProjectService } from 'src/app/shared/project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects:Project[] = [];

  projectObj:Project = {
    id: '',
    name: '',
    description: '',
    created_date: '',
    deadline: '',
    status: true
  }
  id:string= ''
  name:string= ''
  description:string= ''
  created_date:string= ''
  deadline:string= ''
  status:boolean = true
  displayedColumns: string[] = ['id', 'name', 'created_date', 'deadline', 'status', 'description'];
  dataSource = this.projects;

  constructor(private auth: AuthService, private data:ProjectService) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject() {
    this.data.getAllProject().subscribe(res => {

      this.projects = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    },err => {
      alert('Something went wrong. Please try again')
    })
  }

  addProject() {
    this.projectObj.id = '';
    this.projectObj.name= this.name;
    this.projectObj.description= this.description;
    this.projectObj.created_date= this.created_date;
    this.projectObj.deadline= this.deadline;
    this.projectObj.status= this.status;

    this.data.addProject(this.projectObj);
    console.log(this.projects);

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


  updateProject(project:Project) {
    this.projectObj.id = '';
    this.projectObj.name= this.name;
    this.projectObj.description= this.description;
    this.projectObj.created_date= this.created_date;
    this.projectObj.deadline= this.deadline;
    this.projectObj.status= this.status;

    this.data.updateProject(this.projectObj);
    console.log(this.projects);
  }

  deleteProject(project:Project) {
    if (window.confirm('Are you sure about that you want to delete ' + project.name)) {
      this.data.deleteProject(project);
    }
  }



}
