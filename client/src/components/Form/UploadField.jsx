import { Close, CloudUpload, Task } from '@mui/icons-material';
import { styled } from '@mui/material';
import { memo, useEffect, useState } from 'react';

const $FieldArea = styled('div')(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  border: '2px dashed silver',
  minHeight: theme.spacing(150 / 8),
  height: '180px',
  overflow: 'hidden',
  position: 'relative',
}));

const $UploadFilePlaceholder = styled('label')(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
}));

const $CloseBtn = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: '0',
  top: '0',
  width: 'fit-content',
  borderBottomLeftRadius: '100px',
  padding: theme.spacing(0, 0, 6 / 8, 12 / 8),
  cursor: 'pointer',
  backgroundColor: theme.palette.action.focus,
  transition: 'background-color .5s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const $FileContent = styled('div')(({ theme }) => ({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

const $Img = styled('img')(({ theme }) => ({
  width: theme.spacing(150 / 8),
  height: theme.spacing(130 / 8),
  borderRadius: theme.spacing(4 / 8),
}));

const $FileInfo = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  fontSize: theme.spacing(2),
}));

const $FileName = styled('p')(({ theme }) => ({
  fontWeight: 'bold',
}));

const $ChangeFileLabel = styled('label')(({ theme }) => ({
  color: '#00c1d4',
  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));

function UploadField(props) {
  const { label, name, value, onChange, acceptedFiles, handleRemoveFile } = props;
  const [uploadedFile, setUploadedImg] = useState();

  useEffect(() => {
    if (value) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(value);
      fileReader.onloadend = () => {
        setUploadedImg(fileReader.result);
      };
    }
  }, [value]);

  return (
    <$FieldArea draggable>
      {value ? (
        <UploadedFielContent data={{ ...props, uploadedFile }} />
      ) : (
        <$UploadFilePlaceholder htmlFor={name}>
          <input type='file' name={name} value={value} onChange={onChange} id={name} hidden accept={acceptedFiles} />
          <CloudUpload fontSize='large' htmlColor='silver' />
          <p>{label}</p>
        </$UploadFilePlaceholder>
      )}
      {value && (
        <$CloseBtn onClick={() => handleRemoveFile(name)}>
          <Close fontSize='small' htmlColor='#fff' />
        </$CloseBtn>
      )}
    </$FieldArea>
  );
}

function UploadedFielContent(props) {
  const {
    data: { uploadedFile, name, onChange, acceptedFiles, value },
  } = props;

  return (
    <$FileContent>
      {acceptedFiles === '.pdf' ? (
        <Task htmlColor='#b11616' style={{ height: '100%', width: 'fit-content' }} />
      ) : (
        <$Img src={uploadedFile} alt='uploaded-img' />
      )}
      <$FileInfo>
        <$FileName>{value.name}</$FileName>
        <p>
          Size :{' '}
          {value.size / 1024 < 1024
            ? `${(value.size / 1024).toFixed(2)} KB`
            : `${(value.size / 1024 / 1024).toFixed(2)} MB`}
        </p>
        <br />
        <$ChangeFileLabel htmlFor={name}>
          Change File
          <input type='file' name={name} onChange={onChange} id={name} accept={acceptedFiles} hidden />
        </$ChangeFileLabel>
      </$FileInfo>
    </$FileContent>
  );
}

export default memo(UploadField);
