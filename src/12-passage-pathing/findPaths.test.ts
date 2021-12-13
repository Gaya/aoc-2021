import { inputToRooms, numberOfPaths } from './findPaths';

describe('findPaths', () => {
  describe('inputToRooms', () => {
    it('should convert input to rooms record', () => {
      const cave = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

      expect(inputToRooms(cave)).toEqual({
        start: {
          name: 'start',
          isSmall: true,
          exits: ['A', 'b'],
        },
        A: {
          name: 'A',
          isSmall: false,
          exits: ['start', 'c', 'b', 'end'],
        },
        b: {
          name: 'b',
          isSmall: true,
          exits: ['start', 'A', 'd', 'end'],
        },
        c: {
          name: 'c',
          isSmall: true,
          exits: ['A'],
        },
        d: {
          name: 'd',
          isSmall: true,
          exits: ['b'],
        },
        end: {
          name: 'end',
          isSmall: true,
          exits: ['A', 'b'],
        },
      })
    });
  });

  describe('numberOfPaths', () => {
    const cave1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

    const cave2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

    const cave3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

    it('should return the number of possible paths from the start to the end', () => {
      expect(numberOfPaths(cave1)).toBe(10);
      expect(numberOfPaths(cave2)).toBe(19);
      expect(numberOfPaths(cave3)).toBe(226);
    });

    it('should allow small caves to be visted multiple times', () => {
      expect(numberOfPaths(cave1, true)).toBe(36);
      expect(numberOfPaths(cave2, true)).toBe(103);
      expect(numberOfPaths(cave3, true)).toBe(3509);
    });
  });
});