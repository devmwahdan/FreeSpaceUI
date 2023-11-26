import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangePostComponent } from './mange-post.component';

describe('MangePostComponent', () => {
  let component: MangePostComponent;
  let fixture: ComponentFixture<MangePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
