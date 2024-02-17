import { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";

const meta: Meta<typeof ListItem> = {
  title: "Ui/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const StyledListItem: Story = {
  args: {
    title: "안녕하세요안녕하세요안녕하세요안녕하세요",
    subTitle: "올리버 쌤입니다.올리버 쌤입니다.올리버 쌤입니다.",
    image:
      "https://i.namu.wiki/i/nkyyzYnI9mu0oKoO3WshDwLPBRLWPeLAMrqCeTSU9L5mv7AUyWrVKOV_kYsJ0rGCzD6V6w4ox0IMSus8sQ5IBg.webp",
  },
};
