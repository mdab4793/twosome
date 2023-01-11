import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import CoffeeTab from '../component/CoffeeTab';
import MenuPopup from '../component/MenuPopup';
import IceTab from '../component/IceTab';
import CakeTab from './CakeTab';
import BakeTab from './BakeTab';
import BreadTab from './BreadTab';
import ProductTab from './ProductTab';
import MDTab from './MDTab';
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
//커피,음료메뉴
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
        <CoffeeTab coffeeTab={coffeeTab} item={item} popup={popup} />
      </div>
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
        <IceTab iceTab={iceTab} item={item} />
      </div>
    </body>
  );
};

//케이크메뉴
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
        <CakeTab cakeTab={cakeTab} item={item} />
      </div>
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
        <BakeTab bakeTab={bakeTab} item={item} />
      </div>
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
        <ProductTab productTab={productTab} item={item} />
      </div>
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
        <MDTab mdTab={mdTab} item={item} />
      </div>
    </body>
  );
};

export default MenuWindow;
