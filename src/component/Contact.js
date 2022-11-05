import React, {useRef} from 'react'
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const contact_info=[
        {logo: "mail", text: "syedalirazanaqvi101101@gmail.com"},
        {logo: "logo-whatsapp", text: "+923082946581"},
        {logo: "location", text: "Karachi, Pakistan"}


    ]
//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();
//         emailjs.sendForm('service_3lyu6uw', 'template_lfibdza', e.target, 'FgXQOoQZSbs71gdxx')
//       .then((result) => {
//           alert("your form has been sent");
//       }, (error) => {
//           alert("please fill the form correctly");
//       });
//   };
  return (
    <section id='contact' className='py-10 px-3 text-white'>
        <div className='text-center mt-8'>
            <h3 className='text-4xl font-semibold'>Contact <span className='text-cyan-600'>Me</span></h3>
            <p className='text-gray-400 mt-3 text-lg '>Get in touch</p>
            <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
                <form  className='flex flex-col flex-1 gap-5'>
                    <input type="text" name='name' placeholder='Your Name' />
                    <input type="email" name='user_email' placeholder='Your Email Address' />
                    <textarea name="message" placeholder='Your Message' rows={10} ></textarea>
                    <button className='btn-primary w-fit'>Send Message</button>
                </form>
                <div className='flex flex-col gap-7'>
                    {
                        contact_info.map((contact,i)=>(
                            <div key={i} className='flex gap-4 w-fit  items-center'>
                                <div className='min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full '>
                                    <ion-icon name={contact.logo}></ion-icon>
                                </div>
                                <div className='text-base'>{contact.text}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact