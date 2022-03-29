import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, styled } from '@mui/material';
import authorImg from 'assets/images/sai.jpg';

const $AuthorContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5, 0, 1.5, 2),
}));

const $Figure = styled('div')(({ theme }) => ({
  height: theme.spacing(130 / 8),
  width: theme.spacing(130 / 8),
  clipPath: 'circle(50% at 50% 50%)',
  shapeOutside: 'circle(50% at 50% 50%)',
  float: 'left',
  transform: 'translateX(-16px)',
}));

const $AuthorImg = styled('img')({
  width: '100%',
});

const $AuthorNameRow = styled('div')({
  '& h5': {
    display: 'inline-block',
  },
});

const $AuthorName = styled('h5')(({ theme }) => ({
  fontSize: theme.spacing(2.25),
}));

const $AuthorDescription = styled('p')(({ theme }) => ({
  paddingTop: theme.spacing(1.75),
  fontSize: theme.spacing(2),
  lineHeight: 1.5,
}));

const $AuthorInfo = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1.25),
  '& > *': {
    display: 'inline-block',
    padding: '0 8px',
    color: '#464646',
  },
  fontSize: theme.spacing(1.75),
  fontWeight: 'bold',
}));

export default function AboutAuthor() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>About Author</AccordionSummary>
      <AccordionDetails>
        <$AuthorContainer>
          <$Figure>
            <$AuthorImg src={authorImg} alt='author-img' />
          </$Figure>
          <div>
            <$AuthorNameRow>
              <$AuthorName>Sai Kiran Dannana</$AuthorName>
              <Button
                variant='contained'
                sx={{
                  fontSize: '16px',
                  padding: '2px 16px',
                  textTransform: 'none',
                  backgroundColor: '#44acba',
                  boxShadow: 'none',
                  float: 'right',
                }}
              >
                Connect
              </Button>
            </$AuthorNameRow>
            <$AuthorDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic sunt cumque molestias saepe modi dolores
              dolor optio, debitis deserunt veritatis! Magni quaerat itaque provident nam eos amet accusantium facilis!
            </$AuthorDescription>
            <$AuthorInfo>
              <div>
                <span>&nbsp;&bull;&nbsp;</span>
                <span>GMRIT College</span>
              </div>
              <div>
                <span>&nbsp;&bull;&nbsp;</span>
                <span>EEE Branch</span>
              </div>
              <div>
                <span>&nbsp;&bull;&nbsp;</span>
                <span>Andhra Pradesh</span>
              </div>
            </$AuthorInfo>
          </div>
        </$AuthorContainer>
      </AccordionDetails>
    </Accordion>
  );
}
