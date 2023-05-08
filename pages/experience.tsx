import { ContainerBlock } from "../components/ContainerBlock";
import type { NextPage } from "next";
import { timeline } from "../lib/details";

const Experience: NextPage = () => {
  return (
    <ContainerBlock>
      <div>
        <h1 className="text-2xl mb-10">Experience</h1>
        <div className="ml-10">
          <div className="flow-root max-w-5xl">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-gray-300 bg-gray-500">
                          <event.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-8 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.content}{" "}
                            <a
                              href={event.href}
                              className="font-medium text-gray-400"
                            >
                              {event.target}
                            </a>
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-400 font-medium">
                          <span>{event.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
};

export default Experience;
