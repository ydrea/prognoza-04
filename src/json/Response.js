const reCursive = (srch, data) => {
  for (var key in data)
    if (typeof data[key] === "object") {
      reCursive(srch, data[key]);
    } else {
      if (data[key] == srch) {
        console.log(data[key]);
      }
    }
};

const podata = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1657206000,
      main: {
        temp: 296.52,
        feels_like: 296.35,
        temp_min: 295.43,
        temp_max: 296.52,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 921,
        humidity: 55,
        temp_kf: 1.09,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 63 },
      wind: { speed: 2.21, deg: 75, gust: 2.6 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-07 15:00:00",
    },
    {
      dt: 1657216800,
      main: {
        temp: 292.69,
        feels_like: 292.42,
        temp_min: 290.5,
        temp_max: 292.69,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 920,
        humidity: 66,
        temp_kf: 2.19,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 47 },
      wind: { speed: 0.44, deg: 85, gust: 1.16 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-07 18:00:00",
    },
    {
      dt: 1657227600,
      main: {
        temp: 289.46,
        feels_like: 289.13,
        temp_min: 289.46,
        temp_max: 289.46,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 920,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 5 },
      wind: { speed: 1.66, deg: 272, gust: 1.68 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-07 21:00:00",
    },
    {
      dt: 1657238400,
      main: {
        temp: 289.12,
        feels_like: 288.78,
        temp_min: 289.12,
        temp_max: 289.12,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 919,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 4 },
      wind: { speed: 1.53, deg: 265, gust: 1.59 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-08 00:00:00",
    },
    {
      dt: 1657249200,
      main: {
        temp: 291.5,
        feels_like: 291.14,
        temp_min: 291.5,
        temp_max: 291.5,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 920,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 7 },
      wind: { speed: 0.51, deg: 282, gust: 1.03 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-08 03:00:00",
    },
    {
      dt: 1657260000,
      main: {
        temp: 296.04,
        feels_like: 295.53,
        temp_min: 296.04,
        temp_max: 296.04,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 920,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 5 },
      wind: { speed: 2.32, deg: 46, gust: 2.05 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-08 06:00:00",
    },
    {
      dt: 1657270800,
      main: {
        temp: 298.9,
        feels_like: 298.55,
        temp_min: 298.9,
        temp_max: 298.9,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 920,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 5 },
      wind: { speed: 3.15, deg: 50, gust: 2.01 },
      visibility: 10000,
      pop: 0.11,
      sys: { pod: "d" },
      dt_txt: "2022-07-08 09:00:00",
    },
    {
      dt: 1657281600,
      main: {
        temp: 300.16,
        feels_like: 299.92,
        temp_min: 300.16,
        temp_max: 300.16,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 919,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 5 },
      wind: { speed: 2.83, deg: 49, gust: 1.89 },
      visibility: 10000,
      pop: 0.16,
      sys: { pod: "d" },
      dt_txt: "2022-07-08 12:00:00",
    },
    {
      dt: 1657292400,
      main: {
        temp: 298.25,
        feels_like: 298.02,
        temp_min: 298.25,
        temp_max: 298.25,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 919,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 39 },
      wind: { speed: 2.2, deg: 79, gust: 2.66 },
      visibility: 10000,
      pop: 0.16,
      sys: { pod: "d" },
      dt_txt: "2022-07-08 15:00:00",
    },
    {
      dt: 1657303200,
      main: {
        temp: 293.41,
        feels_like: 292.98,
        temp_min: 293.41,
        temp_max: 293.41,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 919,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 62 },
      wind: { speed: 0.96, deg: 213, gust: 1.52 },
      visibility: 10000,
      pop: 0.08,
      sys: { pod: "n" },
      dt_txt: "2022-07-08 18:00:00",
    },
    {
      dt: 1657314000,
      main: {
        temp: 291.86,
        feels_like: 291.17,
        temp_min: 291.86,
        temp_max: 291.86,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 918,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 32 },
      wind: { speed: 1.89, deg: 226, gust: 2.26 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-08 21:00:00",
    },
    {
      dt: 1657324800,
      main: {
        temp: 291.15,
        feels_like: 290.28,
        temp_min: 291.15,
        temp_max: 291.15,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 918,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: { all: 18 },
      wind: { speed: 1.89, deg: 228, gust: 2.15 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-09 00:00:00",
    },
    {
      dt: 1657335600,
      main: {
        temp: 293.24,
        feels_like: 292.61,
        temp_min: 293.24,
        temp_max: 293.24,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 918,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 2 },
      wind: { speed: 1.6, deg: 239, gust: 2.05 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-09 03:00:00",
    },
    {
      dt: 1657346400,
      main: {
        temp: 299.04,
        feels_like: 298.39,
        temp_min: 299.04,
        temp_max: 299.04,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 919,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 2 },
      wind: { speed: 1.95, deg: 74, gust: 2.03 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-09 06:00:00",
    },
    {
      dt: 1657357200,
      main: {
        temp: 301.98,
        feels_like: 300.65,
        temp_min: 301.98,
        temp_max: 301.98,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 918,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 3 },
      wind: { speed: 2.59, deg: 68, gust: 2.1 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-09 09:00:00",
    },
    {
      dt: 1657368000,
      main: {
        temp: 303.19,
        feels_like: 301.63,
        temp_min: 303.19,
        temp_max: 303.19,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 917,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 2 },
      wind: { speed: 3.22, deg: 72, gust: 2.73 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-09 12:00:00",
    },
    {
      dt: 1657378800,
      main: {
        temp: 300.6,
        feels_like: 300.09,
        temp_min: 300.6,
        temp_max: 300.6,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 916,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 10 },
      wind: { speed: 1.8, deg: 75, gust: 2.18 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-09 15:00:00",
    },
    {
      dt: 1657389600,
      main: {
        temp: 293.89,
        feels_like: 293.17,
        temp_min: 293.89,
        temp_max: 293.89,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 916,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 9 },
      wind: { speed: 0.75, deg: 178, gust: 1.52 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-09 18:00:00",
    },
    {
      dt: 1657400400,
      main: {
        temp: 292.93,
        feels_like: 292.19,
        temp_min: 292.93,
        temp_max: 292.93,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 915,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.91, deg: 239, gust: 1.98 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-09 21:00:00",
    },
    {
      dt: 1657411200,
      main: {
        temp: 292.22,
        feels_like: 291.41,
        temp_min: 292.22,
        temp_max: 292.22,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 915,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.26, deg: 240, gust: 1.62 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-10 00:00:00",
    },
    {
      dt: 1657422000,
      main: {
        temp: 294.3,
        feels_like: 293.72,
        temp_min: 294.3,
        temp_max: 294.3,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 916,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.39, deg: 244, gust: 1.67 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-10 03:00:00",
    },
    {
      dt: 1657432800,
      main: {
        temp: 300.15,
        feels_like: 299.57,
        temp_min: 300.15,
        temp_max: 300.15,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 916,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.04, deg: 64, gust: 1.75 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-10 06:00:00",
    },
    {
      dt: 1657443600,
      main: {
        temp: 303.4,
        feels_like: 301.93,
        temp_min: 303.4,
        temp_max: 303.4,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 916,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 1 },
      wind: { speed: 3.27, deg: 71, gust: 2.9 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-10 09:00:00",
    },
    {
      dt: 1657454400,
      main: {
        temp: 303.89,
        feels_like: 302.46,
        temp_min: 303.89,
        temp_max: 303.89,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 916,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 1 },
      wind: { speed: 4.05, deg: 86, gust: 3.28 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-10 12:00:00",
    },
    {
      dt: 1657465200,
      main: {
        temp: 301.44,
        feels_like: 300.86,
        temp_min: 301.44,
        temp_max: 301.44,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 915,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 3, deg: 89, gust: 4.68 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-10 15:00:00",
    },
    {
      dt: 1657476000,
      main: {
        temp: 294.37,
        feels_like: 293.7,
        temp_min: 294.37,
        temp_max: 294.37,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 916,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 0.42, deg: 271, gust: 1.13 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-10 18:00:00",
    },
    {
      dt: 1657486800,
      main: {
        temp: 293.04,
        feels_like: 292.34,
        temp_min: 293.04,
        temp_max: 293.04,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 915,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.81, deg: 264, gust: 1.83 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-10 21:00:00",
    },
    {
      dt: 1657497600,
      main: {
        temp: 292.11,
        feels_like: 291.37,
        temp_min: 292.11,
        temp_max: 292.11,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 914,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.8, deg: 286, gust: 1.9 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-11 00:00:00",
    },
    {
      dt: 1657508400,
      main: {
        temp: 294.13,
        feels_like: 293.56,
        temp_min: 294.13,
        temp_max: 294.13,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 915,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2, deg: 277, gust: 2.26 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-11 03:00:00",
    },
    {
      dt: 1657519200,
      main: {
        temp: 300.41,
        feels_like: 299.82,
        temp_min: 300.41,
        temp_max: 300.41,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 917,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.14, deg: 21, gust: 1.81 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-11 06:00:00",
    },
    {
      dt: 1657530000,
      main: {
        temp: 304.29,
        feels_like: 302.77,
        temp_min: 304.29,
        temp_max: 304.29,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 917,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.68, deg: 41, gust: 2.19 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-11 09:00:00",
    },
    {
      dt: 1657540800,
      main: {
        temp: 305.86,
        feels_like: 304.32,
        temp_min: 305.86,
        temp_max: 305.86,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 917,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 3.24, deg: 46, gust: 2.24 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-11 12:00:00",
    },
    {
      dt: 1657551600,
      main: {
        temp: 303.37,
        feels_like: 302.55,
        temp_min: 303.37,
        temp_max: 303.37,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 918,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.85, deg: 42, gust: 2.04 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-11 15:00:00",
    },
    {
      dt: 1657562400,
      main: {
        temp: 297.51,
        feels_like: 296.99,
        temp_min: 297.51,
        temp_max: 297.51,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 920,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.82, deg: 262, gust: 1.92 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-11 18:00:00",
    },
    {
      dt: 1657573200,
      main: {
        temp: 296.01,
        feels_like: 295.4,
        temp_min: 296.01,
        temp_max: 296.01,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 920,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.86, deg: 260, gust: 2.17 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-11 21:00:00",
    },
    {
      dt: 1657584000,
      main: {
        temp: 294.69,
        feels_like: 293.97,
        temp_min: 294.69,
        temp_max: 294.69,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 921,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 0.9, deg: 256, gust: 1.51 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-07-12 00:00:00",
    },
    {
      dt: 1657594800,
      main: {
        temp: 296.7,
        feels_like: 296.15,
        temp_min: 296.7,
        temp_max: 296.7,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 924,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.05, deg: 203, gust: 2.58 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-12 03:00:00",
    },
    {
      dt: 1657605600,
      main: {
        temp: 301.79,
        feels_like: 300.73,
        temp_min: 301.79,
        temp_max: 301.79,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 925,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.3, deg: 111, gust: 3.1 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-12 06:00:00",
    },
    {
      dt: 1657616400,
      main: {
        temp: 304.23,
        feels_like: 302.88,
        temp_min: 304.23,
        temp_max: 304.23,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 925,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 5.33, deg: 106, gust: 5.33 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-12 09:00:00",
    },
    {
      dt: 1657627200,
      main: {
        temp: 305.31,
        feels_like: 303.72,
        temp_min: 305.31,
        temp_max: 305.31,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 924,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 4.51, deg: 112, gust: 4.09 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-07-12 12:00:00",
    },
  ],
  city: {
    id: 146970,
    name: "Xankandi",
    coord: { lat: 39.8177, lon: 46.7528 },
    country: "AZ",
    population: 53100,
    timezone: 14400,
    sunrise: 1657157484,
    sunset: 1657211035,
  },
};

function search(what, where) {
  var results = [];
  var parentStack = [];

  var searchR = function (what, where) {
    if (typeof where == "object") {
      parentStack.push(where);
      for (key in where) {
        searchR(what, where[key]);
      }
      parentStack.pop();
    } else {
      // here comes your search
      if (what === where) {
        results.push({
          parent: parentStack[parentStack.length - 1],
          value: where,
        });
      }
    }
  };

  searchR(what, where);

  return results;
}

search("Clear", podata).forEach(function (value, key) {
  var out = "parent: \n";

  for (key in value.parent) {
    out += "    key: " + key + " - value: " + value.parent[key] + "\n";
  }

  out += "\nvalue: " + value.value;

  console.log(out);
});
//
//
// var searchVal = ["clear", "sky"];

// var getTitle = function (podata, val) {
//   for (var key in podata) {
//     var titles = podata[key];
//     for (var tit in titles) {
//       var names = titles[tit];
//       for (var name in names) {
//         var string = names[name];
//         if (string === val) return tit;
//       }
//     }
//   }
// };

// searchVal.forEach(function (valToSearch) {
//   console.log(getTitle(podata, valToSearch));
// });

// // getTitle(podata, "d");
