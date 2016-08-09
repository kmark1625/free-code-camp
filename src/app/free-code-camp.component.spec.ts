import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FreeCodeCampAppComponent } from '../app/free-code-camp.component';

beforeEachProviders(() => [FreeCodeCampAppComponent]);

describe('App: FreeCodeCamp', () => {
  it('should create the app',
      inject([FreeCodeCampAppComponent], (app: FreeCodeCampAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'free-code-camp works!\'',
      inject([FreeCodeCampAppComponent], (app: FreeCodeCampAppComponent) => {
    expect(app.title).toEqual('free-code-camp works!');
  }));
});
