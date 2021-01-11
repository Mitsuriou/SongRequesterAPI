const requestDAO = require("./requestDAO");

test("Read full users list from database", () => {
  return requestDAO.listUsers().then((data) => {
    expect(data).toStrictEqual([
      { id: 1, email: "fred@test.com", nickname: "FrÉdéric" },
      { id: 2, email: "ana@test.com", nickname: "Anabelle" },
      { id: 3, email: "", nickname: "Nicolas" },
      { id: 4, email: "marie@test.ca-ac.com", nickname: "" },
    ]);
  });
});
