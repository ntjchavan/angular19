import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindapidataComponent } from './bindapidata.component';

describe('BindapidataComponent', () => {
  let component: BindapidataComponent;
  let fixture: ComponentFixture<BindapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindapidataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
