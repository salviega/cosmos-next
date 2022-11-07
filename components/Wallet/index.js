import styles from "./Wallet.module.scss";
import React from "react";
import { ethers } from "ethers";
import { useAuth } from "hook/context";

export function Wallet() {
  const [loading, setLoading] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState("");
  const auth = useAuth();

  const connectWallet = async () => {
    if (!window.ethereum?.isMetaMask) {
      alert("Metamask wasn't detected, please install metamask extension");
      return;
    }

    if (auth.user.walletAddress === "Connect wallet") {
      setLoading(true);
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await web3Provider.send("eth_requestAccounts", []);

      const web3Signer = web3Provider.getSigner();
      const chainId = await web3Signer.getChainId();
      if (chainId !== 43113) {
        auth.logout();
        alert("Change your network to Fuji's testnet!");
        setLoading(false);
        return;
      }
      auth.login({ walletAddress: accounts[0] });
      setLoading(false);
    } else {
      auth.logout();
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setWalletAddress(auth.user.walletAddress);
  }, [auth.user.walletAddress]);

  return (
    <button className={styles.wallet} onClick={connectWallet}>
      <p>
        {loading
          ? "loading..."
          : walletAddress !== "Connect wallet"
          ? "..." + String(walletAddress).slice(36)
          : "Connect wallet"}
      </p>
    </button>
  );
}
