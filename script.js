import { checkPositiveNumber } from "./helpers/checkSoDuong.js";
import { checkOddNumber } from "./helpers/checkChanLe.js";
// Callbacks Example one

    // const Work1=()=>{
    //     console.log("Work1");
    // };
    // const Work2=(callback)=>{
    //     console.log("Work2");
    //     callback(); // call Work1 function  directly
    // };

    // // Work1();
    // Work2(Work1);


// Callbacks Example two    



    // const sum=(a,b,callback)=>{
    //     const result=a+b;
    //     callback(result);
    //     // checkPositiveNumber(result);
    //     // checkOddNumber(result);
    // }

    // sum(12,120,checkPositiveNumber);
    // sum(12,120,checkOddNumber);

    // sum(12,120,(number) =>{ 
    //     checkPositiveNumber(number);
    //     checkOddNumber(number); 
    // });


// Callback example three

    // const loginSuccess=()=>{
    //     console.log("Login Success");
    // }
    // const checkLogin=(data,callback)=>{
    //     const email="Thanhhoa3514@gmail.com";
    //     const password="2222";
    //     if(data.password===password&&data.email===email){
    //         // console.log("Login successfully");
    //         callback(); // call loginSuccess function directly
    //     }else{
    //         console.log("Login failed");
    //     }
    // }    


    // let data={
    //     email:"Thanhhoa3514@gmail.com",
    //     password:"2222"
    // };

    // checkLogin(data,loginSuccess);


// Promise

    // var a=10;

    // var promise= new Promise((resolve,reject)=>{
    //     // resolve if callback function handling act successfully
    //     // reject if callback function handling act failed
    //     if(a===undefined){
    //         reject();
    //     }else{
    //         resolve(a);
    //     }
    // });

    // promise
    //     .then((resultA)=>{
    //         console.log(resultA);
    //         return resultA;
    //         // console.log("Success");
    //     })
    //     .then((resultA)=>{
    //         const resultB=resultA+10;
    //         console.log(resultB);
    //         return resultB;
    //     })
    //     .then((resultB)=>{
    //         const resultC=resultB+10;
    //         console.log(resultC);
    //         return resultC;
    //     })
    //     .then((resultC)=>{
    //         const resultD=resultC+10;
    //         console.log(resultD);
    //         return resultD;
    //     })
        
    //     .catch((resultA)=>{
    //         const b=resultA+10;
    //         console.log(b);
    //         // console.log("Failed");
    //     })
    // .finally(()=>{
    //     console.log("Finally block");
    // });



// Three conditions of promise
    // const promise = new  Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve();
    //     },3000);
    // });

    // setTimeout(()=>{
    //     console.log("After 1 second:",promise);
    // },1000);



// Fetch API calls
    // fetch("https://dummyjson.com/products")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data.products);

    //         const newArray=data.products.map((item)=>{
    //             return `
    //             <div class"product-item">
    //                 <img src="${item.thumbnail}" />
    //                 <h2>
    //                     ${item.title}
    //                 </h2>
    //                 <h3>${item.price}$</h3>  
    //                 <div>${item.tags}</div> 
    //                 // <div>${item.reviews}</div> 
        
    //             </div>`;
    //         });

    //         const html=newArray.join("");// join array to string

    //         console.log(html); // Console log string

    //         const productsList=document.querySelector("#product-list")
    //         productsList.innerHTML=html; // Update HTML list with new data

    //         // console.log(newArray);

    //     })    



// async and await
const fetAPI= async (api)=>{
    const response= await fetch(api);
    const data= await response.json();
    // console.log(data);
    return data;

}

    // fetAPI("https://dummyjson.com/products")
    // .then((data)=>{
    //     console.log(data);
    // });
        

    fetAPI("http://localhost:3000/products")
    .then((data)=>{
        // console.log(data);
        const newArray=data.map((item)=>{
            return `
            <div class"product-item">
                <img src="${item.thumbnail}" />
                <h2>
                    ${item.title}
                </h2>
                <h3>${item.price}$</h3>  
                <div>${item.tags}</div> 
                // <div>${item.reviews}</div> 
    
            </div>`;
        });

        const html=newArray.join("");// join array to string

        // console.log(html); // Console log string

        const productsList=document.querySelector("#product-list")
        productsList.innerHTML=html;
    });
