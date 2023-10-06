import { useState } from "react";

import { tabsContent } from "../../utils/data";
import { BackButton } from "../../utils/helper";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (idx: number): void => setActiveTab(idx);

  return (
    <section className="section">
      <div className="container mx-auto">
        <BackButton />
        <div className="flex flex-col ">
          <h2 className="mb-12 text-center font-serif text-5xl">NavTabs</h2>
          <div className="w-full space-x-1">
            {tabsContent.map((tab, index) => (
              <button
                key={tab.id}
                className={`btn-tab ${activeTab === index ? "activeTab" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="h-[60vh] w-full rounded-md bg-slate-200 p-12">
            {tabsContent[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavTabs;
