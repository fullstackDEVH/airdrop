"use client";

import Image from "next/image";
import { useState } from "react";

interface IProps {
  title: string;
  data: string[];
}

export default function FaqItemMobile({ title, data }: IProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className="faq_item-mobile cursor-pointer"
      onClick={() => setActive((pre) => !pre)}
    >
      <div className="flex justify-between items-center ">
        <h2 className="faq_item_headding">{title}</h2>
        <Image
          src="/icons/icon-white.svg"
          alt="icon arrow"
          width={20}
          height={20}
          className={`${
            active ? "rotate-180" : ""
          } transition-all`}
        />
      </div>
      <div
        className={`${
          active ? "scale-100 h-auto" : "scale-0 h-0"
        } origin-top-left`}
      >
        {data.map((paragraph, index) => (
          <p className="faq_item_paragraph" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
