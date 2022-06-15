import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt='example' src={image} />}
    >
      <Meta title={name} description={info} />
      <p
        style={{
          marginTop: '5px',
          marginBottom: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {glass}
        <Button>
          <Link to={`/cocktail/${id}`}>Read More</Link>
        </Button>
      </p>
    </Card>
  );
};

export default CocktailCard;
