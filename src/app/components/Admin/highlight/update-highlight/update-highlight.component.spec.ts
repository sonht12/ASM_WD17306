import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHighlightComponent } from './update-highlight.component';

describe('UpdateHighlightComponent', () => {
  let component: UpdateHighlightComponent;
  let fixture: ComponentFixture<UpdateHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHighlightComponent]
    });
    fixture = TestBed.createComponent(UpdateHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
