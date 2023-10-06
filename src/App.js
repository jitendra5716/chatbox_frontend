import ChatDiv from "./components/ChatDiv";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import FooterHeading from "./components/FooterHeading";
import HeroPage from "./components/HeroPage";
import LeftDiv from "./components/LeftDiv";
import RightDiv from "./components/RightDiv";
import style from "./styles/app.module.css";

function App() {
  return (
    <>
    <div className={style.outerDiv}>
    <HeroPage />
    <ChatDiv />
    <Feature />
    <LeftDiv />
    <RightDiv />
    <FooterHeading />
    <Footer />
    </div>
    
    </>
  );
}

export default App;
