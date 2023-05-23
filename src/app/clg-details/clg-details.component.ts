import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-clg-details',
  templateUrl: './clg-details.component.html',
  styleUrls: ['./clg-details.component.css']
})
export class ClgDetailsComponent {
  public cdetail:any;
  public vtour:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private sanitizer: DomSanitizer)
  {
      console.log(data);
      this.cdetail=data[0];
  }
  showTour(data:any)
  {
    console.log(data);
    // let d=data.split(" ");
    // console.log(d[5]);
    // this.vtour=d[5].slice(5,(d[5].length-1));
    // d.{{ variable | slice:start:end }}  
  //  this.vtour= this.sanitizer.bypassSecurityTrustUrl(d);
    this.vtour=data;
    const iframe:any =  document.getElementById('vtourframe') as HTMLIFrameElement;
    iframe.contentWindow.location.replace(this.vtour);

    // console.log(this.vtour);
  }
}
