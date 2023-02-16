import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/Edit.module.css';
import { useNavigate } from 'react-router-dom';

const Edit = ({
  item,
  bever,
  tea,
  bottle,
  ice,
  sherbet,
  cake,
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
  isAdd,
}) => {
  let { id } = useParams();
  const navigate = useNavigate();
  // useParams의  id 값과 데이터의 id값이 일치하게 하기
  const matchItemId =
    item.menu &&
    item.menu.find(function (x) {
      return x._id == id;
    });
  const matchBeverId =
    bever.menu &&
    bever.menu.find(function (x) {
      return x._id == id;
    });
  const matchTeaId =
    tea.menu &&
    tea.menu.find(function (x) {
      return x._id == id;
    });
  const matchBottleId =
    bottle.menu &&
    bottle.menu.find(function (x) {
      return x._id == id;
    });
  const matchIceId =
    ice.menu &&
    ice.menu.find(function (x) {
      return x._id == id;
    });
  const matchSherbetId =
    sherbet.menu &&
    sherbet.menu.find(function (x) {
      return x._id == id;
    });
  const matchCakeId =
    cake.menu &&
    cake.menu.find(function (x) {
      return x._id == id;
    });
  const matchPieceId =
    piece.menu &&
    piece.menu.find(function (x) {
      return x._id == id;
    });
  const matchDessertId =
    dessert.menu &&
    dessert.menu.find(function (x) {
      return x._id == id;
    });
  const matchSandwichId =
    sandwich.menu &&
    sandwich.menu.find(function (x) {
      return x._id == id;
    });
  const matchLunchsetId =
    lunchset.menu &&
    lunchset.menu.find(function (x) {
      return x._id == id;
    });
  const matchSaladId =
    salad.menu &&
    salad.menu.find(function (x) {
      return x._id == id;
    });
  const matchBreadId =
    bread.menu &&
    bread.menu.find(function (x) {
      return x._id == id;
    });
  const matchSnackId =
    snack.menu &&
    snack.menu.find(function (x) {
      return x._id == id;
    });
  const matchProductsetId =
    productset.menu &&
    productset.menu.find(function (x) {
      return x._id == id;
    });
  const matchBeansId =
    beans.menu &&
    beans.menu.find(function (x) {
      return x._id == id;
    });
  const matchReqularmdId =
    reqularmd.menu &&
    reqularmd.menu.find(function (x) {
      return x._id == id;
    });
  const matchSeasonmdId =
    seasonmd.menu &&
    seasonmd.menu.find(function (x) {
      return x._id == id;
    });
  const matchGiftsetId =
    giftset.menu &&
    giftset.menu.find(function (x) {
      return x._id == id;
    });

  //만약 매칭의카테고리랑 isadd랑 같으면 해당카테고리를 보여줘라
  //https://wnsdufdl.tistory.com/245 무한루프렌더링해결
  const [matchTotal, setMatchTotal] = useState();
  useEffect(() => {
    if (matchItemId && matchItemId.category == 'coffee') {
      setMatchTotal(matchItemId && matchItemId);
    }
    if (matchBeverId && matchBeverId.category == 'beverage') {
      setMatchTotal(matchBeverId && matchBeverId);
    }
    if (matchTeaId && matchTeaId.category == 'tea') {
      setMatchTotal(matchTeaId && matchTeaId);
    }
    if (matchBottleId && matchBottleId.category == 'bottle') {
      setMatchTotal(matchBottleId && matchBottleId);
    }
    if (matchIceId && matchIceId.category == 'ice') {
      setMatchTotal(matchIceId && matchIceId);
    }
    if (matchSherbetId && matchSherbetId.category == 'sherbet') {
      setMatchTotal(matchSherbetId && matchSherbetId);
    }
    if (matchCakeId && matchCakeId.category == 'cake') {
      setMatchTotal(matchCakeId && matchCakeId);
    }
    if (matchPieceId && matchPieceId.category == 'piece') {
      setMatchTotal(matchPieceId && matchPieceId);
    }
    if (matchDessertId && matchDessertId.category == 'dessert') {
      setMatchTotal(matchDessertId && matchDessertId);
    }
    if (matchSandwichId && matchSandwichId.category == 'sandwich') {
      setMatchTotal(matchSandwichId && matchSandwichId);
    }
    if (matchLunchsetId && matchLunchsetId.category == 'lunchset') {
      setMatchTotal(matchLunchsetId && matchLunchsetId);
    }
    if (matchSaladId && matchSaladId.category == 'salad') {
      setMatchTotal(matchSaladId && matchSaladId);
    }
    if (matchBreadId && matchBreadId.category == 'bread') {
      setMatchTotal(matchBreadId && matchBreadId);
    }
    if (matchSnackId && matchSnackId.category == 'snack') {
      setMatchTotal(matchSnackId && matchSnackId);
    }
    if (matchBeansId && matchBeansId.category == 'beans') {
      setMatchTotal(matchBeansId && matchBeansId);
    }
    if (matchProductsetId && matchProductsetId.category == 'productset') {
      setMatchTotal(matchProductsetId && matchProductsetId);
    }
    if (matchReqularmdId && matchReqularmdId.category == 'reqularmd') {
      setMatchTotal(matchReqularmdId && matchReqularmdId);
    }
    if (matchSeasonmdId && matchSeasonmdId.category == 'seasonmd') {
      setMatchTotal(matchSeasonmdId && matchSeasonmdId);
    }
    if (matchGiftsetId && matchGiftsetId.category == 'giftset') {
      setMatchTotal(matchGiftsetId && matchGiftsetId);
    }
  }, []);

  let [isEdit, setIsEdit] = useState('');
  const editHandler = (e) => {
    setIsEdit(e.target.value);
  };
  //만약에 매칭이  isAdd랑 같다은것끼리보여줘라

  return (
    <body className={styles.editContainer}>
      <header className={styles.editHeader}>
        <h1>수정페이지</h1>{' '}
        <h1
          className={styles.editHeaderClose}
          onClick={() => {
            navigate(-1);
          }}
        >
          X
        </h1>
      </header>

      {/* method-override 라이브러리를 설치해야 PUT메소드를 사용할수있다. */}
      <form
        action={`/edit/${matchTotal && matchTotal.category}?_method=PUT`}
        method='POST'
        enctype='multipart/form-data'
        className={styles.editForm}
      >
        {' '}
        <h2>{matchTotal && matchTotal.title}</h2>
        <div>
          <label>메뉴</label>
          <input
            type='text'
            value={matchTotal && matchTotal._id}
            name='id'
            className={styles.editHide}
          />
          <input
            type='text'
            name='title'
            onChange={(e) => {
              editHandler(e);
            }}
            //https://7357.tistory.com/50 value 수정안될때 도움된블로그
            //리액트 input value는 js와다르게 read only라 수정불가
            // 그래서 value 대신 defaultValue를 써야됨
            defaultValue={matchTotal && matchTotal.title}
          />
          <input
            type='text'
            name='price'
            onChange={(e) => {
              editHandler(e);
            }}
            //https://7357.tistory.com/50 value 수정안될때 도움된블로그
            //리액트 input value는 js와다르게 read only라 수정불가
            // 그래서 value 대신 defaultValue를 써야됨
            defaultValue={matchTotal && matchTotal.price}
          />
          <div>
            <label>이미지업로드</label>
            <input
              type='file'
              name='image'
              // defaultValue={matchTeaId && matchTeaId.file}
            />
          </div>
        </div>
        <button type='submit'>수정하기</button>
      </form>
    </body>
  );
};

export default Edit;
