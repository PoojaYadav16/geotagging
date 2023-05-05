import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private service:UserService)
  {

  }
  public  itemdata= [
    {"img": "assets/assets/images/meeting-04.jpg" , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {"img": "assets/assets/images/meeting-04.jpg"  , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {"img": "assets/assets/images/meeting-04.jpg"  , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {"img": "assets/assets/images/meeting-04.jpg" , "para": "Some quick example text to build on the card title and make up the bulk of the card's content."},
    
    
  ]
  title = 'forms';
    process(data:any)
    {
      console.log(data);
      
      this.service.login(data).subscribe((result)=>{
        console.log(result);
      });
    }
  

}


