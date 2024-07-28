function searchImage(query) {
  const URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: '45151719-ad1ed1cd151d376d4bdd12a44',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

export default searchImage;
