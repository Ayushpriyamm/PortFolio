import React ,{useState} from 'react'
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactCard from './ContactCard';

import Email from '../assets/email.svg';
import Phone from '../assets/phone-icon.svg';


const Contact = () => {

  const [formData ,setFormData]=useState({
    name:'',
    email:'',
    message:'',
  })

  const contactData = [
    
    {
      img: Email,
      category: "Official Mail",
      value: "info@priyam.com"
    },
    {
      img: Phone,
      category: "Official Phone",
      value: "+91 8595660465"
    },
  ];

  const [isEmailValid, setIsEmailValid] = useState(true);
    const validateEmail = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailPattern.test(formData.email);
  
    setIsEmailValid(isValid);
  };
  

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
      ...formData,[name]:value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const serviceId='service_uupx2h9';
    const templateId = 'template_lbw7kbi';
    const userId='QHMq2dMrSuQ1PXcDS';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)

    .then((response)=>{
      console.log("Email sent successfully :",response);
      toast.success('Message sent successfully');
    })
    .catch((error)=>{
      console.error("Email sendig failed:",error);
      toast.error('Message sending failed');
    })

    setFormData({
      name:'',
      email:'',
      message:'',
    });
  }
  
  return (
    <div>
      <div className='bg-radial-gradient2 flex flex-col p-10 md:p-20 space-y-10'>
        
        {/* content*/}
        <div id='Contact' className=' text-center text-white flex flex-col space-y-2'>
          <div >
            <h1 className=' text-5xl font-bold'>Let’s Talk</h1>
          </div>
          <div className='text-xl'>
            <p>
            Feel free to reach out! Whether you have questions, ideas, or just want to connect, 
            I'm here to help. Let's start a conversation.
            </p>
          </div>
        </div>
        {/* content end*/}


        {/* contact form starts*/}
        <div className='flex flex-col md:flex-row justify-around md:space-x-10 space-y-10' >

          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 0 }}
            transition={{ duration:0.5,delay:0.4}}
            whileInView={{scale:1, opacity: 1 }}      
          className='w-full border rounded-lg bg-opacity-80 border-[#ffffff]  bg-[#1F1E1D]'>
          
          <form className='p-5  text-black flex flex-col text-white focus:ring-0' onSubmit={handleSubmit} >
          <h2 className='text-white text-center text-5xl font-bold p-10  '>Get In Touch</h2>

          <label className='text-white text-2xl font-semibold '>Name</label>
          <input
            className="mb-10 px-4 py-2 outline-none border-b-2 bg-transparent text-white" 
            type="text" 
            name="name" 
            value={formData.name} // Bind the input value to the state variable
            onChange={handleChange} // Define the onChange handler function            
            />

          <label className='text-white text-2xl font-semibold '>Email</label>
          <input
           className={`mb-2 px-4 py-2 outline-none border-b-2 bg-transparent text-white ${
            isEmailValid ? '' : 'border-red-500'}`}
           type="email"
           name="email"
           value={formData.email} // Bind the input value to the state variable
           onChange={handleChange}
           onBlur={validateEmail} 
           />
           {!isEmailValid && (
            <div className="text-red-500">Please enter a valid email address.</div>
            )}

          <label className='text-white text-2xl font-semibold '>Message</label>
          <textarea
            className=" mb-10 h-[100px] md:h-[200px] px-4 py-2 outline-none border-b-2 bg-transparent text-white" 
            name="message"
            value={formData.message} // Bind the input value to the state variable
            onChange={handleChange} // Define the onChange handler function            
           />

            <button className='mx-auto bg-green-500 rounded-lg p-2 w-1/3 tex-white'
             type="submit"
             value="Send"
             disabled={!formData.name || !formData.email}
              >
             Submit
             </button>
          </form>
          </motion.div>

        {/*Contact Card starts */}

        <div className='flex ml-0 flex-col space-y-5 md:justify-center  md:w-1/3 '>
            {contactData.map((data, index) => (
              <ContactCard
                key={index}
                img={data.img}
                category={data.category}
                value={data.value}
              />
            ))}
          </div>

        </div>
       
      </div>
    </div>
  )
}

export default Contact