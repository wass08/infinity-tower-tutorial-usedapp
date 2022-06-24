import { Text, Title } from "@mantine/core";

export const WalletInstallation = () => {
  return (
    <>
      <Title>MetaMask is required</Title>
      <Text>
        Follow the link to install
        <Text
          variant="link"
          component="a"
          href="https://metamask.io/download.html"
        >
          Meta Mask
        </Text>
      </Text>
    </>
  );
};
