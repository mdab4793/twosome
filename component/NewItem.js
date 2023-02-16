import styles from '../css/MenuWindow.module.css';
import { useEffect, useState } from 'react';
const NewItem = ({ isAdd, setIsAddModal }) => {
  return (
    <body className={styles.newItemContainer}>
      <form
        action={`/add/${isAdd}`}
        method='POST'
        enctype='multipart/form-data'
        className={styles.menuForm}
      >
        <header>
          {' '}
          <h1>{isAdd && isAdd}</h1>
          <h1
            className={styles.newItemClose}
            onClick={() => {
              setIsAddModal();
            }}
          >
            X
          </h1>
        </header>
        <div className={styles.menuItemSection}>
          <h2>메뉴를 추가해주세요.</h2>
          <div>
            <label>메뉴</label>
            <input type='text' name='title' />
          </div>
          <div>
            <label>가격</label>
            <input type='text' name='price' />
          </div>
          <div>
            <select name='category'>
              <option>{isAdd && isAdd}</option>
            </select>
          </div>
          <div>
            <select name='background'>
              <option> white</option>
              <option> yellow</option>
              <option> green</option>
              <option> blue</option>
              <option> red</option>
              <option>purple</option>
            </select>
          </div>
          <div>
            <label>이미지업로드</label>
            <input type='file' name='image' />
          </div>
          <button type='submit'>올리기</button>{' '}
        </div>
      </form>
    </body>
  );
};

export default NewItem;
