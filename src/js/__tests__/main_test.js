import Daemon from '../Daemon';
import Magician from '../Magician';

test.each([
  ['1 range', 1, 100],
  ['2 range', 2, 90],
  ['3 range', 3, 80],
  ['4 range', 4, 70],
  ['5 range', 5, 60],
])(
  ('test %s'),
  (_, range, demage) => {
    const daemon = new Daemon();
    daemon.range = range;
    expect(daemon.damage).toBe(demage);
  },
);
test.each([
  ['1 range mag', 1, 100],
  ['2 range mag', 2, 90],
  ['3 range mag', 3, 80],
  ['4 range mag', 4, 70],
  ['5 range mag', 5, 60],
])(
  ('test %s'),
  (_, range, demage) => {
    const magic = new Magician();
    magic.range = range;
    expect(magic.damage).toBe(demage);
  },
);

test.each([
  ['stoned 1 range', 1, 100],
  ['stoned 2 range', 2, 85],
  ['stoned 3 range', 3, 72],
  ['stoned 4 range', 4, 60],
  ['stoned 5 range', 5, 48],
])(
  ('test %s'),
  (_, range, demage) => {
    const daemon = new Daemon();
    daemon.range = range;
    daemon.stoned = true;
    expect(daemon.damage).toBeCloseTo(demage, 0);
  },
);
test.each([
  ['stoned 1 range mag', 1, 100],
  ['stoned 2 range mag', 2, 85],
  ['stoned 3 range mag', 3, 72],
  ['stoned 4 range mag', 4, 60],
  ['stoned 5 range mag', 5, 48],
])(
  ('test %s'),
  (_, range, demage) => {
    const magic = new Magician();
    magic.range = range;
    magic.stoned = true;
    expect(magic.damage).toBeCloseTo(demage, 0);
  },
);

test('test out of range', () => {
  const daemon = new Daemon();
  daemon.range = 8;
  expect(() => daemon.damage).toThrow('Слышком далеко');
});
test('test out of range', () => {
  const daemon = new Daemon();
  daemon.range = 'hdfhhh';
  expect(() => daemon.damage).toThrow(Error);
});
