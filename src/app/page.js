"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CallApiGames from "./API/videogames";
import { useState, useEffect } from "react";
import {
  IoStarSharp,
  IoStarOutline,
  IoHeart,
  IoHeartDislikeSharp,
} from "react-icons/io5";

export default function Home() {
  const [games, setGames] = useState([]);
  const [logoGray, setlogoGray] = useState("");
  const [logoGame, setlogoGame] = useState("");
  const [gamesDisplay, setGamesDisplay] = useState([]);
  const [actualGame, setActualGame] = useState(0);

  const fetchGames = async () => {
    if (games.length === 0) {
      try {
        const gamesData = await CallApiGames();
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    } else {
      null;
    }
  };

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

  const snesGames = () => {
    if (games) {
      setGamesDisplay([]);
      const filteredTitles = games
        .filter((elem) => elem.Game.platform === "SNES")
        .map((elem) => elem.Game);

      setActualGame(0);
      setGamesDisplay(filteredTitles);
      setlogoGame(
        "https://res.cloudinary.com/dlfp2xvis/image/upload/v1735773422/favgames/snes_n4iekk.png"
      );
    }
  };

  const ps1Games = () => {
    if (games) {
      setGamesDisplay([]);
      const filteredTitles = games
        .filter((elem) => elem.Game.platform === "PlayStation")
        .map((elem) => elem.Game);

      setActualGame(0);
      setGamesDisplay(filteredTitles);
      setlogoGame(
        "https://res.cloudinary.com/dlfp2xvis/image/upload/v1735773422/favgames/ps1_gp8mdh.png"
      );
    }
  };

  const gameBoyGames = () => {
    if (games) {
      setGamesDisplay([]);
      const filteredTitles = games
        .filter((elem) => elem.Game.platform.includes("Game Boy"))
        .map((elem) => elem.Game);

      setActualGame(0);
      setGamesDisplay(filteredTitles);
      setlogoGame(
        "https://res.cloudinary.com/dlfp2xvis/image/upload/v1735773422/favgames/gb_yqx85y.png"
      );
    }
  };

  const ps2Games = () => {
    if (games) {
      setGamesDisplay([]);
      const filteredTitles = games
        .filter((elem) => elem.Game.platform === "PlayStation 2")
        .map((elem) => elem.Game);

      setActualGame(0);
      setGamesDisplay(filteredTitles);
      setlogoGame(
        "https://res.cloudinary.com/dlfp2xvis/image/upload/v1735773422/favgames/ps2_cs2cq3.png"
      );
    }
  };

  const ps3Games = () => {
    if (games) {
      setGamesDisplay([]);
      const filteredTitles = games
        .filter((elem) => elem.Game.platform === "PlayStation 3")
        .map((elem) => elem.Game);

      setActualGame(0);
      setGamesDisplay(filteredTitles);
      setlogoGame(
        "https://res.cloudinary.com/dlfp2xvis/image/upload/v1736695858/favgames/ps3_pvfvam_ms8ynf.png"
      );
    }
  };

  const ps5Games = () => {
    if (games) {
      setGamesDisplay([]);
      const filteredTitles = games
        .filter((elem) => elem.Game.platform === "PlayStation 5")
        .map((elem) => elem.Game);

      setActualGame(0);
      setGamesDisplay(filteredTitles);
      setlogoGame(
        "https://res.cloudinary.com/dlfp2xvis/image/upload/v1736695858/favgames/ps5_lbm0pa_fkcfqc.png"
      );
    }
  };

  const pcGames = () => {
    if (games) {
      setGamesDisplay([]);
      const filteredTitles = games
        .filter((elem) => elem.Game.platform === "PC")
        .map((elem) => elem.Game);

      setActualGame(0);
      setGamesDisplay(filteredTitles);
      setlogoGame(
        "https://res.cloudinary.com/dlfp2xvis/image/upload/v1735773422/favgames/steam_ch1ed7.png"
      );
    }
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

  const gameDisplayed =
    gamesDisplay.length > 0 ? (
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
    ) : null;

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <div className="page-game">
        <div className="container">
          <div className="categories"></div>
          <div
            className={
              logoGame.includes("snes") ? "button-logo-select" : "button-logo"
            }
            onClick={() => {
              snesGames();
              setlogoGray("SNES");
            }}
          >
            Super Nintendo
          </div>
          <div
            className={
              logoGame.includes("gb") ? "button-logo-select" : "button-logo"
            }
            onClick={() => {
              gameBoyGames();
              setlogoGray("gameboy");
            }}
          >
            GAME BOY
          </div>
          <div
            className={
              logoGame.includes("ps1") ? "button-logo-select" : "button-logo"
            }
            onClick={() => {
              ps1Games();
              setlogoGray("PS1");
            }}
          >
            PlayStation
          </div>
          <div
            className={
              logoGame.includes("ps2") ? "button-logo-select" : "button-logo"
            }
            onClick={() => {
              ps2Games();
              setlogoGray("PS2");
            }}
          >
            PlayStation 2
          </div>
          <div
            className={
              logoGame.includes("ps3") ? "button-logo-select" : "button-logo"
            }
            onClick={() => {
              ps3Games();
              setlogoGray("PS3");
            }}
          >
            PlayStation 3
          </div>
          <div
            className={
              logoGame.includes("ps5") ? "button-logo-select" : "button-logo"
            }
            onClick={() => {
              ps5Games();
              setlogoGray("PS5");
            }}
          >
            PlayStation 5
          </div>
          <div
            className={
              logoGame.includes("steam") ? "button-logo-select" : "button-logo"
            }
            onClick={() => {
              pcGames();
              setlogoGray("PC");
            }}
          >
            PC
          </div>
        </div>
      </div>
      <>{gameDisplayed}</>
    </>
  );
}
