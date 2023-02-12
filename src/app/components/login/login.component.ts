import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/enums/user-role';
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
        private router: Router,
        private usersApi: UsersApiService) {}

    ngOnInit(): void {
        this.usersApi.getUsers()
            .subscribe(users => {
                let user = null;
                users.forEach(u => 
                    {
                        u.roleIconName = this.roleIconNames[u.roleId];
                        alert(`${u.name} ${u.roleId}`)
                        if (u.roleId == UserRole.Secretary)
                        {
                            user = u;
                        }
                    });
                this.users = users;
                alert(user == null); 
                if (user != undefined)
                {
                    this.onRowClicked(user);
                }
            });
    }

    onRowClicked(user: User) {
        this.usersApi.authenticateUser(user.id)
            .subscribe(() => {
                this.authSvc.setCurrentUser(user);
                this.router.navigate(["/appointments"]);
            });
    }
}
