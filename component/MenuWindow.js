import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';

import MenuPopup from '../component/MenuPopup';

//전체 메뉴 탭
const MenuWindow = ({ item }) => {
  let [tab, setTab] = useState(0);

  // let [data] = useState(
  //   'https://raw.githubusercontent.com/mdab4793/pos/main/db.json'
  // );

  return (
    <body className={styles.container}>
      <section className={styles.mainWrapper}>
        <button
          onClick={() => {
            setTab(0);
          }}
        >
          커피&음료
        </button>
        <button
          onClick={() => {
            setTab(1);
          }}
        >
          아이스크림&빙수
        </button>
        <button
          onClick={() => {
            setTab(2);
          }}
        >
          케이크
        </button>
        <button
          onClick={() => {
            setTab(3);
          }}
        >
          델리
        </button>
        <button
          onClick={() => {
            setTab(4);
          }}
        >
          빵
        </button>
        <button
          onClick={() => {
            setTab(5);
          }}
        >
          상품
        </button>
        <button
          onClick={() => {
            setTab(6);
          }}
        >
          MD
        </button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <MenuTab tab={tab} item={item} />
      </div>
    </body>
  );
};

const MenuTab = ({ tab, item, popup }) => {
  if (tab == 0) {
    return <Coffee item={item} popup={popup} />;
  }
  if (tab == 1) {
    return <Ice item={item} />;
  }
  if (tab == 2) {
    return <Cake item={item} />;
  }
  if (tab == 3) {
    return <Bake item={item} />;
  }
  if (tab == 4) {
    return <Bread item={item} />;
  }
  if (tab == 5) {
    return <Product item={item} />;
  }
  if (tab == 6) {
    return <Md item={item} />;
  }
};
//커피,음료메뉴탭
const Coffee = ({ item, popup }) => {
  let [coffeeTab, setCoffeeTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setCoffeeTab(0);
          }}
        >
          에스프레소 베리에이션
        </button>
        <button
          onClick={() => {
            setCoffeeTab(1);
          }}
        >
          음료
        </button>
        <button
          onClick={() => {
            setCoffeeTab(2);
          }}
        >
          티 베리에이션
        </button>
        <button
          onClick={() => {
            setCoffeeTab(3);
          }}
        >
          병음료
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <CoffeeMenuTab coffeeTab={coffeeTab} item={item} popup={popup} />
      </div>
    </body>
  );
};
const CoffeeMenuTab = ({ coffeeTab, item, popup }) => {
  if (coffeeTab == 0) {
    return <CoffeeMenu item={item} popup={popup} />;
  }
  if (coffeeTab == 1) {
    return <Beverage item={item} />;
  }
  if (coffeeTab == 2) {
    return <Tea item={item} />;
  }
  if (coffeeTab == 3) {
    return <Bottle item={item} />;
  }
};
//https://velog.io/@isabel_noh/React-%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EC%99%B8%EB%B6%80%ED%81%B4%EB%A6%AD%EC%8B%9C-%ED%99%88%ED%99%94%EB%A9%B4%EC%9C%BC%EB%A1%9C-%EC%9D%B4%EB%8F%99
//모달창 맨위전체오기 참조
//에스프레소음료탭
const CoffeeMenu = ({ item }) => {
  let [popup, setPopup] = useState(false);
  return (
    <body>
      {popup == true ? <MenuPopup popup={popup} item={item} /> : null}
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/0'> {item[0]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/1'>{item[1]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/2'>{item[2]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/3'>{item[3]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/79'> {item[79]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/78'> {item[78]?.name}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/80'> {item[80]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/81'> {item[81]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/4'>{item[4]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/5'>{item[5]?.name}</Link>
            </td>
            <td></td>
            <td>
              <Link to='/menupopup/82'> {item[82]?.name}</Link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/6'>{item[6]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/7'>{item[7]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/8'>{item[8]?.name}</Link>
            </td>
            <td></td>
            <td>
              <Link to='/menupopup/83'> {item[83]?.name}</Link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/9'>{item[9]?.name}</Link>
            </td>
            <td></td>
            <td>
              <Link to='/menupopup/84'> {item[84]?.name}</Link>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>캐리어</td>
            <td>샷추가500원</td>
            <td>사이즈업500원</td>
            <td>라떼변경500원</td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>{' '}
      </table>{' '}
    </body>
  );
};
//에이드,드링크음료탭
const Beverage = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/10'>{item[10]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/11'>{item[11]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/85'> {item[85]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/86'> {item[86]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/12'>{item[12]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/87'> {item[87]?.name}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/89'> {item[89]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/90'> {item[90]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/13'>{item[13]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/14'>{item[14]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/15'>{item[15]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/88'> {item[88]?.name}</Link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/91'> {item[91]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/92'> {item[92]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/93'> {item[93]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/16'>{item[16]?.name}</Link>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/94'> {item[94]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/95'> {item[95]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/96'> {item[96]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/97'> {item[97]?.name}</Link>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//티백탭
const Tea = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/103'>{item[103]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/17'>{item[17]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/18'>{item[18]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/19'>{item[19]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/20'>{item[20]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/21'>{item[21]?.name}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/22'>{item[22]?.name}</Link>
            </td>
            <td>
              {' '}
              <Link to='/menupopup/104'>{item[104]?.name}</Link>
            </td>
            <td></td>
            <td>
              {' '}
              <Link to='/menupopup/97'>{item[97]?.name}</Link>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              {' '}
              <Link to='/menupopup/98'>{item[98]?.name}</Link>
            </td>
            <td>
              {' '}
              <Link to='/menupopup/99'>{item[99]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/23'>{item[23]?.name}</Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              {' '}
              <Link to='/menupopup/100'>{item[100]?.name}</Link>
            </td>
            <td>
              {' '}
              <Link to='/menupopup/101'>{item[101]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/24'>{item[24]?.name}</Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//병음료탭
const Bottle = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td></td>

            <td>
              <Link to='/menupopup/25'>{item[25].name}(레몬) </Link>
            </td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>

            <td>
              <Link to='/menupopup/26'>{item[26].name}(석류) </Link>
            </td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>

            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//아이스크림,빙수탭
const Ice = ({ item }) => {
  let [iceTab, setIceTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setIceTab(0);
          }}
        >
          아이스크림
        </button>
        <button
          onClick={() => {
            setIceTab(1);
          }}
        >
          빙수(시즌종료)
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <IceMenuTab iceTab={iceTab} item={item} />
      </div>
    </body>
  );
};
const IceMenuTab = ({ iceTab, item }) => {
  if (iceTab == 0) {
    return <IceMenu item={item} />;
  }
  if (iceTab == 1) {
    return <SherbetMenu item={item} />;
  }
};
//아이스크랩메뉴탭
const IceMenu = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/27'>{item[27]?.name}</Link>
            </td>
            <td>
              <Link to='/menupopup/28'>{item[28]?.name}</Link>
            </td>
            <td></td>
            <td>
              <Link to='/menupopup/29'>{item[29]?.name}</Link>
            </td>
            <td></td>
            <td>스푼</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//빙수메뉴탭
const SherbetMenu = () => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>빙수</td>
            <td>컵)소프트아이스크림</td>
            <td>카라멜팝아이스크립(컵)</td>
            <td>콘)소프트아이스크림</td>
            <td></td>
            <td>스푼</td>
          </tr>
          <tr>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
          </tr>
          <tr>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
          </tr>
          <tr>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
          </tr>
          <tr>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>아메리카노</td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//케이크메뉴탭
const Cake = ({ item }) => {
  let [cakeTab, setCakeTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setCakeTab(0);
          }}
        >
          홀케이크
        </button>
        <button
          onClick={() => {
            setCakeTab(1);
          }}
        >
          쇼트케이크
        </button>
        <button
          onClick={() => {
            setCakeTab(2);
          }}
        >
          디저트
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <CakeMenuTab cakeTab={cakeTab} item={item} />
      </div>
    </body>
  );
};
const CakeMenuTab = ({ cakeTab, item }) => {
  if (cakeTab == 0) {
    return <WholeCake item={item} />;
  }
  if (cakeTab == 1) {
    return <ShortCake item={item} />;
  }
  if (cakeTab == 2) {
    return <Dessert item={item} />;
  }
};
//홀케이크탭
const WholeCake = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/30'>
                {item[30].name} <br />
                {item[30].price}원
              </Link>
            </td>

            <td>
              <Link to='/menupopup/31'>
                {item[31].name} <br />
                {item[31].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/32'>
                {item[32].name} <br />
                {item[32].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/33'>
                {item[33].name} <br />
                {item[33].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/34'>
                {item[34].name} <br />
                {item[34].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/35'>
                {item[35].name} <br />
                {item[35].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//조각케이크탭
const ShortCake = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/34'>
                떠먹는{item[34].name} <br />{' '}
              </Link>
            </td>
            <td></td>
            <td></td>
            <td>
              <Link to='/menupopup/30'>
                떠먹는{item[30].name} <br />{' '}
              </Link>
            </td>
            <td></td>
            <td>스푼</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/32'>{item[32].name} </Link>
            </td>
            <td></td>
            <td>
              <Link to='/menupopup/32'>{item[31].name} </Link>
            </td>
            <td>
              <Link to='/menupopup/32'>{item[33].name} </Link>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>

            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//디저트탭
const Dessert = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/36'>
                {item[36].name}
                <br />
                {item[36].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/37'>
                {item[37].name}
                <br />
                {item[37].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/38'>
                {item[38].name}
                <br />
                {item[38].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td>
              <Link to='/menupopup/42'>
                {item[42].name}
                <br />
                {item[42].price}원
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/39'>
                {item[39].name}
                <br />
                {item[39].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/49'>
                {item[40].name}
                <br />
                {item[40].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/41'>
                {item[41].name}
                <br />
                {item[41].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
//델리탭
const Bake = ({ item }) => {
  let [bakeTab, setBakeTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setBakeTab(0);
          }}
        >
          샌드위치
        </button>
        <button
          onClick={() => {
            setBakeTab(1);
          }}
        >
          런치세트
        </button>
        <button
          onClick={() => {
            setBakeTab(2);
          }}
        >
          샐러드
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <BakeMenuTab bakeTab={bakeTab} item={item} />
      </div>
    </body>
  );
};
const BakeMenuTab = ({ bakeTab, item }) => {
  if (bakeTab == 0) {
    return <Sandwich item={item} />;
  }
  if (bakeTab == 1) {
    return <Lunchset item={item} />;
  }
  if (bakeTab == 2) {
    return <Salad item={item} />;
  }
};
const Sandwich = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/44'>
                {item[44].name}
                <br />
                {item[44].price}원
              </Link>
            </td>
            <td></td>
            <td>
              <Link to='/menupopup/45'>
                {item[45].name}
                <br />
                {item[45].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/46'>
                {item[46].name}
                <br />
                {item[46].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/46'>
                {item[46].name}
                <br />
                {item[46].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const Lunchset = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/48'>
                {item[48].name}
                <br />
                {item[48].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to='/menupopup/49'>
                {item[49].name}
                <br />
                {item[49].price}원
              </Link>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/50'>
                {item[50].name}
                <br />
                {item[50].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/51'>
                {item[51].name}
                <br />
                {item[51].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/52'>
                {item[52].name}
                <br />
                {item[52].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/53'>
                {item[53].name}
                <br />
                {item[53].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const Salad = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/54'>
                {item[54].name}
                (드레싱선택) <br />
                {item[54].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/55'>
                {item[55].name}
                (드레싱선택)
                <br />
                {item[55].price}원
              </Link>
            </td>

            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/56'>
                {item[56].name}
                <br />
                {item[56].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/57'>
                {item[57].name}
                <br />
                {item[57].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const Bread = ({ item }) => {
  return (
    <body>
      <section className={styles.subWrapper}>
        <button>빵</button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <BreadTab item={item} />
      </div>
    </body>
  );
};
const BreadTab = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/58'>
                {item[58].name}
                <br />
                {item[58].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/59'>
                {item[59].name}
                <br />
                {item[59].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/60'>
                {item[60].name}
                {item[60].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const Product = ({ item }) => {
  let [productTab, setProductTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setProductTab(0);
          }}
        >
          과자
        </button>
        <button
          onClick={() => {
            setProductTab(1);
          }}
        >
          상품세트
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <ProductMenuTab productTab={productTab} item={item} />
      </div>
    </body>
  );
};

const ProductMenuTab = ({ productTab, item }) => {
  if (productTab == 0) {
    return <Snack item={item} />;
  }
  if (productTab == 1) {
    return <ProductSet item={item} />;
  }
};
const Snack = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/61'>
                {item[61].name} <br />
                {item[61].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/62'>
                {item[62].name} <br />
                {item[62].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/63'>
                {item[63].name} <br />
                {item[63].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to='/menupopup/64'>
                {item[64].name} <br />
                {item[64].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const ProductSet = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const Md = ({ item }) => {
  let [mdTab, setMdTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setMdTab(0);
          }}
        >
          원두,티 가공상품{' '}
        </button>
        <button
          onClick={() => {
            setMdTab(1);
          }}
        >
          상시MD
        </button>
        <button
          onClick={() => {
            setMdTab(2);
          }}
        >
          시즌MD
        </button>
        <button
          onClick={() => {
            setMdTab(3);
          }}
        >
          MD선물세트
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <MDMenuTab mdTab={mdTab} item={item} />
      </div>
    </body>
  );
};
const MDMenuTab = ({ mdTab, item }) => {
  if (mdTab == 0) {
    return <Beans item={item} />;
  }
  if (mdTab == 1) {
    return <RegularMd item={item} />;
  }
  if (mdTab == 2) {
    return <SeasonMd item={item} />;
  }
  if (mdTab == 3) {
    return <Giftset item={item} />;
  }
};
const Beans = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/65'>
                {item[65].name} <br />
                {item[65].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/66'>
                {item[66].name} <br />
                {item[66].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/67'>
                {item[67].name} <br />
                {item[67].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/68'>
                {item[68].name} <br />
                {item[68].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/69'>
                {item[69].name} <br />
                {item[69].price}원
              </Link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to='/menupopup/70'>
                {item[70].name} <br />
                {item[70].price}원
              </Link>
            </td>
            <td>
              <Link to='/menupopup/71'>
                {item[71].name} <br />
                {item[71].price}원
              </Link>
            </td>{' '}
            <td>
              <Link to='/menupopup/72'>
                {item[72].name} <br />
                {item[72].price}원
              </Link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const RegularMd = ({ item }) => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td>
              <Link to='/menupopup/73'>
                {item[73].name} <br />
                {item[73].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to='/menupopup/74'>
                {item[74].name} <br />
                {item[74].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to='/menupopup/75'>
                {item[75].name} <br />
                {item[75].price}원
              </Link>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Link to='/menupopup/76'>
                {item[76].name} <br />
                {item[76].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/menupopup/77'>
                {item[77].name} <br />
                {item[77].price}원
              </Link>
            </td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const SeasonMd = () => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};
const Giftset = () => {
  return (
    <body>
      <table className={styles.menuWrapper}>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>왼쪽</td>
            <td>오른쪽</td>
          </tr>
        </tbody>
      </table>
    </body>
  );
};

export default MenuWindow;
