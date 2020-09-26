import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function Main(props) {

  return (
<main>
      <section className="profile">
        <div className="profile__group">
          <img src="images/user_foto.jpg" className="profile__avatar" alt="фото" onClick={props.onEditAvatar}/>
          <div className="profile__avatar_pencil"></div>
        </div>
        
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <p className="profile__subtitle">Исследователь океана</p></div>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
      <PopupWithForm name="edit-profile" title="Редактировать профиль" Formname="edit-form" children={
        <>
        <input type="text" name="name" id="name-input" className="popup__item popup__item_name" required minLength="2" maxLength="40" placeholder="Имя"/>
          <span id="name-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <input type="text" name="job" id="job-input" className="popup__item popup__item_job" required minLength="2" maxLength="200" placeholder="Занятие"/>
          <span id="job-input-error" className="popup__input-error">Вы пропустили это поле</span>
    </>
      }
      ButtonTitle="Сохранить" isOpen={props.isEditProfilePopupOpen} onClose={props.onClose}
      />
      <PopupWithForm name="add-card" title="Новое место" Formname="add-form" children={
        <>
        <input type="text" name="placename" id="place-name-input" placeholder="Название" className="popup__item popupadd__item_place-name" required minLength="1" maxLength="30"/>
          <span id="place-name-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <input type="url" name="placeimg" id="place-img-input" placeholder="Ссылка на картинку" className="popup__item popupadd__item_place-img" required/>
          <span id="place-img-input-error" className="popup__input-error">Введите адрес сайта</span>
          </>
      }
        ButtonTitle="Создать" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}
        />
   
    <ImagePopup />
    <PopupWithForm name="question" title="Вы уверены?" ButtonTitle="Да"/>
    <PopupWithForm name="editavatar" title="Обновить аватар" Formname="edit-avatar" children={
      <>
      <input type="url" id="avatar-input" name="link" placeholder="Ссылка" className="popup__item popup__item_avatar" required minLength="1"/>
          <span id="avatar-input-error" className="popup__input-error">Вы пропустили это поле</span>
          </>
    }
    ButtonTitle="Сохранить" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose}
    />
    </main>
  )
}

export default Main;