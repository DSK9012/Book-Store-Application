import {
  BookmarkAdd,
  BookmarkAddOutlined,
  Favorite,
  FavoriteBorderOutlined,
  Person,
  Share,
  ShareOutlined,
  CalendarMonth,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Rating, styled } from '@mui/material';
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
  '& .img-overlay': {
    display: 'none',
  },
  '&:hover .img-overlay': {
    display: 'flex',
    opacity: 1,
  },
}));

const $BookImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: theme.spacing(0.5, 0.5, 0, 0),
}));

const $ImageOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  color: theme.palette.common.white,
  opacity: 0,
  transition: 'opacity .3s',
  '& > *': {
    transform: 'translateY(20px)',
    transition: 'transform .3s',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
  },
  '&:hover > *': {
    transform: 'translateY(0)',
    opacity: 0.99,
  },
}));

export const $Icon = styled('div')({
  '& .outlined': {
    display: 'block',
  },
  '& .filled': {
    display: 'none',
    transform: 'scale(1)',
  },
  '&:hover .filled': {
    display: 'block',
    transform: 'scale(1.2)',
  },
  '&:hover .outlined': {
    display: 'none',
  },
});

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
  color: theme.palette.common.black,
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

export const $RatingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
}));

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

const $BookStatus = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  width: 'fit-content',
  backgroundColor: '#13cee9',
  marginTop: theme.spacing(1),
  color: theme.palette.common.black,
  fontSize: theme.spacing(1.75),
  borderRadius: theme.spacing(0.25),
}));

export const $LikesCount = styled('span')(({ theme }) => ({
  paddingLeft: theme.spacing(0.5),
  fontSize: theme.spacing(2),
  color: theme.palette.common.white,
}));

const $Link = styled(Link)({
  textDecoration: 'none',
});

export default function BookCard() {
  return (
    <$Link to='/home/book-details/123'>
      <$Card>
        <$ImgContainer>
          <$BookImg src={readingBook} alt='book-img' />
          <$ImageOverlay className='img-overlay'>
            <$Icon>
              <BookmarkAddOutlined className='outlined' sx={{ cursor: 'pointer' }} />
              <BookmarkAdd className='filled' htmlColor='#e6e6e6e8' sx={{ cursor: 'pointer' }} />
            </$Icon>
            <$Icon>
              <FavoriteBorderOutlined className='outlined' sx={{ cursor: 'pointer' }} />
              <Favorite className='filled' htmlColor='red' sx={{ cursor: 'pointer' }} />
              <$LikesCount>99</$LikesCount>
            </$Icon>
            <$Icon>
              <ShareOutlined className='outlined' sx={{ cursor: 'pointer' }} />
              <Share className='filled' htmlColor='#1df4f7' sx={{ cursor: 'pointer' }} />
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
              <CalendarMonth fontSize='20' />
              <p>22/03/2022</p>
            </$TextContent>
            <$BookStatus>
              <p>New</p>
            </$BookStatus>
          </div>
          <$RatingContainer>
            <$Rating>2.5</$Rating>
            <Rating size='small' name='half-rating' defaultValue={2.5} readOnly precision={0.5} />
            <$RatingCount> (20)</$RatingCount>
          </$RatingContainer>
        </$Content>
      </$Card>
    </$Link>
  );
}
