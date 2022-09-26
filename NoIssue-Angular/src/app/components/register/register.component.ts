import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email:string = '';
  password:string='';

  constructor(private auth : AuthService) { }

  onRegister() {
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
