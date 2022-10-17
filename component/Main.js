import Menu from '../component/Menu';
import MenuWindow from '../component/MenuWindow';
import Header from '../component/Header';
import styles from '../css/Main.module.css';
const Main = ({ item, popup }) => {
  return (
    <body className={styles.container}>
      <Header />
      <Menu />
      <MenuWindow item={item} />
    </body>
  );
};

export default Main;
