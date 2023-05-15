import { Tab } from "@headlessui/react";
import { GridCards } from "./GridCards";
import classNames from "classnames";

type TabProps = {
  tabdata: any;
};

export const Tabs: React.FC<TabProps> = ({ tabdata }) => {
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabdata.map((tabItem: any) => (
            <Tab
              key={tabItem.id}
              className={classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-200",
                "ui-selected:bg-gray-600 ui-not-selected:bg-none",
                "focus:outline-none hover:bg-white/[0.12]"
              )}
            >
              {tabItem.tabname}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {tabdata.map((tabItem: any, idx: number) => (
            <Tab.Panel key={idx} className="p-4">
              <div className="grid gap-8 grid-cols-3 grid-rows-3">
              {tabItem.tabpanel.map((item: any, index: number) => (
                <GridCards data={item} key={index} />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
