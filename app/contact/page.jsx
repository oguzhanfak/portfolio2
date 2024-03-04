import {  MailIcon, HomeIcon, PhoneCall } from "lucide-react"
import  Form  from "@/components/Form"

const Contact = () => {
  return (
    <section>
     <div className="container mx-auto">
              <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-x-4 text-primary text-lg mb-4 ">
                     <span className="w-[30px] h-[2px] bg-primary"></span>
                     Have questions? Shoot us an email.
                  </div>
           <h1 className="h1 max-w-md mb-8">Get in Touch - Let's Spark Some Digital Magic!</h1>
                        
           <p className="subtitle max-w-[600px]">Greetings, digital wanderer! You've stumbled upon the contact realm of Oguzhan, the code conjurer behind this web development spectacle. If you've got an idea brewing, a project to discuss, or just want to exchange virtual high-fives, you're in the right place!</p>
                </div>
                <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>

              </div>
              <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                  <div className="flex items-center gap-x-8">
                    <MailIcon size={18} className="text-primary"/>
                    <div>oguzhanfakk@gmail.com</div>
                  </div>
                </div>
                <Form/>
              </div>
     </div>
    </section>
  )
}

export default Contact