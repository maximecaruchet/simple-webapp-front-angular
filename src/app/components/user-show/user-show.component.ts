import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Metadata } from '../../models/metadata';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.list().subscribe(
      // Success
      (data: Metadata) => {
        const metadata = new Metadata(data);
        this.users = metadata.getDataArray();
      },

      // Error
      (err: HttpErrorResponse) => {
        console.error('error list users', err);
      },
    );
  }

}
