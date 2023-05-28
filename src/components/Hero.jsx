import "./HeroStyles.css";

function Hero (props) {
    return ( <>
    
    <div className="Hero" >
    <div className="Hero-text">
<h1>{props.title} </h1>
<p> {props.text} </p>
<a href={props.url} className={props.btClass}> {props.buttoText} </a>
<p> {props.under}</p>
<img alt="HeroImg" src={props.heroImg}/>
    </div>
    


    <div className="container-19">
    <img alt="Img" src={props.Img}/>
    <img alt="Img" src={props.Ima}/>
    <img alt="Img" src={props.Imb}/>
    <img alt="Img" src={props.Ime}/>
    <img alt="Img" src={props.Imr}/>
    <img alt="Img" src={props.Imt}/>
    <img alt="Img" src={props.Imy}/>


</div>

<div className="hama">
<h1>{props.titler} </h1>
<p> {props.textr} </p>



</div>
    </div>
    
    


    </>



    );
}
export default Hero ;