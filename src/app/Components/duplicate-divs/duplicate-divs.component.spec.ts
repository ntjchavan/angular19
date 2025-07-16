import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateDivsComponent } from './duplicate-divs.component';

describe('DuplicateDivsComponent', () => {
  let component: DuplicateDivsComponent;
  let fixture: ComponentFixture<DuplicateDivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateDivsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
