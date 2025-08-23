
const MyComp = (props) => {
  const {children , bgColor , height} = props;
  return <div style={{ backgroundColor: bgColor, height: `${height}px` }}>
    hey! {children}
    <br />
    bye! {children}
  </div>;
}

export default MyComp;