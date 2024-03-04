"use client";
import Link from  "next/link"
import {Button} from  "./ui/button"
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css"
import "swiper/css/pagination"
import {Pagination} from "swiper/modules"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
    {
        image: "/work/ozzybuy.png",
        category: "react js",
        name: "OzzyShop",
        description: "Modern complete responsive Ecommerce website, using ReactJS and Tailwind CSS.",
        link: "https://ozzy-buy.vercel.app/",
        github: "https://github.com/oguzhanfak/OzzyBuy",
    },
    {
        image: "/work/jobportal.png",
        category: "react js",
        name: "Job Portal",
        description: "Modern complete responsive Ecommerce website, using ReactJS and Tailwind CSS.",
        link: "https://job-portal-website-sand.vercel.app/",
        github: "https://github.com/oguzhanfak/Job-Portal-Website",
    },
    {
        image: "/work/coffee.png",
        category: "JavaScript",
        name: "Coffee Shop",
        description: "Setting up the basic structure of the website using HTML. Styling the website to perfection with CSS, including layout design.",
        link: "https://coffee-shop-lake-psi.vercel.app/",
        github: "https://github.com/oguzhanfak/coffee-shop",
    },
    {
        image: "/work/cart.png",
        category: "react js",
        name: "Shopping Cart",
        description: "Erat vero erat diam nonumy magna erat. Duo et justo rebum accusam sed consetetur sed voluptua, no takimata sea consetetur.",
        link: "https://shopping-cart-rust-five.vercel.app/",
        github: "https://github.com/oguzhanfak/shopping-cart",
    },
    {
        image: "/work/nft.png",
        category: "CSS",
        name: "OguzhanNFT",
        description: "Erat vero erat diam nonumy magna erat. Duo et justo rebum accusam sed consetetur sed voluptua, no takimata sea consetetur.",
        link: "https://nft-dun-six.vercel.app/",
        github: "https://github.com/oguzhanfak/NFT-tailwindcss",
    },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
     <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">Here, you'll find a showcase of some key projects that I've worked on during my web development journey.</p>
            <Link href="/projects" target="_blank">
                <Button>All Projects</Button>
            </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper className="h-[480px] " slidesPerView={1} breakpoints={{
                640: {
                    slidesPerView: 2,
                },
            }}
            spaceBetween = {30}
            modules = {[Pagination]}
            pagination={{clickable:true}}
    
            >
                {projectData.slice(0,4).map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>

                    )
                })}
            </Swiper>
        </div>
     </div>
    </section>
  )
}

export default Work