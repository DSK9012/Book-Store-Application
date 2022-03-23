import {
  BookmarkAdd,
  BookmarkAddOutlined,
  Favorite,
  FavoriteBorderOutlined,
  Person,
  Share,
  ShareOutlined,
} from '@mui/icons-material';
import { Rating, styled } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import readingBook from 'assets/images/book-reading.jpg';

const $Card = styled('div')(({ theme }) => ({
  width: '100%',
  height: theme.spacing(40),
  border: '1.3px solid rgba(0, 56, 101, 0.1)',
  borderRadius: theme.spacing(0.5),
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
}));

const $ImgContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: theme.spacing(17.5),
  backgroundColor: theme.palette.background.paper,
}));

const $BookImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: theme.spacing(0.5, 0.5, 0, 0),
}));

const $BookName = styled('h4')(({ theme }) => ({
  whiteSpace: 'normal',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontSize: theme.spacing(2.25),
  lineHeight: 1.2,
  letterSpacing: 0.2,
  marginBottom: theme.spacing(1),
}));

const $Content = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 1.5, 1),
}));

const $TextContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.spacing(1.75),
  color: '#787878',
  letterSpacing: '.5px',
  lineHeight: 1.4,
  '& p': {
    paddingLeft: theme.spacing(1),
  },
}));

const $RatingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(4),
}));

const $Rating = styled('p')(({ theme }) => ({
  fontSize: theme.spacing(2),
  fontWeight: 'bold',
  color: '#ad6700',
  margin: theme.spacing(0.5, 0.25, 0, 0),
}));

const $RatingCount = styled('p')(({ theme }) => ({
  fontSize: theme.spacing(2),
  margin: theme.spacing(0.25, 0, 0, 0.25),
  color: '#787878',
}));

const $ImageOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, 0.2)',
  opacity: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  color: theme.palette.common.white,
}));

const $Icon = styled('div')({
  '& .outlined': {
    display: 'block',
  },
  '& .filled': {
    display: 'none',
  },
  '&:hover .filled': {
    display: 'block',
  },
  '&:hover .outlined': {
    display: 'none',
  },
});

export default function BookCard() {
  return (
    <$Card>
      <$ImgContainer>
        <$BookImg src={readingBook} alt='book-img' />
        <$ImageOverlay>
          <$Icon>
            <BookmarkAddOutlined className='outlined' sx={{ cursor: 'pointer' }} />
            <BookmarkAdd className='filled' htmlColor='red' sx={{ cursor: 'pointer' }} />
          </$Icon>
          <$Icon>
            <FavoriteBorderOutlined className='outlined' sx={{ cursor: 'pointer' }} />
            <Favorite className='filled' htmlColor='red' sx={{ cursor: 'pointer' }} />
          </$Icon>
          <$Icon>
            <ShareOutlined className='outlined' sx={{ cursor: 'pointer' }} />
            <Share className='filled' htmlColor='red' sx={{ cursor: 'pointer' }} />
          </$Icon>
        </$ImageOverlay>
      </$ImgContainer>
      <$Content>
        <div>
          <$BookName>Complete Java Script by Jonas in Udemy by Jonas in Udemy</$BookName>
          <$TextContent>
            <Person fontSize='20' />
            <p>Sai Kiran</p>
          </$TextContent>
          <$TextContent>
            <CalendarMonthIcon fontSize='20' />
            <p>22/03/2022</p>
          </$TextContent>
        </div>
        <$RatingContainer>
          <$Rating>2.5</$Rating>
          <Rating size='small' name='half-rating' defaultValue={2.5} readOnly precision={0.5} />
          <$RatingCount> (20)</$RatingCount>
        </$RatingContainer>
      </$Content>
    </$Card>
  );
}
