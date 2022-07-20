/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Overview from "../client/src/components/Overview";

let container = null;



const mockProps = {
  productInfo: {
    id: 40348,
    campus: "hr-rfp",
    name: "Heir Force Ones",
    slogan: "A sneaker dynasty",
    description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: "Kicks",
    default_price: "99.00",
    created_at: "2021-08-13T14:38:44.509Z",
    updated_at: "2021-08-13T14:38:44.509Z",
    features: "[{…}, {…}, {…}, {…}]"
  },
  styles: [
    "{default?: true, name: \"White & White\", original_pr…}",
    "{default?: false, name: \"White & Red\", original_pri…}",
    "{default?: false, name: \"White & Black\", original_p…}",
    "{default?: false, name: \"White & Blue\", original_pr…}"
  ],
  selectedStyle: {
    style_id: 240526,
    name: "White & Red",
    original_price: "99.00",
    sale_price: null,
    "default?": false,
    photos: "[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]",
    skus: "{1394906: {…}, 1394907: {…}, 1394908: {…}, 1394909:…}"
  },
  metaData: {
    1: "4",
    2: "1",
    3: "14",
    4: "7",
    5: "32"
  },
  setStyles: "ƒ setStyles() {}",
  setProductInfo: "ƒ setProductInfo() {}",
  setSelectedStyle: "ƒ setSelectedStyle() {}",
  setMetaData: "ƒ setMetaData() {}"
};


beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});


afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Should render a basic page', () => {
  act(() => {
    render(<Overview productInfo={mockProps.productInfo} selectedStyle={mockProps.selectedStyle} metaData={mockProps.metaData} />, container);
  });

});




