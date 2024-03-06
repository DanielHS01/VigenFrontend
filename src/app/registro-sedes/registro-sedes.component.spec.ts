import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSedesComponent } from './registro-sedes.component';

describe('RegistroSedesComponent', () => {
  let component: RegistroSedesComponent;
  let fixture: ComponentFixture<RegistroSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroSedesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
