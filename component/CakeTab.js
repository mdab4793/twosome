import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
const CakeTab = ({ cakeTab, item }) => {
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

export default CakeTab;
