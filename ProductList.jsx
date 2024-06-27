
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ReactTable from 'react-table';

const GET_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      price
      stock
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Price', accessor: 'price' },
    { Header: 'Stock', accessor: 'stock' }
  ];

  return (
    <ReactTable
      data={data.allProducts}
      columns={columns}
      sortable={true}
      filterable={true}
      defaultPageSize={10}
    />
  );
};

export default ProductList;