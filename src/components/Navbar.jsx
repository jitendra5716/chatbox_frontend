import style from "../styles/navbar.module.css";

const Navbar = ()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg pt-3 px-3">
  <div class="container-fluid" id={style.navDiv}>
    <div className={style.logoDiv}>
        <div className={style.logoImgDiv}>
            <img  src="https://cdn-icons-png.flaticon.com/128/7671/7671548.png"/>
            
        </div>
        <a class="navbar-brand text-white" href="#">Chatbox</a>
    </div>
    
    <button id={style.collapseBtn} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  class="collapse navbar-collapse  w-25 " id="navbarSupportedContent">
      <ul class="navbar-nav w-50 me-auto mb-2 mb-lg-0 d-flex justify-content-between">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Download</a>
        </li>
        
        
      </ul>
    </div>
    <div className={style.btnDiv}>
        <button className={style.btn}>
            Try For Free
        </button>
    </div>
  </div>
</nav>
        </>
    )
};

export default Navbar;