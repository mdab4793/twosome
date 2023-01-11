import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
const MDTab = ({ mdTab, item }) => {
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

export default MDTab;
