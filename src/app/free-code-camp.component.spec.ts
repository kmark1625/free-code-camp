import {
  addProviders,
  inject
} from '@angular/core/testing';
import { FreeCodeCampAppComponent } from '../app/free-code-camp.component';

beforeEach(() => {
  addProviders([FreeCodeCampAppComponent]);
});

describe('App: FreeCodeCamp', () => {
  it('should create the app',
      inject([FreeCodeCampAppComponent], (app: FreeCodeCampAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Free Code Camp\'',
      inject([FreeCodeCampAppComponent], (app: FreeCodeCampAppComponent) => {
    expect(app.title).toEqual('Free Code Camp');
  }));
});
