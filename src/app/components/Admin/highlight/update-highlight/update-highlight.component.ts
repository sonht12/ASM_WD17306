import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IHighlight } from 'src/app/interface/highlight';
import { HighlightService } from 'src/app/services/highlight.service';
@Component({
  selector: 'app-update-highlight',
  templateUrl: './update-highlight.component.html',
  styleUrls: ['./update-highlight.component.css']
})
export class UpdateHighlightComponent {
  highlight!: IHighlight;
  highlightForm = this.formBuilder.group({
    name: [''],
    Video: [''],
    description: [''],
  })
  constructor(
    private HighlightService: HighlightService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.HighlightService.getHighlight(id).subscribe(highlight => {
        // Sản phẩm dựa theo ID
        this.highlight = highlight;

        this.highlightForm.patchValue({
          name: highlight.name,
          Video: highlight.Video,
          description: highlight.description
        })
      })
    })

  }
  onHandleEdit() {
    if (this.highlightForm.valid) {
      const highlight: IHighlight = {
        _id: this.highlight._id,
        name: this.highlightForm.value.name || "",
        Video: this.highlightForm.value.Video || "",
        description: this.highlightForm.value.description || "",
      }

      this.HighlightService.updateHighlight(highlight).subscribe(data => {
        console.log(data)
      })
    }

  }
}
