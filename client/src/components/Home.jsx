import styled from '@emotion/styled';
import Header from './Header/Header';
import RenderBooks from './RenderBooks';

const $Container = styled.div({
  padding: '0 32px 16px',
  margin: '0 auto',
  maxWidth: '1150px',
});

export default function Home() {
  return (
    <$Container>
      <Header />
      <RenderBooks />
    </$Container>
  );
}
