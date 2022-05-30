export interface IWrapper {
  title: { content: string; className?: string };
  logo: { src: string; className?: string };
  cta: { label: string; onClick: () => void; className?: string };
}
