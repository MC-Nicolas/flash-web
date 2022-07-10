interface ParagraphProps {
  text: string;
  fontSize?: string;
  color?: string;
  letterSpacing?: string;
}
export const BasicParagraph = ({
  text,
  fontSize = '22px',
  color = 'white',
  letterSpacing = '1px',
}: ParagraphProps) => <p style={{ fontSize, color, letterSpacing }}>{text}</p>;
