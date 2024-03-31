"use client";

import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { RiInstallLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IMenu, IMode } from "../interface/IHeader";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const THEME_MODE: string = "airdrop_theme_mode";
const menus: IMenu[] = [
  {
    name: "Wallet",
    childs: [
      {
        name: "iOS",
        path: "#",
      },
      {
        name: "Android",
        path: "#",
      },
      {
        name: "Chrome",
        path: "#",
      },
      {
        name: "APK verification",
        path: "#",
      },
    ],
  },
  {
    name: "Swap",
    path: "",
  },
  {
    name: "NFT",
    path: "",
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
    path: "",
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

export default function Header() {
  const [mode, setMode] = useState<IMode>("DARK");
  const [showMenu, setShowMenu] = useState<string>("");

  useEffect(() => {
    const newMode: IMode = window.localStorage.getItem(THEME_MODE) as IMode;
    if (newMode) {
      setMode(newMode);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === "DARK" ? "LIGHT" : "DARK";
    setMode(newMode);
    window.localStorage.setItem(THEME_MODE, newMode);
  };

  const handleShowMenu = (menuName: string) => {
    setShowMenu(menuName);
  };

  return (
    <div
      className={`flex items-center justify-between w-full ${
        mode === "DARK" ? "bg-header" : "bg-white"
      } text-[#cdccd3] h-16`}
    >
      <div className="w-7/10 flex">
        <div className="w-2/10 ml-5 mr-5 p-2">
          <Image
            src={mode === "DARK" ? "/img/light.png" : "/img/dark.png"}
            alt=""
            width={150}
            height={50}
            className=""
          />
        </div>
        <ul
          className={`w-8/10 flex gap-5  mr-5 ml-5 shadow-lg blur-xs items-center justify-center ${
            mode === "DARK" ? "text-white" : "text-black"
          }`}
        >
          {menus.map((menu, index) => (
            <li key={`menu-item-${index}`} className={"relative mx-4 text-sm"}>
              {menu.path ? (
                <a href={menu.path}>{menu.name}</a>
              ) : (
                <>
                  <div
                    className={"flex gap-2 items-center"}
                    onMouseMove={() => handleShowMenu(menu.name)}
                    onMouseLeave={() => handleShowMenu("")}
                  >
                    <span>{menu.name}</span>
                    {menu.childs && (
                      <FaChevronDown
                        className={showMenu === menu.name ? "-rotate-180" : ""}
                      />
                    )}
                  </div>
                  {menu.childs && showMenu === menu.name && (
                    <ul
                      className={
                        "absolute top-[30px] left-0 bg-zinc-800 text-white p-7 rounded-md"
                      }
                      onMouseMove={() => handleShowMenu(menu.name)}
                      onMouseLeave={() => handleShowMenu("")}
                    >
                      <span
                        className="absolute w-full h-5 left-0 top-[-20px]"
                        onMouseMove={() => handleShowMenu(menu.name)}
                        onMouseLeave={() => handleShowMenu("")}
                      />
                      {menu.childs?.map((menuChild, idx) => (
                        <li
                          key={`menu-child-item-${idx}`}
                          className="hover:bg-white hover:text-black"
                        >
                          <a href={menuChild.path}>{menuChild.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
        <button
          className={`bg-gray-900 h-10 rounded-xl p-2 border-2 border-indigo-100  ${
            mode === "DARK"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          Bitget Exchange
        </button>
      </div>
      <div className="w-3/10">
        <ul className="flex">
          <li>
            <button
              className={` border-2 border-indigo-600 mr-5 ml-10 rounded-md px-4 py-2 ${
                mode === "DARK" ? "text-white" : "text-black"
              } `}
            >
              ConnectWallet
            </button>
          </li>
          <li>
            <button className="p-2">
              <RiInstallLine
                className={` text-xl mr-7 ml-7 p-2${
                  mode === "DARK" ? "text-white" : "text-black"
                } `}
              />
            </button>
          </li>
          <li>
            <button className="p-2">
              <GrLanguage
                className={`text-xl mr-7 ml-7 ${
                  mode === "DARK" ? "text-white" : "text-black"
                } `}
              />
            </button>
          </li>
          <li>
            <button onClick={toggleMode} className="p-2">
              {mode === "DARK" ? (
                <CiLight className="text-white text-xl mr-7 ml-7" />
              ) : (
                <MdDarkMode className="text-black text-xl mr-7 ml-7" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
