import classNames from "classnames";
import { ProgressBar } from "./ProgressBar";
import { Icons } from "./Icons";

type ListCardProps = {
  data: any;
};

export const ListCards: React.FC<ListCardProps> = ({ data }) => {
  return (
    <div className="columns-2">
      {data.map((item: any) => (
        <div
          key={item.id}
          className={classNames(
            `${item.ringColor}`,
            "ring-2 rounded-2xl p-4 xl:p-6"
          )}
        >
          {item.skillDetails.map((detail: any) => (
            <div
              key={detail.title}
              className="flex items-center justify-between gap-x-4"
            >
              <h2 className={classNames(`${item.textColor}`, "text-xl")}>
                {detail.title}
                {Icons(detail.title)}
              </h2>
              <ProgressBar percentage={detail.percentage} color={item.textColor}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
