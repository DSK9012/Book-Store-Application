import { Button, Grid, styled } from '@mui/material';
import { FileUpload } from '@mui/icons-material';
import Header from 'components/Header/Header';
import { $Container } from 'components/Home';
import TextField from 'components/Form/CustomTextField';

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
          <TextField label='Book Name' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Author' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Institute' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Recommended To' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Book Edition' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField label='Access Type' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField multiline minRows={2} label='Tags' />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField multiline minRows={2} label='Description' />
        </Grid>
        <Grid item sm={12} md={6}>
          <label
            htmlFor='upload-book-cover'
            style={{
              padding: '16px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              border: '2px dashed silver',
              minHeight: '150px',
              cursor: 'pointer',
            }}
          >
            <input type='file' id='upload-book-cover' hidden />
            <FileUpload /> UPLOAD BOOK COVER
          </label>
        </Grid>
        <Grid item sm={12} md={6}>
          <label
            htmlFor='upload-file'
            style={{
              cursor: 'pointer',
              padding: '16px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              border: '2px dashed silver',
              minHeight: '150px',
            }}
          >
            <input type='file' id='upload-file' hidden />
            <FileUpload /> UPLOAD FILE
          </label>
        </Grid>
        <div style={{ padding: '32px 0', margin: '0 auto' }}>
          <Button
            variant='contained'
            sx={{
              fontSize: '16px',
              padding: '2px 16px',
              textTransform: 'none',
              backgroundColor: '#44acba',
              boxShadow: 'none',
              float: 'right',
              marginLeft: '8px',
              minWidth: '100px',
            }}
          >
            Save
          </Button>
          <Button
            variant='contained'
            sx={{
              fontSize: '16px',
              padding: '2px 16px',
              textTransform: 'none',
              backgroundColor: '#8d9090',
              boxShadow: 'none',
              float: 'right',
              minWidth: '100px',
            }}
          >
            Cancel
          </Button>
        </div>
      </Grid>
    </$Container>
  );
}

export default AddBook;
