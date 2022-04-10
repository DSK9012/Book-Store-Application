import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import bookStoreLogo from 'assets/images/book-store-logo.svg';

const $Header = styled('header')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.75, 0),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  zIndex: 5,
  backgroundColor: theme.palette.common.white,
}));

const $Title = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const $TitleText = styled('h3')(({ theme }) => ({
  paddingLeft: theme.spacing(1),
}));

const $NavList = styled('ul')(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  listStyle: 'none',
  '& li:not(:last-child)': {
    paddingRight: theme.spacing(4),
  },
}));

const $NavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.black,
  '&.active': {
    fontWeight: 'bold',
    color: theme.palette.common.black,
  },
}));

const $SignInBtn = styled('button')(({ theme }) => ({
  backgroundColor: '#44acba',
  borderRadius: theme.spacing(0.5),
  outline: 'none',
  border: 'none',
  padding: theme.spacing(1, 3),
  color: theme.palette.common.white,
  fontWeight: 'bold',
  cursor: 'pointer',
}));

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
            <SearchOutlined htmlColor='#44acba' sx={{ fontSize: '25px', marginTop: '8px', cursor: 'pointer' }} />
          </li>
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
