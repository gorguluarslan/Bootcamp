import myJson from './data.json' assert {type: 'json'};

const newArray = [...myJson]

console.log('myJson: ', myJson);


 function groupName (myJson) {

    return myJson.reduce((result,item) => {

    (result[item.group] = result[item.group] || [] ).push(item);

    return result ;
  
    },{} ) } 

    console.log(groupName(myJson));
  
 function groupAndName(newArray) {
  
   return newArray.filter(name => name.assistant == true )  
   } 

   console.log(groupAndName(newArray));




// Function kullanmadan eklediğim kısım //

// import myJson from './data.json' assert {type: 'json'};

// console.log('myJson: ', myJson);

//   let groupName = myJson.reduce((result,item)=>{
//     (result[item.group] = result[item.group] || [] ).push(item);
//     return result;
// },{})


// const groupAndName = myJson.filter(name => name.assistant == true )

// console.log(groupName,groupAndName);




//*** ÖDEVİ YAPARKEN İZLEDİĞİM YOLLAR /
//*** YARDIM ALDIĞIM KAYNAKLAR
//***https://sinan-karakaya.medium.com/javascript-reduce-fonksiyonu-ile-listeleri-gruplama-4de6c111a853
//***https://www.mehsatek.com/javascript-filter-kullanimi/ */
//***https://devnot.com/2020/javascript-ile-fonksiyonel-programlama-map-filter-reduce/
//***https://www.mustafacagri.com/filter-javascript-array */ */


// getGroupAndName = (groups) => {
//     var tempMakaleler = [];
//     for (var i = 0; i < groups.length; i++) {
//         tempMakaleler.push({ assistant: groups[i], Name: groups[i].name });
//     }
//     return tempMakaleler;
// };


//*** */
// function groupNames(groups) {
//     if(groups==true) {
//         return assistant();
//     }
//     else {
//         return  null ;
//     }
//   }
//   console.log(groupNames());

//*** */
// function groupNames(groups) {
//     if(groups==true) {
//         return assistant;
//     }
//     else {
//         return  null ;
//     }
//   }
  
//*** */
// function groupNames(groups) {
//     if(assistant==true) {
//         return assistant();
//     }
//     else {
//         return  null ;
        
//  }


//*** */
// function group (groups) {
//     if ("Derya" === "OrangeRed") {
//       return "true";
//     }
//   }
  
//   console.log(groupName, group());



//*** */
// var grupData = ["OrangeRed", "DeepPink", "AliceBlue"]; 
 
// var yeniGrupData = grupData.filter(function (assistant){
 
//     return assistant = true;
 
// }); 
 
// console.log(groupName, yeniGrupData);
    

//*** */
//  let Name = groups.reduce((result,item)=>{
//     (result[item.name] = result[item.name] || [] ).push(item);
//     return result;
// },{})


// console.log(groupName, nameGroup);
//*** */
//  let nameGroup = groups.filter((result,item)=>{
//     (result[item.group] = result[item.group] || [] ).push(item);
//     return result;
// },{})


// let nameGroup = function(groups) {
// groups.filter(assistant == true)
// return nameGroup 