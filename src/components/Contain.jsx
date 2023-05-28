import "./Contain.css";

function Contain (props) {
    return ( <>
    
    <div className="Contain" >
    <div className="Contain-text">
<h1>{props.title} </h1>
<p> {props.text} </p>
<a href={props.url} className={props.btk}> {props.btt} </a>
<p> {props.bts}</p>

    </div>
    <img alt="ContainImg" src={props.ContainImg}/>


   


    </div>
    
    


    </>



    );
}
export default Contain ;