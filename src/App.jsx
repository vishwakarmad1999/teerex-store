import ProductStateProvider from "@/stores";
import TopNav from "./components/topnav";
import Home from "./views/home";

function App() {
  return (
    <ProductStateProvider>
      <TopNav />
      <Home />
    </ProductStateProvider>
  );
}

export default App;
