import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from '../model/model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user?: User;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private userSvc: UsersService,
    private commonSvc: CommonService)
     {

      this.commonSvc.loading.subscribe((loading)=>{
        this.loading = loading;
      });

      this.route.params.subscribe((parameters) =>{
        if(parameters['id']){
          this.commonSvc.loading.next(true);
          this.userSvc.getSingleUser(parameters['id']).subscribe((response)=>{
            this.user = response.data;
            this.commonSvc.loading.next(false);
          });
        }
      });
    }

  ngOnInit(): void {
  }

}
