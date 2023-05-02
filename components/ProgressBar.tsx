type ProgressBarProps = {
  percentage: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage
}) => {
  return (
    <div
      className="radial-progress bg-gray-800"
      style={{
        "--value": `${percentage}`,
        "--size": "4rem",
        "--thickness": "5px",
      }}
    >
      {percentage}%
    </div>
  );
};
