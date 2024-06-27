import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    product(id: $id) {
      name
      description
      price
      stock
    }
  }
`;

const ProductDetail = ({ productId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: productId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, description, price, stock } = data.product;

  return (
    <div>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default ProductDetail;