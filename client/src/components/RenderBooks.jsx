import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import BookCard from './BookCard';

const $Header = styled.h3({
  margin: '8px 0 16px',
});

export default function RenderBooks() {
  return (
    <>
      <$Header>Popular Books</$Header>
      <Grid container spacing={2} gridAutoFlow='row'>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BookCard />
        </Grid>
      </Grid>
    </>
  );
}
