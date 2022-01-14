import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGraderComponent } from './listing-grader.component';

describe('ListingGraderComponent', () => {
  let component: ListingGraderComponent;
  let fixture: ComponentFixture<ListingGraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGraderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
