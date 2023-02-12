import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { environment } from 'src/environments/environment';
import { BaseApiService } from './base-api-service';
import { catchError } from 'rxjs';
import { Dayjs } from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsApiService extends BaseApiService {
    private apiUrl = environment.apiUrl + "/appointments"

    constructor(private http: HttpClient) {
        super();
    }

    getAppointments(inclusiveStart: Date, inclusiveEnd: Date) {
        const params = new HttpParams()
            .set("inclusiveStart", inclusiveStart.toISOString())
            .set("inclusiveEnd", inclusiveEnd.toISOString());

            return this.http.get<Appointment[]>(this.apiUrl, { params })
            .pipe(catchError(this.handleError));
    }
}
