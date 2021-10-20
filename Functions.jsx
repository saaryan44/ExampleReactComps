import r from 'react';


const Fx=()=><h1>hello Fx</h1>;
const Gx=()=>{const i=1-99; return(<span>{i*6}</span>);};

const Functions=()=><><Fx /><Gx /> <p><Gx /><Gx /></p></>;

export default Functions;

