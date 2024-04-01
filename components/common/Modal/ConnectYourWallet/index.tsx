import Image from 'next/image';
import { Connector, useConnect } from 'wagmi';
import * as S from './ConnectYourWallet';
import ModalCommon from '../ModalCommon';

interface WalletConnect {
  isOpen: boolean;
  handleClickClose: () => void;
  dataConnectors: Connector<any, any>[];
}

export default function ConnectYourWallet({
  isOpen,
  handleClickClose,
  dataConnectors,
}: WalletConnect) {
  const { connect } = useConnect();

  const handleRederIcon = (name: string) => {
    switch (name) {
      case 'MetaMask':
        return '/icons/metamask-icon.svg';
      case 'WalletConnect':
        return '/icons/wallet-connect.svg';
      case 'MetaMask':
        return '/icons/coinbase-wallet.svg';
      default:
        return '/icons/coinbase-wallet.svg';
    }
  };

  return (
    <ModalCommon
      className="w-full !p-0"
      maxWidth="max-w-[500px]"
      isOpen={isOpen}
      onCLickOutSide={handleClickClose}
    >
      <S.WalletConnectWrap>
        <S.Header>
          <span>Connect your wallet</span>
          <Image
            onClick={handleClickClose}
            className="close"
            src={'/icons/close-icon.png'}
            width={18}
            height={18}
            alt=""
          />
        </S.Header>
        <S.Body>
          <div className="list-wallet">
            {dataConnectors.map((connector) => (
              <div
                key={connector.id}
                onClick={() => {
                  connect({ connector }), handleClickClose();
                }}
                className="item-wallet"
              >
                <Image src={`${handleRederIcon(connector.name)}`} width={30} height={30} alt="" />
                <span className="name-wallet">{connector.name}</span>
              </div>
            ))}
          </div>
          <div className="version">
            <span>Connect wallet</span>
            <span>block</span>
          </div>
        </S.Body>
      </S.WalletConnectWrap>
    </ModalCommon>
  );
}
