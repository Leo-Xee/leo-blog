import { Post } from '@/types/post';
import React from 'react';
import readingTime from 'reading-time';
import { format } from 'date-fns';
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import * as style from './PostTitle.css';

type PostTitleProps = {
  post: Post;
};

function PostTitle({ post }: PostTitleProps) {
  const stats = readingTime(post.content);

  const { title, createdAt } = post;

  return (
    <div className={style.container}>
      <h1 className={style.postTitle}>{title}</h1>

      <div className={style.postMeta}>
        <CalendarIcon width={18} height={18} />
        <span>{format(createdAt, 'yyyy-MM-dd')}</span>
        <span> · </span>
        <ClockIcon width={18} height={18} />
        <span>{stats.text}</span>
      </div>
    </div>
  );
}

export default PostTitle;
