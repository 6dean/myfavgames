const Header = ({ logoGame, filtersGames }) => {
  return (
    <div className="page-game">
      <div className="container">
        <div className="categories"></div>
        <div
          className={
            logoGame.includes("snes") ? "button-logo-select" : "button-logo"
          }
          onClick={() => {
            filtersGames("SNES");
          }}
        >
          Super Nintendo
        </div>
        <div
          className={
            logoGame.includes("gb") ? "button-logo-select" : "button-logo"
          }
          onClick={() => {
            filtersGames("Game Boy");
          }}
        >
          GAME BOY
        </div>
        <div
          className={
            logoGame.includes("ps1") ? "button-logo-select" : "button-logo"
          }
          onClick={() => {
            filtersGames("PlayStation");
          }}
        >
          PlayStation
        </div>
        <div
          className={
            logoGame.includes("ps2") ? "button-logo-select" : "button-logo"
          }
          onClick={() => {
            filtersGames("PlayStation 2");
          }}
        >
          PlayStation 2
        </div>
        <div
          className={
            logoGame.includes("ps3") ? "button-logo-select" : "button-logo"
          }
          onClick={() => {
            filtersGames("PlayStation 3");
          }}
        >
          PlayStation 3
        </div>
        <div
          className={
            logoGame.includes("ps5") ? "button-logo-select" : "button-logo"
          }
          onClick={() => {
            filtersGames("PlayStation 5");
          }}
        >
          PlayStation 5
        </div>
        <div
          className={
            logoGame.includes("steam") ? "button-logo-select" : "button-logo"
          }
          onClick={() => {
            filtersGames("PC");
          }}
        >
          PC
        </div>
      </div>
    </div>
  );
};

export default Header;
