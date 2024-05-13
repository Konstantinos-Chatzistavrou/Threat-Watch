import homeContent from "@content/home.json";
import { IonApp } from "@ionic/react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home, testId as HomeTestId } from "..";
import { testId as CriticalNewsTestId } from "../components/CriticalNews";

test("displays a search bar and 2 buttons", async () => {
  renderHome();

  const searchRow = screen.getByTestId(HomeTestId.homeSearchRow);
  expect(within(searchRow).getByLabelText("search-reload")).toBeVisible();
  expect(
    within(searchRow).getByLabelText("sparkles-placeholder-aria-label"),
  ).toBeVisible();

  const searchBar = within(searchRow).getByLabelText("home-search-input");
  expect(searchBar).toBeVisible();
  expect(searchBar).toHaveAttribute(
    "placeholder",
    homeContent.searchPlaceholder,
  );
});

test("highlights a starred article", async () => {
  const { user } = renderHome();

  const favoriteBtn = screen.getByLabelText("favorite-btn-1");
  expect(within(favoriteBtn).queryByRole("img")).toBeNull();
  await user.click(favoriteBtn);
  expect(within(favoriteBtn).getByRole("img")).toHaveAttribute(
    "style",
    "color: yellow;",
  );
});

test("displays articles after clicking to expand the dropdown", async () => {
  const { user } = renderHome();

  const criticalNewsContainer = screen.getByTestId(
    CriticalNewsTestId.swiperContainer,
  );
  const criticalNewsDropdownButton = screen.getByLabelText(
    "critical-news-dropdown-button",
  );
  expect(criticalNewsContainer).toHaveAttribute("class", "ion-hide");
  await user.click(criticalNewsDropdownButton);
  expect(criticalNewsContainer).toHaveAttribute("class", "");
});

function renderHome() {
  const utils = render(
    <IonApp>
      <Home />
    </IonApp>,
  );

  return {
    user: userEvent.setup(),
    ...utils,
  };
}
