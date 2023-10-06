import style from "../styles/heading.module.css";

const Heading = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <div className={style.divOne}>
                <p>
                    Get the best <br />
                    <strong>experience</strong> when <br/>
                    sending messages.
                </p>
            </div>
            <div className={style.divTwo}>
                <p>
                    Platform used to send messages with a myriad <br/> of features. by prioritizing the user experience
                </p>
                <button className={style.btn} id={style.appleDownload}>
                    <div className={style.btnImgDiv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/270/270781.png"/>
                    </div>
                    <span>Download Now</span>
                </button>
                <button className={style.btn} id={style.playDownload}>
                    <div className={style.btnImgDiv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1077/1077003.png"/>
                    </div>
                    <span>Download Now</span>
                </button>
            </div>
        </div>
        </>
    )
};

export default Heading;