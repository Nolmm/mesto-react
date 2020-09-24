import React from 'react';

function Main() {
  return (
<main>
      <section className="profile">
        <div className="profile__group">
          <img src="images/user_foto.jpg" className="profile__avatar" alt="фото"/>
          <div className="profile__avatar_pencil"></div>
        </div>
        
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <p className="profile__subtitle">Исследователь океана</p></div>
            <button type="button" className="profile__edit-button"></button>
          </div>
          <button type="button" className="profile__add-button"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
      <section className="popup popup__edit-profile">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-btn"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form name="edit-form" className="popup__form popup__edit_form" noValidate>
          <input type="text" name="name" id="name-input" className="popup__item popup__item_name" required minLength="2" maxLength="40"/>
          <span id="name-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <input type="text" name="job" id="job-input" className="popup__item popup__item_job" required minLength="2" maxLength="200"/>
          <span id="job-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <button type="submit" className="popup__submit-button popup__edit-button">Сохранить</button>
        </form>
      </div>
    </section>
    <section className="popup popup__add-card">
      <div className="popup__container">
        <button type="button" className="popup__close-add popup__close-btn"></button>
        <h2 className="popup__title">Новое место</h2>
        <form name="edit-form" className="popup__form popup__add-form" noValidate>
          <input type="text" name="placename" id="place-name-input" placeholder="Название" className="popup__item popupadd__item_place-name" required minLength="1" maxLength="30"/>
          <span id="place-name-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <input type="url" name="placeimg" id="place-img-input" placeholder="Ссылка на картинку" className="popup__item popupadd__item_place-img" required/>
          <span id="place-img-input-error" className="popup__input-error">Введите адрес сайта</span>
          <button type="submit" className="popup__submit-button popup__add-button">Создать</button>
        </form>
      </div>
    </section>
    <section className="popup popup__increase-img">
      <div className="popup__container-increase">
        <button type="button" className="popup__close-img popup__close-btn"></button>
      <figure className="popup__figure">
        <img alt="фото" src="#" className="popup__img"/>
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
      </div>
    </section>
    <section className="popup popup__question">
      <div className="popup__container">
        <button type="button" className="popup__close-ques popup__close-btn"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="submit" className="popup__submit-button popup__ques-button">Да</button>
      </div>
    </section>
    <section className="popup popup__editavatar">
      <div className="popup__container">
        <button type="button" className="popup__close-btn popup__close-editavatar"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form name="edit-avatar" className="popup__form popup__editavatar-form">
          <input type="url" id="avatar-input" name="link" placeholder="Ссылка" className="popup__item popup__item_avatar" required minLength="1"/>
          <span id="avatar-input-error" className="popup__input-error">Вы пропустили это поле</span>
          <button type="submit" className="popup__submit-button popup__avatar-button">Сохранить</button>
        </form>
      </div>
</section>
    </main>
  )
}

export default Main;