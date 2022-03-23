import { Grid, styled } from '@mui/material';
import BookCard from './BookCard';

const $Header = styled('h3')(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export default function RenderBooks() {
  return (
    <>
      <$Header>Popular Books</$Header>
      <Grid container rowGap={2} spacing={2} gridAutoFlow='row'>
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
      <$Header>Mathemetics</$Header>
      <Grid container rowGap={2} spacing={2} gridAutoFlow='row'>
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
