import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Box, Typography, TextField, Button, Divider } from '@material-ui/core';
import { ArrowForward, FavoriteBorder } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function SearchForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    dispatch({ type: 'POST_SEARCH', payload: search });
    setSearch('');
    history.push('/search');
  };

  const sendToFavorites = () => {
    history.push('/favorites');
  };

  const sendHome = () => {
    history.push('/');
  };

  return (
    <>
      <Box p={3}>
        <form onSubmit={submitSearch}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              marginRight={2}
              onClick={sendHome}
              style={{ cursor: 'pointer' }}
            >
              <Typography variant="h4" align="right">
                Giphy Search!
              </Typography>
            </Box>
            <Box mx={2} flexGrow={1}>
              <TextField
                fullWidth={true}
                label="Search Giphy"
                variant="outlined"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </Box>
            <Box mx={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<ArrowForward />}
              >
                Search
              </Button>
            </Box>
            <Box marginLeft={3}>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<FavoriteBorder />}
                onClick={sendToFavorites}
              >
                Favorites
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box marginBottom={4}>
        <Divider />
      </Box>
    </>
  );
}

export default SearchForm;
