import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDeatilsComponent } from './planet-deatils.component';

describe('PlanetDeatilsComponent', () => {
  let component: PlanetDeatilsComponent;
  let fixture: ComponentFixture<PlanetDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
