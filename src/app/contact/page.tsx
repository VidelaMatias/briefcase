import Link from "next/link";

export default function Contact() {
    return (

        <div className="mx-auto min-h-screen max-w-screen-xl p-10 ">
            <Link href="/" aria-label="Back to Main Page" className="hover:text-blue-500">Back to Main Page</Link>
            <h1 className="text-xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-4 text-center">Contact Me</h1>
            <p className="my-2 text-center">Send me an email and I will reach you as soon as possible</p>
            <form action="https://formsubmit.co/matividela.dev@gmail.com" method="POST" className="bg-teal-100 text-cyan-950 rounded-md border-2 w-max p-6 m-auto">
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="input_email">* Email</label>
                    <input id="input_email"  className="p-2 border-2 border-b-cyan-700 rounded-sm h-8" type="text" name="input_email" required />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="input_company">* Company</label>
                    <input  name="input_company" id="input_company"className="p-2 border-2 border-b-cyan-700 rounded-sm h-8" type="text" required />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="input_text">* Message</label>
                    <textarea id="input_text"  className="p-2 border-2 border-b-cyan-700 rounded-sm" name="input_text" required />
                </div>
                <button type='submit' aria-label="submit form" className="w-72 hover:cursor-pointer h-8 rounded-2xl bg-teal-300 hover:bg-teal-900 text-sm text-blue-950 font-semibold hover:text-sky-200">Submit</button>
            </form>
        </div>
    )

}