import styles from '../css/MenuWindow.module.css';
import { useState } from 'react';
import axios from 'axios';
import MenuBox from './layout/MenuBox';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const CoffeeTab = ({
  coffeeTab,
  item,
  bever,
  tea,
  bottle,
  isBackColor,
  setISBackColor,
}) => {
  if (coffeeTab == 0) {
    return (
      <CoffeeMenu
        item={item}
        isBackColor={isBackColor}
        setISBackColor={setISBackColor}
      />
    );
  }
  if (coffeeTab == 1) {
    return <Beverage bever={bever} />;
  }
  if (coffeeTab == 2) {
    return <Tea tea={tea} />;
  }
  if (coffeeTab == 3) {
    return <Bottle bottle={bottle} />;
  }
};

//https://velog.io/@isabel_noh/React-%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EC%99%B8%EB%B6%80%ED%81%B4%EB%A6%AD%EC%8B%9C-%ED%99%88%ED%99%94%EB%A9%B4%EC%9C%BC%EB%A1%9C-%EC%9D%B4%EB%8F%99
//모달창 맨위전체오기 참조
//에스프레소음료탭
const CoffeeMenu = ({ item }) => {
  //한 화면에 메뉴24개까지만 보이기
  let [limit, setLimit] = useState(24);
  //첫페이지
  let [page, setPage] = useState(1);
  let offset = (page - 1) * limit;
  const layoutNumPages = Math.ceil(item && item.length / limit);

  // 삭제핸들러;
  const deleteHandler = (e) => {
    const menuNum = e.target.dataset.id;
    axios.delete(`http://localhost:8080/delete/coffee`, {
      //delete할땐 data에 담아서 보내줘야한다.
      data: {
        _id: menuNum,
      },
    });
  };
  {
    /*
      map 오류가 뜰때 
      https://tlsdnjs12.tistory.com/m/56
      slice 갯수자를때
      */
  }

  return (
    <body className={styles.menuWindowContainer}>
      <div className={styles.menuContainer}>
        {item.menu &&
          item.menu
            .slice(offset, offset + limit)
            .map(({ _id, title, category }, i) => {
              if (
                window.location ==
                'https://original-nation-377813.du.r.appspot.com/menu'
                // 'http://localhost:3000/menu'
              ) {
                return (
                  <div className={styles.menuWrapper} key={i}>
                    <Link to={`/menupopup/${_id}`}>
                      <div className={styles.menuBox}>
                        <p className={styles.menuItem}>{title}</p>{' '}
                      </div>
                    </Link>
                    <div className={styles.menuEditDelWrapper}>
                      <button
                        className={styles.menuEditBtn}
                        data-category={category}
                      >
                        <Link to={`/edit/${_id}`}>메뉴변경</Link>
                      </button>
                      <button
                        className={styles.menuDelBtn}
                        data-id={_id}
                        onClick={(e) => {
                          deleteHandler(e);
                          window.location.replace('/menu');
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={styles.menuWrapper} key={i}>
                    <Link to={`/menupopup/${_id}`}>
                      <div className={styles.menuBox}>
                        <p className={styles.menuItem}>{title}</p>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
        {/*
페이지네이션 블로그
https://www.daleseo.com/react-pagination/ */}
      </div>{' '}
      <div className={styles.menuEtc}>
        <button onClick={() => {}}> 캐리어</button>
        <button> 샷추가500원</button>
        <button> 사이즈업500원</button>
        <button> 라떼변경500원</button>

        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>

        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === layoutNumPages}
        >
          &gt;
        </Button>
      </div>
    </body>
  );
};

const MenuWindowBox = () => {
  return <div></div>;
};

const Button = styled.button`
  color: black;
  border-style: none;
  background-color: white;
  font-size: 18px;
  padding: 0;
  box-sizing: border-box;

  &[disabled] {
    text-align: center;
  }
`;

//에이드,드링크음료탭
const Beverage = ({ bever }) => {
  const [layout, setLayout] = useState(bever.menu && bever.menu);
  const [layoutDel, setLayoutDel] = useState('bever');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox bever={bever} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
//티백탭
const Tea = ({ tea }) => {
  const [layout, setLayout] = useState(tea.menu && tea.menu);
  const [layoutDel, setLayoutDel] = useState('tea');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox tea={tea} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
//병음료탭
const Bottle = ({ bottle }) => {
  const [layout, setLayout] = useState(bottle.menu && bottle.menu);
  const [layoutDel, setLayoutDel] = useState('bottle');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox bottle={bottle} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};

export default CoffeeTab;
