import { IMenu } from "./components/interface/IHeader";

export const menusMobile: IMenu[] = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Swap",
    path: "#",
  },
  {
    name: "Business",
    childs: [
      {
        name: "Business",
        path: "#",
      },
      {
        name: "Deverlopers",
        path: "#",
      },
    ],
  },
  {
    name: "Academy",
    path: "#",
  },
  {
    name: "More",
    childs: [
      {
        name: "DApp",
        path: "#",
      },
      {
        name: "Blog",
        path: "#",
      },
      {
        name: "Protection fund",
        path: "#",
      },
      {
        name: "Security technology",
        path: "#",
      },
      {
        name: "Join US",
        path: "#",
      },
      {
        name: "GASU",
        path: "#",
      },
    ],
  },
];
