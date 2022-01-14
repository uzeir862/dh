import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpurtunityFinderComponent } from './opurtunity-finder.component';

describe('OpurtunityFinderComponent', () => {
  let component: OpurtunityFinderComponent;
  let fixture: ComponentFixture<OpurtunityFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpurtunityFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpurtunityFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
