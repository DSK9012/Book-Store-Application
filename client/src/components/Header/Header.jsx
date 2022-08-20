import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

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
  background: 'linear-gradient(to bottom right,#70838f,#70838f,#44acba, #44acba)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
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
  color: '#70838f',
  '&.active': {
    fontWeight: 'bold',
    color: '#70838f',
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

const $TextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '20px',
    border: '2px solid #00c1d4',
  },
}));

function Header() {
  const [searchText, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <$Header>
      <$Title>
        <LocalLibraryIcon htmlColor='#00c1d4' fontSize='large' />
        <$TitleText>Book Store</$TitleText>
      </$Title>
      <div>
        <$TextField
          placeholder='Book Name'
          type='text'
          title=''
          name='bookName'
          size='small'
          value={searchText}
          onChange={handleSearchChange}
          spellCheck='false'
          sx={{
            width: '400px',
          }}
          InputProps={{
            endAdornment: <SearchOutlined htmlColor='#44acba' sx={{ fontSize: '25px', cursor: 'pointer' }} />,
          }}
        />
      </div>
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
