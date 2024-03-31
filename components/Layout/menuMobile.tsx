"use client";

import Image from "next/image";
import { IMenu } from "../interface/IHeader";
import Link from "next/link";
import { useState } from "react";

interface IProps {
  childs: IMenu[];
  name: string;
  path: string;
}

function Title({
  path,
  hasChild,
  children,
  styles,
  onClick,
}: {
  path: string;
  hasChild: boolean;
  children: React.ReactNode;
  styles: string;
  onClick?: any;
}) {
  return hasChild ? (
    <div onClick={onClick} className={styles}>
      {children}
    </div>
  ) : (
    <Link href={path} className={styles}>
      {children}
    </Link>
  );
}

export default function MenuMobile({ name, path, childs }: IProps) {
  const [active, setIsActive] = useState<boolean>(false);
    
  return (
    <div>
      <Title
        path={path}
        hasChild={childs.length ? true : false}
        styles="px-[10px] py-[15px] flex justify-between items-center hover:bg-[#202024] rounded cursor-pointer text-[16px] font-medium"
        onClick={() => setIsActive((pre) => !pre)}
      >
        <p className="text-white">{name}</p>
        {childs.length ? (
          <Image
            src="/icons/arrow-bottom-fill.svg"
            width={10}
            height={10}
            alt="icon arrow"
            className={`${active ? "-rotate-180" : "rotate-180"}`}
          />
        ) : null}
      </Title>

      {childs.length ? (
        <div
          className={`${
            active ? "h-auto" : "h-0"
          } overflow-hidden transition-all duration-500`}
        >
          {childs.map((child) => (
            <Title
              path={child.path ?? "#"}
              hasChild={child.childs?.length ? true : false}
              styles="px-[24px] py-[15px] flex justify-between items-center hover:bg-[#202024] cursor-pointer text-[14px] font-medium"
            >
              <p className="text-white">{child.name}</p>
              {child.childs?.length ? (
                <Image
                  src="/icons/arrow-bottom-fill.svg"
                  width={10}
                  height={10}
                  alt="icon arrow"
                  className={`${active ? "-rotate-180" : "rotate-180"}`}
                />
              ) : null}
            </Title>
          ))}
        </div>
      ) : null}
    </div>
  );
}
