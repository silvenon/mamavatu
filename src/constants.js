const SA = 'sā';
const RE = 're';
const GA = 'ga';
const MA = 'ma';
const PA = 'pa';
const DHA = 'dha';
const NI = 'ni';

export const SWARAS = [SA, RE, GA, MA, PA, DHA, NI];

export const LYRICS = [
  { octave: 1, pos: 1.647, swara: SA },
  { octave: 2, pos: 2.671, swara: GA },
  { octave: 2, pos: 2.822, swara: SA },
  { octave: 1, pos: 2.995, swara: NI },
  { octave: 1, pos: 3.193, swara: DHA },
  { octave: 2, pos: 3.519, swara: SA },
  { octave: 1, pos: 3.690, swara: NI },
  { octave: 1, pos: 3.854, swara: DHA },
  { octave: 1, pos: 3.985, swara: MA },
  { octave: 1, pos: 4.190, swara: GA },
  { octave: 1, pos: 4.364, swara: SA },

  { octave: 1, pos: 5.005, swara: MA },
  { octave: 1, pos: 5.177, swara: GA },
  { octave: 1, pos: 5.366, swara: DHA },
  { octave: 1, pos: 5.537, swara: MA },
  { octave: 1, pos: 5.724, swara: NI },
  { octave: 1, pos: 5.866, swara: DHA },
  { octave: 1, pos: 6.056, swara: MA },
  { octave: 1, pos: 6.238, swara: GA },

  { octave: 1, pos: 6.567, swara: MA },
  { octave: 1, pos: 6.746, swara: DHA },
  { octave: 1, pos: 6.907, swara: NI },
  { octave: 2, pos: 7.056, swara: SA },
  { octave: 2, pos: 7.347, swara: SA },
  { octave: 2, pos: 7.590, swara: SA },
  { octave: 2, pos: 7.749, swara: GA },
  { octave: 2, pos: 7.904, swara: SA },
  { octave: 1, pos: 8.104, swara: NI },
  { octave: 1, pos: 8.260, swara: DHA },

  { octave: 1, pos: 8.422, swara: NI },
  { octave: 1, pos: 8.780, swara: NI },
  { octave: 1, pos: 8.929, swara: NI },
  { octave: 2, pos: 9.124, swara: SA },
  { octave: 1, pos: 9.289, swara: NI },
  { octave: 1, pos: 9.438, swara: DHA },
  { octave: 1, pos: 9.614, swara: MA },

  { octave: 1, pos: 9.784, swara: DHA },
  { octave: 1, pos: 10.158, swara: DHA },
  { octave: 1, pos: 10.320, swara: DHA },
  { octave: 1, pos: 10.496, swara: NI },
  { octave: 1, pos: 10.657, swara: DHA },
  { octave: 1, pos: 10.844, swara: MA },
  { octave: 1, pos: 11.020, swara: GA },
  { octave: 1, pos: 11.182, swara: MA },
  { octave: 1, pos: 11.499, swara: MA },
  { octave: 1, pos: 11.710, swara: GA },
  { octave: 1, pos: 12.042, swara: MA },

  { octave: 2, pos: 12.546, swara: SA },
  { octave: 1, pos: 12.884, swara: NI },
  { octave: 1, pos: 13.054, swara: NI },
  { octave: 1, pos: 13.427, swara: DHA },
  { octave: 1, pos: 13.571, swara: DHA },
  { octave: 1, pos: 13.943, swara: MA },
  { octave: 1, pos: 14.122, swara: MA },
  { octave: 1, pos: 14.429, swara: GA },
  { octave: 1, pos: 14.603, swara: SA },
  { octave: 0, pos: 14.752, swara: NI },
  { octave: 0, pos: 14.895, swara: DHA },
  { octave: 0, pos: 15.037, swara: NI },
  { octave: 1, pos: 15.238, swara: SA },
  { octave: 1, pos: 15.400, swara: GA },

  { octave: 1, pos: 15.781, swara: SA },
  { octave: 1, pos: 15.926, swara: MA },
  { octave: 1, pos: 16.267, swara: MA },
  { octave: 1, pos: 16.455, swara: NI },
  { octave: 1, pos: 16.766, swara: NI },
  { octave: 2, pos: 16.932, swara: SA },
  { octave: 2, pos: 17.314, swara: MA },
  { octave: 2, pos: 17.598, swara: GA },

  { octave: 2, pos: 17.997, swara: SA },
  { octave: 1, pos: 18.172, swara: NI },
  { octave: 1, pos: 18.334, swara: DHA },
  { octave: 2, pos: 18.519, swara: MA },
  { octave: 2, pos: 18.661, swara: GA },
  { octave: 2, pos: 18.841, swara: SA },
  { octave: 1, pos: 19.021, swara: NI },
  { octave: 1, pos: 19.203, swara: DHA },
  { octave: 2, pos: 19.361, swara: GA },
  { octave: 2, pos: 19.668, swara: SA },
  { octave: 1, pos: 20.028, swara: NI },
  { octave: 1, pos: 20.194, swara: DHA },

  { octave: 2, pos: 20.680, swara: SA },
  { octave: 1, pos: 21.043, swara: NI },
  { octave: 1, pos: 21.405, swara: DHA },
  { octave: 1, pos: 21.584, swara: MA },
  { octave: 1, pos: 21.749, swara: DHA },
  { octave: 1, pos: 21.922, swara: DHA },
  { octave: 1, pos: 22.089, swara: NI },
  { octave: 2, pos: 22.219, swara: SA },
  { octave: 2, pos: 22.425, swara: MA },
  { octave: 2, pos: 22.606, swara: GA },
  { octave: 2, pos: 22.766, swara: SA },
];

export const RATE_NAME = {
  0.5: 'Sporo',
  0.75: 'Polako',
  1: 'Normalno',
};
