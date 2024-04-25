import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader({user,commisions,language}) {
  let pageHeader = React.createRef();
  console.log(user)
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div style={user?user.ProfilePhotoUrl=='DEFAULT'?{backgroundColor:'#0274A8',fontSize:'40px',fontWeight:'bolder',fontFamily:'cursive',cursor:'pointer',padding:'1%'}:{display:'block'}:{}} className="photo-container">
            {user?user.ProfilePhotoUrl=='DEFAULT'?<h3>{user.length!==0&&user.userName.slice(0,1)}</h3>:<img src={user.ProfilePhotoUrl} style={{width:'100%',height:'100%'}}/>:''}
          </div>
          <h3 className="title">{user&&user.userName}</h3>
          <p className="category">#{user&&user.userName.replace(/\s/g, '')}</p>
          <div className="content">
            <div className="social-description">
              <h2>{user&&commisions.length}</h2>
              <p>{language=='Eng'?'Commision':"Komisiyo zawe"}</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
