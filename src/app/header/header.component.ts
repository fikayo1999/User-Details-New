import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  query: string = ''; 
  userData: any;
  userDetails: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }



  searchUsers(query: string): void {
    const userId = parseInt(query, 10);
    if (!isNaN(userId)) {
      this.userService.getUserDetails(userId).subscribe(
        (data: any) => {
          this.userDetails = data;
          this.router.navigate(['/user-details', userId]);
        },
        (error) => {
          console.error('Error fetching user details:', error);
          this.userDetails = null; 
        }
      );
    } else {
      this.userDetails = null; 
    }
  }
    
    
}







