import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { _BE_formatMantissaWithExponent, formatMantissaBaseTen, _BE_abbreviateStandard } from "./utils";

export class StandardNotation extends Notation {
  public readonly name = "Standard";

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    // Since abbreviateStandard ignores places, there's no need for this notation
    // to either accept or not accept negative places values. It treats them as 0 either way.
    return _BE_formatMantissaWithExponent(formatMantissaBaseTen, _BE_abbreviateStandard,
      1000, 1, undefined, " ", true)(value, places, placesExponent);
  }
}
