import React from 'react';
import '../index.css';
import '../components/Header.js'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'
import api from '../utils/Api.js'
import EditProfilePopup from './EditProfilePopup.js'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setcurrentUser] = React.useState({})


// React.useEffect(() => {
//   Promise.all([api.getItems('cards'), api.getItems('users/me')])
//     .then(([cardsData, userData]) => {
//       setCards(cardsData);
//       setcurrentUser(userData)
//       //setUserName(userData.name);
//       //setUserDescription(userData.about);
//       //setUserAvatar(userData.avatar)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// },
//   []
// )

React.useEffect(() => {
  api.getItems('users/me').then(userData => {
    setcurrentUser(userData);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        // isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onCardClick={handleCardClick}
        card={selectedCard}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />


    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
