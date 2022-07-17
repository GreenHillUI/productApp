/* eslint-disable no-var */
const _ = require('underscore');
//combines the text of the Q and its A's together, then filters them based on the search bar entry

const reviewFilter = function (Qs, filter) {
  //An object with the the Q ids for keys, and a single string of the Q/A text as a value
  if (Qs === undefined) {
    return [];
  }
  const combinedQAObj = {};
  //iterate through each q for the given Product
  Qs.results.forEach((q) => {
    //get the question's id
    const id = q.question_id;
    //Then iterates an array of all the A's texts for that Q,
    var answers = Object.values(q.answers).map((val) => (
    //Map to return an array of the answer texts
      (answers === undefined ? val.body : answers + val.body)
    ));
      //Store joined Q/A texts string aside Q_id in the Obj
    combinedQAObj[id] = q.question_body + answers.join('');
  });
  //use the combined strings for each question to filter out the qs by search term
  return Qs.results.filter((q) => (combinedQAObj[q.question_id].indexOf(filter) !== -1));
};

module.exports.sortQtoAs = function (Qs, qFilter = '', expand) {
  //verifying the filter is > 2 characters and performing filter
  if (qFilter && qFilter.length > 2) {
    Qs = reviewFilter(Qs, qFilter);
  } else {
    //otherwise, create an array (not object) of Qs
    Qs = _.map(Qs.results);
  }
  return (expand ? Qs.sort((a, b) => (b.question_helpfulness - a.question_helpfulness)) : Qs.sort((a, b) => (b.question_helpfulness - a.question_helpfulness)).slice(0, 3));
  //sort by helpfulness, and then slice off whatever Qs not supposed to be displayed
};

module.exports.reviewFilter = reviewFilter;