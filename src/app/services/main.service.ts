import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  makeAnyDataGetRequest(fullUrl: string): Observable<any> {
    return this.http.get<any>(fullUrl);
  }

  makeDataPostRequest(fullUrl: string, data: any): Observable<any> {
    return this.http.post<any>(fullUrl, data);
  }

  showSnackBarMessage(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
