const navContainer = document.querySelector(".nav-container")

const arrowImg = `<svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2JzwqO"></path></svg>`

const navListData = [
  {
    label: "Electronics",
    imageURL: arrowImg,
  },
  {
    label: "TVs & Appliances",
    imageURL: arrowImg,
  },
  {
    label: "Men",
    imageURL: arrowImg,
  },
  {
    label: "Women",
    imageURL: arrowImg, 
  },
  {
    label: "Baby & kids",
    imageURL: arrowImg,
  },
  {
    label: "Home & Furniture",
    imageURL: arrowImg,
  },
  {
    label: "Sports, Books & More",
    imageURL: arrowImg,
  },
  {
    label: "Flights",
    imageURL: "",
  },
  {
    label: "Offer Zone",
    imageURL: "",
  },
]

function createNavBar(){
    const totalList = document.createElement("ul")
    navContainer.appendChild(totalList)
    totalList.classList.add("total-list-nav")

    for(let key in navListData) {
        const singleList = document.createElement("li")
    }

}