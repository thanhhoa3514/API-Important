//Display all elements in array

    // const display=(item)=>{
    //     console.log(item);
    // }

    // const Array=(list,callback)=>{
    //     for(let i=0;i<list.length;i++){
    //         callback(list[i]);
    //     }
    // }

    // const list=[1,432,1,25,45,35,23];

    // const list2 = ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"];

    // Array(list,display);
    // Array(list2,display);


// Sum adjency elements between them

    // const sum=(list,index)=>{
    //     if(index<0 || index>=list.length-1){
    //         return list[index];
    //     }
    //     return list[index]+sum(list,index+1); 
    // }   

    // const list=[1,432,1,25,45,35,23];

    // console.log(sum(list,0));

    // const console1=(a,b)=>{
    //     console.log(a+b);
    // }
    // const sum=((list,callback)=>{
    //     for(let i=0;i<list.length;i++) {
    //         callback(list[i],list[i+1]);
    //     }
    // });

    // const list=[1,432,1,25,45,35,23];

    // sum(list,console1);

  

    // const sum3=list.reduce((acc,cur,index)=>{
    //     if(index<list.length-1){
    //         return acc+cur+list[index+1];
    //     }
    //     return acc;
    // },0)


// Get random digit from 1 to 10
    // const randomDigit=()=>{
    //     return new Promise((resolve,reject)=>{
    //         const random=Math.floor(Math.random()*10)+1;
    //         if(random>=1 && random<=10){
    //             resolve(random);
    //         } else {
    //             reject("Random number is not in range");
    //         }
    //     });
    // }    
    // randomDigit().then((digit)=>{
    //     console.log("Random digit: ",digit);
    // }).catch((error)=>{
    //     console.error(error);
    // }); //


// Get odd elements in array

    // const getOddElements=(list)=>{
    //     return new Promise((resolve, reject)=>{
    //         const oddElements=list.filter((item)=>item%2!==0);
    //         if(oddElements.length>0){
    //             resolve(oddElements);
    //         } else {
    //             reject("Array does not contain any odd elements");
    //         }
    //     });
    // };
    
    // const list=[1,432,1,25,45,35,23];

    // getOddElements(list).
    // then((result)=>{
    //     console.log("Odd elements: ", result);
    // }).catch((err)=>{
    //     console.error(err);
    // }); //


    // console.log(getOddElements(list)); // [1, 431, 25, 35, 23]



// Practice API

    // fetch("https://restcountries.com/v2/all")
    // .then((response) => response.json())
    // .then((data)=>{
    //     // console.log(data);
    //     const countries=data.map((item)=>{
    //         return `
    //         <div class="box">
    //             <div class="inner-box">
    //                 <img class="image-inner" src="${item.flag}" alt="${item.capital}-${item.name}"/>
    //                 <div class="inner-title">
    //                     ${item.capital}-${item.name}
    //                 </div>
    //             </div>
    //         </div>
            
    //         `;
    //     });
    //     const newcountry=countries.join("");
        
    //     const divCountries=document.querySelector("#country");
    //     divCountries.innerHTML=newcountry;
    // })



// Get ip address from API request

    // const API="https://api.ipify.org?format=json";

    // fetch(API)
    // .then((response)=>response.json())
    // .then((data)=>{
    //     // console.log(data);
    //     const ipAddress=data.ip;

    //     const elementsAddress=document.querySelector("#ipAddress");
    //     elementsAddress.innerHTML=ipAddress;
    // })







