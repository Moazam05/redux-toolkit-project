import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Layout } from 'antd';

import Searchbar from '../shared/Searchbar';
import CocktailCard from '../shared/CocktailCard';
import { fetchCocktails } from '../features/cocktailsSlice';

const Cocktails = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => ({
    ...state.cocktail,
  }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktail = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    <h5>Loading...</h5>;
  }

  return (
    <div>
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          fontSize: '20px',
        }}
      >
        Find Your Favorite Cocktails
        <div style={{ display: 'flex', marginLeft: '25px' }}>
          <Searchbar />
        </div>
      </Layout.Header>

      <div style={{ maxWidth: 1140, margin: 'auto' }}>
        <Row>
          {modifiedCocktail.map((item, index) => {
            const { id, name, image, info, glass } = item;
            return (
              <Col span={6} style={{ margin: '30px' }}>
                <CocktailCard
                  key={index}
                  id={id}
                  name={name}
                  image={image}
                  info={info}
                  glass={glass}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Cocktails;
