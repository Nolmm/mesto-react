import React from 'react';

function ImagePopup(props) {
return (
  <section className="popup popup__increase-img">
      <div className="popup__container-increase">
        <button type="button" className="popup__close-img popup__close-btn" onClick={props.onClose}></button>
      <figure className="popup__figure">
        <img alt="фото" src="#" className="popup__img"/>
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
      </div>
    </section>
)
}

export default ImagePopup;