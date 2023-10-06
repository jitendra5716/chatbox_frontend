
import style from '../styles/leftdiv.module.css';

const LeftDiv = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <div className={style.divOne}>
                <h1>
                    Communicate more <br/>efficiently by using <br/><span>Chatbox</span>
                </h1>
                <p>
                    Send messages easily using only mobile or desktop <br/> applications. and with a myriad of features that can<br/> make your experience different from other applications.
                </p>
                <div className={style.usersDiv}>
                    <div>
                        <h1>
                            1M+
                        </h1>
                        <p>
                            Users
                        </p>
                    </div>
                    <div>
                        <h1>
                            2M+
                        </h1>
                        <p>
                            Downloads
                        </p>
                    </div>
                    <div>
                        <h1>
                            2+
                        </h1>
                        <p>
                            Years
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.divTwo}>
                
                    <img src="https://cdn.dribbble.com/users/5557327/screenshots/19252662/media/a2aabaa4b0226ed49d921e00de77973e.png"/>

            </div>
        </div>
        </>
    )
};

export default LeftDiv;