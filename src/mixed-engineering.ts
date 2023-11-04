import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { StandardNotation } from "./standard";
import { _BE_formatMantissaWithExponent, formatMantissaBaseTen } from "./utils";

const standard = new StandardNotation();

export class MixedEngineeringNotation extends Notation {
  public get name(): string {
    return "Mixed engineering";
  }

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    if (value.log10().lt(33)) {
      return standard.formatDecimal(value, places, placesExponent);
    }
    return _BE_formatMantissaWithExponent(formatMantissaBaseTen, this._BE_formatExponent.bind(this),
      10, 3, (x, _) => formatMantissaBaseTen(x, 0)
    )(value, places, placesExponent);
  }
}
