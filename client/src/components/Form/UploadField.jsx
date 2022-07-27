import { Close, CloudUpload } from '@mui/icons-material';
import { styled } from '@mui/material';
import { Viewer } from '@react-pdf-viewer/core';
import { memo, useEffect, useState } from 'react';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

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
  backgroundColor: theme.palette.action.focus,
  borderBottomLeftRadius: '100px',
  padding: theme.spacing(0, 0, 6 / 8, 12 / 8),
  cursor: 'pointer',
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
}));

const $ChangeFileLabel = styled('label')(({ theme }) => ({
  color: '#00c1d4',
  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));

function UploadField(props) {
  const { label, name, value, onChange, acceptedFiles } = props;
  const [uploadedImg, setUploadedImg] = useState();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentPageLabel } = pageNavigationPluginInstance;

  useEffect(() => {
    if (value) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(value);
      fileReader.onloadend = () => {
        setUploadedImg(fileReader.result);
      };
    }
  }, [value]);

  if (acceptedFiles === '.pdf' && value) {
    return (
      <$FieldArea htmlFor={name} style={{}}>
        <Viewer fileUrl={URL.createObjectURL(value)} plugins={[pageNavigationPluginInstance]} />
        <div>
          <CurrentPageLabel>
            {(currentPageProps) => <span>Total Pages : {currentPageProps.numberOfPages}</span>}
          </CurrentPageLabel>
        </div>
      </$FieldArea>
    );
  }

  return (
    <$FieldArea draggable>
      {value ? (
        <$FileContent>
          <$Img src={uploadedImg} alt='uploaded-img' />
          <$FileInfo>
            <p>{value.name}</p>
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
      ) : (
        <$UploadFilePlaceholder htmlFor={name}>
          <input type='file' name={name} value={value} onChange={onChange} id={name} hidden accept={acceptedFiles} />
          <CloudUpload fontSize='large' htmlColor='silver' />
          <p>{label}</p>
        </$UploadFilePlaceholder>
      )}
      {value && (
        <$CloseBtn>
          <Close fontSize='small' htmlColor='#fff' />
        </$CloseBtn>
      )}
    </$FieldArea>
  );
}

export default memo(UploadField);
