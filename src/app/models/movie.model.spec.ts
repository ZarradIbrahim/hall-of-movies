import { Movie } from './movie.model';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie(null,null,null,null,null,null,null,null,null)).toBeTruthy();
  });
});
