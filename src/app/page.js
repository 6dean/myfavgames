"use client";
import CallApiGames from "./API/videogames";
import platformLogos from "./platforms";
import { useState, useEffect } from "react";
import Header from "./header";
import SliderGames from "./slider-details";
import { LuGamepad2 } from "react-icons/lu";
import Footer from "./footer";

export default function Home() {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
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

  const filtersGames = (platformSelect) => {
    if (!games) return;

    const filteredTitles = games
      .filter((elem) => elem.Game.platform === platformSelect)
      .map((elem) => elem.Game);

    setGamesDisplay([]);
    setActualGame(0);
    setGamesDisplay(filteredTitles);
    setIsLoaded(true);
    setlogoGame(platformLogos[platformSelect]);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Header logoGame={logoGame} filtersGames={filtersGames} />
      <div>
        {isLoaded ? (
          <SliderGames
            gamesDisplay={gamesDisplay}
            setActualGame={setActualGame}
            actualGame={actualGame}
            logoGame={logoGame}
          />
        ) : (
          <div className="empty-container">
            <span className="empty-text">
              Choisissez une catégorie pour découvrir mes jeux
            </span>
            <span className="empty-icon">
              <LuGamepad2 size={55} />
            </span>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
