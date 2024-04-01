import { FaqItem } from "@/components/common";
import Image from "next/image";
import FaqItemMobile from "../common/faqItemmobile";

export default function FAQ() {
  return (
    <>
      <div className="bg-black">
        {/* faq */}
        <div id="desktop" className="max-w-custom mx-auto bg-black pb-[80px]">
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
        </div>
        <div
          id="mobile"
          className="max-w-custom mx-auto bg-black pb-[80px] pt-5 hidden"
        >
          <div className="air-mod-title airdrop-headline text-center pb-5">
            <p className="line"></p>
            <h2 className="story_container_wrapper_heading-mobile ">FAQ</h2>
            <p className="line"></p>
          </div>

          {/* list */}
          <FaqItemMobile
            title={"What are BWB Points ?"}
            data={[
              "The BWB airdrop is awarded based on BWB Points. Following the airdrop campaign conclusion, users will be able to convert their BWB Points into BWB tokens.",
            ]}
          />
          <FaqItemMobile
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
          <FaqItemMobile
            title={"How do I claim my initial BWB Points ?"}
            data={[
              "If you find that you are eligible for initial BWB points, simply follow the instructions provided on the page to download the Bitget Wallet App and claim your points. You can accumulate points by participating in upcoming events. These points can be converted into BWB tokens upon event conclusion.",
            ]}
          />
          <FaqItemMobile
            title={"How do I earn more BWB Points ?"}
            data={[
              "You can earn BWB Points daily by participating in various activities on the Bitget Wallet App, including inviting friends, maintaining wallet balance, and completing swap transactions.",
            ]}
          />
        </div>
      </div>
    </>
  );
}
