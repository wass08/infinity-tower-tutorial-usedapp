export const StrToHexColor = (str: string) => {
  return Number(`0x${str.substring(1)}`);
};

export const HexToStrColor = (hex: string) => {
  return hex.replace("0x", "#");
};
