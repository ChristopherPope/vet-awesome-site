import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from '../../../environments/environment';
import { BaseApiService } from './base-api-service';

@Injectable({
    providedIn: 'root'
})
export class UsersApiService extends BaseApiService {
    private apiUrl = environment.apiUrl + "/users/"

    constructor(private http: HttpClient) {
        super();
    }

    getUsers() {
        return this.http.get<User[]>(this.apiUrl)
            .pipe(catchError(this.handleError));
    }

    authenticateUser(userId: number) {
        return this.http.post(this.apiUrl, userId)
            .pipe(catchError(this.handleError));
    }
}
