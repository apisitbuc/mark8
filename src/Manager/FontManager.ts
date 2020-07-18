import _ from "lodash";

class FontManager {
  static default: FontManager = new FontManager();

  private TEXT_SIZE = 1.4;
  private REMARK_SIZE = 1.3;

  private constructor() {}

  private convertToREM(size: number) {
    return size + "rem";
  }

  get text() {
    return this.convertToREM(this.TEXT_SIZE);
  }

  get remark() {
    return this.convertToREM(this.REMARK_SIZE);
  }
}

export default FontManager;
