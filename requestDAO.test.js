const requestDAO = require('./requestDAO');

describe('Database users actions', () => {
  expect.hasAssertions();
  it('Read all users', () => {
    return requestDAO.listUsers().then((data) => {
      expect.hasAssertions();
      return expect(data).toStrictEqual([
        { id: 1, email: 'fred@test.com', nickname: 'FrÉdéric' },
        { id: 2, email: 'ana@test.com', nickname: 'Anabelle' },
        { id: 3, email: '', nickname: 'Nicolas' },
        { id: 4, email: 'marie@test.ca-ac.com', nickname: '' },
      ]);
    });
  });

  expect.hasAssertions();
  it('Add a new user', () => {
    return requestDAO.listUsers().then((data) => {
      expect.hasAssertions();
      return expect(data).toStrictEqual([
        { id: 1, email: 'fred@test.com', nickname: 'FrÉdéric' },
        { id: 2, email: 'ana@test.com', nickname: 'Anabelle' },
        { id: 3, email: '', nickname: 'Nicolas' },
        { id: 4, email: 'marie@test.ca-ac.com', nickname: '' },
      ]);
    });
  });
});
