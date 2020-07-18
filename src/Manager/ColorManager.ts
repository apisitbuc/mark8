import _ from "lodash";
class ColorManager {
  static default: ColorManager = new ColorManager();
  text: string = "#000000";
  white: string = "#ffffff";
  red: string = "#EB5757";
  blue: string = "#0089FF";
  textHeader: string = "#A6AAB4";
  chipbgcolorprimary: string = "rgba(111,207,151,0.24)";
  chiptextcolorprimary: string = "#6fcf97";
  chipbgcolorsecondary: string = "rgba(243, 208, 83, 0.28)";
  chiptextcolorsecondary: string = "#F2C94C";
  private constructor() {}
}

export default ColorManager;
