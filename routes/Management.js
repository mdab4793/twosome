import styles from '../css/MenuWindow.module.css';
import MenuWindow from './MenuWindow';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NewItem from '../component/NewItem';
const Management = ({
  item,
  bever,
  tea,
  bottle,
  setIsAdd,
  isAdd,
  isBackColor,
  setISBackColor,
  ice,
  cake,
  sherbet,
  piece,
  dessert,
  sandwich,
  lunchset,
  salad,
  bread,
  snack,
  productset,
  beans,
  reqularmd,
  seasonmd,
  giftset,
}) => {
  const navigate = useNavigate();
  const [isAddModal, setIsAddModal] = useState(false);

  return (
    <body>
      <div className={styles.manageContainer}>
        <header>
          <h1>메뉴편집</h1>

          <h1
            className={styles.manageClose}
            onClick={() => {
              navigate('/');
            }}
          >
            X
          </h1>
        </header>{' '}
      </div>
      <div className={styles.menuWindow}>
        <MenuWindow
          item={item}
          bever={bever}
          tea={tea}
          bottle={bottle}
          isAdd={setIsAdd}
          setIsAdd={setIsAdd}
          isBackColor={isBackColor}
          setISBackColor={setISBackColor}
          ice={ice}
          cake={cake}
          sherbet={sherbet}
          piece={piece}
          dessert={dessert}
          sandwich={sandwich}
          lunchset={lunchset}
          salad={salad}
          bread={bread}
          snack={snack}
          productset={productset}
          beans={beans}
          reqularmd={reqularmd}
          seasonmd={seasonmd}
          giftset={giftset}
        />
      </div>
      <div div className={styles.menuManageBtn}>
        <div className={styles.menuAddBtn}>
          <button
            onClick={() => {
              setIsAddModal(!isAddModal);
            }}
          >
            추가하기
          </button>
        </div>
      </div>
      {isAddModal == true ? (
        <NewItem
          setIsAdd={setIsAdd}
          isAdd={isAdd}
          isBackColor={isBackColor}
          setISBackColor={setISBackColor}
          ice={ice}
          cake={cake}
          sherbet={sherbet}
          piece={piece}
          dessert={dessert}
          setIsAddModal={setIsAddModal}
          sandwich={sandwich}
          lunchset={lunchset}
          salad={salad}
          bread={bread}
          snack={snack}
          productset={productset}
          beans={beans}
          reqularmd={reqularmd}
          seasonmd={seasonmd}
          giftset={giftset}
        />
      ) : null}
    </body>
  );
};
export default Management;
