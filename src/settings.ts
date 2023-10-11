import Decimal from "break_eternity.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Settings = {
  /* Hyper start */
  isInfinite: (decimal: Decimal): boolean => decimal.gte(Decimal.dNumberMax),
  /* Hyper end */
  exponentCommas: {
    show: true,
    min: 100000,
    max: 1000000000
  },
  exponentDefaultPlaces: 3
};
