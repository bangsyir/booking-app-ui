import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment whit Air conditioning</span>
        <span className="siFeatures">entire studio * 1 bathroom * 21m^2 1 full bed</span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this freate price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excelent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <div className="siTaxOp">Includes taxes and fees</div>
          <button className="siCheckBtn">See availablity</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem