import Image from "next/image";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="flex bg-[#0e0e0e]">
        <div className="w-4/10 pt-20 pb-16 pl-24">
          <img src="/img/light.png" className="w-48 pb-9" />
          <select className="w-52 h-10 bg-black text-white border-[1px] border-gray-200 rounded-md">
            <option>English</option>
          </select>

          <div className="flex pt-10 gap-5 text-xl text-white">
            <PiTelegramLogoLight />
            <FaTwitter />
            <FaDiscord />
            <FaFacebookSquare />
          </div>
          <div className="flex pt-5 gap-5 text-xl text-gray-600">
            <FaYoutube />
            <FaMedium />
            <FaGithub />
          </div>
          <h3 className="font-mono text-white text-[12px] mt-10 text-gray-500">
            © 2018-2024 Bitget Wallet All Rights Reserved
          </h3>
        </div>

        <div className="w-6/10 grid grid-cols-4 gap-[5.75rem] text-white pt-20 pb-24 pl-20">
          <ul>
            <li className="mb-4 text-[16px]">Company</li>
            <li>About Bitget Wallet</li>
            <li>Join Us</li>
            <li>Blog</li>
            <li>Academy</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li className="mb-4 text-[16px]">Security</li>
            <li>Verify official channels</li>
            <li>Protection fund</li>
            <li>Security technology</li>
          </ul>
          <ul>
            <li className="mb-4 text-[16px]">Download</li>
            <li>iOS</li>
            <li>Android</li>
            <li>Chrome</li>
          </ul>
          <ul className="grid grid-cols-subgrid row-span-2">
            <li className="mb-4 text-[16px]">Assets</li>
            <li>All</li>
            <li>Avalanche</li>
            <li>Bitcoin</li>
            <li>BNB Chain</li>
            <li>Ethereum</li>
            <li>Polkadot</li>
            <li>Polygon</li>
            <li>Ripple</li>
            <li>Solana</li>
            <li>Tron</li>
            <li>Base</li>
          </ul>
          <ul>
            <li className="mb-4 text-[16px]">Developer Services</li>
            <li>Business</li>
            <li>Developers</li>
          </ul>
          <ul>
            <li className="mb-4 text-[16px]">Tools</li>
            <li>Buy crypto</li>
            <li>Authorization Detection</li>
            <li>Contract detection</li>
            <li>Batch transfer</li>
          </ul>
          <ul>
            <li className="mb-4 text-[16px]">Legal</li>
            <li>Privacy Policy</li>
            <li>User Agreement</li>
          </ul>
        </div>
      </div>
    </>
  );
}
