export interface IBox {
  className?: string;
  imgSrc: string;
  imgAlt?: string;
  children?: JSX.Element;
  text?: { content: string; className?: string };
  hash?: { hashes: string[]; className?: string };
  animatable?: "flip" | "fade";
}
