import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { useStyles } from './styles'
import { Container } from '@mui/material';
import { getData } from '../../services/apiService';
import { useQuery } from 'react-query';

const ListItems = () => {
  const { data: items, isLoading, isError } = useQuery('records', getData);

  const classes = useStyles();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <Container>
      <h1 className={classes.dataTableTitle}>List Items</h1>
      <DataTable data={items.data.data} />
    </Container>
  );
};

export default ListItems;
