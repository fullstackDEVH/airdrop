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
      <div id="desktop" className="flex bg-[#0e0e0e]">
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

      <div id="mobile" className="flex bg-[#0e0e0e] hidden ">
        <div className="w-4/10 pt-20 pb-16 pl-8">
          <img src="/img/light.png" className="w-48 pb-9" />
          <div className="gap-[5.75rem] text-white pt-4 pb-4">
            <p className="mb-4 text-[16px]">Company</p>
            <span className="flex background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjEzNyA0LjkxOWEuNDY5LjQ2OSAwIDAgMSAuNjYzIDBsNS4xNjkgNS4xNjggNS4xNjgtNS4xNjhhLjQ2OS40NjkgMCAwIDEgLjY2My42NjJsLTUuNSA1LjVhLjQ2OS40NjkgMCAwIDEtLjY2MyAwbC01LjUtNS41YS40NjkuNDY5IDAgMCAxIDAtLjY2MloiIGZpbGw9IiM0OTQ5NEQiLz48L3N2Zz4=) no-repeat;"></span>
            <ul className="text-gray-600 hidden">
              <li className="pt-1 pb-1 pr-5">
                <a>About Bitget Wallet </a>
              </li>
              <li className="pt-1.5 pb-1.5 pr-5">
                <a>Blog</a>
              </li>
              <li className="pt-1.5 pb-1.5 pr-5">
                <a>Academy</a>
              </li>
              <li className="pt-1.5 pb-1.5 pr-5">
                <a>Contact Us</a>
              </li>
            </ul>
            <p className="mb-4 text-[16px]">Developer Services</p>
            <ul className="text-gray-600 hidden">
              <li>
                <a>Business </a>
              </li>
              <li>
                <a>Developers</a>
              </li>
            </ul>

            <p className="mb-4 text-[16px]">Security</p>

            <ul className="text-gray-600 hidden">
              <li>
                <a>Verify official channels </a>
              </li>
              <li>
                <a>Protection fund</a>
              </li>
              <li>
                <a>Security technology</a>
              </li>
            </ul>
            <p className="mb-4 text-[16px]">Tools</p>
            <ul className="text-gray-600 hidden">
              <li>
                <a>Buy crypto</a>
              </li>
              <li>
                <a>Authorization Detection</a>
              </li>
              <li>
                <a>Contract detection</a>
              </li>
              <li>
                <a>Batch transfer</a>
              </li>
            </ul>
            <p className="mb-4 text-[16px]">Assets</p>
            <ul className="text-gray-600 hidden">
              <li>
                <a>All</a>
              </li>
              <li>
                <a>Avalanche</a>
              </li>
              <li>
                <a>Bitcoin</a>
              </li>
              <li>
                <a>BNB Chain</a>
              </li>
              <li>
                <a>Ethereum</a>
              </li>
              <li>
                <a>Polkadot</a>
              </li>
              <li>
                <a>Polygon</a>
              </li>
              <li>
                <a>Ripple</a>
              </li>
              <li>
                <a>Solana</a>
              </li>
              <li>
                <a>Tron</a>
              </li>
              <li>
                <a>Base</a>
              </li>
            </ul>
            <p className="mb-4 text-[16px]">Legal</p>

            <ul className="text-gray-600 hidden">
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>User Agreement</a>
              </li>
            </ul>
          </div>
          <div className="flex pt-4 gap-5 text-xl text-white">
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
          <h3 className="font-mono text-gray-600 text-[12px] mt-10 text-gray-500">
            © 2018-2024 Bitget Wallet All Rights Reserved
          </h3>
        </div>
      </div>
    </>
  );
}
