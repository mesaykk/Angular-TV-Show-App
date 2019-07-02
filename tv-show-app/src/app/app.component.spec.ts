import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvService } from './tv/tv.service';
import { TvServiceFake } from './tv/tv.service.fake';

import { AppComponent } from './app.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { TitleSearchComponent } from './title-search/title-search.component';
import { TvCastComponent } from './tv-cast/tv-cast.component';
import { TvEpisodeComponent } from './tv-episode/tv-episode.component';
import { LandingComponent } from './landing/landing.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatDividerModule
      ],
      declarations: [
        AppComponent,
        ShowResultComponent,
        TitleSearchComponent,
        TvCastComponent,
        TvEpisodeComponent,
        LandingComponent
      ],
      providers: [{provide: TvService, useClass: TvServiceFake}],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tv-show-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tv-show-app');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Brows');
  });
});
