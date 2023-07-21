import { Meta, StoryObj } from "@storybook/react";
import { Title, TitleProps } from "./Title";

export default{
  title:'Components/Input',
  component: Title,
  args:{
  }
  
}as Meta<TitleProps>

export const DefaultWhite:StoryObj<TitleProps> = {
  args:{
    children: 'White title',
    color: 'white' 
  }
}

export const DefaultDarkGold:StoryObj<TitleProps> = {
    args:{
      children: 'DarkGold title',
      color: 'darkGold' 
    }
}

