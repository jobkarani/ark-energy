import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRecsComponent } from './i-recs.component';

describe('IRecsComponent', () => {
  let component: IRecsComponent;
  let fixture: ComponentFixture<IRecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IRecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
