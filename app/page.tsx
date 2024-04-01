"use client";

import { FaqItem } from "@/components/common";
import Image from "next/image";

export default function Home() {
  function handleVideoEnded() {
    console.log("Video đã kết thúc");
    const videoOverlay = document.getElementById("video_overlay");
    if (videoOverlay) {
      videoOverlay.style.display = "none";
    }
  }
  return (
    <>
      {/* <div className="video_overlay fixed top-0 w-screen h-screen left-0 z-[1000] bg-primary flex_center">
        <video
          src="/video/video.mp4"
          autoPlay
          muted
          className="h-full w-full object-center"
          onEnded={handleVideoEnded}
        ></video>
      </div> */}

      <div className="bg-primary">
        {/* inquire title */}

        <div className="max-w-custom mx-auto relative z-30">
          <div className="min-h-[500px] pb-[90px] relative">
            {/* banner mobile */}
            <div className="absolute w-full top-0 left-1/2 -translate-x-1/2 ">
              <Image
                src="/imgs/bg-mobile.png"
                alt="icon mobile"
                fill
                className="img_bg"
              />
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

            {/* icon coin mobile */}
            <div className="flex_center mt-[30px] sm:hidden">
              <Image
                src="/imgs/icon-coin.png"
                alt="icon coin"
                width={200}
                height={234}
              />
            </div>

            {/* input */}
            <div className="title_box_input">
              <div className="flex items-center h-[96px] rounded-xl sm:rounded-[80px] bg-primary">
                <Image
                  src="/icons/search.svg"
                  alt="icon search"
                  width={38}
                  height={38}
                  className="ml-[30px] hidden sm:block"
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
            <div className="mt-[250px] px-5 text-center sm:px-0">
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
          <div className="absolute top-[-484px] hidden sm:block">
            <Image
              src="/imgs/bg2.png"
              alt="icon coin"
              fill
              className="img_bg"
            />
          </div>
          <div className="absolute top-[-484px] hidden sm:block">
            <Image
              src="/imgs/bg1.png"
              alt="icon coin"
              fill
              className="img_bg"
            />
          </div>
          <div className="absolute top-[-484px] block sm:hidden">
            <Image
              src="/imgs/bg-mobile-body.png"
              alt="icon coin"
              fill
              className="img_bg"
            />
          </div>

          {/* box */}
          <div className="max-w-custom mx-auto px-5 box">
            {/* slash mobile */}
            <div className="hidden"></div>
            {/* list */}
            <div className="relative flex justify-center flex-col sm:flex-row sm:h-[540px]">
              {/* line */}
              <div className="absolute top-0 bottom-0 left-0 right-0 flex_center gap-8 hidden sm:block">
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
                  <div className="box_item sm:w-[360px]">
                    {/* content */}
                    <div className="p-[24px] rounded-lg flex_center flex-col">
                      <div className="box_item_content_time">
                        Mar 18 - Apr 28
                      </div>
                      <div className="box_item_content_desc">
                        BWB airdrop event
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* item */}
              <div className="relative sm:pt-[280px]">
                <div className="mt-[63px] box_item_border border rounded-lg overflow-hidden">
                  <div className="box_item sm:w-[360px]">
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
                  <div className="box_item sm:w-[360px]">
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

          {/* story */}
          <div className="max-w-custom mx-auto pb-[111px] pt-[150px] box">
            <div className="story_container relative">
              <Image
                src="/imgs/coin_overlay.png"
                className="absolute right-[36px] top-[-130px]"
                alt="coin_overlay icon"
                width={261}
                height={305}
              />
              <div className="story_container_wrapper">
                <h2 className="story_container_wrapper_heading">About BWB</h2>
                <h4 className="story_container_wrapper__sub_heading">
                  Bitget Wallet, a world-leading Web3 wallet, has officially
                  launched its very own ecosystem token BWB.
                </h4>
                <p className="story_container_wrapper_paragraph">
                  As the foundational asset of the decentralized Bitget Wallet
                  ecosystem, BWB empowers holders with exclusive benefits,
                  including governance rights within our communities and
                  eligibility for future rewards.
                </p>
                <p className="story_container_wrapper_paragraph">
                  {`Boasting a legacy of over 5 years and a global user base of more
                than 19 million... Bitget Wallet's introduction of BWB marks a
                significant milestone in its brand lineage. Join us in
                celebrating Bitget Wallet's innovative products as we continue
                to unravel exciting plans for ecosystem growth.`}
                </p>
                <p className="story_container_wrapper_paragraph">
                  Our goal is to onboard the next 1 billion users into Web3,
                  opening the doors to a wealth of new assets and earning
                  opportunities for all.
                </p>
              </div>
            </div>
          </div>

          {/* faq */}
          <div className="max-w-custom mx-auto box sm:bg-black pb-[80px]">
            <h2 className="text-2xl mb-5 text-white">FAQ</h2>

            {/* list */}
            <FaqItem
              title={"What are BWB Points ?"}
              data={[
                "The BWB airdrop is awarded based on BWB Points. Following the airdrop campaign conclusion, users will be able to convert their BWB Points into BWB tokens.",
              ]}
            />
            <FaqItem
              title={"Which addresses are eligible for initial BWB Points ?"}
              data={[
                "· Retroactive airdrop for Bitget Wallet existing users",
                "BWB Points are awarded based on a comprehensive assessment of users' Swap transactions, holdings, and participation in platform activities. Connect your wallet to the Bitget Wallet App event page to receive these airdrop points.",
                "· Airdrop incentives for active on-chain traders",
                "Airdrop incentives are awarded to users who have completed Swap transactions on prominent Web3 wallets, such as MetaMask, Trust Wallet, Coinbase Wallet, OKX Web3, imToken, Phantom, Rainbow, and TokenPocket. Download the Bitget Wallet App and import your wallet addresses to claim these airdrop points.",
                "· Fair airdrops for new users",
                "New users who download the Bitget Wallet App and create their first wallet during the event period will receive 50 BWB Points. These points can be unlocked after users make swap transactions for 3 days (at least $100 each day) within the event period.",
              ]}
            />
            <FaqItem
              title={"How do I claim my initial BWB Points ?"}
              data={[
                "If you find that you are eligible for initial BWB points, simply follow the instructions provided on the page to download the Bitget Wallet App and claim your points. You can accumulate points by participating in upcoming events. These points can be converted into BWB tokens upon event conclusion.",
              ]}
            />
            <FaqItem
              title={"How do I earn more BWB Points ?"}
              data={[
                "You can earn BWB Points daily by participating in various activities on the Bitget Wallet App, including inviting friends, maintaining wallet balance, and completing swap transactions.",
              ]}
            />

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
      </div>
    </>
  );
}
