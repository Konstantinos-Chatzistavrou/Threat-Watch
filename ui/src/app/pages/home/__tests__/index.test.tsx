import { IonApp } from "@ionic/react";
import Home from "../index";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home page", async () => {
  it("displays a search bar and 2 buttons", async () => {
    setup();

    const searchRow = screen.getByTestId("home-search-row");
    expect(within(searchRow).getByLabelText("search-reload")).toBeVisible();
    expect(
      within(searchRow).getByLabelText("sparkles-placeholder-aria-label"),
    ).toBeVisible();
    expect(within(searchRow).getByLabelText("home-search-input")).toBeVisible();
  });
});

function setup() {
  const container = render(
    <IonApp>
      <Home />
    </IonApp>,
  );

  return {
    user: userEvent.setup(),
    container,
  };
}
