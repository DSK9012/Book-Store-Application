import { FileUpload } from '@mui/icons-material';
import { styled } from '@mui/material';
import { useEffect, useState } from 'react';

const $FieldArea = styled('label')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.spacing(0.5),
  border: '2px dashed silver',
  minHeight: theme.spacing(150 / 8),
  cursor: 'pointer',
}));

export default function UploadField(props) {
  const { label, name, value, onChange } = props;
  const [uploadedImg, setUploadedImg] = useState();

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
          <input type='file' name={name} value={value} onChange={onChange} id={name} hidden />
          <FileUpload /> {label}
        </>
      )}
    </$FieldArea>
  );
}
