import style from "../styles/footerheading.module.css";


const FooterHeading = ()=>{

    const imgUrl = process.env.PUBLIC_URL + '../assets/img/chatimg.png';
    return(
        <>
        <div className={style.outerDiv}>
            <div className={style.innerDiv}>

            </div>
        </div>
        </>
    )
};

export default FooterHeading;