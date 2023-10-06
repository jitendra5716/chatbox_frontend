import style from "../styles/feature.module.css";

const Feature = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <button className={style.btn}>
                Featured
            </button>
            <h1>
                Reasons why you should choose a <span>Chatbox.</span>
            </h1>
            <p>
                Chatbox has several features that make the reason 
                
            </p>
            <p>why you choose chatbox</p>
            <div className={style.innerDiv}>
                <div className={style.box} id={style.boxOne}>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/742/742751.png" />
                    </div>
                    <h2>Easy to use</h2>
                    <p>
                        Easy to use anyone.
                    </p>
                    <p>
                        and simple.
                    </p>
                </div>
                <div className={style.box} >
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/9969/9969891.png" />
                    </div>
                    <h2>Real Time</h2>
                    <p>
                        Connect with customers
                    </p>
                    <p>
                        in real time.
                    </p>
                </div>
                <div className={style.box} >
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/996/996365.png" />
                    </div>
                    <h2>Safety & Private</h2>
                    <p>
                        Enjoy your confort and safety
                    </p>
                    <p>
                        when Communicate.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default Feature;