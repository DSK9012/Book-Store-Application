import { styled } from '@mui/material';
import Header from './Header/Header';
import RenderBooks from './RenderBooks';

export const $Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 4, 2),
  margin: theme.spacing(0, 'auto'),
  maxWidth: theme.spacing(143.75),
}));

export default function Home() {
  return (
    <$Container>
      <Header />
      <RenderBooks />
    </$Container>
  );
}
