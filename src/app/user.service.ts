
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  getUserDetails(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    console.log('Requesting user details from:', url); 

    return this.http.get(url).pipe(
      tap((data: any) => {
        console.log('User details response:', data); 
      })
    );
  }


}
