import { Button, Group, Text } from "@mantine/core";
import { Rinkeby, useEthers } from "@usedapp/core";

export const WalletConnect = () => {
  const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } =
    useEthers();
  if (account) {
    if (chainId === Rinkeby.chainId) {
      return <Button onClick={deactivate}>Disconnect</Button>;
    } else {
      return (
        <Group position="right">
          <Text color="red">Wrong network</Text>
          <Button onClick={() => switchNetwork(Rinkeby.chainId)}>
            Switch network
          </Button>
        </Group>
      );
    }
  } else {
    return <Button onClick={activateBrowserWallet}>Connect to MetaMask</Button>;
  }
};
