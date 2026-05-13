export type CtaHighlightProps = {
  title: string;
  description: string;
};

export function CtaHighlight({ title, description }: CtaHighlightProps) {
  return (
    <div className="space-y-3">
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="text-sm text-white opacity-90">{description}</p>
    </div>
  );
}
