import { FaqItem } from "@/components/common";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary">
      {/* inquire title */}

      <div className="max-w-custom mx-auto">
        <div className="min-h-[500px] pb-[90px]">
          {/* banner mobile */}
          <div className="hidden">
            <Image src="" alt="" />
          </div>

          {/* title */}
          <div className="flex_center">
            <p className="title_banner">BWB Airdrop</p>
          </div>

          {/* content */}
          <div className="flex_center">
            <p className="title_content">
              {`Bitget Wallet's Ecosystem Token BWB Is Live. Claim Your Airdrop
              Now!`}
            </p>
          </div>

          {/* input */}
          <div className="title_box_input">
            <div className="flex items-center h-[96px] rounded-[80px] bg-primary">
              <Image
                src="/icons/search.svg"
                alt="icon search"
                width={38}
                height={38}
                className="ml-[30px]"
              />
              <input
                type="text"
                placeholder="Enter your EVM/Tron /Solana address to check your initial BWB Points"
                className="title_input"
              />
              <button className="title_box_btn">Check</button>
            </div>
          </div>

          {/* tips desc */}
          <div className="mt-[250px]">
            <p className="title_tip_desc text-white">
              {`We've issued BWB Points to eligible users of Bitget Wallet and
              other popular Web3 wallets like Metamask`}
            </p>
            <p className="title_tip_desc text-[#00c2b7] underline">
              New users can get started with Bitget Wallet and receive 50 BWB
              Points when they download the app!
            </p>
          </div>
        </div>
      </div>

      {/* Introduce */}
      <div className="bg-black relative">
        {/* imgs */}
        <div className="absolute top-[-480px]">
          <Image src="/imgs/bg2.png" alt="icon coin" fill className="img_bg" />
        </div>
        <div className="absolute top-[-500px]">
          <Image src="/imgs/bg1.png" alt="icon coin" fill className="img_bg" />
        </div>

        {/* box */}
        <div className="max-w-custom mx-auto">
          {/* slash mobile */}
          <div className="hidden"></div>
          {/* list */}
          <div className="relative flex justify-center h-[540px]">
            {/* line */}
            <div className="absolute top-0 bottom-0 left-0 right-0 flex_center gap-8">
              <div className="line_slash w-[200px]"></div>
              <Image
                src="/imgs/icon-coin.png"
                alt="icon coin"
                width={48}
                height={54}
              />
              <div className="line_slash w-[200px]"></div>
              <Image
                src="/imgs/icon-coin.png"
                alt="icon coin"
                width={48}
                height={54}
              />
              <div className="line_slash w-[200px]"></div>
              <Image
                src="/imgs/icon-coin.png"
                alt="icon coin"
                width={48}
                height={54}
              />
              <div className="line_slash w-[200px]"></div>
            </div>

            {/* item */}
            <div className="relative h-full">
              <div className="mt-[63px] box_item_border border rounded-lg overflow-hidden">
                <div className="box_item w-[360px]">
                  {/* content */}
                  <div className="p-[24px] rounded-lg flex_center flex-col">
                    <div className="box_item_content_time">Mar 18 - Apr 28</div>
                    <div className="box_item_content_desc">
                      BWB airdrop event
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* item */}
            <div className="relative pt-[280px]">
              <div className="mt-[63px] box_item_border border rounded-lg overflow-hidden">
                <div className="box_item w-[360px]">
                  {/* content */}
                  <div className="p-[24px] rounded-lg flex_center flex-col">
                    <div className="box_item_content_time">Q2</div>
                    <div className="box_item_content_desc">
                      Convert points into BWB
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* item */}
            <div className="relative">
              <div className="mt-[63px] box_item_border border rounded-lg overflow-hidden">
                <div className="box_item w-[360px]">
                  {/* content */}
                  <div className="p-[24px] rounded-lg flex_center flex-col">
                    <div className="box_item_content_time">Q2</div>
                    <div className="box_item_content_desc">BWB TGE & IEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
