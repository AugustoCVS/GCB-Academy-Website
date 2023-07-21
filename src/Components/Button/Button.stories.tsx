import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default{
  title:'Components/Button',
  component: Button,
  args:{
  }
  
}as Meta<ButtonProps>

export const Default:StoryObj<ButtonProps> = {
  args:{
    children:'white',
    background: 'gold',
    color: 'white'
  }
}


export const WhiteButton:StoryObj<ButtonProps> = {
  args:{
    children:'gold',
    background: 'white',
    color: 'gold'
  }
}