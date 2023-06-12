import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HighlightService } from 'src/app/services/highlight.service';
import { IHighlight } from 'src/app/interface/highlight';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highlight-add',
  templateUrl: './highlight-add.component.html',
  styleUrls: ['./highlight-add.component.css']
})
export class HighlightAddComponent {
  constructor(
    private formBuilder : FormBuilder,
    private HighlightService:HighlightService,
    private Router: Router
    ) {

  }
  highlightForm = this.formBuilder.group({
    name: [''],
    Video: [''],
    description: [''],
  })
  onHandleSubmit() {
    if (this.highlightForm.valid) {
      const highlight: IHighlight = {
        name: this.highlightForm.value.name || "",
        Video: this.highlightForm.value.Video || "",
        description: this.highlightForm.value.name || "",
      }
      this.HighlightService.addHighlight(highlight).subscribe(data => {
        console.log(data)
        this.Router.navigate(['/admin/highlight']);
      })
    }
  }
}
