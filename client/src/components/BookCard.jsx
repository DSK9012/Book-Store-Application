import styled from '@emotion/styled';
import {
  BookmarkAdd,
  BookmarkAddOutlined,
  Favorite,
  FavoriteBorderOutlined,
  Person,
  Share,
  ShareOutlined,
} from '@mui/icons-material';
import { Rating } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import readingBook from 'assets/images/book-reading.jpg';

const $Card = styled.div({
  width: '100%',
  height: '320px',
  border: '1.3px solid rgba(0, 56, 101, 0.1)',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
});

const $ImgContainer = styled.div({
  position: 'relative',
  height: '135px',
  backgroundColor: '#fafafa',
});

const $BookImg = styled.img({
  width: '100%',
  height: '100%',
  borderRadius: '4px 4px 0 0',
});

const $BookName = styled.h4({
  whiteSpace: 'normal',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
  fontSize: '18px',
  lineHeight: '1.2',
  letterSpacing: '0.2',
  marginBottom: '8px',
});

const $Content = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px 12px 8px',
});

const $TextContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: '#787878',
  letterSpacing: '.5px',
  lineHeight: '1.4',
  '& p': {
    paddingLeft: '8px',
  },
});

const $RatingContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '32px',
});

const $Rating = styled.p({
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#ad6700',
  margin: '4px 2px 0 0',
});

const $RatingCount = styled.p({
  fontSize: '16px',
  margin: '2px 0 0 2px',
  color: '#787878',
});

const $ImageOverlay = styled.div({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0, 0.2)',
  opacity: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  color: 'white',
});

const $Icon = styled.div({
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
