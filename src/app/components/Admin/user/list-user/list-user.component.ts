import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users!: IUser[];
  constructor(private abc:AuthService){
    this.abc.getUsers().subscribe(data=>{
      this.users=data
      console.log(this.users);
      
    })
  }
  xoauser(id:any){
    this.abc.deleteUser(id).subscribe(()=> {
      this.users=this.users.filter(item=>item._id !==id)
    })
  }
}
