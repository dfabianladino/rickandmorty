import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcharactersComponent } from './detailcharacters.component';

describe('DetailcharactersComponent', () => {
  let component: DetailcharactersComponent;
  let fixture: ComponentFixture<DetailcharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
