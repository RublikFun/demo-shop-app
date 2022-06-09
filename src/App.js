import { Header } from "./layouts/Header";
import { Shop } from "./layouts/Shop";
import { Footer } from "./layouts/Footer";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
