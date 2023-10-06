import Navbar from "./Navbar";
import style from "../styles/heropage.module.css";
import Heading from "./Heading";


const HeroPage = ()=>{
    return(
        <>
        <div className={style.outerContainer}>
        <Navbar />
        <Heading />
        </div>
        </>
    )
};

export default HeroPage;