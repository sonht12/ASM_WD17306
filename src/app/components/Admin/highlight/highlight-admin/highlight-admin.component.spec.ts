import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightAdminComponent } from './highlight-admin.component';

describe('HighlightAdminComponent', () => {
  let component: HighlightAdminComponent;
  let fixture: ComponentFixture<HighlightAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightAdminComponent]
    });
    fixture = TestBed.createComponent(HighlightAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
