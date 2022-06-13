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

  it("should return false since parameter is undefined", () => {
    const ans = validate.valEmail(undefined);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is an object", () => {
    const ans = validate.valEmail({ test: "obj" });
    expect(ans).toBe(false);
  });

  it("should return false since 789234111 is invalid", () => {
    const ans = validate.valEmail(789234111);
    expect(ans).toBe(false);
  });
});

describe("valOTP validate function", () => {
  it("should return true since 'ABC123' is valid", () => {
    const ans = validate.valOTP("ABC123");
    expect(ans).toBe(true);
  });

  it("should return true since '123ABC' is valid", () => {
    const ans = validate.valOTP("123ABC");
    expect(ans).toBe(true);
  });

  it("should return true since 'A1B2C3' is valid", () => {
    const ans = validate.valOTP("A1B2C3");
    expect(ans).toBe(true);
  });

  it("should return true since '1A2B3C' is valid", () => {
    const ans = validate.valOTP("1A2B3C");
    expect(ans).toBe(true);
  });

  it("should return true since 'ABCDEF' is valid", () => {
    const ans = validate.valOTP("ABCDEF");
    expect(ans).toBe(true);
  });

   it("should return true since '123456' is valid", () => {
     const ans = validate.valOTP("123456");
     expect(ans).toBe(true);
   });

  it("should return false since 'ABCDEFG' is invalid", () => {
    const ans = validate.valOTP("ABCDEFG");
    expect(ans).toBe(false);
  });

  it("should return false since 'ABCDE' is invalid", () => {
    const ans = validate.valOTP("ABCDE");
    expect(ans).toBe(false);
  });

  it("should return true since '1234567' is invalid", () => {
    const ans = validate.valOTP("1234567");
    expect(ans).toBe(false);
  });

  it("should return true since '12345' is invalid", () => {
    const ans = validate.valOTP("12345");
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (true)", () => {
    const ans = validate.valOTP(true);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (false)", () => {
    const ans = validate.valOTP(false);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is null", () => {
    const ans = validate.valOTP(null);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is an object", () => {
    const ans = validate.valOTP({ test: "obj" });
    expect(ans).toBe(false);
  });

  it("should return false since 789234111 is invalid", () => {
    const ans = validate.valOTP(789234111);
    expect(ans).toBe(false);
  });

  it("should return false since 789234 is invalid", () => {
    const ans = validate.valOTP(789234);
    expect(ans).toBe(false);
  });
});

describe("valDate validate function", () => {
  it("should return true since '2022-09-01' is valid", () => {
    const ans = validate.valDate("2022-09-01");
    expect(ans).toBe(true);
  });

  it("should return true since '2022-06-12' is valid", () => {
    const ans = validate.valDate("2022-06-12");
    expect(ans).toBe(true);
  });

  it("should return true since '2021-06-12' is valid", () => {
    const ans = validate.valDate("2021-06-12");
    expect(ans).toBe(true);
  });

  it("should return false since '2022-13-12' is invalid", () => {
    const ans = validate.valDate("2022-13-12");
    expect(ans).toBe(false);
  });

  it("should return false since '202-13-12' is invalid", () => {
    const ans = validate.valDate("202-13-12");
    expect(ans).toBe(false);
  });

  it("should return false since '2022-12-33' is invalid", () => {
    const ans = validate.valDate("2022-12-33");
    expect(ans).toBe(false);
  });

  it("should return false since '2022/12/30' is invalid", () => {
    const ans = validate.valDate("2022/12/30");
    expect(ans).toBe(false);
  });

  it("should return false since '01/2001/01' is invalid", () => {
    const ans = validate.valDate("01/2001/01");
    expect(ans).toBe(false);
  });

  it("should return false since '01/01/2001' is invalid", () => {
    const ans = validate.valDate("01/01/2001");
    expect(ans).toBe(false);
  });

  it("should return false since '01012001' is invalid", () => {
    const ans = validate.valDate("01012001");
    expect(ans).toBe(false);
  });

  it("should return false since 'June 2, 2022' is invalid", () => {
    const ans = validate.valDate("June 2, 2022");
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (true)", () => {
    const ans = validate.valDate(true);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is boolean value (false)", () => {
    const ans = validate.valDate(false);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is null", () => {
    const ans = validate.valDate(null);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is undefined", () => {
    const ans = validate.valDate(undefined);
    expect(ans).toBe(false);
  });

  it("should return false since parameter is an object", () => {
    const ans = validate.valOTP({ test: "obj" });
    expect(ans).toBe(false);
  });
});