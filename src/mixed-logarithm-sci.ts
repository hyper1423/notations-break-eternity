import Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { ScientificNotation } from "./scientific";

const scientific = new ScientificNotation();

export class MixedLogarithmSciNotation extends Notation {
  public get name(): string {
    return "Mixed Logarithm (Sci)";
  }

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    if (value.log10().lt(33)) {
      return scientific.formatDecimal(value, places, placesExponent);
    }
    const log10 = value.log10();
    /* Hyper start */
    return `e${this._BE_formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
    /* Hyper end */
  }
}
