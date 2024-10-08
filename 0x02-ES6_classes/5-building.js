export default class Building {
  // sqft
  constructor(sqft) {
    if (
      this.constructor !== Building &&
      typeof this.evacuationWarningMessage !== "function"
    ) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage",
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  static evacuationWarningMessage() {
    return "";
  }
}
