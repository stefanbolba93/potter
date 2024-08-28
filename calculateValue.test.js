const calculateValue = require("./calculateValue");

describe("calculateValue", () => {
  it("should return 0.00 if the wrong data type is passed", () => {
    expect(calculateValue({})).toBe("0.00");
  });

  it("should return 0.00 if no books are passed", () => {
    expect(calculateValue([])).toBe("0.00");
  });

  it("should return 8.00 if one book is passed", () => {
    expect(calculateValue(["book1"])).toBe("8.00");
  });

  it("should return 15.20 if two different books are passed", () => {
    expect(calculateValue(["book1", "book2"])).toBe("15.20");
  });

  it("should return 21.60 if three different books are passed", () => {
    expect(calculateValue(["book1", "book2", "book3"])).toBe("21.60");
  });

  it("should return 16.00 if two same books are passed", () => {
    expect(calculateValue(["book1", "book1"])).toBe("16.00");
  });

  it("should return 24.00 if three same books are passed", () => {
    expect(calculateValue(["book1", "book1", "book1"])).toBe("24.00");
  });

  it("should return 25.60 if four different books are passed", () => {
    expect(calculateValue(["book1", "book2", "book3", "book4"])).toBe("25.60");
  });

  it("should return 30 if five different books are passed", () => {
    expect(calculateValue(["book1", "book2", "book3", "book4", "book5"])).toBe(
      "30.00"
    );
  });

  it("should return 51.60 if five different books are passed", () => {
    expect(
      calculateValue([
        "book1",
        "book1",
        "book2",
        "book2",
        "book3",
        "book3",
        "book4",
        "book5",
      ])
    ).toBe("51.60");
  });
});
