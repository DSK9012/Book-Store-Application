import { Grid, styled, TextField } from '@mui/material';
import { FileUpload } from '@mui/icons-material';
import Header from 'components/Header/Header';
import { $Container } from 'components/Home';

const $AddBookText = styled('h3')(({ theme }) => ({
  fontSize: theme.spacing(2.75),
  letterSpacing: 0.2,
  lineHeight: 1.4,
  padding: theme.spacing(1, 0, 2),
}));

function AddBook() {
  return (
    <$Container>
      <Header />
      <$AddBookText>Add Book</$AddBookText>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <TextField label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField multiline minRows={2} label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField multiline minRows={2} label='Outlined' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item sm={12} md={6}>
          <div
            style={{
              padding: '16px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              border: '2px dashed silver',
              minHeight: '150px',
            }}
          >
            <FileUpload /> UPLOAD BOOK COVER
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div
            style={{
              padding: '16px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              border: '2px dashed silver',
              minHeight: '150px',
            }}
          >
            <FileUpload /> UPLOAD FILE
          </div>
        </Grid>
      </Grid>
    </$Container>
  );
}

export default AddBook;
