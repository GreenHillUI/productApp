/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-var */
const chai = require('chai');
const { questionData, answerData } = require('../test/QAtestData');
const { reviewFilter, sortQtoAs } = require('../client/src/components/QAhelperFunctions');
const { qListReducer } = require('../client/src/reducers/qListReducer');

describe("reviewFilter", () => {

  // eslint-disable-next-line prefer-arrow-callback
  beforeEach(() => {
    const should = chai.should();
  });

  it("Should return an array", () => {
    var { expect } = chai;

    const qResult = reviewFilter(questionData, 'sell');
    expect(typeof (qResult)).to.equal('object');
    expect(Array.isArray(qResult)).to.equal(true);

  });

  it("Should return an empty array if no reviews contain search terms ", () => {
    const emptyData = reviewFilter(questionData, 'UnIcORN');

    (emptyData).should.eql([]);
  });


  it("Should remove any questions that do not include the search string", () => {


    (reviewFilter(questionData, 'red')).should.have.lengthOf(1);
    (reviewFilter(questionData, 'selling')).should.have.lengthOf(2);

  });

  it("Should ONLY check Q/A text for matches not keys or other values", () => {
    var { expect } = chai;

    //key
    expect(reviewFilter(questionData, 'question').length).to.equal(0);
    //other value
    expect(reviewFilter(questionData, 'williamsmith').length).to.equal(0);
    //other value
    expect(reviewFilter(questionData, '45').length).to.equal(0);
  });

  it("Should maintain the structure of the original question and answer object", () => {
    var { assert } = chai;

    const keysQ = Object.entries(questionData.results[0]);
    const keysA = Object.entries(questionData.results[0].answers['68']);

    const after = reviewFilter(questionData, 'product')[0];
    const afterQ = Object.entries(after);
    const afterA = Object.entries(after.answers['68']);


    assert.equal(JSON.stringify(keysQ), JSON.stringify(afterQ));
    assert.equal(JSON.stringify(keysA), JSON.stringify(afterA));

  });

});


describe("sortQsToAs", () => {

  beforeEach(() => {
    const should = chai.should();
  });

  it("Should only call review filter when filter length is longer than 2 characters", () => {
    var { expect } = chai;

    var expected = [2, 1, 4, 4];
    var actual = [];
    //should filter
    actual.push(sortQtoAs(questionData, 'who', true).length); //2
    actual.push(sortQtoAs(questionData, 'last', true).length); //1
    //should not filter
    actual.push(sortQtoAs(questionData, 'wh', true).length); //4
    actual.push(sortQtoAs(questionData, 'l', true).length); //4


    expect(expected).to.eql(actual);

  });

  it("Should sort the given array by helpfulness rating ", () => {
    var { assert } = chai;

    var resultRatings = sortQtoAs(questionData, 'who', true)
      .map((q) => (q.question_helpfulness));
    var sortedCorrectly = resultRatings.reduce((accum, q, index) => (
      accum || (index === resultRatings.length - 1 || q.question_helpfulness < resultRatings[index + 1].question_helpfulness)
    ), true);

    assert.equal(sortedCorrectly, true);
  });


  it("Should return four questions if expand is true", () => {
    var { assert } = chai;

    var isArray = (result) => (typeof (result) === 'object' && Array.isArray(result));
    var actual = isArray(sortQtoAs(questionData, '', false));
    var actual2 = isArray(sortQtoAs(questionData, 'who', true));
    var actual3 = isArray(sortQtoAs(questionData, '', true));
    var expected = true;

    assert.equal(actual, expected);
    assert.equal(actual2, expected);
    assert.equal(actual3, expected);
  });

  // it("Should place questions asked by 'seller' on the top of the list when unfiltered", () => {
  //   var { expect } = chai;
  //   //includes seller
  //   expect(sortQtoAs(questionData, '', true)[0].asker_name === 'Seller').to.equal(true);
  //   //filter out seller question
  //   expect(sortQtoAs(questionData, 'long', false)[0].asker_name === 'Seller').to.equal(false);

  // });

  it("Should return an array of question objects", () => {
    var { expect } = chai;

    const after = sortQtoAs(questionData, 'product', true).reduce((accum, q) => (
      accum || typeof (q) === 'object'
    ), true);

    expect(after).to.equal(true);
  });

});

// describe('qListReducer', function () {

//   it('Should return state if')

// });