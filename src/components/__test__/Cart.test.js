import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/resItemList.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should check item is added in the cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const item = screen.getByText("Family Feast for 4 ( Save upto 37%)");
  fireEvent.click(item);
  const resItem = screen.getAllByTestId("resList");
  expect(resItem.length).toBe(4);
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  const headerUpdate = screen.getByText("Cart (1)");
  expect(headerUpdate).toBeInTheDocument();
  const resItemAfterCartUpdate = screen.getAllByTestId("resList");
  expect(resItemAfterCartUpdate.length).toBe(5);
});
