import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    user = {} as User;
    unsubscribe$: Subject<User> = new Subject();

    constructor(private authSvc: AuthService) {
    }

    ngOnInit(): void {
        this.authSvc.getCurrentUserObs()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(user => this.user = user);
    }

    ngOnDestroy(): void {
        this.unsubscribe$.complete();
    }
}
