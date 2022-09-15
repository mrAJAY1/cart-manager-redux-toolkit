import { useSelector } from "react-redux";
import CartContainer from "./components/CartContainer/Index";
import Modal from "./components/Modal/Index";
import Navbar from "./components/Navbar/Index";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
