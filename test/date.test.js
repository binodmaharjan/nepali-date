const dates = require('./../index');
const dateUtils = require('./../constants');
let date = new dates(2020,2,14);

  test('week of day', () => {
    expect(date.get_day_of_week(1)).toBe("Sunday");
    expect(date.get_day_of_week(2)).toBe("Monday");
    expect(date.get_day_of_week(3)).toBe("Tuesday");
    expect(date.get_day_of_week(4)).toBe("Wednesday");
    expect(date.get_day_of_week(5)).toBe("Thursday");
    expect(date.get_day_of_week(6)).toBe("Friday");
    expect(date.get_day_of_week(7)).toBe("Saturday");
  });

  test('english month', () => {
    expect(date.get_english_month(1)).toBe("January");
    expect(date.get_english_month(2)).toBe("February");
    expect(date.get_english_month(3)).toBe("March");
    expect(date.get_english_month(4)).toBe("April");
    expect(date.get_english_month(5)).toBe("May");
    expect(date.get_english_month(6)).toBe("June");
    expect(date.get_english_month(7)).toBe("July");
    expect(date.get_english_month(8)).toBe("August");
    expect(date.get_english_month(9)).toBe("September");
    expect(date.get_english_month(10)).toBe("October");
    expect(date.get_english_month(11)).toBe("November");
    expect(date.get_english_month(12)).toBe("December");
  });

  test('nepali  month', () => {
    expect(date.get_nepali_month(1)).toBe("बैशाख");
    expect(date.get_nepali_month(2)).toBe("जेष्ठ");
    expect(date.get_nepali_month(3)).toBe("असार");
    expect(date.get_nepali_month(4)).toBe("साउन");
    expect(date.get_nepali_month(5)).toBe("भदौ");
    expect(date.get_nepali_month(6)).toBe("असोज");
    expect(date.get_nepali_month(7)).toBe("कार्तिक");
    expect(date.get_nepali_month(8)).toBe("मंसिर");
    expect(date.get_nepali_month(9)).toBe("पुस");
    expect(date.get_nepali_month(10)).toBe("माघ");
    expect(date.get_nepali_month(11)).toBe("फागुन");
    expect(date.get_nepali_month(12)).toBe("चैत");
  });

  describe('is in range between 1944  to 2033', () => {
        test('is in range between', () => {
            expect(date.is_in_range_eng(2020, 1, 21)).toBe(true);
        });
        test('Throw Supported only between 1944-2033', () => {
            try {
                date.is_in_range_eng(1942, 1, 21);
              } catch (error) {
                expect(error).toEqual(new Error('Supported only between 1944-2033'));
              }
        });

        test('Throw month value can be between 1-12 only', () => {
            try {
                date.is_in_range_eng(2020, 13, 21);
              } catch (error) {
                expect(error).toEqual(new Error('Error! month value can be between 1-12 only'));
              }
        });
    });

    describe('is leap year', () => {
        test('1942 is not leap year', () => {
            expect(date.is_leap_year(1942)).toBe(false);
        });

        test('1948 is  leap year', () => {
            expect(date.is_leap_year(1948)).toBe(true);
        });

        test('2032 is  leap year', () => {
            expect(date.is_leap_year(2032)).toBe(true);
        });
       
    });

    describe('english to nepali date', () => {
        test('eng_to_nep', () => {
            const expected = { year: 2076, month: 11, day: 2, week: 6, num_day: 6 };
           expect(date.eng_to_nep(2020,2,14)).toMatchObject(expected);
        });

        test('eng_to_nep format', () => {
            const expected = { year: 2076, month: 11, day: 2, week: 6, num_day: 6 };
            let d = new dates(2020,2,14);
           console.log("hell", d.format('ddd mmm dd yyyy'));
        });
       
    });

        describe("english to nepali date another similar test", () => {
          test("eng_to_nep", () => {
            const expected = {
              year: 2076,
              month: 11,
              day: 2,
              week: 6,
              num_day: 6,
            };
            expect(date.eng_to_nep(2020, 2, 13)).toMatchObject(expected);
          });
        });

