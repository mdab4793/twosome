import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';

const BakeTab = ({ bakeTab, item }) => {
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

export default BakeTab;
