interface Room {
  name: 'start' | 'end' | string;
  isSmall: boolean;
  exits: string[];
}

type Rooms = Record<string, Room>;

function createRoom(rooms: Rooms, room: string, connection: string): Room {
  if (rooms[room]) {
    return {
      ...rooms[room],
      exits: [...rooms[room].exits, connection],
    };
  }

  return {
    name: room,
    isSmall: room.split('').every((char) => char.toLowerCase() === char),
    exits: [connection],
  };
}

function addRoom(rooms: Rooms, room: string, connection: string): Rooms {
  return {
    ...rooms,
    [room]: createRoom(rooms, room, connection),
    [connection]: createRoom(rooms, connection, room),
  };
}

export function inputToRooms(input: string): Rooms {
  const connections = input.split('\n');

  return connections.reduce((rooms: Rooms, connection) => {
    const [room1, room2] = connection.split('-');
    return addRoom(rooms, room1, room2);
  }, {});
}

function followPath(
  rooms: Rooms,
  room: string,
  path: string[] = [],
  otherPaths: string[][] = [],
  allowedSmallTwice = false,
  currentlyAllowed?: string,
  skipDouble: string[] = [],
): string[][] {
  const possibleDestinations = rooms[room].exits
    .filter((e) => e !== 'end'
      && (
        !rooms[e].isSmall
        || path.filter((p) => p === e).length < (e !== currentlyAllowed ? 1 : 2)
      ));

  if (possibleDestinations.length === 0) {
    return otherPaths;
  }

  return possibleDestinations.reduce((acc: string[][], nextRoom) => {
    const nextPath = [...path, room];

    if (nextRoom === 'start') {
      return [...acc, [...nextPath, nextRoom]];
    }

    if (
      allowedSmallTwice
      && rooms[nextRoom].isSmall
      && typeof currentlyAllowed === 'undefined'
    ) {
      // const without = followPath(rooms, nextRoom, nextPath, acc, allowedSmallTwice);
      return followPath(rooms, nextRoom, nextPath, acc, allowedSmallTwice, nextRoom);
    }

    return followPath(rooms, nextRoom, nextPath, acc, allowedSmallTwice, currentlyAllowed, skipDouble);
  }, otherPaths);
}

export function numberOfPaths(input: string, allowedSmallTwice = false): number {
  const rooms = inputToRooms(input);

  const paths = followPath(rooms, 'end', [], [], allowedSmallTwice).map((p) => p.join(','));

  return new Set(paths).size;
}