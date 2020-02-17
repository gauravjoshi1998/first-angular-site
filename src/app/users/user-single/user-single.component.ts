import { Component, OnInit } from '@angular/core';
import { UsersModule } from '../users.module';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  user;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //grab the username out of the URL
    this.route.params.subscribe(params =>{
      const username = params['username'];

      //use the userService to get the data from the github API 
      this.userService
      .getUser(username)
      .subscribe(user => this.user = user);
  });
    
  }
  
}
