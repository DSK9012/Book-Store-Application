import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import bookStoreLogo from 'assets/images/book-store-logo.svg';

const $Header = styled.header({
  width: '100%',
  padding: '14px 80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const $Title = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const $TitleText = styled.h3({
  paddingLeft: '8px',
});

const $NavList = styled.ul({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  listStyle: 'none',
  '& li:not(:last-child)': {
    paddingRight: '32px',
  },
});

const $NavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    font-weight: bold;
    color: black;
  }
`;

const $SignInBtn = styled.button({
  backgroundColor: 'black',
  borderRadius: '4px',
  outline: 'none',
  border: 'none',
  padding: '8px 24px',
  color: 'whitesmoke',
  fontWeight: 'bold',
  cursor: 'pointer',
});

function Header() {
  return (
    <$Header>
      <$Title>
        <img src={bookStoreLogo} alt='book-store-logo' width='80px' height='60px' />
        <$TitleText>Book Store</$TitleText>
      </$Title>
      <div>
        <$NavList>
          <li>
            <$NavLink to='/home' className={(navData) => (navData.isActive ? 'active' : '')}>
              Home
            </$NavLink>
          </li>
          <li>
            <$NavLink to='/add-book' className={(navData) => (navData.isActive ? 'active' : '')}>
              Add Book
            </$NavLink>
          </li>
          <li>
            <$SignInBtn>Sign In</$SignInBtn>
          </li>
        </$NavList>
      </div>
    </$Header>
  );
}

export default Header;
