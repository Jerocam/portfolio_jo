import classNames from "classnames";
import { ProgressBar } from "./ProgressBar";
import { Icons } from "./Icons";

type ListCardProps = {
  data: any;
};

export const ListCards: React.FC<ListCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-2 my-4">
      {data.map((item: any) => (
        <div
          key={item.id}
          className={classNames(
            `${item.ringColor}`,
            "ring-2 rounded-md p-2 grid grid-cols-1 space-y-2"
          )}
        >
          {item.skillDetails.map((detail: any) => (
            <div
              key={detail.title}
              className={classNames(
                `${item.textColor}`,
                `${item.bgColor}`,
                "flex flex-row justify-evenly items-center p-2 rounded-md"
              )}
            >
              <div className="inline-flex items-center">
                {Icons(detail.title)}
                <h2 className="text-xl">{detail.title}</h2>
              </div>
              <ProgressBar percentage={detail.percentage} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
