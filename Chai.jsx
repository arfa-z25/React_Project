

function chai()

{
    //this is key value pair implementation and {{}} these are mosty used in scnerios where css is updating on javascript variables values
   const chai = {
    name:"Chai-karakk" , 
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2UlDLiEK_AD-Luky-X6mct8lZwvkMIZcT2hPDRMOS3UKb3UvjQdKJSSxAGSLRi_NlAA&usqp=CAU',
    imgSize:190 ,
    radius : 90,
    description:"I Love Chaii",

   };

   //now we will make a list of objects which will show the html according to the list object values
   const products = [{name:"Product1" , id:1} , {name:"Product2" , id:2 } , {name:"Product3" , id:3}] ; 
   const listitems = products.map(product=>
    <li key={product.id}>{product.name}</li>
   );
    return (
        <div>
            <h1>{chai.name}</h1>
            <img src={chai.imgUrl} alt=""  style={{width: chai.imgSize , height:chai.imgSize , borderRadius:chai.radius, marginLeft:200 , backgroundColor:"black" , padding:10 , border:"2px solid black" , boxShadow:"0 0 10px black" , marginTop:20, marginBottom:20, display:"block" , marginLeft: "auto", marginRight: "auto",
                
            }}/>
            <p>{chai.description}</p>

            <ol>{listitems}</ol>
        </div>
    )
}

export default chai