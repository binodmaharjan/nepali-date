const dateUtils = require("./constants");
const str_replace = require('./str_replace');

    const western_number = ['0','1','2','3','4','5','6','7','8','9'];
    const   nepali_number = ['०','१','२','३','४','५','६','७','८','९'];
    const  bs = [
            [2000,30,32,31,32,31,30,30,30,29,30,29,31],
            [2001,31,31,32,31,31,31,30,29,30,29,30,30],
            [2002,31,31,32,32,31,30,30,29,30,29,30,30],
            [2003,31,32,31,32,31,30,30,30,29,29,30,31],
            [2004,30,32,31,32,31,30,30,30,29,30,29,31],
            [2005,31,31,32,31,31,31,30,29,30,29,30,30],
            [2006,31,31,32,32,31,30,30,29,30,29,30,30],
            [2007,31,32,31,32,31,30,30,30,29,29,30,31],
            [2008,31,31,31,32,31,31,29,30,30,29,29,31],
            [2009,31,31,32,31,31,31,30,29,30,29,30,30],
            [2010,31,31,32,32,31,30,30,29,30,29,30,30],
            [2011,31,32,31,32,31,30,30,30,29,29,30,31],
            [2012,31,31,31,32,31,31,29,30,30,29,30,30],
            [2013,31,31,32,31,31,31,30,29,30,29,30,30],
            [2014,31,31,32,32,31,30,30,29,30,29,30,30],
            [2015,31,32,31,32,31,30,30,30,29,29,30,31],
            [2016,31,31,31,32,31,31,29,30,30,29,30,30],
            [2017,31,31,32,31,31,31,30,29,30,29,30,30],
            [2018,31,32,31,32,31,30,30,29,30,29,30,30],
            [2019,31,32,31,32,31,30,30,30,29,30,29,31],
            [2020,31,31,31,32,31,31,30,29,30,29,30,30],
            [2021,31,31,32,31,31,31,30,29,30,29,30,30],
            [2022,31,32,31,32,31,30,30,30,29,29,30,30],
            [2023,31,32,31,32,31,30,30,30,29,30,29,31],
            [2024,31,31,31,32,31,31,30,29,30,29,30,30],
            [2025,31,31,32,31,31,31,30,29,30,29,30,30],
            [2026,31,32,31,32,31,30,30,30,29,29,30,31],
            [2027,30,32,31,32,31,30,30,30,29,30,29,31],
            [2028,31,31,32,31,31,31,30,29,30,29,30,30],
            [2029,31,31,32,31,32,30,30,29,30,29,30,30],
            [2030,31,32,31,32,31,30,30,30,29,29,30,31],
            [2031,30,32,31,32,31,30,30,30,29,30,29,31],
            [2032,31,31,32,31,31,31,30,29,30,29,30,30],
            [2033,31,31,32,32,31,30,30,29,30,29,30,30],
            [2034,31,32,31,32,31,30,30,30,29,29,30,31],
            [2035,30,32,31,32,31,31,29,30,30,29,29,31],
            [2036,31,31,32,31,31,31,30,29,30,29,30,30],
            [2037,31,31,32,32,31,30,30,29,30,29,30,30],
            [2038,31,32,31,32,31,30,30,30,29,29,30,31],
            [2039,31,31,31,32,31,31,29,30,30,29,30,30],
            [2040,31,31,32,31,31,31,30,29,30,29,30,30],
            [2041,31,31,32,32,31,30,30,29,30,29,30,30],
            [2042,31,32,31,32,31,30,30,30,29,29,30,31],
            [2043,31,31,31,32,31,31,29,30,30,29,30,30],
            [2044,31,31,32,31,31,31,30,29,30,29,30,30],
            [2045,31,32,31,32,31,30,30,29,30,29,30,30],
            [2046,31,32,31,32,31,30,30,30,29,29,30,31],
            [2047,31,31,31,32,31,31,30,29,30,29,30,30],
            [2048,31,31,32,31,31,31,30,29,30,29,30,30],
            [2049,31,32,31,32,31,30,30,30,29,29,30,30],
            [2050,31,32,31,32,31,30,30,30,29,30,29,31],
            [2051,31,31,31,32,31,31,30,29,30,29,30,30],
            [2052,31,31,32,31,31,31,30,29,30,29,30,30],
            [2053,31,32,31,32,31,30,30,30,29,29,30,30],
            [2054,31,32,31,32,31,30,30,30,29,30,29,31],
            [2055,31,31,32,31,31,31,30,29,30,29,30,30],
            [2056,31,31,32,31,32,30,30,29,30,29,30,30],
            [2057,31,32,31,32,31,30,30,30,29,29,30,31],
            [2058,30,32,31,32,31,30,30,30,29,30,29,31],
            [2059,31,31,32,31,31,31,30,29,30,29,30,30],
            [2060,31,31,32,32,31,30,30,29,30,29,30,30],
            [2061,31,32,31,32,31,30,30,30,29,29,30,31],
            [2062,30,32,31,32,31,31,29,30,29,30,29,31],
            [2063,31,31,32,31,31,31,30,29,30,29,30,30],
            [2064,31,31,32,32,31,30,30,29,30,29,30,30],
            [2065,31,32,31,32,31,30,30,30,29,29,30,31],
            [2066,31,31,31,32,31,31,29,30,30,29,29,31],
            [2067,31,31,32,31,31,31,30,29,30,29,30,30],
            [2068,31,31,32,32,31,30,30,29,30,29,30,30],
            [2069,31,32,31,32,31,30,30,30,29,29,30,31],
            [2070,31,31,31,32,31,31,29,30,30,29,30,30],
            [2071,31,31,32,31,31,31,30,29,30,29,30,30],
            [2072,31,32,31,32,31,30,30,29,30,29,30,30],
            [2073,31,32,31,32,31,30,30,30,29,29,30,31],
            [2074,31,31,31,32,31,31,30,29,30,29,30,30],
            [2075,31,31,32,31,31,31,30,29,30,29,30,30],
            [2076,31,32,31,32,31,30,30,30,29,29,30,30],
            [2077,31,32,31,32,31,30,30,30,29,30,29,31],
            [2078,31,31,31,32,31,31,30,29,30,29,30,30],
            [2079,31,31,32,31,31,31,30,29,30,29,30,30],
            [2080,31,32,31,32,31,30,30,30,29,29,30,30],
            [2081,31,31,32,32,31,30,30,30,29,30,30,30],
            [2082,30,32,31,32,31,30,30,30,29,30,30,30],
            [2083,31,31,32,31,31,30,30,30,29,30,30,30],
            [2084,31,31,32,31,31,30,30,30,29,30,30,30],
            [2085,31,32,31,32,30,31,30,30,29,30,30,30],
            [2086,30,32,31,32,31,30,30,30,29,30,30,30],
            [2087,31,31,32,31,31,31,30,30,29,30,30,30],
            [2088,30,31,32,32,30,31,30,30,29,30,30,30],
            [2089,30,32,31,32,31,30,30,30,29,30,30,30],
            [2090,30,32,31,32,31,30,30,30,29,30,30,30]
            ];

    masks = {
        'default':               'ddd mmm dd yyyy',
        'shortDate':             'm/d/yy',
        'mediumDate':            'mmm d, yyyy',
        'longDate':              'mmmm d, yyyy',
        'fullDate':              'dddd, mmmm d, yyyy',
        };

  module.exports = class NepaliDate {
    constructor(year, month, day) {
      this.year = year;
      this.month = month;
      this.day = day;
      this.ndate={};
    }
    

  get_day_of_week(day)
  {
    switch (day)
    {
        case 1:
            day = dateUtils.eng_week[1];
            break;

        case 2:
            day = dateUtils.eng_week[2];
            break;

        case 3:
            day = dateUtils.eng_week[3];
            break;

        case 4:
            day = dateUtils.eng_week[4];
            break;

        case 5:
            day = dateUtils.eng_week[5];
            break;

        case 6:
            day = dateUtils.eng_week[6];
            break;

        case 7:
            day = dateUtils.eng_week[7];
            break;
    }
    return day;
}
get_day_of_week_in_nepali(day)
  {
    switch (day)
    {
        case 1:
            day = dateUtils.nep_week[1];
            break;

        case 2:
            day = dateUtils.nep_week[2];
            break;

        case 3:
            day = dateUtils.nep_week[3];
            break;

        case 4:
            day = dateUtils.nep_week[4];
            break;

        case 5:
            day = dateUtils.nep_week[5];
            break;

        case 6:
            day = dateUtils.nep_week[6];
            break;

        case 7:
            day = dateUtils.nep_week[7];
            break;
    }
    return day;
}

  get_english_month(m)
{
    var eMonth = "";
    switch (m)
    {
        case 1:
            eMonth = dateUtils.eng_month[1];
            break;
        case 2:
            eMonth =dateUtils.eng_month[2];
            break;
        case 3:
            eMonth =dateUtils.eng_month[3];
            break;
        case 4:
            eMonth = dateUtils.eng_month[4];
            break;
        case 5:
            eMonth = dateUtils.eng_month[5];
            break;
        case 6:
            eMonth = dateUtils.eng_month[6];
            break;
        case 7:
            eMonth = dateUtils.eng_month[7];
            break;
        case 8:
            eMonth = dateUtils.eng_month[8];
            break;
        case 9:
            eMonth = dateUtils.eng_month[9];
            break;
        case 10:
            eMonth = dateUtils.eng_month[10];
            break;
        case 11:
            eMonth = dateUtils.eng_month[11];
            break;
        case 12:
            eMonth = dateUtils.eng_month[12];
    }
    return eMonth;
}

  get_nepali_month(m)
{
   var n_month = "";

    switch (m)
    {
        case 1:
            n_month = dateUtils.nep_month[1];
            break;

        case 2:
            n_month = dateUtils.nep_month[2];
            break;

        case 3:
            n_month = dateUtils.nep_month[3];
            break;

        case 4:
            n_month = dateUtils.nep_month[4];
            break;

        case 5:
            n_month = dateUtils.nep_month[5];
            break;

        case 6:
            n_month = dateUtils.nep_month[6];
            break;

        case 7:
            n_month = dateUtils.nep_month[7];
            break;

        case 8:
            n_month = dateUtils.nep_month[8];
            break;

        case 9:
            n_month = dateUtils.nep_month[9];
            break;

        case 10:
            n_month = dateUtils.nep_month[10];
            break;

        case 11:
            n_month = dateUtils.nep_month[11];
            break;

        case 12:
            n_month = dateUtils.nep_month[12];
            break;
    }
    return n_month;
}

  is_in_range_eng(yy, mm, dd)
    {
        if (yy < 1944 || yy > 2033)
        {
            throw new Error('Supported only between 1944-2033');
            // throw  'Supported only between 1944-2033';
        }

        if (mm < 1 || mm > 12)
        {
            throw  new Error('Error! month value can be between 1-12 only');
        }

        if (dd < 1 || dd > 31)
        {
            throw new Error('Error! day value can be between 1-31 only');
        }

        return true;
    }

     _is_in_range_nep(yy, mm, dd)
    {
        if (yy < 2000 || yy > 2089)
        {
            throw new Error('Supported only between 2000-2089');
        }

        if (mm < 1 || mm > 12)
        {
            throw new Error('Error! month value can be between 1-12 only');
        }

        if (dd < 1 || dd > 32)
        {
            throw new Error('Error! day value can be between 1-31 only');
        }

        return true;
    }

     is_leap_year(year)
    {
        var a = year;
        if (a % 100 == 0)
        {
            if (a % 400 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            if (a % 4 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

      eng_to_nep(yy, mm, dd)
    {
        // Check for date range
        var chk = this.is_in_range_eng(yy, mm, dd);

        if(chk !== true)
        {
            throw new Error("Supported only between 2000-2089");
        }
        else
        {
            // Month data.
            const  month  = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            // Month for leap year
            const lmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            var def_eyy     = 1944;	// initial english date.
            var  def_nyy     = 2000;
            var def_nmm     = 9;
            var def_ndd     = 17 - 1;	// inital nepali date.
            var total_eDays = 0;
            var total_nDays = 0;
            var  a           = 0;
            var day         = 7 - 1;
            var m           = 0;
            var y           = 0;
            var  i           = 0;
            var j           = 0;
            var numDay      = 0;

            // Count total no. of days in-terms year
            for (i = 0; i < (yy - def_eyy); i++) //total days for month calculation...(english)
            {
                if (this.is_leap_year(def_eyy + i) === true)
                {
                    for (j = 0; j < 12; j++)
                    {
                        total_eDays += lmonth[j];
                    }
                }
                else
                {
                    for (j = 0; j < 12; j++)
                    {
                        total_eDays += month[j];
                    }
                }
            }

            // Count total no. of days in-terms of month
            for (i = 0; i < (mm - 1); i++)
            {
                if (this.is_leap_year(yy) === true)
                {
                    total_eDays += lmonth[i];
                }
                else
                {
                    total_eDays += month[i];
                }
            }

            // Count total no. of days in-terms of date
            total_eDays += dd;


            i           = 0;
            j           = def_nmm;
            total_nDays = def_ndd;
            m           = def_nmm;
            y           = def_nyy;

            // Count nepali date from array
            while (total_eDays != 0)
            {
                a = bs[i][j];

                total_nDays++;		//count the days
                day++;				//count the days interms of 7 days

                if (total_nDays > a)
                {
                    m++;
                    total_nDays = 1;
                    j++;
                }

                if (day > 7)
                {
                    day = 1;
                }

                if (m > 12)
                {
                    y++;
                    m = 1;
                }

                if (j > 12)
                {
                    j = 1;
                    i++;
                }

                total_eDays--;
            }

            numDay = day;
            var _nep_date = {
                year: y,
                month:m,
                day:total_nDays,
                week: day,
                month: m,
                num_day : numDay
             };
           
            return _nep_date;
        }
    }


    format(formats) {
        this.ndate = this.eng_to_nep(this.year, this.month, this.day);
        var date = this.ndate.day +" "+this.ndate.month+" "+ this.get_day_of_week_in_nepali(this.ndate.week)+" "+this.ndate.year;
        return str_replace(western_number, nepali_number, date) ;
    }
  };