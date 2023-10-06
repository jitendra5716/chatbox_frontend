import style from "../styles/rightdiv.module.css";

const RightDiv = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
        <div className={style.divTwo}>
                
                <img src="https://cdn.dribbble.com/users/5557327/screenshots/19252662/media/a2aabaa4b0226ed49d921e00de77973e.png"/>

        </div>
            <div className={style.divOne}>
                <h1>
                    Send messages in <br/><span>Real Time</span>, without <br/>any delay between us
                </h1>
                <p>
                    Send messages easily and also without any delay between us. make the convenience of sending messages better and more fun
                </p>
                <button className={style.btn}>
                    Learn More
                </button>
            </div>
            
        </div>
        </>
    )
};

export default RightDiv;