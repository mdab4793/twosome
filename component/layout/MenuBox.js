import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '/Users/zio/Desktop/node/cafe-pos/src/css/MenuWindow.module.css';
import styled from 'styled-components';
import axios from 'axios';
const MenuBox = ({ layout, layoutDel }) => {
  //한 화면에 메뉴24개까지만 보이기
  let [limit, setLimit] = useState(24);
  //첫페이지
  let [page, setPage] = useState(1);
  let offset = (page - 1) * limit;
  const layoutNumPages = Math.ceil(layout && layout.length / limit);

  // 삭제핸들러;
  const deleteHandler = (e) => {
    const menuNum = e.target.dataset.id;
    axios.delete(`http://localhost:8080/delete/${layoutDel}`, {
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
    <body>
      <div className={styles.menuContainer}>
        {layout &&
          layout
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
                      </button>{' '}
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
export default MenuBox;
