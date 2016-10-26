const SA = 'sā';
const RE = 're';
const GA = 'ga';
const MA = 'ma';
const PA = 'pa';
const DHA = 'dha';
const NI = 'ni';

export const SWARAS = [SA, RE, GA, MA, PA, DHA, NI];

export const LYRICS = [
  { octave: 1, pos: 1.657, swara: SA },
  { octave: 2, pos: 2.686, swara: GA },
  { octave: 2, pos: 2.863, swara: SA },
  { octave: 1, pos: 3.012, swara: NI },
  { octave: 1, pos: 3.230, swara: DHA },
  { octave: 2, pos: 3.584, swara: SA },
  { octave: 1, pos: 3.717, swara: NI },
  { octave: 1, pos: 3.875, swara: DHA },
  { octave: 1, pos: 4.018, swara: MA },
  { octave: 1, pos: 4.203, swara: GA },
  { octave: 1, pos: 4.364, swara: SA },

  { octave: 1, pos: 5.023, swara: MA },
  { octave: 1, pos: 5.221, swara: GA },
  { octave: 1, pos: 5.395, swara: DHA },
  { octave: 1, pos: 5.573, swara: MA },
  { octave: 1, pos: 5.750, swara: NI },
  { octave: 1, pos: 5.925, swara: DHA },
  { octave: 1, pos: 6.089, swara: MA },
  { octave: 1, pos: 6.272, swara: GA },

  { octave: 1, pos: 6.602, swara: MA },
  { octave: 1, pos: 6.776, swara: DHA },
  { octave: 1, pos: 6.941, swara: NI },
  { octave: 2, pos: 7.135, swara: SA },
  { octave: 2, pos: 7.441, swara: SA },
  { octave: 2, pos: 7.616, swara: SA },
  { octave: 2, pos: 7.793, swara: GA },
  { octave: 2, pos: 7.956, swara: SA },
  { octave: 1, pos: 8.136, swara: NI },
  { octave: 1, pos: 8.309, swara: DHA },

  { octave: 1, pos: 8.540, swara: NI },
  { octave: 1, pos: 8.808, swara: NI },
  { octave: 1, pos: 8.979, swara: NI },
  { octave: 2, pos: 9.173, swara: SA },
  { octave: 1, pos: 9.364, swara: NI },
  { octave: 1, pos: 9.500, swara: DHA },
  { octave: 1, pos: 9.693, swara: MA },

  { octave: 1, pos: 9.837, swara: DHA },
  { octave: 1, pos: 10.206, swara: DHA },
  { octave: 1, pos: 10.375, swara: DHA },
  { octave: 1, pos: 10.543, swara: NI },
  { octave: 1, pos: 10.720, swara: DHA },
  { octave: 1, pos: 10.873, swara: MA },
  { octave: 1, pos: 11.062, swara: GA },
  { octave: 1, pos: 11.226, swara: MA },
  { octave: 1, pos: 11.567, swara: MA },
  { octave: 1, pos: 11.733, swara: GA },
  { octave: 1, pos: 12.071, swara: MA },

  { octave: 2, pos: 12.579, swara: SA },
  { octave: 1, pos: 12.933, swara: NI },
  { octave: 1, pos: 13.110, swara: NI },
  { octave: 1, pos: 13.478, swara: DHA },
  { octave: 1, pos: 13.632, swara: DHA },
  { octave: 1, pos: 13.950, swara: MA },
  { octave: 1, pos: 14.195, swara: MA },
  { octave: 1, pos: 14.463, swara: GA },
  { octave: 1, pos: 14.618, swara: SA },
  { octave: 0, pos: 14.794, swara: NI },
  { octave: 0, pos: 14.949, swara: DHA },
  { octave: 0, pos: 15.123, swara: NI },
  { octave: 1, pos: 15.327, swara: SA },
  { octave: 1, pos: 15.503, swara: GA },

  { octave: 1, pos: 15.809, swara: SA },
  { octave: 1, pos: 15.996, swara: MA },
  { octave: 1, pos: 16.309, swara: MA },
  { octave: 1, pos: 16.498, swara: NI },
  { octave: 1, pos: 16.835, swara: NI },
  { octave: 2, pos: 17.026, swara: SA },
  { octave: 2, pos: 17.373, swara: MA },
  { octave: 2, pos: 17.701, swara: GA },

  { octave: 2, pos: 18.039, swara: SA },
  { octave: 1, pos: 18.225, swara: NI },
  { octave: 1, pos: 18.391, swara: DHA },
  { octave: 2, pos: 18.572, swara: MA },
  { octave: 2, pos: 18.723, swara: GA },
  { octave: 2, pos: 18.908, swara: SA },
  { octave: 1, pos: 19.074, swara: NI },
  { octave: 1, pos: 19.241, swara: DHA },
  { octave: 2, pos: 19.412, swara: GA },
  { octave: 2, pos: 19.752, swara: SA },
  { octave: 1, pos: 20.098, swara: NI },
  { octave: 1, pos: 20.269, swara: DHA },

  { octave: 2, pos: 20.772, swara: SA },
  { octave: 1, pos: 21.145, swara: NI },
  { octave: 1, pos: 21.461, swara: DHA },
  { octave: 1, pos: 21.651, swara: MA },
  { octave: 1, pos: 21.798, swara: DHA },
  { octave: 1, pos: 21.973, swara: DHA },
  { octave: 1, pos: 22.154, swara: NI },
  { octave: 2, pos: 22.291, swara: SA },
  { octave: 2, pos: 22.498, swara: MA },
  { octave: 2, pos: 22.655, swara: GA },
  { octave: 2, pos: 22.829, swara: SA },
];

export const RATE_NAME = {
  0.5: 'Sporo',
  0.75: 'Polako',
  1: 'Normalno',
};
