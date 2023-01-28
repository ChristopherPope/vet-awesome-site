import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersApiService } from 'src/app/services/api/users-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

    constructor(private authSvc: AuthService,
        private usersApi: UsersApiService) {}

    ngOnInit(): void {
        debugger
        let user:User = {
            name: "Bubba Fett",
            id: 1,
            roleId: 1,
            roleIconName: "typewriter"
        } ;

        this.usersApi.authenticateUser(user.id)
            .subscribe(() => {
                this.authSvc.setCurrentUser(user);
            });
    }
}
