import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      Posts: <button onClick={() => navigate('/')}>Go back to home -{id}</button>
      <div>asdasdasd</div>
    </div>
  );
};

export default PostPage;
