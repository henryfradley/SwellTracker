const TideBars = (props) => {
  let tides = props.tides;
  let bars = [];

  for (let i = 0; i < 24; i++) {
    bars.push(
      <div width="5px" color="red" height={tides * 10}></div>
    );
    let bar = <div width="5px" color="red" height={tides * 10}></div>;
  }


  return (
    bars

  );



};

export default TideBars;