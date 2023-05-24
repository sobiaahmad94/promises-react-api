import React from 'react';
import './CharacterDetail.css';
import EpisodeList from './EpisodeList';

const CharacterDetail = ({ character }) => {
  return (
    <div id="characterDetail">
      <div id="detailWrapper">
        <div id="flexWrapper">
          <div id="left">
            <h2>{character.name}</h2>
            <p>
              <span>Status</span>: {character.status}
            </p>
            <p>
              <span>Species</span>: {character.species}
            </p>
            <p>
              <span>Location</span>: {character.location.name}
            </p>
          </div>
          <div id="right">
            <img id="character-image" src={character.image} alt={character.name} />
          </div>
        </div>
      </div>

      <div id="episode-list-wrapper">
        <h3>Episodes:</h3>
        <EpisodeList episodes={character.episode} />
      </div>
    </div>
  );
};

export default CharacterDetail;
