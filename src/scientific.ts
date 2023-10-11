import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { _BE_formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

export class ScientificNotation extends Notation {
  public get name(): string {
    return "Scientific";
  }

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    return _BE_formatMantissaWithExponent(formatMantissaBaseTen, this._BE_formatExponent.bind(this),
      10, 1, (x, _) => formatMantissaBaseTen(x, 0)
    )(value, places, placesExponent);
  }
}
