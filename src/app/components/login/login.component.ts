import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersApiService } from 'src/app/services/api/users-api.service';
import { AuthService } from 'src/app/services/auth.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    displayedColumns: string[] = ['role', 'name'];
    users: User[] = [];
    private roleIconNames: string[] = ["keyboard", "pets", "work", "question_mark"]

    constructor(private authSvc: AuthService,
        private usersApi: UsersApiService) {}

    ngOnInit(): void {
        this.usersApi.getUsers()
            .subscribe(users => {
                users.forEach(u => u.roleIconName = this.roleIconNames[u.roleId]);
                this.users = users});
    }

    onRowClicked(user: User) {
        this.authSvc.setCurrentUser(user);
    }
}