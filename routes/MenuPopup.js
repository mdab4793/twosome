import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../css/MenuPopup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addCount, addMin } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMugHot,
  faWhiskeyGlass,
  faMugSaucer,
  faGlassWater,
  faBottleWater,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MenuPopup = ({
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
}) => {
  let navgate = useNavigate();
  let { id } = useParams();
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
  let dispatch = useDispatch();

  let [count, setCount] = useState(1);
  //hot,ice 선택 변수
  let [tem, setTem] = useState();
  //hot,ice 글자색깔 선택 변수
  let [hotColor, setHotColor] = useState('black');
  let [iceColor, setIceColor] = useState('black');

  //사이즈 선택 변수
  let [size, setSize] = useState();
  //사이즈 글자 색깔 선택 변수
  let [regularColor, setRegularColor] = useState('black');
  let [largeColor, setLargeColor] = useState('black');
  //원두 선택 변수
  let [bean, setBean] = useState();
  //원두 글자 색깔 선택 변수
  let [blackColor, setBlackColor] = useState('black');
  let [aromaColor, setAromaColor] = useState('black');
  //포장 선택 변수
  let [takeout, setTakeout] = useState();
  //포장 글자 색깔 선택 변수
  let [takeoutCupColor, setTakeoutCupColor] = useState('black');
  let [mugColor, setMugColor] = useState('black');
  //메뉴선택 함수
  //hot,ice선택후 메뉴에 담기함수
  const HotHandler = () => {
    setTem('(H)');
  };

  const IceHandler = () => {
    setTem('(I)');
  };

  //사이즈 선택 함수
  const RegularHandler = () => {
    setSize('(regular)');
  };
  const LargeHandler = () => {
    setSize('(large)');
  };
  //원두 선택 함수
  const BlackHandler = () => {
    setBean('블랙그라운드');
  };
  const AromaHandler = () => {
    setBean('아로마노트');
  };
  //포장 선택 함수
  const TakeoutCupHandler = () => {
    setTakeout('T)');
  };
  const MugCupHandler = () => {
    setTakeout('');
  };

  //글자색 재클릭시 원래색으로 돌아오게하는것 참조
  //https://alway-health.tistory.com/entry/%EB%B0%98%EC%9D%91-hook%EB%A1%9C-%ED%81%B4%EB%A6%AD%EC%8B%9C-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%83%89%EC%83%81-%EB%B3%80%EA%B2%BD

  //글자색변경참조
  //https://stackoverflow.com/questions/69327076/how-to-change-color-in-react-on-button-click-using-state

  //온도 hot 클릭시 빨간색으로 만드는함수
  //hot,ice 글자 색깔 선택 함수
  const HotColorHandler = () => {
    setHotColor(hotColor === 'brown' ? 'black' : 'brown');
  };
  const HotDelHandler = () => {
    setHotColor(hotColor === 'black');
  };
  //만약 핫을선택해서 핫색이 브라운이되면 아이스는 검정색이고 아이스르 검정색으로 선택하면 핫색이 검정색으로된다.
  const IceColorHandler = () => {
    setIceColor(iceColor === 'brown' ? 'black' : 'brown');
  };
  const IceDelHandler = () => {
    setIceColor(iceColor === 'black');
  };
  //사이즈 글자 색깔선택 함수
  const RegularColorHandler = () => {
    setRegularColor(regularColor === 'brown' ? 'black' : 'brown');
  };
  const RegularDelHandler = () => {
    setRegularColor(regularColor === 'black');
  };
  const LargeColorHandler = () => {
    setLargeColor(largeColor === 'brown' ? 'black' : 'brown');
  };
  const LargeDelHandler = () => {
    setLargeColor(largeColor === 'black');
  };
  //원두 글자색깔 선택 함수
  const BlackColorHandler = () => {
    setBlackColor(blackColor === 'brown' ? 'black' : 'brown');
  };
  const BlackDelHandler = () => {
    setBlackColor(blackColor === 'black');
  };
  const AromaColorHandler = () => {
    setAromaColor(aromaColor === 'brown' ? 'black' : 'brown');
  };
  const AromaDelHandler = () => {
    setAromaColor(aromaColor === 'black');
  };
  //포장 글자 색깔 선택 함수
  const TakeoutCupColorHandler = () => {
    setTakeoutCupColor(takeoutCupColor === 'brown' ? 'black' : 'brown');
  };
  const TakeoutDelHandler = () => {
    setTakeoutCupColor(takeoutCupColor === 'black');
  };
  const MugCupColorHandler = () => {
    setMugColor(mugColor === 'brown' ? 'black' : 'brown');
  };
  const MugDelHandler = () => {
    setMugColor(mugColor === 'black');
  };
  console.log(matchBottleId && matchBottleId.category);
  //커피팝업

  return (
    <body className={styles.popup}>
      <header>
        <h1>옵션 선택</h1>
        <h1
          className={styles.close}
          onClick={() => {
            navgate(-1);
          }}
        >
          X
        </h1>
      </header>{' '}
      <button>
        <Link to={`/edit/${id}`}>메뉴변경</Link>
      </button>{' '}
      <div className={styles.container}>
        <section className={styles.mainSection}>
          <img src={`../image/${matchTotal && matchTotal.image}`} />
          <p>{matchTotal && matchTotal.title}</p>
          <p>{matchTotal && matchTotal.price}원</p>
          <div className={styles.count}>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <p className={styles.myChoice}>나만의 음료 선택하기 화살표</p>
        </section>
        <main className={styles.subSection}>
          <h4>1.온도</h4>

          <button
            onClick={(e) => {
              HotColorHandler();
              IceDelHandler();
              HotHandler();
            }}
            style={{ color: hotColor }}
          >
            <FontAwesomeIcon icon={faMugHot} size='3x' />
            <p>핫</p>
          </button>
          <button
            onClick={() => {
              IceColorHandler();
              HotDelHandler();
              IceHandler();
            }}
            style={{ color: iceColor }}
          >
            <FontAwesomeIcon icon={faWhiskeyGlass} size='3x' />
            <p>아이스</p>
          </button>

          <h4>2.사이즈</h4>

          <button
            onClick={() => {
              RegularColorHandler();
              LargeDelHandler();
              RegularHandler();
            }}
            style={{ color: regularColor }}
          >
            <FontAwesomeIcon icon={faWhiskeyGlass} size='3x' />
            <p>레귤러</p>
          </button>
          <button
            onClick={() => {
              LargeColorHandler();
              RegularDelHandler();
              LargeHandler();
            }}
            style={{ color: largeColor }}
          >
            {' '}
            <FontAwesomeIcon icon={faWhiskeyGlass} size='3x' />
            <p>라지</p>
          </button>
          <h4>3.원두</h4>
          <button
            onClick={() => {
              BlackColorHandler();
              AromaDelHandler();
              BlackHandler();
            }}
            style={{ color: blackColor }}
          >
            <FontAwesomeIcon icon={faMugHot} size='3x' />
            <p>블랙그라운드</p>
          </button>
          <button
            onClick={() => {
              AromaColorHandler();
              BlackDelHandler();
              AromaHandler();
            }}
            style={{ color: aromaColor }}
          >
            <FontAwesomeIcon icon={faMugHot} size='3x' />
            <p> 아로마노트</p>
          </button>
          <h4>4.포장</h4>
          <button
            onClick={() => {
              TakeoutCupColorHandler();
              MugDelHandler();
              TakeoutCupHandler();
            }}
            style={{ color: takeoutCupColor }}
          >
            <FontAwesomeIcon icon={faWhiskeyGlass} size='3x' />
            <p>일회용컵</p>
          </button>
          <button
            onClick={() => {
              MugCupColorHandler();
              TakeoutDelHandler();
              MugCupHandler();
            }}
            style={{ color: mugColor }}
          >
            <FontAwesomeIcon icon={faMugSaucer} size='3x' />
            <p>머그컵</p>
          </button>
        </main>{' '}
      </div>{' '}
      <button
        onClick={(e) => {
          if (
            (hotColor === 'brown' || iceColor === 'brown') &&
            (regularColor === 'brown' || largeColor === 'brown') &&
            (blackColor === 'brown' || aromaColor === 'brown') &&
            (takeoutCupColor === 'brown' || mugColor === 'brown')
          ) {
            dispatch(
              addItem({
                name: matchTotal && matchTotal.title,
                tem: tem,
                size: size,
                count: count,
                bean: bean,
                takeout: takeout,
                price: matchTotal && matchTotal.price,
                discount: item[id]?.discount,
              })
            );
            navgate(-1);
          } else {
            alert('옵션을 선택해주세요.');
          }
        }}
        className={styles.cart}
      >
        담기
      </button>
      <p className={styles.notice}>메뉴를 선택해 주세요.</p>
    </body>
  );
};

export default MenuPopup;
