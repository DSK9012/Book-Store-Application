import { FileUpload } from '@mui/icons-material';
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
        </div>
      ) : (
        <>
          <input type='file' name={name} value={value} onChange={onChange} id={name} hidden accept={accept} />
          <FileUpload /> {label}
        </>
      )}
    </$FieldArea>
  );
}

export default memo(UploadField);
