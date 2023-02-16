import Main from './component/Main';
import { useEffect, useState } from 'react';
import MenuPopup from './routes/MenuPopup';
import { Route, Routes } from 'react-router-dom';
import MenuWindow from './routes/MenuWindow';
import axios from 'axios';
import Management from './routes/Management';
import Edit from './routes/Edit';
import Box from './component/layout/MenuBox';

function App() {
  //카테고리별로 메뉴추가
  const [isAdd, setIsAdd] = useState(0);

  if (isAdd == 0) {
    setIsAdd('coffee');
  }
  if (isAdd == 1) {
    setIsAdd('beverage');
  }
  if (isAdd == 2) {
    setIsAdd('tea');
  }
  if (isAdd == 3) {
    setIsAdd('bottle');
  }
  if (isAdd == 4) {
    setIsAdd('ice');
  }
  if (isAdd == 5) {
    setIsAdd('sherbet');
  }
  if (isAdd == 6) {
    setIsAdd('cake');
  }
  if (isAdd == 7) {
    setIsAdd('piece');
  }
  if (isAdd == 8) {
    setIsAdd('dessert');
  }
  if (isAdd == 9) {
    setIsAdd('sandwich');
  }
  if (isAdd == 10) {
    setIsAdd('lunchset');
  }
  if (isAdd == 11) {
    setIsAdd('salad');
  }
  if (isAdd == 12) {
    setIsAdd('bread');
  }
  if (isAdd == 13) {
    setIsAdd('snack');
  }
  if (isAdd == 14) {
    setIsAdd('productset');
  }
  if (isAdd == 15) {
    setIsAdd('beans');
  }
  if (isAdd == 16) {
    setIsAdd('reqularmd');
  }
  if (isAdd == 17) {
    setIsAdd('seasonmd');
  }
  if (isAdd == 18) {
    setIsAdd('giftset');
  }

  const [isBackColor, setISBackColor] = useState(0);
  if (isBackColor == 0) {
    setISBackColor('white');
  }
  if (isBackColor == 1) {
    setISBackColor('yellow');
  }
  if (isBackColor == 2) {
    setISBackColor('green');
  }
  if (isBackColor == 3) {
    setISBackColor('blue');
  }
  if (isBackColor == 4) {
    setISBackColor('red');
  }
  if (isBackColor == 5) {
    setISBackColor('purple');
  }

  //커피류api
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get('api/coffee')
      .then((result) => {
        setItem(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //음료류 api
  const [bever, setBever] = useState([]);
  useEffect(() => {
    axios
      .get('api/beverage')
      .then((result) => {
        setBever(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);

  //티api
  const [tea, setTea] = useState([]);
  useEffect(() => {
    axios
      .get('api/tea')
      .then((result) => {
        setTea(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //병음료api
  const [bottle, setBottle] = useState([]);
  useEffect(() => {
    axios
      .get('api/bottle')
      .then((result) => {
        setBottle(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //아이스크림api
  const [ice, setIce] = useState([]);
  useEffect(() => {
    axios
      .get('api/ice')
      .then((result) => {
        setIce(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //아이스크림api
  const [sherbet, setSherbet] = useState([]);
  useEffect(() => {
    axios
      .get('api/sherbet')
      .then((result) => {
        setSherbet(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //케이크api
  const [cake, setCake] = useState([]);
  useEffect(() => {
    axios
      .get('api/cake')
      .then((result) => {
        setCake(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //조각케이크api
  const [piece, setPiece] = useState([]);
  useEffect(() => {
    axios
      .get('api/piece')
      .then((result) => {
        setPiece(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //디저트api
  const [dessert, setDessert] = useState([]);
  useEffect(() => {
    axios
      .get('api/dessert')
      .then((result) => {
        setDessert(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //sandwich api
  const [sandwich, setSandwich] = useState([]);
  useEffect(() => {
    axios
      .get('api/sandwich')
      .then((result) => {
        setSandwich(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //lunchset api
  const [lunchset, setLunchset] = useState([]);
  useEffect(() => {
    axios
      .get('api/lunchset')
      .then((result) => {
        setLunchset(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //salad api
  const [salad, setSalad] = useState([]);
  useEffect(() => {
    axios
      .get('api/salad')
      .then((result) => {
        setSalad(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //bread api
  const [bread, setBread] = useState([]);
  useEffect(() => {
    axios
      .get('api/bread')
      .then((result) => {
        setBread(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //snack api
  const [snack, setSnack] = useState([]);
  useEffect(() => {
    axios
      .get('api/snack')
      .then((result) => {
        setSnack(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //productset api
  const [productset, setProductset] = useState([]);
  useEffect(() => {
    axios
      .get('api/productset')
      .then((result) => {
        setProductset(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //beans api
  const [beans, setBeans] = useState([]);
  useEffect(() => {
    axios
      .get('api/beans')
      .then((result) => {
        setBeans(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //reqularmd api
  const [reqularmd, setReqularmd] = useState([]);
  useEffect(() => {
    axios
      .get('api/reqularmd')
      .then((result) => {
        setReqularmd(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //seasonmd api
  const [seasonmd, setSeasonmd] = useState([]);
  useEffect(() => {
    axios
      .get('api/seasonmd')
      .then((result) => {
        setSeasonmd(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  //giftset api
  const [giftset, setGiftset] = useState([]);
  useEffect(() => {
    axios
      .get('api/giftset')
      .then((result) => {
        setGiftset(result.data);
      })
      .catch(() => {
        console.log('fail');
      });
  }, []);
  return (
    <body>
      <Routes>
        <Route
          path='/'
          element={
            <Main
              item={item}
              bever={bever}
              tea={tea}
              bottle={bottle}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
              isBackColor={isBackColor}
              setISBackColor={setISBackColor}
              ice={ice}
              cake={cake}
              sherbet={sherbet}
              piece={piece}
              dessert={dessert}
              sandwich={sandwich}
              lunchset={lunchset}
              salad={salad}
              bread={bread}
              snack={snack}
              productset={productset}
              beans={beans}
              reqularmd={reqularmd}
              seasonmd={seasonmd}
              giftset={giftset}
            />
          }
        />
        <Route
          path='/menu'
          element={
            <Management
              item={item}
              bever={bever}
              tea={tea}
              bottle={bottle}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
              isBackColor={isBackColor}
              setISBackColor={setISBackColor}
              ice={ice}
              cake={cake}
              sherbet={sherbet}
              piece={piece}
              dessert={dessert}
              sandwich={sandwich}
              lunchset={lunchset}
              salad={salad}
              bread={bread}
              snack={snack}
              productset={productset}
              beans={beans}
              reqularmd={reqularmd}
              seasonmd={seasonmd}
              giftset={giftset}
            />
          }
        />
        <Route
          path='/menuwindow'
          element={
            <MenuWindow
              item={item}
              bever={bever}
              tea={tea}
              bottle={bottle}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
              isBackColor={isBackColor}
              setISBackColor={setISBackColor}
              ice={ice}
              cake={cake}
              sherbet={sherbet}
              piece={piece}
              dessert={dessert}
              sandwich={sandwich}
              lunchset={lunchset}
              salad={salad}
              bread={bread}
              snack={snack}
              productset={productset}
              beans={beans}
              reqularmd={reqularmd}
              seasonmd={seasonmd}
              giftset={giftset}
            />
          }
        />
        <Route
          path='/edit/:id'
          element={
            <Edit
              item={item}
              bever={bever}
              tea={tea}
              bottle={bottle}
              cake={cake}
              ice={ice}
              sherbet={sherbet}
              piece={piece}
              dessert={dessert}
              sandwich={sandwich}
              lunchset={lunchset}
              salad={salad}
              bread={bread}
              snack={snack}
              productset={productset}
              beans={beans}
              reqularmd={reqularmd}
              seasonmd={seasonmd}
              giftset={giftset}
            />
          }
        />
        <Route
          path='/menupopup/:id'
          element={
            <MenuPopup
              item={item}
              bever={bever}
              tea={tea}
              bottle={bottle}
              cake={cake}
              ice={ice}
              sherbet={sherbet}
              piece={piece}
              dessert={dessert}
              sandwich={sandwich}
              lunchset={lunchset}
              salad={salad}
              bread={bread}
              snack={snack}
              productset={productset}
              beans={beans}
              reqularmd={reqularmd}
              seasonmd={seasonmd}
              giftset={giftset}
            />
          }
        />

        <Route path='*' element={<Main />} />
      </Routes>
    </body>
  );
}

export default App;
