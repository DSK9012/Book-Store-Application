import { Button, Grid, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, styled } from '@mui/material';
import TextField from 'components/Form/CustomTextField';
import UploadField from 'components/Form/UploadField';
import useFormikHelpers from 'formik/FormikHelpers';

const $ButtonContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
  margin: '0 auto',
}));

function AddBookForm({ formik }) {
  const { handleChangeAndBlur, hasError, getHelpText } = useFormikHelpers(formik);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) formik.setFieldValue(event.target.name, event.target.files[0]);
  };

  const handleRemoveFile = (field) => {
    formik.setFieldValue(field, '');
  };

  const handleSubmit = () => {
    console.log(formik);
    if (formik.isValid && formik.dirty) formik.submitForm();
  };

  return (
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
          name='institute'
          value={formik.values.institute}
          onChange={handleChangeAndBlur('institute')}
          error={hasError('institute')}
          helperText={getHelpText('institute')}
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
      <Grid item sm={12} md={6} style={{ paddingLeft: '38px' }}>
        <FormControl>
          <FormLabel>Access Type</FormLabel>
          <RadioGroup row name='row-radio-buttons-group'>
            <FormControlLabel
              value='private'
              checked={formik.values.accessType === 'private'}
              onChange={() => {
                formik.setFieldValue('accessType', 'private');
              }}
              control={<Radio size='small' />}
              label='Private'
            />
            <FormControlLabel
              value='public'
              checked={formik.values.accessType === 'public'}
              onChange={() => {
                formik.setFieldValue('accessType', 'public');
              }}
              control={<Radio size='small' />}
              label='Public'
            />
          </RadioGroup>
        </FormControl>
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
          acceptedFiles='image/jpg,img/jpeg,img/png,.png,.jpg,.jpeg'
          onChange={handleFileChange}
          handleRemoveFile={handleRemoveFile}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <UploadField
          label='UPLOAD BOOK'
          name='bookFile'
          acceptedFiles='.pdf'
          value={formik.values.bookFile}
          onChange={handleFileChange}
          handleRemoveFile={handleRemoveFile}
        />
      </Grid>
      <$ButtonContainer>
        <Button
          sx={{
            backgroundColor: '#70838f',
            '&:hover': {
              backgroundColor: '#70838f',
            },
          }}
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </$ButtonContainer>
    </Grid>
  );
}

export default AddBookForm;
