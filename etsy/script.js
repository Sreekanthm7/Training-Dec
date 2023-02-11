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
function createNavBar(){
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
}
createNavBar()

const discoverContainer = document.querySelector('.discover-content')

const discoverListData = [
  {
    imageURL:`https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg`,
    label: "Wedding"
  },
  {
    imageURL:`https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg`,
    label: "Jewellery"
  },
  {
    imageURL:`https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg`,
    label: "Clothing"
  },
  {
    imageURL:`https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg`,
    label: "Home & Living"
  },
  {
    imageURL:`https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg`,
    label: "Wall Art"
  },
  {
    imageURL:`https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg`,
    label: "kitchen & Dining"
  }
]
function createDiscoverContent(imageURL, labels){

  
const discoverCardContent = document.createElement('div')
discoverContainer.appendChild(discoverCardContent)
discoverCardContent.classList.add('content-background')

const discoverImagesEtsy = document.createElement('div')
discoverCardContent.appendChild(discoverImagesEtsy)
discoverImagesEtsy.classList.add('discover-images-etsy')

const totalList = document.createElement('ul')
discoverImagesEtsy.appendChild(totalList)

const singleList = document.createElement('li')
totalList.appendChild(singleList)

const imgContainerEtsy = document.createElement('div')
singleList.appendChild(imgContainerEtsy)
imgContainerEtsy.classList.add('img-container-etsy')


const cardImg = document.createElement("img")
cardImg.src= imageURL
imgContainerEtsy.appendChild(cardImg)

const discoverCardText = document.createElement('a')
singleList.appendChild(discoverCardText)

const cardText = document.createElement('p')
discoverCardText.appendChild(cardText)
cardText.innerHTML= labels

}




for(let key in discoverListData){
  createDiscoverContent(discoverListData[key].imageURL, discoverListData[key].label)
  
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



