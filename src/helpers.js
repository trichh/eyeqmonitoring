/* sets initial shows upon login */
export const getInitialShows = () => {
  return fetch('https://api.tvmaze.com/shows')
  .then(res => res.json())
  .then(response => {
    return response;
  })
  .catch(error => alert(error));
};
/* searches shows that match keyword */
export const searchShows = (keyword, genre) => {
  /* replaces spaces with '+' */
  const parsedKeyword = keyword.split(' ').join('+');
  return fetch('https://api.tvmaze.com/search/shows?q=' + parsedKeyword)
  .then(res => res.json())
  .then(response => {
    /* retrieves just the show data for each item */
    const shows = response.map((show) => { return show.show });
    /* if genre is set, it will only return matches within the selected genre */
    return (genre) ? shows.filter((show) => { return show.genres.includes(genre) }) : shows;
  })
  .catch(error => alert(error));
};
/* sets shows when a genre is selected */
export const filterShows = (genre) => {
  return fetch('https://api.tvmaze.com/shows')
  .then(res => res.json())
  .then(response => {
    /* only returns shows within the selected genre */
    return response.filter((show) => { return show.genres.includes(genre) });
  })
  .catch(error => alert(error));
};
/* gurantees all shows are aligned and spaced correctly */
export const alignColumns = () => {
  const setWidth = () => {
    const shows = document.getElementsByClassName("show");
    /* copies html nodes to iterable array */
    [...shows].map((item, iteration) => {
      const gap = window.getComputedStyle(shows[0]).getPropertyValue('width');
      /* sets spacing for all shows except first one */
      return (iteration !== 0) ? item.style.maxWidth = gap : null
    });
  }
  setWidth();
  /* readjusts spacing when window is resized */
  window.addEventListener('resize', function(event){
    setWidth();
  });
};
