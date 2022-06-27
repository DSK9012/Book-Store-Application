import { Button, Grid, styled } from '@mui/material';
import Header from 'components/Header/Header';
import { $Container } from 'pages/Home';
import TextField from 'components/Form/CustomTextField';
import UploadField from 'components/Form/UploadField';
import useAddBookFormik from 'formik/AddBookFormik';
import useFormikHelpers from 'components/Form/FormikHelpers';

const $AddBookText = styled('h3')(({ theme }) => ({
  fontSize: theme.spacing(2.75),
  letterSpacing: 0.2,
  lineHeight: 1.4,
  padding: theme.spacing(1, 0, 2),
}));

function AddBook() {
  const formik = useAddBookFormik();
  const { handleChangeAndBlur, hasError, getHelpText } = useFormikHelpers(formik);

  return (
    <$Container>
      <Header />
      <$AddBookText>Add Book</$AddBookText>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <TextField
            label='Book Name'
            placeholder='Book Name'
            type='text'
            title=''
            name='bookName'
            value={formik.values.bookName}
            onChange={handleChangeAndBlur('bookName')}
            error={hasError('bookName')}
            helperText={getHelpText('bookName')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label='Book Author'
            placeholder='Book Author'
            type='text'
            title=''
            name='bookAuthor'
            value={formik.values.bookAuthor}
            onChange={handleChangeAndBlur('bookAuthor')}
            error={hasError('bookAuthor')}
            helperText={getHelpText('bookAuthor')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label='Institute'
            placeholder='Institue'
            type='text'
            title=''
            name='bookName'
            value={formik.values.bookName}
            onChange={handleChangeAndBlur('bookName')}
            error={hasError('bookName')}
            helperText={getHelpText('bookName')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label='Recommended Class'
            placeholder='Recommended Class'
            type='text'
            title=''
            name='recommendedClass'
            value={formik.values.recommendedClass}
            onChange={handleChangeAndBlur('recommendedClass')}
            error={hasError('recommendedClass')}
            helperText={getHelpText('recommendedClass')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label='Book Edition'
            placeholder='Book Edition'
            type='text'
            title=''
            name='edition'
            value={formik.values.edition}
            onChange={handleChangeAndBlur('edition')}
            error={hasError('edition')}
            helperText={getHelpText('edition')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            label='Access Type'
            placeholder='Access Type'
            type='text'
            title=''
            name='accessType'
            value={formik.values.accessType}
            onChange={handleChangeAndBlur('accessType')}
            error={hasError('accessType')}
            helperText={getHelpText('accessType')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            multiline
            minRows={2}
            label='Tags'
            placeholder='#javascript, #java, #c++'
            type='text'
            title=''
            name='tags'
            value={formik.values.tags}
            onChange={handleChangeAndBlur('tags')}
            error={hasError('tags')}
            helperText={getHelpText('tags')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            multiline
            minRows={2}
            label='Description'
            placeholder='Description'
            type='text'
            title=''
            name='description'
            value={formik.values.description}
            onChange={handleChangeAndBlur('description')}
            error={hasError('description')}
            helperText={getHelpText('description')}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <UploadField
            label='UPLOAD BOOK COVER'
            name='bookCover'
            value={formik.values.bookCover}
            accept='image/jpg,img/jpeg,img/png,.png,.jpg,.jpeg'
            onChange={(event) => {
              formik.setFieldValue('bookCover', event.target.files[0]);
            }}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <UploadField
            label='UPLOAD BOOK'
            name='bookFile'
            accept='.pdf'
            value={formik.values.bookFile}
            onChange={(event) => {
              formik.setFieldValue('bookFile', event.target.files[0]);
            }}
          />
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
