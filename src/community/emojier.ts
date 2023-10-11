/*
import type Decimal from "break_eternity.js";
import { Notation } from "../notation";
import { ScientificNotation } from "../scientific";

const scientific = new ScientificNotation();

const EMOJIER = ["🎂", "🎄", "💀", "👪", "🌈", "💯", "🎃", "💋", "😂", "🌙"];

export class EmojierNotation extends Notation {
  public get name(): string {
    return "Emojier";
  }

  public formatUnder1000(value: number, places: number): string {
    return this.affect(scientific.formatUnder1000(value, places));
  }

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    return this.affect(scientific.formatDecimal(value, places, placesExponent));
  }

  public affect(formatted: string): string {
    const characters = formatted.split("");
    const seenDigits: number[] = [];
    for (let i = 0; i < characters.length; i++) {
      if ("0123456789".includes(characters[i])) {
        if (seenDigits.map((x) => x % 5).includes(Number(characters[i]) % 5)) {
          const emojierIndex = seenDigits.map((x) => x % 5).indexOf(Number(characters[i]) % 5) +
            5 * ((Number(!seenDigits.includes(Number(characters[i]))) + i) % 2);
          characters[i] = EMOJIER[emojierIndex];
        } else {
          seenDigits.push(Number(characters[i]));
        }
      }
    }
    return characters.join("");
  }
}
*/