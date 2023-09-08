function Card({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt="images" />
      <h1>Name: {user.name}</h1>
      <h1>bio: {user.bio}</h1>
      <h1>bio: {user.company}</h1>
      <h1>blog: {user.blog}</h1>
    </div>
  );
}

export default Card;
