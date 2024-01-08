
import './App.css';

function App() {
  let color_change=['blue','red','yellow','green','white','#f6a192','violet','purple','pink']
  const colorChange=(color)=>{
    document.body.style.backgroundColor = color
  }
  return (
    <>
    
  <h1>Change Color of body by clicking box</h1>
  <div style={{display: "flex"}}>
  {
   color_change.map((data) => {
   
   return( <div className="Box" style={{border:"1px solid",height:"100px",width:"100px",backgroundColor: `${data}`,margin:"10px"}}  onClick={()=>colorChange(data)}></div>
   )})
  }
  
  </div>
    </>
  );
}

export default App;
