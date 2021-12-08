interface FishLedger {
  [daysToLive: number]: number;
}

export function listToLedger(fishes: number[]): FishLedger {
  return fishes.reduce((ledger: FishLedger, fish: number) => {
    ledger[fish] = (ledger[fish] || 0) + 1;
    return ledger;
  }, {});
}

export function countFish(fishes: FishLedger): number {
  return Object.keys(fishes).reduce((total: number, key: string) => {
    return total + fishes[parseInt(key, 10)];
  }, 0);
}

export function nextDay(fishes: FishLedger): FishLedger {
  const daysToBirth = 7;
  const daysToBirthNewBorn = 9;

  const newLedger: FishLedger = {};

  for (let day = 0; day < daysToBirthNewBorn; day += 1) {
    if (day === daysToBirth - 1) {
      newLedger[day] = (fishes[day + 1] || 0) + (fishes[0] || 0);
    } else if (day === daysToBirthNewBorn - 1) {
      newLedger[day] = fishes[0] || 0;
    } else {
      newLedger[day] = fishes[day + 1] || 0;
    }
  }

  return newLedger;
}

export function cycleDays(fishes: FishLedger, days: number): FishLedger {
  if (days === 0) {
    return fishes;
  }

  return cycleDays(nextDay(fishes), days - 1);
}