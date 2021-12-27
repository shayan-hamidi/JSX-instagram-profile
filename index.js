function Nav({src}) {
  return(
    <nav id="nav">
    <button onClick={()=> console.log("backClick")}><i className="fa fa-angle-left backBtn"></i></button>
    <div id="profileNameBox"><h1>{"instagram"}</h1><img src= {src} alt="blueTick" width="40" height="25" /></div>
    <button onClick={()=> console.log("menuClick")}><svg aria-label="Options" className="_8-yf5 " color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
    </nav>
  );
}
Nav.prototype={
  src:PropTypes.string,
}
function ProfileBox({src}) {
  return(
  <div className="profileBox">
  <div className="profileDetails">
  <div id="profileImgBox"><img src= {src} alt="instagram-profile" width="150" height="150" /></div> 
   <div className="countBox">
       <div className="profileStatistics"><span>{"6,368"}</span><span>{"Posts"}</span></div>
       <div className="profileStatistics"><span>{"350 M"}</span><span>{"Followers"}</span></div>
       <div className="profileStatistics"><span>{"101"}</span><span>{"Following"}</span></div>
   </div>
   </div>
   </div>
   );
}
ProfileBox.prototype={
  src:PropTypes.string,
}
function BioBox({href}) {
  return(
    <section className="bioBox">
    <h3>{"Instagram"}</h3>
    <p>Bringing you closer to the people and things you <br />love. ❤️</p>
    <a href={href}>{"www.facebook.com/covidsupport"}</a>
</section>
  );
}
BioBox.prototype={
  href:PropTypes.string,
}
function ActionBox() {
  return(
    <div className="actionBox">
    <button onClick={()=> console.log("followClick")} id="followBtn">{"Follow"}</button>
    <button onClick={()=> console.log("messageClick")} id="messageBtn">{"Message"}</button>
    <button onClick={()=> console.log("otherUsersClick")} id="otherUsersBtn"><i className="fa fa-angle-down"></i></button>
</div>
  );
}
function App() {
  return(
    <div id="container">
      <Nav src={"./images/blueTick.png"} />
      <ProfileBox src={"./images/profile-instagram.jpg"} />
      <BioBox href={"https://www.facebook.com/community_help/?page_source=fb_marketing_covid_mar_campaign"} />
      <ActionBox />
    </div>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));