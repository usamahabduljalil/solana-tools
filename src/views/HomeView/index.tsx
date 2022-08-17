import Link from "next/link";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo, ConnectWallet } from "components";
import styles from "./index.module.css";

const walletPublicKey = "";

export const HomeView: FC = ({ }) => {
  const { publicKey } = useWallet();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box flex justify-around">
          <div className="flex-1 px-2">
            <div className="text-sm breadcrumbs">
              <ul className="text-xs sm:text-xl">
                <li>
                  <Link href="/">
                    <a>PIGGY DUST TOOLS</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
            <ConnectWallet onUseWalletClick={onUseWalletClick} />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  <SolanaLogo />
                </h1>
                <p className="mb-2">
                  Piggy Dust Scam/Rug NFT Burn Tool for The solana ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* <h1 className="mb-2 pb-8 text-5xl">Available tools :</h1> */}
            <ul className="text-left leading-10">
              <li className="mb-5">
                <Link href="/gallery">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      🔥 -- PiggyBurn NFTs
                    </a>
                    <div>A UI to burn Solana NFTs also releases the rent (ca 0.002 SOL per NFT)</div></div>
                </Link>
                </li>
              <li className="mb-5">
                <Link href="/">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      📤 -- PiggySend 
                    </a> <span className='text-[#F03A17] font-semibold'>Launch soon</span>
                    <div>Got too many NFTs? Transfer them in bulk using PiggySend!</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      💹 -- PiggyInvestment 
                    </a> <span className='text-[#F03A17] font-semibold'>Launch soon</span>
                    <div>Utilize your Nft using PiggyInvestment, get ROI</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                      🤑 -- PiggyLoan 
                    </a> <span className='text-[#F03A17] font-semibold'>Launch soon</span>
                    <div>Use your NFT as collateral to get $SOL/$DUST</div>
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                    📨 📨 📨  -- PiggySaving 
                    </a> <span className='text-[#F03A17] font-semibold'>Launch soon</span>
                    <div>Configure timely ROI savings in $SOL/$DUST </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};