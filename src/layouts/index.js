import { DefaultLayout } from "./Default";
import { TestLayout } from "./Test";
import { useLoaderData } from "react-router-dom";

export default function LayoutDispatcher(props) {
  const { layout } = useLoaderData();
  let layoutElement;

  layoutElement = <DefaultLayout />;

  if (layout === "test") {
    layoutElement = <TestLayout />;
  }

  return layoutElement;
}
