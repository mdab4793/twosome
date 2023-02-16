import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
import MenuBox from './layout/MenuBox';
const ProductTab = ({ productTab, snack, productset }) => {
  if (productTab == 0) {
    return <Snack snack={snack} />;
  }
  if (productTab == 1) {
    return <ProductSet productset={productset} />;
  }
};
const Snack = ({ snack }) => {
  const [layout, setLayout] = useState(snack.menu && snack.menu);
  const [layoutDel, setLayoutDel] = useState('snack');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox snack={snack} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
const ProductSet = ({ productset }) => {
  const [layout, setLayout] = useState(productset.menu && productset.menu);
  const [layoutDel, setLayoutDel] = useState('productset');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox productset={productset} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};

export default ProductTab;
