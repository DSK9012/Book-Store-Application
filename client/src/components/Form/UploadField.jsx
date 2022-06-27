import { Close, CloudUpload, FileUpload } from '@mui/icons-material';
import { styled } from '@mui/material';
import { Viewer } from '@react-pdf-viewer/core';
import { memo, useEffect, useState } from 'react';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

const $FieldArea = styled('label')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.spacing(0.5),
  border: '2px dashed silver',
  minHeight: theme.spacing(150 / 8),
  cursor: 'pointer',
  height: '180px',
  overflow: 'auto',
  position: 'relative',
}));

function UploadField(props) {
  const { label, name, value, onChange, accept } = props;
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

  if (accept === '.pdf' && value) {
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
    <$FieldArea htmlFor={name}>
      {value ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={uploadedImg}
            alt='uploaded-img'
            style={{ objectFit: 'contain', width: '150px', height: '130px', borderRadius: '4px' }}
          />
          <div>
            <p>{value.name}</p>
          </div>
          <input type='file' name={name} onChange={onChange} id={name} accept={accept} />
          <span
            style={{
              position: 'absolute',
              right: '0',
              top: '0',
              width: 'fit-content',
              backgroundColor: '#dd1a1a',
              borderBottomLeftRadius: '20px',
              paddingLeft: '5px',
            }}
          >
            <Close htmlColor='#fff' />
          </span>
        </div>
      ) : (
        <>
          <input type='file' name={name} value={value} onChange={onChange} id={name} hidden accept={accept} />
          <CloudUpload fontSize='large' /> {label}
        </>
      )}
    </$FieldArea>
  );
}

export default memo(UploadField);
