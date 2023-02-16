import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import ProductTab from '../component/ProductTab';
//상품탭
const Product = ({ snack, productset, isAdd, setIsAdd }) => {
  let [productTab, setProductTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setProductTab(0);
            setIsAdd(13);
          }}
        >
          과자
        </button>
        <button
          onClick={() => {
            setProductTab(1);
            setIsAdd(14);
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
        <ProductTab
          productTab={productTab}
          snack={snack}
          productset={productset}
        />
      </div>
    </body>
  );
};

export default Product;
