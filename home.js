

let topContainer = document.getElementById("topContainer");
let updateButton = document.getElementById("updateButton");

function createAndAppendBlog(element){
    let elementId = element.uniqueNo;
    let mainContainerdiv = document.createElement("div");
    mainContainerdiv.classList.add("col-12","col-md-4");
    topContainer.appendChild(mainContainerdiv);
    mainContainerdiv.id=elementId;



    let divElement = document.createElement("div");
    divElement.classList.add("card");
    divElement.id="cardContainer";
    divElement.style="width: 18rem;";
    // let mainContainer = document.getElementById("mainContainer");
    mainContainerdiv.appendChild(divElement);


    let imgElement = document.createElement("img");
    imgElement.classList.add("card-img-top");
    imgElement.alt="...";
    imgElement.id="imageElement";
    imgElement.src=element.imgsrc;
    divElement.appendChild(imgElement);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");
    divElement.appendChild(cardBodyDiv);

    let headElement = document.createElement("h5");
    headElement.classList.add("card-title");
    headElement.id="headingElement";
    headElement.textContent=element.title;
    cardBodyDiv.appendChild(headElement);

    let textElement = document.createElement("p");
    textElement.classList.add("card-text");
    textElement.id="paraElement";
    textElement.textContent=element.text;
    cardBodyDiv.appendChild(textElement)

    let editElement = document.createElement("i");
    editElement.classList.add("fa", "fa-edit","edit-icon");
    cardBodyDiv.appendChild(editElement);

    let deleteElement = document.createElement("i");
    deleteElement.classList.add("fas","fa-trash-alt","delete-icon");
    cardBodyDiv.appendChild(deleteElement);
    deleteElement.onclick=function(){
        deleteBlog(elementId);
    }
    editElement.onclick=function(){
        editBlogElement(elementId); //3
    }
};

function deleteBlog(elementId){
    let deleteElement = document.getElementById(elementId);
    topContainer.removeChild(deleteElement)

};

function editBlogElement(elementId){
    let data  = localStorage.getItem("containerData")
    let containerListData = JSON.parse(data)
    for (let element of containerListData){
        let uniqueId = element.uniqueNo
        if(elementId==uniqueId){
            // console.log(element)
            window.location.href = "add.html"
            localStorage.setItem("elemTitle",(element.title))
            localStorage.setItem("elemText",(element.text))
            localStorage.setItem("elemImage",(element.imgsrc))
            localStorage.setItem("elemUnique",(element.uniqueNo))
        }
    }

}


let containerList=[
    
    {
        title:"Waltair Veeraya",
        text:"The father of Waltair Veeraya is a revered man in a village and his son Bala Simha Reddy settles in the USA.When his father gets killed in the village ...",
        imgsrc:"https://www.cinejosh.com/newsimg/newsmainimg/megastar-chiranjeevi-in--as-waltair-veerayya-teaser-arrived_b_2410221122.jpg",
        uniqueNo:1
    },
    {
        title:"Varasudu",
        text:"The movie is a bilingual action drama, which will be released in Tamil as Varisu and in Telugu as Varasudu. The film is releasing as the ...",
        imgsrc:"https://cdn.gulte.com/wp-content/uploads/2022/06/Vaarasudu-first-look.jpeg",
        uniqueNo:2
    }

];


// localStorage.setItem("containerData",JSON.stringify(containerList));








function retriveDataFromLocalStorage(){
    let contanierData = localStorage.getItem("containerData")
    let containerListData = JSON.parse(contanierData)
    if(containerListData=="" || containerListData==null){
        return containerList
    }
    else{
        return containerListData
    }
}



let containerContent =  retriveDataFromLocalStorage()
// console.log(containerContent)

let contLength = containerContent.length

let obj1 = localStorage.getItem("obj1")
let newObj = JSON.parse(obj1)

if(newObj!=null){
    let insideUniqueId = newObj.uniqueNo || 0
    if(contLength != insideUniqueId){
        containerContent.unshift(newObj)   
    }
}
    
// let updatedObject = localStorage.getItem("updatedObject")
// let newUpdatedObject = JSON.parse(updatedObject)

// if(newUpdatedObject!=null){
//     let insideUniqueId = newUpdatedObject.uniqueNo || 0
//     for (let element of containerContent){
//         let elemId = element.uniqueNo
//         if(insideUniqueId == elemId){
//             console.log(element.uniqueNo)
//             containerContent.splice(elemId, 1);
//         }
//     }
// }

localStorage.setItem("containerData",JSON.stringify(containerContent));



for (let element of containerContent){
    // console.log(element)
    createAndAppendBlog(element);
}