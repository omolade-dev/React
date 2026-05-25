function Cards(Props) {
  <div>
    <div className="card">
      <div className="top">
        <h2 className="name">{Props.name}</h2>
        <img className="circle-img" src={Props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{Props.tel}</p>
        <p className="info">{Props.email}</p>
      </div>
    </div>
  </div>;
}

export default Cards;
