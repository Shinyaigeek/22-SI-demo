import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type HOC = JSX.Element

export const Layout: (props: {
    children: React.ReactChild
}) => HOC = (props: {
  children: React.ReactChild;
}) => {
return <React.Fragment><Header />{props.children}<Footer />{new Array(1000).fill(0).map(_ => <span />)}</React.Fragment>;
};
