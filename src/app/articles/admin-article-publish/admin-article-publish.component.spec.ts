import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlePublishComponent } from './admin-article-publish.component';

describe('AdminArticlePublishComponent', () => {
  let component: AdminArticlePublishComponent;
  let fixture: ComponentFixture<AdminArticlePublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticlePublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
