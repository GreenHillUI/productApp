/* eslint-disable no-var */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */

var chai = require('chai');
const { questionData, answerData } = require('./QAtestData');
const { reviewFilter, sortQtoAs } = require('../client/src/components/QAhelperFunctions');


describe("reviewFilter", () => {

  beforeEach(function () {
    var expect = chai.expect;
    var should = chai.should();


  });

  it("Should return an array", () => {
    var expect = chai.expect;

    const qResult = reviewFilter(questionData, 'sell');
    expect(typeof (qResult)).to.equal('object');
    expect(Array.isArray(qResult)).to.equal(true);

  });

  it("Should return an empty array if no reviews contain search terms ", () => {
    var expect = chai.expect;
    const emptyData = reviewFilter(questionData, 'UnIcORN');

    (emptyData).should.eql([]);
  });


  it("Should remove any questions that do not include the search string", () => {
    var expect = chai.expect;

    (reviewFilter(questionData, 'red')).should.have.lengthOf(1);
    (reviewFilter(questionData, 'selling')).should.have.lengthOf(2);

  });

  it("Should ONLY check Q/A text for matches not keys or other values", () => {
    var expect = chai.expect;

    //key
    expect(reviewFilter(questionData, 'question').length).to.equal(0);
    //other value
    expect(reviewFilter(questionData, 'williamsmith').length).to.equal(0);
    //other value
    expect(reviewFilter(questionData, '45').length).to.equal(0);
  });

  it("Should maintain the structure of the original question and answer object", () => {
    var assert = chai.assert;

    const keysQ = Object.entries(questionData.results[0]);
    const keysA = Object.entries(questionData.results[0].answers['68']);

    const after = reviewFilter(questionData, 'product')[0];
    const afterQ = Object.entries(after);
    const afterA = Object.entries(after.answers['68']);


    assert.equal(JSON.stringify(keysQ), JSON.stringify(afterQ));
    assert.equal(JSON.stringify(keysA), JSON.stringify(afterA));

  });

});