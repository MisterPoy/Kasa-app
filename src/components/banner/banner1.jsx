import "./banner1.scss";

export function Banner1({page}) {
  const isHomePage = page === 'home';

  return (
    <div 
      className="banner"
      style={{
        backgroundImage: isHomePage
          ? "url('../src/assets/imageSource1.png')"
          : "url('../src/assets/imageSource2.png')"
      }}
      >
      {isHomePage && <h1 className="banner-title">Chez vous, partout et ailleurs</h1>}
      <div className="voileNoire"></div>
    </div>
  );
}
