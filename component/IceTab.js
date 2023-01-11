import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
const IceTab = ({ iceTab, item }) => {
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
            <td></td>
            <td></td>
            <td></td>
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
export default IceTab;
