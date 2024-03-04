"use client"
import React, {useState} from "react"
import {Tabs, TabsList, TabsContent, TabsTrigger} from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
    image: "/work/ozzybuy.png",
    category: "react js",
    name: "OzzyShop",
    description: "Built a ecommerce website, Implemented a modular and scalable component-based architecture with React.",
    link: "https://ozzy-buy.vercel.app/",
    github: "https://github.com/oguzhanfak/OzzyBuy",
},
{
  image: "/work/jobportal.png",
  category: "react js",
  name: "Job Portal",
  description: "Setup a React project with Vite, crafted a stunning user interface with Tailwind CSS, used state and props in React.",
  link: "https://job-portal-website-sand.vercel.app/",
  github: "https://github.com/oguzhanfak/Job-Portal-Website",
},
{
    image: "/work/nft.png",
    category: "CSS",
    name: "OguzhanNFT",
    description: "Built responsive and modern user interface using Tailwind CSS.",
    link: "https://nft-dun-six.vercel.app/",
    github: "https://github.com/oguzhanfak/NFT-tailwindcss",
},
{
  image: "/work/cart.png",
  category: "react js",
  name: "Shopping Cart",
  description: "Fundamentals and integration of React, Vite and Tailwind CSS. Creating the basic structure and components of the application. Listing the products and adding filtering features. Adding and removing products to the shopping cart. Calculating and displaying the total price of the products in the cart",
  link: "https://shopping-cart-rust-five.vercel.app/",
  github: "https://github.com/oguzhanfak/shopping-cart",
},
{
  image: "/work/coffee.png",
  category: "JavaScript",
  name: "Coffee Shop",
  description: "Setting up the basic structure of the website using HTML. Styling the website to perfection with CSS, including layout design, typography, and color schemes. Adding interactive elements and functionality using JavaScript, such as a dynamic menu, image sliders, and contact forms.",
  link: "https://coffee-shop-lake-psi.vercel.app/",
  github: "https://github.com/oguzhanfak/coffee-shop",
},
]
const uniqueCategories = [
  "all projects", ...new Set(projectData.map((item)=> item.category)),
]

function Projects() {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] =  useState("all projects")
  const filteredProjects = projectData.filter(project => {
    return category === "all projects" ? project : project.category === category
  })
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (<TabsTrigger onClick={()=> setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">{category}</TabsTrigger>)
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {filteredProjects.map((project, index)=> {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs> 
      </div>
      </section>
  )
}

export default Projects

















