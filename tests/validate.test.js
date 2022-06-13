//Set Up
const validate = require('../src/helpers/validate')

describe ("valAlphanumeric validate function", () => {
    it ("should return true since 'hello 1' is valid", () => {
        const ans = validate.valAlphanumeric("hello 1");
        expect(ans).toBe(true);
    });

    it("should return true since 'hello1' is valid", () => {
      const ans = validate.valAlphanumeric("hello1");
      expect(ans).toBe(true);
    });

    it("should return true since 'uwiVotes 2022' is valid", () => {
      const ans = validate.valAlphanumeric("uwiVotes 2022");
      expect(ans).toBe(true);
    });

    it("should return false since '#Kool-K@t$ & Vote' is invalid", () => {
      const ans = validate.valAlphanumeric("#Kool-K@t$ & Vote");
      expect(ans).toBe(false);
    });

    it("should return false since '     ' is invalid", () => {
      const ans = validate.valAlphanumeric("     ");
      expect(ans).toBe(false);
    });

    it("should return false since '1111' is invalid", () => {
      const ans = validate.valAlphanumeric("1111");
      expect(ans).toBe(false);
    });

    it("should return false since parameter is null", () => {
        const ans = validate.valAlphanumeric(null);
        expect(ans).toBe(false);
    });

    it("should return false since parameter is empty string", () => {
      const ans = validate.valAlphanumeric("");
      expect(ans).toBe(false);
    });

    it("should return false since parameter is undefined", () => {
      const ans = validate.valAlphanumeric(undefined);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is boolean value (true)", () => {
      const ans = validate.valAlphanumeric(true);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is boolean value (false)", () => {
      const ans = validate.valAlphanumeric(false);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is null", () => {
      const ans = validate.valAlphanumeric(null);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is an object", () => {
      const ans = validate.valAlphanumeric({"test" : "obj"});
      expect(ans).toBe(false);
    });

    it("should return false since parameter is an integer", () => {
      const ans = validate.valAlphanumeric(7662);
      expect(ans).toBe(false);
    });

    it("should return false since parameter with 0 decimal is an integer", () => {
      const ans = validate.valAlphanumeric(7662.0);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is a float", () => {
      const ans = validate.valAlphanumeric(1.25);
      expect(ans).toBe(false);
    });
});

describe("valName validate function", () => {
    it("should return true since 'Naomi' is valid", () => {
      const ans = validate.valName("Naomi");
      expect(ans).toBe(true);
    });

    it("should return true since 'Le-Anna' is valid", () => {
      const ans = validate.valName("Le-Anna");
      expect(ans).toBe(true);
    });

    it("should return true since 'Le'Anna' is valid", () => {
      const ans = validate.valName("Le'Anna");
      expect(ans).toBe(true);
    });

    it("should return true since 'Ian Silvera, Jr.' is valid", () => {
      const ans = validate.valName("Ian Silvera, Jr.");
      expect(ans).toBe(true);
    });

    it("should return false since 'hello2' is invalid", () => {
      const ans = validate.valName("hello2");
      expect(ans).toBe(false);
    });

    it("should return false since 'uwiVotes 2022' is invalid", () => {
      const ans = validate.valName("uwiVotes 2022");
      expect(ans).toBe(false);
    });

    it("should return false since '#Kool-K@t$ & Vote' is invalid", () => {
      const ans = validate.valName("#Kool-K@t$ & Vote");
      expect(ans).toBe(false);
    });

    it("should return false since '     ' is invalid", () => {
      const ans = validate.valName("     ");
      expect(ans).toBe(false);
    });

    it("should return false since '1111' is invalid", () => {
      const ans = validate.valName("1111");
      expect(ans).toBe(false);
    });

    it("should return false since parameter is null", () => {
      const ans = validate.valName(null);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is empty string", () => {
      const ans = validate.valName("");
      expect(ans).toBe(false);
    });

    it("should return false since parameter is undefined", () => {
      const ans = validate.valName(undefined);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is boolean value (true)", () => {
      const ans = validate.valName(true);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is boolean value (false)", () => {
      const ans = validate.valName(false);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is null", () => {
      const ans = validate.valName(null);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is an object", () => {
      const ans = validate.valName({ test: "obj" });
      expect(ans).toBe(false);
    });

    it("should return false since parameter is an integer", () => {
      const ans = validate.valName(7662);
      expect(ans).toBe(false);
    });

    it("should return false since parameter with 0 decimal is an integer", () => {
      const ans = validate.valName(7662.0);
      expect(ans).toBe(false);
    });

    it("should return false since parameter is a float", () => {
      const ans = validate.valName(1.25);
      expect(ans).toBe(false);
    });
});

describe("valPassword validate function", () => {
  it("should return true since 'Naomi' is valid", () => {
    const ans = validate.valPassword("Naomi");
    expect(ans).toBe(true);
  });

  it("should return true since 'Le-Anna123' is valid", () => {
    const ans = validate.valPassword("Le-Anna123");
    expect(ans).toBe(true);
  });

  it("should return true since 'pwr&rdaa' is valid", () => {
    const ans = validate.valPassword("pwr&rdaa");
    expect(ans).toBe(true);
  });

  it("should return true since '#/%&$@@' is valid", () => {
    const ans = validate.valPassword("#/%&@@");
    expect(ans).toBe(true);
  });

  it("should return true since 'thesedays' is valid", () => {
    const ans = validate.valPassword("thesedays");
    expect(ans).toBe(true);
  });

  it("should return true since '789234111' is valid", () => {
    const ans = validate.valPassword("789234111");
    expect(ans).toBe(true);
  });

  it("should return true since 'hello2' is valid", () => {
    const ans = validate.valPassword("hello2");
    expect(ans).toBe(true);
  });

  it("should return false since 'hello 2' is invalid", () => {
    const ans = validate.valPassword("hello 2");
    expect(ans).toBe(false);
  });

  it("should return false since '     ' is invalid", () => {
    const ans = validate.valPassword("     ");
    expect(ans).toBe(false);
  });

  it("should return false since parameter is null", () => {
    const ans = validate.valPassword(null);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is empty string", () => {
    const ans = validate.valPassword("");
    expect(ans).toBe(false);
  });

  it("should return false since parameter is undefined", () => {
    const ans = validate.valPassword(undefined);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (true)", () => {
    const ans = validate.valPassword(true);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (false)", () => {
    const ans = validate.valPassword(false);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is null", () => {
    const ans = validate.valPassword(null);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is an object", () => {
    const ans = validate.valPassword({ "test" : "obj" });
    expect(ans).toBe(false);
  });

  it("should return flase since 789234111 is invalid", () => {
    const ans = validate.valPassword(789234111);
    expect(ans).toBe(false);
  });
});

describe("valEmail validate function", () => {
  it("should return true since 'naomi.benjamin@mymona.uwi.edu' is valid", () => {
    const ans = validate.valEmail("naomi.benjamin@mymona.uwi.edu");
    expect(ans).toBe(true);
  });

  it("should return true since 'matthew.palmer@mymona.uwi.edu' is valid", () => {
    const ans = validate.valEmail("matthew.palmer@mymona.uwi.edu");
    expect(ans).toBe(true);
  });

  it("should return true since 'naomi.benjamin02@mymona.uwi.edu' is valid", () => {
    const ans = validate.valEmail("naomi.benjamin02@mymona.uwi.edu");
    expect(ans).toBe(true);
  });

  it("should return false since 'naomi02.benjamin@mymona.uwi.edu' is invalid", () => {
    const ans = validate.valEmail("naomi02.benjamin@mymona.uwi.edu");
    expect(ans).toBe(false);
  });

  it("should return false since 'naomibenjamin@mymona.uwi.edu' is invalid", () => {
    const ans = validate.valEmail("naomibenjamin@mymona.uwi.edu");
    expect(ans).toBe(false);
  });

  it("should return false since 'jantae.leckie@gmail.com' is invalid", () => {
    const ans = validate.valEmail("jantae.leckie@gmail.com");
    expect(ans).toBe(false);
  });

  it("should return false since 'jantae.leckie@yahoo.com' is invalid", () => {
    const ans = validate.valEmail("jantae.leckie@yahoo.com");
    expect(ans).toBe(false);
  });

  it("should return false since 'jantae.leckie@hotmail.com' is invalid", () => {
    const ans = validate.valEmail("jantae.leckie@hotmail.com");
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (true)", () => {
    const ans = validate.valEmail(true);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (false)", () => {
    const ans = validate.valEmail(false);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is null", () => {
    const ans = validate.valEmail(null);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is an object", () => {
    const ans = validate.valEmail({ test: "obj" });
    expect(ans).toBe(false);
  });

  it("should return flase since 789234111 is invalid", () => {
    const ans = validate.valEmail(789234111);
    expect(ans).toBe(false);
  });
});