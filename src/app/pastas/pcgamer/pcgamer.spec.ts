import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pcgamerComponent } from './pcgamer';

describe('pcgamerComponent', () => {
  let component: pcgamerComponent;
  let fixture: ComponentFixture<pcgamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pcgamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pcgamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
