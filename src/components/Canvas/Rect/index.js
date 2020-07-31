const Rect = (props) => {
  const { context, x, y, width, height } = props;
  context.fillRect(x, y, width, height);
};

export default Rect;
