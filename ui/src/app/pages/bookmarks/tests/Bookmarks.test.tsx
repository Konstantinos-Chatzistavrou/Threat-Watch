// test("checking many boxes and turning off edit mode clears selected checkboxes and remove button", async() => {
//
// });
// test("clicking remove button displays alert confirmation message", async() => {
//
// });
//
// test("canceling remove item alert message closes alert and doesn't change list size", async() => {
//
// });
//
// test("closes alert and decreases list size by 1 after confirming removal of 1 item", async() => {
//
// });
//
// test("allows checking and removing multiple list items", async() => {
//
// });

import { testId } from "@common/EditCardList";
import { IonApp } from "@ionic/react";
import { Bookmarks } from "@pages/bookmarks";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/index";

test("checking a checkbox displays the remove button", async () => {
  const { user } = setup();

  const toggleEditBtn = await screen.findByTestId(testId.toggleEditBtn);
  expect(toggleEditBtn).toBeVisible();

  await user.click(toggleEditBtn);

  const id = 0;
  const firstCheckbox = screen.getByTestId(`${testId.itemCheckbox}-${id}`);
  await user.click(firstCheckbox);
  expect(firstCheckbox).toHaveValue("on");

  expect(screen.getByText("removeButtonText")).toBeVisible();
});
test("hides the remove button if no checkboxes are selected", async () => {});

function setup() {
  const user = userEvent.setup();

  render(
    <IonApp>
      <Bookmarks />
    </IonApp>,
  );

  return { user };
}
