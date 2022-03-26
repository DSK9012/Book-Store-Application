import { Grid, Rating, styled } from '@mui/material';
import {
  BookmarkAdd,
  BookmarkAddOutlined,
  Favorite,
  FavoriteBorderOutlined,
  FileDownloadOutlined,
  Share,
  ShareOutlined,
} from '@mui/icons-material';
import Header from 'components/Header/Header';
import { $Container } from 'components/Home';
import readingBook from 'assets/images/book-reading.jpg';
import RenderBooks from 'components/RenderBooks';
import { $RatingContainer as RatingContainer, $Rating, $RatingCount, $Icon, $LikesCount } from 'components/BookCard';

const $BookImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'fill',
  borderRadius: '4px',
  border: '1.3px solid rgba(0, 56, 101, 0.1)',
});

const $BookInfo = styled('div')({
  height: '350px',
});

const $RatingContainer = styled(RatingContainer)(({ theme }) => ({
  paddingTop: theme.spacing(0.5),
}));

function BookDetails() {
  return (
    <$Container>
      <Header />
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <$BookInfo>
            <h3>
              Java Script Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quisquam atque deserunt.
            </h3>
            <$RatingContainer>
              <$Rating>2.5</$Rating>
              <Rating size='small' name='half-rating' defaultValue={2.5} readOnly precision={0.5} />
              <$RatingCount> (20)</$RatingCount>
            </$RatingContainer>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h4>Book Info</h4>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <$Icon>
                  <FileDownloadOutlined />
                </$Icon>
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
              </div>
            </div>
            <div>
              <div>
                <span>Name</span>
                <span>Java Script</span>
              </div>
              <div>
                <span>Name</span>
                <span>Java Script</span>
              </div>
              <div>
                <span>Name</span>
                <span>Java Script</span>
              </div>
              <div>
                <span>Name</span>
                <span>Java Script</span>
              </div>
              <div>
                <span>Name</span>
                <span>Java Script</span>
              </div>
              <div>
                <span>Name</span>
                <span>Java Script</span>
              </div>
            </div>
          </$BookInfo>
        </Grid>
        <Grid item sm={12} md={4}>
          <$BookImg src={readingBook} alt='book-img' />
        </Grid>
      </Grid>
      <RenderBooks />
    </$Container>
  );
}

export default BookDetails;
