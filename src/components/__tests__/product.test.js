import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import Product from "../product";

Enzyme.configure({ adapter: new Adapter() });

test("product component with display a product image, name and price", () => {
  const product = shallow(
    <Product
      productName="Test product"
      productURL="products/test-product-1"
      productImage="http://assets.teenvogue.com/photos/57dfbfe5046b3a2e2a7364bd/master/pass/Kylie-Armytee.jpg"
      productPrice="$12.90"
    />
  );
  const json = toJSON(product);
  expect(json).toMatchSnapshot();
});
