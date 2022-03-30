import { styled, Rating } from '@mui/material';

export const $RatingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const $Rating = styled('p')(({ theme }) => ({
  fontSize: theme.spacing(2),
  fontWeight: 'bold',
  color: '#ad6700',
  margin: theme.spacing(0.5, 0.25, 0, 0),
}));

export const $RatingCount = styled('p')(({ theme }) => ({
  fontSize: theme.spacing(2),
  margin: theme.spacing(0.25, 0, 0, 0.25),
  color: '#787878',
}));

export default function RatingContainer() {
  return (
    <$RatingContainer>
      <$Rating>2.5</$Rating>
      <Rating size='small' name='half-rating' defaultValue={2.5} readOnly precision={0.5} />
      <$RatingCount> (20)</$RatingCount>
    </$RatingContainer>
  );
}
