import React from "react";
import { useState } from "react";
import "./styles.css";

const movieDb = {
  comedy: [
    {
      name: "Life is beautiful (1997)",
      description:
        "A Jewish father and his family are surrounded by Nazi death camps. Living in a hostile environment, he uses humor to shield his young son from the grim realities of war.",
      rating: "4/5"
    },
    {
      name: "Despicable Me (2010)",
      description:
        "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
      rating: "3.5/5"
    },
    {
      name: "Jojo Rabbit (2019)",
      description:
        "Hitler Youth cadet Jojo Betzler firmly believes in the ideals of Nazism manifested by his imaginary friend, Adolf Hitler. However, his foundations are shaken when he finds a Jewish girl in his house.",
      rating: "4.5/5"
    }
  ],
  romance: [
    {
      name: "Say Anything (1989)",
      description:
        "When Diane and Lloyd fall in love, Diane's father, Jim, disapproves and asks her to break up with him. However, as dark secrets spill, Diane finds herself leaning on Lloyd for support.",
      rating: "4.5/5"
    },
    {
      name: "500 Days of Summer (2009)",
      description:
        "Tom revisits the approximate one year he shared with Summer, the girl he thought he could spend the rest of his life with. She, on the other hand, does not believe in relationships or boyfriends.",
      rating: "4/5"
    },
    {
      name: "The Apartment (1960)",
      description:
        "C. C. Baxter, a clerk in an insurance company, lends out his apartment to the executives to carry out their extramarital affairs. However, a spanner is thrown in the works when Baxter falls in love.",
      rating: "5/5"
    }
  ],
  action: [
    {
      name: "RRR (2022)",
      description:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
      rating: "4.5/5"
    },
    {
      name: "The Man from U.N.C.L.E. (2015)",
      description:
        "Napoleon Solo, a CIA agent, and Illya Kuryakin, a KGB operative, must set aside their differences and work together to thwart the plans of a criminal organization that wants to use nuclear weapons.",
      rating: "3.5/5"
    },
    {
      name: "Madmax Fury road (2015)",
      description:
        "In a post-apocalyptic wasteland, Max, a drifter and survivor, unwillingly joins Imperator Furiosa, a rebel warrior, in a quest to overthrow a tyrant who controls the land's water supply.",
      rating: "4/5"
    }
  ],
  drama: [
    {
      name: "Good Will Hunting (1997)",
      description:
        "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
      rating: "4.5/5"
    },
    {
      name: "Into the Wild (2007)",
      description:
        "Christopher McCandless, a young graduate, decides to renounce all his possessions and hitchhike across America. During his journey, he encounters several situations which change him as a person.",
      rating: "4.5/5"
    },
    {
      name: "Forrest Gump (1994)",
      description:
        "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");

  function genreCilckHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎞 Movies everywhere</h1>
      <p>Checkout my favourite movies. Select a genre to get started!</p>
      <div className="GenreList">
        {Object.keys(movieDb).map((genre) => {
          return (
            <span
              onClick={() => genreCilckHandler(genre)}
              className="GenreList__option"
              key={genre}
            >
              {" "}
              {genre}{" "}
            </span>
          );
        })}
      </div>
      <div className="MoviesList">
        <ul>
          {movieDb[selectedGenre].map((movie) => (
            <li key={movie.name} className="MoviesList__item">
              <div className="MoviesList__item--title">{movie.name}</div>
              <div className="MoviesList__item--description">
                <p>{movie.description}</p>
              </div>
              <div className="MoviesList__item--rating">{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
