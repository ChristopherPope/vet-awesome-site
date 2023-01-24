import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);

    constructor() {}

    getCurrentUserObs(): Observable<User> {
        return this.currentUser$.asObservable();
    }

    setCurrentUser(user: User) {
        this.currentUser$.next(user);
    }
}
