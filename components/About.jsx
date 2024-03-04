import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {User2, MailIcon, GraduationCap, Calendar} from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Oguzhan Fak",
    },
    {
        icon: <MailIcon size={20}/>,
        text:"oguzhanfakk@gmail.com",
    },
    {
        icon: <Calendar size={20}/>,
        text:"Born on 16 Nov, 1997",
    },
    {
        icon: <GraduationCap size={20}/>,
        text:"I graduated as an electrical and electronics engineer",
    },
];
const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "Eskisehir Osmangazi University",
                qualification:"Electrical and Electronics Engineering",
                years: "2023",
            },
            {
                university: "Eskisehir Osmangazi University",
                qualification:"English Prep School",
                years: "I studied one-year English language preparatory education so I can use the foreign language proficiency in the units where education is carried out entirely in foreign languages.",
                
            },
        ],
        
    },
];
const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "Front-end Development",
               }, 
           {
            name: "HTML, CSS",
           }, 
           {
            name: "Tailwind CSS, Bootstrap",
           }, 
           {
            name: "JavaScript",
           }, 
           {
            name: "React",
           }, 
        ],
    },
    {
        title: "tools",
        data: [
           {
            imgPath: "/about/vscode.svg",
           }, 
           {
            imgPath: "/about/github.svg",
           }, 
           {
            imgPath: "/about/git.svg",
           }, 
        ],
    },
];
const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }
    
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row">
            <div className="hidden xl:flex flex-1 relative">
                <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/bgg.png" />
            </div>
            <div className="flex-1">
                <Tabs defaultValue="personal">
                 <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                    <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                    <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                 </TabsList>
                 <div className="text-lg mt-12 xl:mt-8">
                    <TabsContent value="personal" >
                        <div className="text-center xl:text-left">
                            <h3 className="h3 mb-4">Service Quality</h3>
                            <p className="subtitle max-w-xl mx-auto xl:mx-0">I craft scalable websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
                             <div className="grid xl:grid-cols-2 gap-4 mb-12">
                            {infoData.map((item, index) => {
                                return (
                                     <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                                )
                            })}
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <div className="text-primary">Languages</div>
                            <div className="border-b border-border"></div>
                            <div>English,Turkish</div>
                        </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="qualifications">
                        <div className="gap-y-8">
                            <h3 className="h3 mb-8 text-center xl:text-left">My Journey</h3>
                            <div>
                                <div className="flex flex-col gap-y-6">
                                  <div  className="flex gap-x-4 items-center text-[22px] text-primary">
                                    <GraduationCap size={28}/>
                                    <h4 className="capitalize font-medium">
                                        {getData(qualificationData, 'education').title}
                                    </h4>
                                  </div>
                                  <div className="flex flex-col gap-y-8">
                                  {getData(qualificationData, "education").data.map((item, index)=> {
                                        const {university, qualification, years} = item;
                                        return (
                                            <div className="flex gap-x-8 group" key={index}>
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                   </div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-xl leading-none mb-2">
                                                {university}
                                            </div>
                                            <div className="text-lg leading-none text-muted-foreground mb-4">
                                               {qualification}
                                            </div>
                                            <div className="text-base font-medium">
                                                {years}
                                            </div>
                                                </div>
                                            </div>
                                        )
                                     })}
                                  </div>
                                </div>
                                </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="skills">
                        <div className="text-center xl:text-left">
                            
                            <div className="mb-16">
                                <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                <div className="border-b border-border mb-4"></div>
                                <div>
                                    {getData(skillData, "skills").data.map((item, index) => {
                                        const {name } = item;
                                        return (
                                          <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                            <div className="font-medium">{name}</div>
                                          </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-2 xl:text-left ">Tools</h4>
                                <div className="border-b border-border mb-4"></div>
                                <div className="flex gap-x-8 justify-center xl:justify-start">
                                    {getData(skillData, "tools").data.map((item, index) => {
                                        const {imgPath} = item
                                        return (
                                            <div key={index}>
                                                <Image src={imgPath} width={48} height={48} alt="" priority/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                 </div>
                </Tabs>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About