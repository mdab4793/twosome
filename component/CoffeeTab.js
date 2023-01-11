import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
const CoffeeTab = ({ coffeeTab, item, popup }) => {
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
      {/* {popup == true ? <MenuPopup popup={popup} item={item} /> : null} */}
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
export default CoffeeTab;
