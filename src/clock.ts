/*
import Decimal from "break_eternity.js";
import { Notation } from "./notation";

const HOURS = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"];
const LOG12 = Math.log10(12);

export class ClockNotation extends Notation {
  public get name(): string {
    return "Clock";
  }

  public get infinite(): string {
    return "🕛🕡";
  }

  public formatUnder1000(value: number): string {
    return this.clockwise(new Decimal(value));
  }

  public formatDecimal(value: Decimal): string {
    return this.clockwise(value);
  }

  private clockwise(value: Decimal): string {
    if (value.lt(12)) {
      return this.hour(value.toNumber());
    }
    // Say the clock goes 0123456789ab. A single digit covers 0 through 11.
    // Two digits (clocks) go 00, 01, 02... 0b, 10, 11, ... bb
    // The leading digit is distinct from the absense of a clock. So, if we make
    // 00 be 12, and go up by multiples of 12, then 01 is 24, 02 is 36, etc; 0b is then
    // 144.
    // This, of course, is confusing, because we'd expect 10 to be 144. So, we go up
    // by multiples of 11 instead. Thus, we have 00 = 12, 01 = 23, 02 = 34, ... 0b = 133
    // Then we get to 10, 11, 12, etc. Same issue here -- so we go up by 132's (11*12).
    // Eventually, b0 is 12^12 == 8916100448256, so the limit of two digits is 12^13
    // With 3 clocks, we continue a scientific-like notation, with 2 clocks for the
    // exponent. The smallest exponent we need to show is 13; that's 00; so bb (143)
    // will be 156
    // 4 clocks, in general, is hyper scientific. However, when the fourth clock shows
    // up (showing 0), we do another cycle of scientific (so, mantissa + 2 exponent digits)
    // This gives another 144 possible values for the exponent, which gets to 300.
    const log = value.log10() / LOG12;
    let exponent = Math.floor(log);
    if (log < 301) {
      const clockLow = (12 ** (log - exponent + 1) - 12) / 11;
      if (exponent < 13) {
        return this.hour(exponent - 1) + this.hour(clockLow);
      }
      exponent -= 13;
      let prefix = "";
      if (exponent >= 144) {
        prefix = this.hour(0);
        exponent -= 144;
      }
      return prefix + this.hour(exponent / 12) + this.hour(exponent % 12) + this.hour(clockLow);
    }
    // With the first clock of 4 showing 1, we do 3 digits of exponent. So, 000 is 301, and bbb
    // is 2028. Past that, we go by 12's, and so on.
    exponent -= 301;
    let clockHigh = 1;
    while (exponent >= 1728) {
      exponent = (exponent - 1728) / 12;
      ++clockHigh;
    }
    return this.hour(clockHigh) + this.hour(exponent / 144) +
      this.hour(exponent % 144 / 12) + this.hour(exponent % 12);
  }

  private hour(number: number): string {
    return HOURS[Math.max(Math.min(Math.floor(number), 11), 0)];
  }
}
*/