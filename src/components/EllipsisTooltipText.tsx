
interface Props {
  text: string;
  textWidth?: number;
}

const EllipsisTooltipText: React.FC<Props> = ({ text, textWidth = 10 }) => {
  return (
    <div
      className={`max-w-[${textWidth}rem] truncate cursor-help`}
      title={text}
    >
      {text}
    </div>
  );
};

export default EllipsisTooltipText;
