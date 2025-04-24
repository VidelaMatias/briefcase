import Link from "next/link";
import { useId } from "react";

export const Certifications = () => {

    const certifications = [
        {
            'id': useId(),'courseName':"Mastering Salesforce Commerce Cloud - Complete SFCC Bootcamp", "url":"https://www.udemy.com/course/mastering-salesforce-commerce-cloud-the-complete-bootcamp", "platform":"Udemy","image":"/salesforce_1.jpg"
        },
        {
            'id': useId(),'courseName':"Next.js 15 & React - The Complete Guide", "url":"https://www.udemy.com/course/nextjs-react-the-complete-guide/", "platform":"Udemy","image":"next-certificate.jpg"
        }
    ];

    return (
        <section className="mb-6" id="certifications">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:bg-[#0b4769]">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-lg">Certifications</h2>
            </div>
            <ul>
                {
                    certifications.map( item=> (
                        <li key={item.id}>
                            <div className="flex flex-row flex-wrap justify-between">
                                <span>{item.courseName}</span>
                                <Link className="hover:text-blue-500" aria-label="Go to course page" href={item.url}>{item.platform}</Link>
                                <Link className="hover:text-blue-500" href={item.image} target="_blank" aria-label="Open Certificate">Certificate</Link>
                            </div>
                            <hr></hr>
                        </li>
                    ))
                }
            </ul>
            
        </section>
    )
}