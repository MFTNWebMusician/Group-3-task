import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./layout/Header";
import AppRouter from "./router/AppRouter";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
