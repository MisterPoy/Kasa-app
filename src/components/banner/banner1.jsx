import "./banner1.scss";

export function Banner1({page}) {
  const isHomePage = page === 'home';

  return (
    <div 
      className="banner"
      style={{ // SETS THE BACKGROUND IMAGE BASED ON THE CURRENT PAGE
        backgroundImage: isHomePage
          ? "url('../src/assets/imageSource1.png')"
          : "url('../src/assets/imageSource2.png')"
      }}
      // DISPLAY THE TEXT ONLY ON THE HOME PAGE
      > 
      {isHomePage && <h1 className="banner-title">Chez vous, partout et ailleurs</h1>}
      <div className="voileNoire"></div>
    </div>
  );
}
