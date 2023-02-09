const navbar = document.querySelector(".etsy-nav")
const giftImg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg>'
const categoryListData = [
  {
    label: "Sellers' Sales Hub",
    imageURL: "",
  },
  {
    label: "Jewellery & Accessories",
    imageURL: "",
  },
  {
    label: "Clothing & Shoes",
    imageURL: "",
  },
  {
    label: "Home & Living",
    imageURL: "",
  },
  {
    label: "Wedding & Party",
    imageURL: "",
  },
  {
    label: "Toys & Entertainment",
    imageURL: "",
  },
  {
    label: "Art & Collectibles",
    imageURL: "",
  },
  {
    label: "Craft Supplies",
    imageURL: "",
  },
  {
    imageURL: giftImg,
    label: "Gifts",
  },
]

const totalList = document.createElement("ul")
navbar.appendChild(totalList)
totalList.classList.add("total-list-nav")

for (let key in categoryListData) {
//   console.log(categoryListData[key])
  const singleList = document.createElement("li")
//   console.log(categoryListData[key].label)
    singleList.innerHTML=categoryListData[key].label
    if(categoryListData[key].label === "Gifts"){
       singleList.innerHTML=categoryListData[key].imageURL+categoryListData[key].label
    }


  totalList.appendChild(singleList)
}



// function createCategoryList(data, elem , giftitems) {
//   const listContainer = document.querySelector(elem)
//   for (let i = 0; i < data.length; i++) {
//       if(categoryListData[i].label == "gift"){
//           categoryListData = document.createElement("li") + giftitems

//       }
//       const linkTag = document.createElement("a")
//       // linkTag.href = ""
//       linkTag.innerHTML = categoryListData[i].label
//       categoryList.appendChild(linkTag)

//       listContainer.appendChild(categoryListData)
//   }
// }

// createCategoryList(categoryListData, ulList,giftImg)
