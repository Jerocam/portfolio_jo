import classNames from "classnames";
import { ProgressBar } from "./ProgressBar";

type ListCardProps = {
  data: any;
};

export const ListCards: React.FC<ListCardProps> = ({ data }) => {
  const colorRingCards: any = {
    blue: "ring-blue-500",
    red: "ring-red-500",
    green: "ring-green-500",
  };
  const colorCards: any = {
    blue: "bg-blue-900/40 text-blue-500",
    red: "bg-red-900/40 text-red-500",
    green: "bg-green-900/40 text-green-500",
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item: any) => (
        <div key={item.id}>
          <h2 className="text-gray-300 text-sm font-semibold uppercase mb-2">{item.title}</h2>
          <div
            className={classNames(
              `${colorRingCards[item.color]}`,
              "ring-2 rounded-md p-2 grid grid-cols-1 space-y-2"
            )}
          >
            {item.skillDetails.map((detail: any) => (
              <div
                key={detail.title}
                className={classNames(
                  `${colorCards[item.color]}`,
                  "flex flex-row justify-evenly items-center p-2 rounded-md"
                )}
              >
                <div className="inline-flex items-center">
                  
                  <h2 className="text-xl">{detail.title}</h2>
                </div>
                <ProgressBar percentage={detail.percentage} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
