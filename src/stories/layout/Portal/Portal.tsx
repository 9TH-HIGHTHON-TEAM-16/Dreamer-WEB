import { PropsWithChildren } from "@/stories/core";
import ReactDom from "react-dom";

export const Portal = ({ children }: PropsWithChildren) => {
  const el = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, el);
};
