import React from 'react';
import '../index.css';
import '../components/Header.js'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true)
}

function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
}


  return (
    <body className="page">
    <Header />
    <Main 
    onEditAvatar={handleEditAvatarClick} 
    onEditProfile={handleEditProfileClick} 
    onAddPlace={handleAddPlaceClick}
    isEditProfilePopupOpen={isEditProfilePopupOpen}
    isAddPlacePopupOpen={isAddPlacePopupOpen}
    isEditAvatarPopupOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    />
    <Footer />
    <template id = "template-element" className="card-template">
      <li className="elements__list-item">
            <figure className="elements__figure">
              <button  type="reset" className="elements__trash"></button>
              <img className="elements__image" src="#" alt=""/>
              <figcaption className="elements__figcaption">
                <h3 className="elements__title"></h3>
                <div className="elements__like_group">
                    <button type="button" className="elements__like"></button>
                    <span className="elements__like_number"></span>
                </div>
              
              </figcaption>
            </figure>
          </li>
    </template>
</body>
  );
}

export default App;
