import {
  IoStarSharp,
  IoStarOutline,
  IoHeart,
  IoHeartDislikeSharp,
} from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gameDisplayed = ({
  gamesDisplay,
  setActualGame,
  actualGame,
  logoGame,
}) => {
  const renderingStars = (review) => {
    let stars = [];
    for (let index = 1; index < 6; index++) {
      if (index <= review) {
        stars.push(
          <IoStarSharp name="star" size={24} color="orange" key={index} />
        );
      } else {
        stars.push(
          <IoStarOutline name="star" size={24} color="grey" key={index} />
        );
      }
    }
    return <div className="flex">{stars}</div>;
  };

  const settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "80px",
    initialSlide: 0,
    infinite: true,
    slidesToShow: gamesDisplay.length > 5 ? 5 : 3,
    speed: 900,
    afterChange: (currentIndex) => {
      setActualGame(currentIndex);
    },
  };

  if (gamesDisplay.length > 0) {
    return (
      <div className="game-page-container">
        <div className="slider-container">
          <Slider
            {...settings}
            key={gamesDisplay.map((game) => game.id).join(",")}
          >
            {gamesDisplay.map((e) => (
              <div key={e.ID}>
                <img src={e.cover} alt="cover" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex items-center justify-center">
          <div className="card-game flex flex-col w-3/4">
            <div className="flex justify-between items-center">
              <div className="flex-start">
                <div className="title-game">
                  {typeof actualGame === "number"
                    ? gamesDisplay[actualGame].title
                    : "error server"}
                </div>
              </div>
              <div className="flex-end">
                <img src={logoGame} alt="logo" width={"120px"} />
              </div>
            </div>

            <div className="flex mt-4">
              <div className="game-info flex flex-col w-1/3 pr-4">
                <div className="flex justify-between">
                  <p className="text-info text-lg font-semibold">Genre </p>
                  <div className="text-card">
                    {typeof actualGame === "number"
                      ? gamesDisplay[actualGame].genre
                      : "error server"}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className=" text-info text-lg font-semibold">Date </p>
                  <div className="text-card">
                    {typeof actualGame === "number"
                      ? gamesDisplay[actualGame].releaseDate
                      : "error server"}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-info text-lg font-semibold ">
                    Restriction{" "}
                  </p>
                  <div
                    className={`${
                      gamesDisplay[actualGame]?.ageRestriction === "18+"
                        ? "text-red"
                        : gamesDisplay[actualGame]?.ageRestriction === "16+"
                        ? "text-orange"
                        : gamesDisplay[actualGame]?.ageRestriction === "12+"
                        ? "text-light-orange"
                        : gamesDisplay[actualGame]?.ageRestriction ===
                          "Tous publics"
                        ? "text-white"
                        : "text-green"
                    }`}
                  >
                    {gamesDisplay[actualGame]?.ageRestriction || "error server"}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-info text-lg font-semibold">
                    Note Presse{" "}
                  </p>
                  {typeof actualGame === "number"
                    ? gamesDisplay[actualGame].jeuxVideoComRating
                    : "error server"}
                  <>/20</>
                </div>
                <div className="flex justify-between">
                  <p className="text-info text-lg font-semibold">
                    Coup de cœur{" "}
                  </p>
                  {gamesDisplay[actualGame].top ? (
                    <IoHeart color="red" size={24} />
                  ) : (
                    <IoHeartDislikeSharp color="grey" size={24} />
                  )}
                </div>
                <div className="flex justify-between mt-5">
                  <div>
                    <p className="text-info text-lg font-semibold ">
                      Evaluation{" "}
                    </p>
                    {typeof actualGame === "number"
                      ? renderingStars(gamesDisplay[actualGame].note)
                      : "error server"}
                  </div>
                  <div>
                    <p className="text-info text-lg font-semibold ">Lien</p>
                    <a
                      href={
                        typeof actualGame === "number"
                          ? gamesDisplay[actualGame].link
                          : "error server"
                      }
                    >
                      <img
                        className="logo-jvc"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Jeuxvideo.com_Logo.svg"
                        alt="logo JVC"
                        width="24px"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="game-description flex flex-col w-2/3 pl-4">
                <div className="text-info text-lg font-semibold mb-2">
                  Description
                </div>
                <div className="text-card">
                  {typeof actualGame === "number"
                    ? gamesDisplay[actualGame].description
                    : "error server"}
                </div>
                <div className="game-staff flex justify-between mt-4">
                  <div className="w-1/2">
                    <p className="text-info font-semibold">Développeurs</p>
                    <div>
                      <div className="text-card">
                        {typeof actualGame === "number"
                          ? gamesDisplay[actualGame].developer
                          : "error server"}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <p className="text-info font-semibold">Editeurs</p>
                    <div>
                      <div className="text-card">
                        {typeof actualGame === "number"
                          ? gamesDisplay[actualGame].publisher
                          : "error server"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default gameDisplayed;
