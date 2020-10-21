import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function Main(props) {
  //const [userName, setUserName] = React.useState(''); //name имя
  //const [userDescription, setUserDescription] = React.useState(''); // job занятие
  //const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext)

  // React.useEffect(() => {
  //   Promise.all([api.getItems('cards'), api.getItems('users/me')])
  //     .then(([cardsData, userData]) => {
  //       setCards(cardsData);
  //       setUserName(userData.name);
  //       setUserDescription(userData.about);
  //       setUserAvatar(userData.avatar)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // },
  //   []
  // )

  React.useEffect(() => {
    api.getItems('cards').then(cardsData => {
      setCards(cardsData);
    })
    .catch((err) => {
            console.log(err)
          })
  },
  []
  )
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    (!isLiked ? api.putLike(`cards/likes/${card._id}`) : api.deleteItems(`cards/likes/${card._id}`)).then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    });
}

function handleCardDelete(card) {
  api.deleteItems(`cards/${card._id}`)
            .then(() => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
            const newCards = cards.filter((current) => current._id !== card._id );
            // Обновляем стейт
        setCards(newCards);
        });
}

  return (
    <main>
      <section className="profile">
        <div className="profile__group" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} className="profile__avatar" alt="фото" />
          <div className="profile__avatar_pencil"></div>
        </div>

        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p></div>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card key={i} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          ))}
        </ul>
      </section>

      {/* <PopupWithForm name="edit-profile" title="Редактировать профиль" Formname="edit-form" children={
        <>
          <input type="text" name="name" id="name-input" className="popup__item popup__item_name" required minLength="2" maxLength="40" placeholder="Имя" />
          <span id="name-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <input type="text" name="job" id="job-input" className="popup__item popup__item_job" required minLength="2" maxLength="200" placeholder="Занятие" />
          <span id="job-input-error" className="popup__input-error">Вы пропустили это поле</span>
        </>
      }
        ButtonTitle="Сохранить" isOpen={props.isEditProfilePopupOpen} onClose={props.onClose}
      /> */}
      <PopupWithForm name="add-card" title="Новое место" Formname="add-form" children={
        <>
          <input type="text" name="placename" id="place-name-input" placeholder="Название" className="popup__item popupadd__item_place-name" required minLength="1" maxLength="30" />
          <span id="place-name-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <input type="url" name="placeimg" id="place-img-input" placeholder="Ссылка на картинку" className="popup__item popupadd__item_place-img" required />
          <span id="place-img-input-error" className="popup__input-error">Введите адрес сайта</span>
        </>
      }
        ButtonTitle="Создать" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}
      />

      <ImagePopup
        card={props.card}
        onClose={props.onClose} />

      <PopupWithForm name="question" title="Вы уверены?" ButtonTitle="Да" />
      {/* <PopupWithForm name="editavatar" title="Обновить аватар" Formname="edit-avatar" children={
        <>
          <input type="url" id="avatar-input" name="link" placeholder="Ссылка" className="popup__item popup__item_avatar" required minLength="1" />
          <span id="avatar-input-error" className="popup__input-error">Вы пропустили это поле</span>
        </>
      }
        ButtonTitle="Сохранить" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose}
      /> */}
    </main>
  )
}

export default Main;