
let AddTitleId = document.getElementById("AddTitleId");
let AddTextId = document.getElementById("AddTextId");
let addImageId = document.getElementById("addImageId");
let postButton = document.getElementById("postButton");
let updateButton = document.getElementById("updateButton");
postButton.onclick=function(){
    let localValues = localStorage.getItem("containerData");
    let values = JSON.parse(localValues);
    let uniqueNo = values.length;

    uniqueNo=uniqueNo+1;
    userEnteredTitle = AddTitleId.value;
    userEnteredText = AddTextId.value;
    userImage = addImageId.value;

    let newImg = userImage.slice(12)
    let newPath = "C:/Users/Admin/Pictures/Screenshots/" + newImg
    // console.log(newImg)

    // localStorage.setItem("Movietitle",userEnteredTitle);
    // localStorage.setItem("Movietext",userEnteredText);
    // localStsorage.setItem("MovieImage",userImage);
    let obj1 ={
        "title":userEnteredTitle,
        "text":userEnteredText,
        "imgsrc":newPath,
        "uniqueNo":uniqueNo
    }
    localStorage.setItem("obj1",JSON.stringify(obj1));
};


let localTitle = localStorage.getItem("elemTitle");
let localText = localStorage.getItem("elemText");
let localImage = localStorage.getItem("elemImage");
let localUnique = localStorage.getItem("elemUnique");



let updatedObject ={
    "title":localTitle,
    "text":localText,
    "imgsrc":localImage,
    "uniqueNo":localUnique
}
localStorage.setItem("updatedObject",JSON.stringify(updatedObject));

AddTitleId.value = localTitle
AddTextId.value = localText
addImageId.value = localImage

// updateButton.onclick=function(){
//     let localValues = localStorage.getItem("containerData");
//     let values = JSON.parse(localValues);
//     console.log(values)

//     for(let i=0;i<values.length;i++){
//         let uniqueId = values[i].uniqueNo
//         if(uniqueId==localUnique){
//             let obj1 = localStorage.getItem("obj1")
//             let newObj = JSON.parse(obj1)
//             values[uniqueId-1] = newObj
//         }
//     }
//     localStorage.setItem("containerData",JSON.stringify(values));
//       // localStorage.setItem("obj1",JSON.stringify(obj1));
// };


