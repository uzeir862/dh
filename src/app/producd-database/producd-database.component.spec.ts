import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducdDatabaseComponent } from './producd-database.component';

describe('ProducdDatabaseComponent', () => {
  let component: ProducdDatabaseComponent;
  let fixture: ComponentFixture<ProducdDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducdDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducdDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
