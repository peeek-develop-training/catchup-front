import { composeStories } from "@storybook/react";
import * as Stories from "./Test.stories";
import { expect, test } from "vitest";

const { Default } = composeStories(Stories);

describe("Test", () => {
  test("should render", () => {
    const { getByText } = render(<Default />);
    expect(getByText("Test")).not.toBeNull();
  });
});
