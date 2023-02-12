import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { AppointmentsApiService } from 'src/app/services/api/appointments-api.service';
import { UsersApiService } from 'src/app/services/api/users-api.service';
import { AuthService } from 'src/app/services/auth.service';
import * as dayjs from 'dayjs'
import 'dayjs/locale/en'

dayjs.locale('en');
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
    appointments: Appointment[] = [];

    constructor(private appointmentsApi: AppointmentsApiService) {}

    ngOnInit(): void {
        const inclusiveStart = dayjs().startOf('day').toDate();
        const inclusiveEnd = dayjs().endOf('day').toDate();
        this.appointmentsApi
            .getAppointments(inclusiveStart, inclusiveEnd)
            .subscribe(appointments => {
                this.appointments = appointments;
            });
    }
}
