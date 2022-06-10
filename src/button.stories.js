export default {
  title: 'Button',
  argTypes: {
    id: { name: 'id' },
    textContent: { name: 'textContent' },
  },
};

const Template = (args) => {
  const btn = document.createElement("button");
  btn.textContent = args.textContent;
  btn.id = args.id;

  return btn;
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'xxx',
  textContent: 'Button'
};
