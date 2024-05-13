import { Chip } from "@common/Chip";
import type { ChipProps } from "@common/Chip/ChipTypes";
import { IonApp } from "@ionic/react";
import { render, screen, within } from "@testing-library/react";

test("is rendered", async () => {
  const { chip } = setup({ content: <div>Click me</div> });
  expect(chip).toBeVisible();
});

test("displays content that is passed in", async () => {
  const chipContents = "Click me";
  const { chip } = setup({ content: <div>{chipContents}</div> });
  expect(within(chip).getByText(chipContents)).toBeVisible();
});

function setup(customProps?: Partial<ChipProps>) {
  const chipProps: ChipProps = {
    content: "test-string",
    dataTestId: "test-chip",
    ...customProps,
  };

  const utils = render(
    <IonApp>
      <Chip {...chipProps} />
    </IonApp>,
  );

  const chip = screen.getByTestId(chipProps.dataTestId!);

  return {
    ...utils,
    chipProps,
    chip,
  };
}
