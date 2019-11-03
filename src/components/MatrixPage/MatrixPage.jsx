import React from 'react';
import Page from '../Page/Page';
import Matrix from '../Matrix/Matrix';

const MatrixPage = () => {
  const getChart = () => {
    return <Matrix/>;
  };

  const getMenu = () => {
    return (
      <>

      </>
    )
  };

  return <Page chart={getChart} menu={getMenu} />
};

export default MatrixPage;