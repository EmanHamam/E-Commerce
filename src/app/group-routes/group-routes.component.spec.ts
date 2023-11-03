import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRoutesComponent } from './group-routes.component';

describe('GroupRoutesComponent', () => {
  let component: GroupRoutesComponent;
  let fixture: ComponentFixture<GroupRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupRoutesComponent]
    });
    fixture = TestBed.createComponent(GroupRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
