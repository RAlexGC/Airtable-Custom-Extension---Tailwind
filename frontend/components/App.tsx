import React from "react";
import { useSettingsButton } from "@airtable/blocks/ui";
import { useState } from "react";
import Settings from "./Settings";
import { CodeSlash  } from "react-bootstrap-icons";
import Header from "./Header";
import { globalConfig } from "@airtable/blocks";
import useCustomColors from "../util/useCustomColors";

const App = () => {
  // Show settings button
  const [isShowingSettings, setIsShowingSettings] = useState(false);
  useSettingsButton(function () {
    setIsShowingSettings(!isShowingSettings);
  });

  // Example of Bootstrap icons
  const icons = (
    <div className="icons flex space-x-2">
      <CodeSlash color="#FFFFFF" size={20} />
    </div>
  );

  // Example of Globalconfig and use of custom hook
  const backgroundColor = globalConfig.get("backgroundColor") as string;
  const headerColor = globalConfig.get("headerColor") as string;
  useCustomColors({ backgroundColor, headerColor });

  return (
    <div className="w-full h-full h-min-screen flex flex-col items-center">
      <div className="w-full md:w-3/4">
        {isShowingSettings ? (
          <Settings />
        ) : (
          <>
            <Header title="Hello from InAir Studio!" icon={icons} />
            <p className="text-xl pt-2">Tailwind is working </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
