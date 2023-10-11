/*
import Decimal from "break_eternity.js";
import { Notation } from "../notation";

export class NiceNotation extends Notation {
  public get name(): string {
    return "Nice";
  }

  public formatDecimal(value: Decimal, places: number): string {
    return value.log(69).toFixed(Math.max(2, places))
      .replace("-", "^");
  }

  public get infinite(): string {
    return "69420";
  }

  public formatUnder1000(value: number, places: number): string {
    return this.formatDecimal(new Decimal(value), places);
  }
}
*/