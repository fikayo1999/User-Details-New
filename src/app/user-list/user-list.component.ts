
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('cardHover', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('hover', style({
        transform: 'scale(1.05)'
      })),
      transition('normal => hover', animate('200ms ease-in')),
      transition('hover => normal', animate('200ms ease-out'))
    ])
  ]
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage = 1;
  searchQuery = '';
  totalPages: number = 0;
  pageSize: number = 10;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this.userService.getUsers(page).subscribe(
      (data: any) => {
        this.users = data.data;
        this.totalPages = Math.ceil(data.total / this.pageSize);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


  nextPage(): void {
    if (this.currentPage < this.totalPages) { 
      this.currentPage++;
      this.loadUsers(this.currentPage);
    }
  }
  
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers(this.currentPage);
    }
  }


}
