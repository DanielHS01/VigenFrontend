import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrganizacionComponent } from './home-organizacion.component';

describe('HomeOrganizacionComponent', () => {
  let component: HomeOrganizacionComponent;
  let fixture: ComponentFixture<HomeOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOrganizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
