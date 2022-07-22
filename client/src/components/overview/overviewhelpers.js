

function getTotalReviews(ratings) {
  let total = 0;
  Object.keys(ratings).forEach((i) => {
    total += Number(ratings[i]);
  });
  return total;
}
  
function handleAllReviewsClick() {
  document.querySelector('.reviews-list')
    .scrollIntoView();
  
}


module.exports.getTotalReviews = getTotalReviews;
module.exports.handleAllReviewsClick = handleAllReviewsClick;