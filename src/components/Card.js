import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }


  return (
    <li className="elements__list-item">
            <figure className="elements__figure">
              <button  type="reset" className="elements__trash"></button>
              <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
              <figcaption className="elements__figcaption">
                <h3 className="elements__title">{props.card.name}</h3>
                <div className="elements__like_group">
                    <button type="button" className="elements__like"></button>
                    <span className="elements__like_number">{props.card.likes.length}</span>
                </div>
              </figcaption>
            </figure>
          </li>
  )
}

export default Card;