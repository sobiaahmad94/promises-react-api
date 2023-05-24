import React, { useState, useEffect } from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterDetail from '../components/CharacterDetail';
import './MainContainer.css';

const MainContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleSelectChange = (character) => {
    const episodePromises = character.episode.map((episode) => {
      return fetch(episode).then(response => response.json());
    });

    Promise.all(episodePromises)
      .then(episodes => {
        console.log(episodes);
        setSelectedCharacter(character);
      })
      .catch(error => {
        // errorrrrr eh
        console.log(error);
      });
  };

  return (
    <>
      <h1>Characters</h1>
      <CharacterSelect characters={characters} handleSelectChange={handleSelectChange} />
      { selectedCharacter ? <CharacterDetail character={ selectedCharacter } episodes={episodes} /> : null } 
</>
  )
};

    
export default MainContainer;
