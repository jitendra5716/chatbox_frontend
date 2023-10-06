import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.outerDiv}>
        <div className={style.divOne}>
          <h1>
            Want to stay <br />
            Connected?
          </h1>
          <div className={style.btnDiv}>
            <button className={style.btn} id={style.appleDownload}>
              <div className={style.btnImgDiv}>
                <img src="https://cdn-icons-png.flaticon.com/128/270/270781.png" />
              </div>
              <span>Download Now</span>
            </button>
            <button className={style.btn} id={style.playDownload}>
              <div className={style.btnImgDiv}>
                <img src="https://cdn-icons-png.flaticon.com/128/1077/1077003.png" />
              </div>
              <span>Download Now</span>
            </button>
          </div>
        </div>

        <div className={style.divTwo}>
          <div className={style.address}>
            <div className={style.logoDiv}>
              <div className={style.logoImgDiv}>
                <img src="https://cdn-icons-png.flaticon.com/128/7671/7671548.png" />
              </div>
              <a class="navbar-brand text-white" href="#">
                Chatbox
              </a>
            </div>
            <p className={style.paraOne}>
              Platform used to send messages <br/>
              with a myriad of features. by <br/>
              prioritizing the user experience
            </p>
            <p className={style.paraTwo}>
              mail@chatbox.com
            </p>
          </div>
          <div className={style.listOuterDiv}>
            <div className={style.listDiv}>
              <ul>
                <li>
                  <a style={{color:'white',fontWeight:'600',fontSize:'1.1rem'}} >
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    About Us
                  </a>
                </li>
                <li>
                  <a>
                    Download
                  </a>
                </li>
                <li>
                  <a>
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.listDiv}>
            <ul>
                <li>
                  <a style={{color:'white',fontWeight:'600',fontSize:'1.1rem'}} >
                   Features
                  </a>
                </li>
                <li>
                  <a>
                    Get Started
                  </a>
                </li>
                <li>
                  <a>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.listDiv}>
            <ul>
                <li>
                  <a style={{color:'white',fontWeight:'600',fontSize:'1.1rem'}} >
                    Social Media
                  </a>
                </li>
                <li>
                  <a>
                    Instagram
                  </a>
                </li>
                <li>
                  <a>
                    Linkdin
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <p className={style.reserved}>
          All rights reserved by Chatbox
        </p>
      </div>
    </>
  );
};

export default Footer;
