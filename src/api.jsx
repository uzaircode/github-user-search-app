import axios from 'axios';

const SearchUser = async (term) => {
  const response = await axios.get(`https://api.github.com/users/${term}`, {
    headers: {
      Authorization: 'Client-ID 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',
    },
  });

  console.log(response.data);

  return response.data;
};

export default SearchUser;
