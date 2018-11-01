/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubePlayerDialogComponent } from './youtube-player-dialog.component';


describe('YoutubeModalPlayerComponentComponent', () => {
  let component: YoutubePlayerDialogComponent;
  let fixture: ComponentFixture<YoutubePlayerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubePlayerDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
