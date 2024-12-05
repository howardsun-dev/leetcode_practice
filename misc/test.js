async function topArticles(limit) {
  let currentPage = 1;
  let allTitles = [];

  while (true) {
    try {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/articles?page=${currentPage}`
      );
      //   console.log(`Page: ${currentPage}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      data.data.forEach((article) => {
        const title = article.title || article.story_title || '';
        if (title) {
          //   console.log(title);
          //   console.log(article.num_comments);
          allTitles.push({ title, num_comments: article.num_comments });
        }
      });

      //   console.log(data.page, data.total_pages);

      if (data.page === data.total_pages) break;

      currentPage++;
    } catch (error) {
      console.error('Error fetching data:', error);
      break;
    }
  }

  const sortedTitles = [...allTitles].sort((a, b) => {
    const aComment = a.num_comments;
    const bComment = b.num_comments;

    if (isNaN(aComment) || isNaN(bComment)) {
      // If either comment count is invalid (NaN), sort alphabetically
      return a.title.localeCompare(b.title);
    }

    // If comment counts are different, sort by descending order
    if (aComment !== bComment) {
      return bComment - aComment;
    }

    // If comment counts are equal, sort alphabetically
    return a.title.localeCompare(b.title);
  });

  // Return only the titles (not the objects) up to the limit
  return sortedTitles.slice(0, limit).map((item) => item.title);
}

console.log(topArticles(5));
