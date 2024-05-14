

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  userDetails: any; 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
      private userService: UserService,
       private location: Location) { }


  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const userId = +params['userId'];
  //     if (!isNaN(userId)) {
  //       this.userId = userId;
  //       this.loadUserDetails(this.userId);
  //     } else {     
  //       this.router.navigate(['/user-list']); 
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['userId'];
      if (!isNaN(userId)) {
        this.userId = userId;
        this.loadUserDetails(this.userId);
      }
    });
  }
  

  loadUserDetails(userId: number): void {
    this.http.get(`https://reqres.in/api/users/${userId}`).subscribe(
      (data: any) => {
        this.userDetails = data.data;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/user-list']);
     
  }

  searchUserById(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }
  

}


