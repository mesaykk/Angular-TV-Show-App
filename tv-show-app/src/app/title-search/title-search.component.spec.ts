import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleSearchComponent } from './title-search.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TitleSearchComponent', () => {
  let component: TitleSearchComponent;
  let fixture: ComponentFixture<TitleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule

      ],
      declarations: [ TitleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
