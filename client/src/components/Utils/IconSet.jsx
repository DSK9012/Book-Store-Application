import { styled } from '@mui/material';
import {
  BookmarkAdd,
  BookmarkAddOutlined,
  Download,
  DownloadOutlined,
  Favorite,
  FavoriteBorderOutlined,
  Share,
  ShareOutlined,
} from '@mui/icons-material';

export const $Icon = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& .outlined': {
    display: 'block',
    cursor: 'pointer',
  },
  '& .filled': {
    display: 'none',
    transform: 'scale(1)',
    cursor: 'pointer',
  },
  '&:hover .filled': {
    display: 'block',
    transform: 'scale(1.2)',
  },
  '&:hover .outlined': {
    display: 'none',
  },
});

export const $LikesCount = styled('span')(({ theme }) => ({
  paddingLeft: theme.spacing(0.5),
  fontSize: theme.spacing(2),
  color: theme.palette.common.white,
}));

export default function IconSet() {
  return (
    <>
      <$Icon>
        <DownloadOutlined className='action-icon outlined' />
        <Download className='action-icon filled' htmlColor='#e6e6e6e8' />
      </$Icon>
      <$Icon>
        <BookmarkAddOutlined className='action-icon outlined' />
        <BookmarkAdd className='action-icon filled' htmlColor='#e6e6e6e8' />
      </$Icon>
      <$Icon className='likes'>
        <FavoriteBorderOutlined className='action-icon outlined' />
        <Favorite className='action-icon filled' htmlColor='red' />
        <$LikesCount className='likes-count '>99</$LikesCount>
      </$Icon>
      <$Icon>
        <ShareOutlined className='action-icon outlined' />
        <Share className='action-icon filled' htmlColor='#1df4f7' />
      </$Icon>
    </>
  );
}
