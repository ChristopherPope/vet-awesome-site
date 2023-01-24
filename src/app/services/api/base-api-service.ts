import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export abstract class BaseApiService {

    protected handleError(error: HttpErrorResponse) {
        if (error.status == 0) {
            console.error("A client side error occurred:", error.error);
        }
        else {
            console.error(`Http status ${error.status}, error: `, error.error);
        }

        return throwError(() => new Error("Bad bad bad!"));
    }
}