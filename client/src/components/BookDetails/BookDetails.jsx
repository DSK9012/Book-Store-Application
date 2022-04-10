import { Grid, styled } from '@mui/material';
import { AssignmentInd, CalendarMonth, ConfirmationNumber, Person, School } from '@mui/icons-material';
import Header from 'components/Header/Header';
import { $Container } from 'components/Home';
import readingBook from 'assets/images/book-reading.jpg';
import RenderBooks from 'components/RenderBooks';
import RatingContainer from 'components/Utils/RatingContainer';
import IconSet from 'components/Utils/IconSet';
import AboutAuthor from './AboutAuthor';
import Comments from './Comments';

const $BookImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: theme.spacing(350 / 8),
  objectFit: 'fill',
  borderRadius: theme.spacing(0.5),
  border: '1.3px solid rgba(0, 56, 101, 0.1)',
}));

const $BookInfo = styled('div')({
  height: 'fit-content',
});

const $BookName = styled('h3')(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  letterSpacing: 0.2,
}));

const $CreatedBy = styled('p')(({ theme }) => ({
  fontSize: theme.spacing(1.75),
  lineHeight: 1.7,
}));

const $BookInfoText = styled('h4')(({ theme }) => ({
  fontSize: theme.spacing(2),
  width: '50%',
}));

const $BookInfoHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const $IconSetContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > *': {
    padding: theme.spacing(1.5),
  },
  '& .action-icon': {
    fontSize: theme.spacing(3.5),
  },
  '& .action-icon.outlined': {
    color: '#595959',
  },
  '& .likes-count': {
    color: 'inherit',
  },
}));

const $BookInfoRow = styled('div')(({ theme }) => ({
  borderBottom: '1.3px dashed rgba(0, 56, 101, 0.1)',
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.spacing(2),
  letterSpacing: 0.4,
  lineHeight: 1.5,
  fontWeight: 'bold',
  padding: theme.spacing(1, 0),
  '& > *:nth-of-type(1)': {
    width: '50%',
    fontWeight: 'normal',
  },
  '& .info-icon': {
    verticalAlign: 'middle',
    color: '#44acba',
  },
}));

const $DescriptionContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 0, 1),
}));

const $Content = styled('p')(({ theme }) => ({
  padding: theme.spacing(0.5, 0, 0),
  fontSize: theme.spacing(2),
  letterSpacing: 0.2,
  lineHeight: 1.5,
}));

const $TagsContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.5, 0, 2),
}));

function BookDetails() {
  return (
    <$Container>
      <Header />
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <$BookInfo>
            <$BookName>
              Java Script Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quisquam atque deserunt.
            </$BookName>
            <$CreatedBy>by Sai Kiran on 27/03/2022</$CreatedBy>
            <RatingContainer />
            <$BookInfoHeader>
              <$BookInfoText>BOOK INFO</$BookInfoText>
              <$IconSetContainer>
                <IconSet />
              </$IconSetContainer>
            </$BookInfoHeader>
            <div>
              <$BookInfoRow>
                <span>Institute</span>
                <span>
                  <School fontSize='30' className='info-icon' /> GMRIT College
                </span>
              </$BookInfoRow>
              <$BookInfoRow>
                <span>Recommended To</span>
                <span>
                  <AssignmentInd fontSize='30' className='info-icon' /> EEE, B.Tech
                </span>
              </$BookInfoRow>
              <$BookInfoRow>
                <span>Last Updated</span>
                <span>
                  <CalendarMonth fontSize='30' className='info-icon' /> 27/03/2022
                </span>
              </$BookInfoRow>
              <$BookInfoRow>
                <span>Updated By</span>
                <span>
                  <Person fontSize='30' className='info-icon' /> Sai Kiran
                </span>
              </$BookInfoRow>
              <$BookInfoRow>
                <span>Edition</span>
                <span>
                  <ConfirmationNumber fontSize='30' className='info-icon' /> 2nd
                </span>
              </$BookInfoRow>
              <$BookInfoRow>
                <span>Book Author</span>
                <span>
                  <Person fontSize='30' className='info-icon' /> Sai Kiran
                </span>
              </$BookInfoRow>
            </div>
            <$DescriptionContainer>
              <h4>Description</h4>
              <$Content>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste illo distinctio magnam impedit facilis
                est, similique dignissimos a tempore eum, maiores mollitia laudantium laboriosam temporibus obcaecati
                ducimus placeat, vel consectetur!
              </$Content>
            </$DescriptionContainer>
            <$TagsContainer>
              <h4>TAGS</h4>
              <$Content>#Book, #Trending, #JavaScript #Programming</$Content>
            </$TagsContainer>
          </$BookInfo>
          <AboutAuthor />
          <Comments />
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
