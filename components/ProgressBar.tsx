import classNames from "classnames";

type ProgressBarProps = {
  percentage: number;
  color: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color,
}) => {
  return (
    <div
      className={classNames(`${color}`, "radial-progress bg-gray-800")}
      style={{
        "--value": `${percentage}`,
        "--size": "6rem",
        "--thickness": "6px",
      }}
    >
      {percentage}%
    </div>
  );
};
