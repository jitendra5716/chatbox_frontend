
import style from "../styles/chatdiv.module.css";

const ChatDiv = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
        <div className={style.innerDiv}>
        </div>
        <div className={style.listDiv}>
            <ul>
                <li>
                    
                        <span>
                        stripe
                            </span> 
                   
                </li>
                <li>
                    
                        <span>
                        afterpay
                        </span>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/9409/9409781.png"/>
                        </div>
                    
                </li>
                <li>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/8706/8706892.png"/>
                    </div>
                    <span>
                        hopin
                    </span>
                    
                </li>
                <li>
                    <span>
                        splunk
                    </span>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/9146/9146920.png"/>
                    </div>
                </li>
                <li>
                    <span>
                    attentive
                    </span>
                   
                </li>
            </ul>
        </div>
        </div>
        
        </>
    )
};

export default ChatDiv;