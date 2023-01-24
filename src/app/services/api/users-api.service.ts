import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersApiService {
    private apiUrl = environment.apiUrl + "/users/"

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>(this.apiUrl);
    }
}
