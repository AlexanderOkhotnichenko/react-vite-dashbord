import React from "react";
import { Content } from "./components/Content";
import { ContentHeader } from "./components/Statistics/ContentHeader";
import { ContentBody } from "./components/Statistics/ContentBody";
import "./styles/statistics.scss";

export function Statistics() {
  return (
    <Content className="statistics">
      <ContentHeader />
      <ContentBody />
    </Content>
  );
}
