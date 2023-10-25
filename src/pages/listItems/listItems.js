import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { useStyles } from './styles'
import { Container } from '@mui/material';
import { getData } from '../../services/apiService';
import { useQuery, useQueryClient } from 'react-query';

const ListItems = () => {
  const queryClient = useQueryClient(); // hook to interact with the query cache

  const { data: items, isLoading, isError } = useQuery('records', getData);

  const classes = useStyles();

  const refresh = () => {
    // Invalidate and refetch the query
    queryClient.invalidateQueries('records');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <Container>
      <h1 className={classes.dataTableTitle}>List Items</h1>
      <DataTable data={items.data.data} refresh={refresh} />
    </Container>
  );
};

export default ListItems;
