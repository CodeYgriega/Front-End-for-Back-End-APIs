import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreLaAppComponent } from './sobre-la-app.component';

describe('SobreLaAppComponent', () => {
  let component: SobreLaAppComponent;
  let fixture: ComponentFixture<SobreLaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreLaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreLaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
