import React from 'react';
import '../index.css';
import '../components/Header.js'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import api from '../utils/Api.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import AddPlacePopup from './AddPlacePopup.js'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setcurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    (!isLiked ? api.putLike(`cards/likes/${card._id}`) : api.deleteItems(`cards/likes/${card._id}`)).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  function handleCardDelete(card) {
    api.deleteItems(`cards/${card._id}`)
      .then(() => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.filter((current) => current._id !== card._id);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err)
      });
  }
  React.useEffect(() => {
    Promise.all([api.getItems('cards'), api.getItems('users/me')])
      .then(([cardsData, userData]) => {
        setCards(cardsData);
        setcurrentUser(userData)
      })
      .catch((err) => {
        console.log(err)
      })
  },
    []
  )

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(value) {
    setSelectedCard(value)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(userData) {
    api.patchUserInfo('users/me', userData).then(newUserInfo => {
      setcurrentUser(newUserInfo);
      closeAllPopups();
    })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleUpdateAvatar(userAvatar) {
    api.patchAvatar('users/me/avatar', userAvatar).then(newUserAvatar => {
      setcurrentUser(newUserAvatar);
      closeAllPopups();
    })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleAddPlace(cardData) {
    api.postNewCard('cards', cardData).then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}
          card={selectedCard}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />


      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
