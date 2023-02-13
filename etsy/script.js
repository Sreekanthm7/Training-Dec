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
function createNavBar() {
  const totalList = document.createElement("ul")
  navbar.appendChild(totalList)
  totalList.classList.add("total-list-nav")

  for (let key in categoryListData) {
    //   console.log(categoryListData[key])
    const singleList = document.createElement("li")
    //   console.log(categoryListData[key].label)
    singleList.innerHTML = categoryListData[key].label
    if (categoryListData[key].label === "Gifts") {
      singleList.innerHTML =
        categoryListData[key].imageURL + categoryListData[key].label
    }

    totalList.appendChild(singleList)
  }
}
createNavBar()
const discoverContainer = document.querySelector(".discover-content")

const discoverListData = [
  {
    imageURL: `https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg`,
    label: "Wedding",
  },
  {
    imageURL: `https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg`,
    label: "Jewellery",
  },
  {
    imageURL: `https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg`,
    label: "Clothing",
  },
  {
    imageURL: `https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg`,
    label: "Home & Living",
  },
  {
    imageURL: `https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg`,
    label: "Wall Art",
  },
  {
    imageURL: `https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg`,
    label: "Kitchen & Dining",
  },
]
function createDiscoverContent(imageURL, labels) {
  const discoverCardContent = document.createElement("div")
  discoverContainer.appendChild(discoverCardContent)
  discoverCardContent.classList.add("content-background")

  const discoverImagesEtsy = document.createElement("div")
  discoverCardContent.appendChild(discoverImagesEtsy)
  discoverImagesEtsy.classList.add("discover-images-etsy")

  const totalList = document.createElement("ul")
  discoverImagesEtsy.appendChild(totalList)

  const singleList = document.createElement("li")
  totalList.appendChild(singleList)

  const imgContainerEtsy = document.createElement("div")
  singleList.appendChild(imgContainerEtsy)
  imgContainerEtsy.classList.add("img-container-etsy")

  const cardImg = document.createElement("img")
  cardImg.src = imageURL
  imgContainerEtsy.appendChild(cardImg)

  const discoverCardText = document.createElement("a")
  singleList.appendChild(discoverCardText)

  const cardText = document.createElement("p")
  discoverCardText.appendChild(cardText)
  cardText.innerHTML = labels
}

for (let key in discoverListData) {
  createDiscoverContent(
    discoverListData[key].imageURL,
    discoverListData[key].label
  )
}

const dealsOfTheDay = document.querySelector(".deals-of-the-day")

const dealsOfTheDayList = [
  {
    imageURL: `https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg`,
    offer: `Up to 40% off on`,
    label: `Women's Ethnic Clothing`,
  },
  {
    imageURL: `https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg`,
    offer: `Up to 40% off on`,
    label: `Women's Western Clothing`,
  },
  {
    imageURL: `https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg`,
    offer: `Up to 40% off on`,
    label: `Men's Clothing`,
  },
  {
    imageURL: `https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg`,
    offer: `Up to 40% off on`,
    label: `Fashion Jewellery`,
  },
  {
    imageURL: `https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg`,
    offer: `Up to 40% off on`,
    label: `Winter Clothing`,
  },
  {
    imageURL: `https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg`,
    offer: `Up to 40% off on`,
    label: `Wedding Clothing`,
  },
]

function createDealsOfTheDayContent(imageURL, offer, label){
const dealsOfTheDayCards = document.createElement("div")
dealsOfTheDay.appendChild(dealsOfTheDayCards)
dealsOfTheDayCards.classList.add('deals-of-the-day-cards')

const dealsOfTheDayCardBox = document.createElement('div')
dealsOfTheDayCards.appendChild(dealsOfTheDayCardBox)
dealsOfTheDayCardBox.classList.add('deals-of-the-day-card-box')

const dealsOfTheDayImg = document.createElement('img')
dealsOfTheDayImg.src=imageURL
dealsOfTheDayCardBox.appendChild(dealsOfTheDayImg)
dealsOfTheDayImg.classList.add('deals-of-the-day-img')

const dealsOfTheDayTextContent = document.createElement('div')
dealsOfTheDayCards.appendChild(dealsOfTheDayTextContent)
dealsOfTheDayTextContent.classList.add('deals-of-the-day-text-content')


const dealsOfTheDayOffer = document.createElement('div')
dealsOfTheDayTextContent.appendChild(dealsOfTheDayOffer)
dealsOfTheDayOffer.classList.add('deals-of-the-day-offer')
dealsOfTheDayOffer.innerHTML = offer

const dealsOfTheDayText = document.createElement('div')
dealsOfTheDayTextContent.appendChild(dealsOfTheDayText)
dealsOfTheDayText.classList.add('deals-of-the-day-text')
dealsOfTheDayText.innerHTML = label
}
for(let key in dealsOfTheDayList){
createDealsOfTheDayContent(
  dealsOfTheDayList[key].imageURL,
  dealsOfTheDayList[key].offer,
  dealsOfTheDayList[key].label
)

}