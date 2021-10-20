
const Y=(props)=><h1>{props.items.b[1].name}</h1>;

const X=()=><Y items={{a:[{name:"breakfast",id:1}],b:[{name:"lunch",id:2},{name:"dinner",id:3}]}} />;

const ObjProp=()=><div><X /><X /></div>;

export default ObjProp