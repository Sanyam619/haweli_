import React from "react";

export default function AdminItemStore() {
  return (
    <>
      <div className=" flex gap-x-4 items-center rounded-full ">
        <div className="flex flex-col w-full border-t border-r border-black">
          <div className="flex flex-shrink-0 bg-black text-white">
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Heading 1</span>
            </div>
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Total Item</span>
            </div>
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Heading 2</span>
            </div>
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Total Item</span>
            </div>
          </div>
          <div className="overflow-auto">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex flex-shrink-0">
                {[...Array(1)].map((_, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"
                  >
                    <span>Item&nbsp;{index + 1}</span>
                  </div>
                ))}
                {[...Array(1)].map((_, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"
                  >
                    <span>{index + 23}</span>
                  </div>
                ))}
                {[...Array(1)].map((_, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"
                  >
                    <span>Item&nbsp;{index + 1}</span>
                  </div>
                ))}
                {[...Array(1)].map((_, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black"
                  >
                    <span>{index + 23}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-shrink-0 bg-black text-white">
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Footer 1</span>
            </div>
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Footer 2</span>
            </div>
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Footer 3</span>
            </div>
            <div className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
              <span>Footer 4</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
