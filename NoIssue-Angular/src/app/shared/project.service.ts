import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private afs:AngularFirestore) { }

  // get all projects
  getAllProject() {
    return this.afs.collection('/Projects').snapshotChanges();
  }

  // add project
  addProject(project:Project) {
    project.id = this.afs.createId();
    return this.afs.collection('Projects').add(project);
  }

  // delete project

  deleteProject(project:Project) {
    return this.afs.doc('/Projects/' +project.id).delete();
  }

  updateProject(project:Project) {
    // this.deleteProject(project);
    // this.addProject(project);
    this.afs.doc('Project').update(project);

  }

}
