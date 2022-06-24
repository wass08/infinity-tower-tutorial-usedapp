import { Container, Header, Title } from "@mantine/core";
import "./App.css";
import { InfinityTower } from "./components/organisms/InfinityTower";
import { WalletConnect } from "./components/organisms/WalletConnect";
import { WalletInstallation } from "./components/organisms/WalletInstallation";
import { useFloors } from "./hooks/Floors";

function App() {
  const { ethereum } = window as any;
  const { floors } = useFloors();
  return (
    <div className="App">
      <Header
        height={60}
        px="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title>Infinity Tower</Title>
        <WalletConnect />
      </Header>
      <Container p="lg">
        {!ethereum ? <WalletInstallation /> : <InfinityTower floors={floors} />}
      </Container>
    </div>
  );
}

export default App;
