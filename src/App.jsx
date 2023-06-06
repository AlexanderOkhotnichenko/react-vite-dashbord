import React, { useState } from "react";
import { Header } from "./Header";
import { Main } from "./components/Main";
import { Content } from "./components/Content";
import { Panel } from "./Panel";
import { Statistics } from "./Statistics";
import "./styles/App.scss";

export const AppContext = React.createContext();

function App() {
  const [previewURL, setPreviewURL] = useState('');
  const [datasetTab, setDatasetTab] = useState('overview');
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <>
      <AppContext.Provider value={{ previewURL, setPreviewURL, datasetTab, setDatasetTab, openPanel, setOpenPanel }}>
        <Header />
        <Main className="main">
          <Content className="wrapper">
            <Panel />
            <Statistics className="statistics" />
          </Content>
        </Main>
      </AppContext.Provider>
    </>
  );
}

export default App;
