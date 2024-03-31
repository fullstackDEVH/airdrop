import { FaqItem } from "@/components/common";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="bg-black">
        <div
          id="desktop"
          className="max-w-custom mx-auto pb-[111px] pt-[150px]"
        >
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
      </div>

      <div id="mobile" className="bg-black pl-5 pr-5 hidden">
        <div className="air-mod-title airdrop-headline text-center">
          <p className="line"></p>
          <h2 className="story_container_wrapper_heading-mobile ">About BWB</h2>
          <p className="line"></p>
        </div>
        <div className="story_container_wrapper-line-mobile">
          <div className="story_container_wrapper-mobile">
            <h4 className="story_container_wrapper_paragraph-mobile">
              Bitget Wallet, a world-leading Web3 wallet, has officially
              launched its very own ecosystem token BWB.
            </h4>
            <p className="story_container_wrapper_paragraph-mobile">
              As the foundational asset of the decentralized Bitget Wallet
              ecosystem, BWB empowers holders with exclusive benefits, including
              governance rights within our communities and eligibility for
              future rewards.
            </p>
            <p className="story_container_wrapper_paragraph-mobile">
              {`Boasting a legacy of over 5 years and a global user base of more
                than 19 million... Bitget Wallet's introduction of BWB marks a
                significant milestone in its brand lineage. Join us in
                celebrating Bitget Wallet's innovative products as we continue
                to unravel exciting plans for ecosystem growth.`}
            </p>
            <p className="story_container_wrapper_paragraph-mobile">
              Our goal is to onboard the next 1 billion users into Web3, opening
              the doors to a wealth of new assets and earning opportunities for
              all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
