import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightAddComponent } from './highlight-add.component';

describe('HighlightAddComponent', () => {
  let component: HighlightAddComponent;
  let fixture: ComponentFixture<HighlightAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightAddComponent]
    });
    fixture = TestBed.createComponent(HighlightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
