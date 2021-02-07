const requestDAO = require('./requestDAO');

describe('Database users actions', () => {
  expect.hasAssertions();
  it('Read all users', async () => {
    const data = await requestDAO.getUsers();

    // Omit the creation date
    data.forEach((record) => {
      record.creation = null;
    });

    expect.hasAssertions();
    return expect(data).toStrictEqual([
      {
        id: 1,
        email: 'rosé&@yg-ent.kr',
        nickname: 'Rosé',
        name: 'Roseanne',
        show_name_publicly: true,
        surname: 'Park',
        show_surname_publicly: true,
        country: 'kr',
        show_country_publicly: false,
        gender: 'feminine',
        show_gender_publicly: false,
        profile_picture: null,
        show_profile_picture_publicly: false,
        profile_banner: null,
        show_profile_banner_publicly: false,
        creation: null,
      },
      {
        id: 2,
        email: '문.별@test.mail.com',
        nickname: 'Moonstar',
        name: '문',
        show_name_publicly: false,
        surname: '별이',
        show_surname_publicly: false,
        country: null,
        show_country_publicly: false,
        gender: 'unspecified',
        show_gender_publicly: false,
        profile_picture: null,
        show_profile_picture_publicly: false,
        profile_banner: null,
        show_profile_banner_publicly: false,
        creation: null,
      },
      {
        id: 3,
        email: 'jvna@redlightmanagement.com',
        nickname: 'JVNA',
        name: '',
        show_name_publicly: false,
        surname: '',
        show_surname_publicly: false,
        country: null,
        show_country_publicly: false,
        gender: 'unspecified',
        show_gender_publicly: false,
        profile_picture: null,
        show_profile_picture_publicly: false,
        profile_banner: null,
        show_profile_banner_publicly: false,
        creation: null,
      },
    ]);
  });
});

describe('Database public profile actions', () => {
  expect.hasAssertions();
  it('Read by valid nickname', async () => {
    const data = await requestDAO.getPublicProfileByNickame('Rosé');

    // Omit the creation date
    data.forEach((record) => {
      record.creation = null;
    });

    expect.hasAssertions();
    return expect(data).toStrictEqual([
      {
        id: 1,
        nickname: 'Rosé',
        name: 'Roseanne',
        show_name_publicly: true,
        surname: 'Park',
        show_surname_publicly: true,
        country: '',
        show_country_publicly: false,
        gender: 'hidden_publicly',
        show_gender_publicly: false,
        profile_picture: null,
        show_profile_picture_publicly: false,
        profile_banner: null,
        show_profile_banner_publicly: false,
        creation: null,
      },
    ]);
  });

  expect.hasAssertions();
  it('Read by invalid nickname', async () => {
    const data = await requestDAO.getPublicProfileByNickame('Rose');
    expect.hasAssertions();
    return expect(data).toStrictEqual([]);
  });

  expect.hasAssertions();
  it('Read by valid ID', async () => {
    const data = await requestDAO.getPublicProfileById(2);

    // Omit the creation date
    data.forEach((record) => {
      record.creation = null;
    });

    expect.hasAssertions();
    return expect(data).toStrictEqual([
      {
        id: 2,
        nickname: 'Moonstar',
        name: '',
        show_name_publicly: false,
        surname: '',
        show_surname_publicly: false,
        country: '',
        show_country_publicly: false,
        gender: 'hidden_publicly',
        show_gender_publicly: false,
        profile_picture: null,
        show_profile_picture_publicly: false,
        profile_banner: null,
        show_profile_banner_publicly: false,
        creation: null,
      },
    ]);
  });

  expect.hasAssertions();
  it('Read by invalid ID', async () => {
    const data = await requestDAO.getPublicProfileById(4);

    expect.hasAssertions();
    return expect(data).toStrictEqual([]);
  });
});
