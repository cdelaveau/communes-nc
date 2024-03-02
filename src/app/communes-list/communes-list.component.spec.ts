import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunesListComponent } from './communes-list.component';

describe('CommunesListComponent', () => {
  let component: CommunesListComponent;
  let fixture: ComponentFixture<CommunesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
