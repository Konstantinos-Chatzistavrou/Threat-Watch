import { Button } from "@common/Button";
import type { ButtonProps, IonButtonProps } from "@common/Button/ButtonTypes";
import { IonApp } from "@ionic/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

test("is rendered", async () => {
  const { button } = setup();
  expect(button).toBeVisible();
});
test("calls handler when clicked", async () => {
  const { handleClick, clickButton } = setup();

  await clickButton();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

function setup(customProps?: Partial<ButtonProps>) {
  const buttonProps: ButtonProps = {
    type: "button",
    ariaLabel: "test-button",
    classes: "test-class",
    dataTestId: "test-button",
  };
  const handleClick = vi.fn();
  const ionButtonProps: IonButtonProps = {
    id: "test-button",
    onClick: handleClick,
  };

  const props: ButtonProps = {
    ...buttonProps,
    ionButtonProps: { ...ionButtonProps },
    ...customProps, // to override any defaults
  };

  const utils = render(
    <IonApp>
      <Button {...props} />
    </IonApp>,
  );
  const user = userEvent.setup();
  const button = screen.getByLabelText(buttonProps.ariaLabel);
  const clickButton = async () => {
    await user.click(button);
  };

  return {
    handleClick,
    clickButton,
    ...utils,
    user,
    buttonProps,
    ionButtonProps,
    button,
  };
}
