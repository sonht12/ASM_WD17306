import { Component } from '@angular/core';
import { IHighlight } from 'src/app/interface/highlight';
import { HighlightService } from 'src/app/services/highlight.service';
@Component({
  selector: 'app-highlight-admin',
  templateUrl: './highlight-admin.component.html',
  styleUrls: ['./highlight-admin.component.css']
})
export class HighlightAdminComponent {
  highlights!: IHighlight[];
  constructor(private HighlightService:HighlightService){
    this.HighlightService.getHighlights().subscribe(data => {
      this.highlights = Array.from(data); 
      console.log(this.highlights);
    });
  }
  removeItem(id: any) {
    this.HighlightService.deleteHighlight(id).subscribe(() => {
      this.highlights = this.highlights.filter(item => item._id !== id)
    }, (error) => {
      console.log(error.message)
    })
  }

}
