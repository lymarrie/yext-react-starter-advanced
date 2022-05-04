
  const Insurances = (props:any) => {
    const { list } = props;
    const listItems = list.map((item:any) => <div className="text-xl" key={item}>{item}</div>);
    return (
      <>
        <div className="section">
          <div className="text-4xl mb-4">Insurances Accepted</div>
          <div className="pl-6 space-y-2">{listItems}</div>
        </div>
      </>
    );
  };
  
  export default Insurances;