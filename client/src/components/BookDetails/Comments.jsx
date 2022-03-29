import {
  Delete,
  DeleteOutlined,
  Edit,
  EditOutlined,
  ExpandMore,
  Favorite,
  FavoriteBorderOutlined,
  Reply,
  ReplyOutlined,
  FlagOutlined,
  Flag,
} from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, styled } from '@mui/material';
import { $LikesCount, $Icon } from 'components/Utils/IconSet';
import userImg from 'assets/images/sai.jpg';

const $Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 0),
  borderBottom: '1.4px dashed rgba(0, 56, 101, 0.1)',
}));

const $ImgContainer = styled('div')(({ theme }) => ({
  width: 'fit-content',
  paddingRight: theme.spacing(2),
}));

const $UserImg = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: theme.spacing(50 / 8),
  height: theme.spacing(50 / 8),
}));

const $IconSetContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& > *:nth-of-type(1)': {
    paddingLeft: '0',
  },
  '& > *': {
    padding: theme.spacing(1.5, 1.5, 0),
  },
  '& .action-icon': {
    fontSize: theme.spacing(2.75),
  },
  '& .action-icon.outlined': {
    color: '#595959',
  },
  '& .likes-count': {
    color: 'inherit',
  },
}));

const $UserNameRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const $CommentedDate = styled('p')(({ theme }) => ({
  fontSize: theme.spacing(1.75),
  color: '#595959',
}));

const $CommentText = styled('p')(({ theme }) => ({
  fontSize: theme.spacing(2),
  padding: theme.spacing(1, 0),
}));

export default function Comments() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Comments</AccordionSummary>
      <AccordionDetails>
        <$Container>
          <$ImgContainer>
            <$UserImg src={userImg} alt='user-img' />
          </$ImgContainer>
          <div>
            <$UserNameRow>
              <h5>Sai Kiran</h5>
              <$CommentedDate>29/03/2022</$CommentedDate>
            </$UserNameRow>
            <$CommentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum, tenetur quos velit,
              exercitationem nostrum repellat.
            </$CommentText>
            <$IconSetContainer>
              <$Icon>
                <EditOutlined className='action-icon outlined' />
                <Edit className='action-icon filled' />
              </$Icon>
              <$Icon>
                <DeleteOutlined className='action-icon outlined' />
                <Delete className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FavoriteBorderOutlined className='action-icon outlined' />
                <Favorite className='action-icon filled' htmlColor='red' />
                <$LikesCount className='likes-count'>99</$LikesCount>
              </$Icon>
              <$Icon>
                <ReplyOutlined className='action-icon outlined' />
                <Reply className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FlagOutlined className='action-icon outlined' />
                <Flag className='action-icon filled' />
              </$Icon>
            </$IconSetContainer>
          </div>
        </$Container>
        <$Container>
          <$ImgContainer>
            <$UserImg src={userImg} alt='user-img' />
          </$ImgContainer>
          <div>
            <$UserNameRow>
              <h5>Sai Kiran</h5>
              <$CommentedDate>29/03/2022</$CommentedDate>
            </$UserNameRow>
            <$CommentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum, tenetur quos velit,
              exercitationem nostrum repellat.
            </$CommentText>
            <$IconSetContainer>
              <$Icon>
                <EditOutlined className='action-icon outlined' />
                <Edit className='action-icon filled' />
              </$Icon>
              <$Icon>
                <DeleteOutlined className='action-icon outlined' />
                <Delete className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FavoriteBorderOutlined className='action-icon outlined' />
                <Favorite className='action-icon filled' htmlColor='red' />
                <$LikesCount className='likes-count'>99</$LikesCount>
              </$Icon>
              <$Icon>
                <ReplyOutlined className='action-icon outlined' />
                <Reply className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FlagOutlined className='action-icon outlined' />
                <Flag className='action-icon filled' />
              </$Icon>
            </$IconSetContainer>
          </div>
        </$Container>
        <$Container>
          <$ImgContainer>
            <$UserImg src={userImg} alt='user-img' />
          </$ImgContainer>
          <div>
            <$UserNameRow>
              <h5>Sai Kiran</h5>
              <$CommentedDate>29/03/2022</$CommentedDate>
            </$UserNameRow>
            <$CommentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum, tenetur quos velit,
              exercitationem nostrum repellat.
            </$CommentText>
            <$IconSetContainer>
              <$Icon>
                <EditOutlined className='action-icon outlined' />
                <Edit className='action-icon filled' />
              </$Icon>
              <$Icon>
                <DeleteOutlined className='action-icon outlined' />
                <Delete className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FavoriteBorderOutlined className='action-icon outlined' />
                <Favorite className='action-icon filled' htmlColor='red' />
                <$LikesCount className='likes-count'>99</$LikesCount>
              </$Icon>
              <$Icon>
                <ReplyOutlined className='action-icon outlined' />
                <Reply className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FlagOutlined className='action-icon outlined' />
                <Flag className='action-icon filled' />
              </$Icon>
            </$IconSetContainer>
          </div>
        </$Container>
        <$Container>
          <$ImgContainer>
            <$UserImg src={userImg} alt='user-img' />
          </$ImgContainer>
          <div>
            <$UserNameRow>
              <h5>Sai Kiran</h5>
              <$CommentedDate>29/03/2022</$CommentedDate>
            </$UserNameRow>
            <$CommentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum, tenetur quos velit,
              exercitationem nostrum repellat.
            </$CommentText>
            <$IconSetContainer>
              <$Icon>
                <EditOutlined className='action-icon outlined' />
                <Edit className='action-icon filled' />
              </$Icon>
              <$Icon>
                <DeleteOutlined className='action-icon outlined' />
                <Delete className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FavoriteBorderOutlined className='action-icon outlined' />
                <Favorite className='action-icon filled' htmlColor='red' />
                <$LikesCount className='likes-count'>99</$LikesCount>
              </$Icon>
              <$Icon>
                <ReplyOutlined className='action-icon outlined' />
                <Reply className='action-icon filled' />
              </$Icon>
              <$Icon>
                <FlagOutlined className='action-icon outlined' />
                <Flag className='action-icon filled' />
              </$Icon>
            </$IconSetContainer>
          </div>
        </$Container>
      </AccordionDetails>
    </Accordion>
  );
}
