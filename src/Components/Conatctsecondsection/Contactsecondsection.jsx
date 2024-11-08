import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contactsecondsection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message for the input field being changed
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact Number is required";
    else if (!/^\d{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Contact Number must be 10 digits";
    if (!formData.email) newErrors.email = "Email ID is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email ID is invalid";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission (e.g., send data to server)
      console.log("Form submitted:", formData);
      setErrors({});
      onSubmit(formData);
    }
  };

  const onSubmit = async (values) => {
    let data = "";
    for (const key in values) {
      data += key + " : " + values[key] + "\n";
    }

    const result = encodeURIComponent(data);
    window.open(`https://wa.me/+917306940639?text=${result}`);
  };

  return (
    <div className="w-full px-[100px] py-[100px] md-max:px-[50px] md-max:py-[50px] md-small:px-[50px] md-small:py-[50px] sm-max:px-[20px] sm-max:py-[80px]">
      <div className="flex gap-[100px] w-full justify-between items-center md-small:flex-col md-small:gap-[30px] sm-max:flex-col sm-max:gap-[20px]">
        <div className="w-[40%] md-small:w-[100%] sm-max:w-[100%]">
          
          <h1 className="text-[32px] font-[600] text-[#23262f] sm-max:text-[25px] sm-max:text-center">
            Contact Us
          </h1>
          <p className="text-[gray] text-[16px] font-normal leading-6 tracking-wide max-w-[100%] mt-[20px] sm-max:mt-[5px] sm-max:text-[14px] sm-max:text-center">
            To know more about us, feel free to contact anytime. Our team will
            be in touch soon!
          </p>
          <div className="flex flex-col gap-[30px] mt-[50px] md-small:gap-[20px] sm-max:gap-[20px] sm-max:mt-[30px]">
            <div className="w-full h-[auto] p-[20px] items-center flex rounded-[10px] bg-[white] sm-max:p-[10px]">
              <div className="flex gap-[20px] items-center">
                <div className="h-[50px] w-[50px] bg-[#045c50] flex items-center justify-center">
                <IoMdContact className="text-[30px] text-[white]  sm-max:text-[30px]" />
                </div>
                <div className="flex flex-col gap-[10px] sm-max:gap-[5px]">
                  <h2 className="text-[20px] font-[600] sm-max:text-[18px]">
                    Call Us
                  </h2>
                  <h2 className="text-[gray] text-[16px] font-normal leading-6 sm-max:text-[14px]">
                  9716-7432248
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full h-[auto] p-[20px] items-center flex rounded-[10px] bg-[white] sm-max:p-[10px]">
              <div className="flex gap-[20px] items-center">
              <div className="h-[50px] w-[50px] bg-[#045c50] flex items-center justify-center">
                <MdEmail className="text-[30px] text-[white] sm-max:text-[30px]" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h2 className="text-[20px] font-[600] sm-max:text-[18px]">
                    Email Us
                  </h2>
                  <h2 className="text-[gray] text-[16px] font-normal leading-6 sm-max:text-[14px]">
                  info@aiwauae.com
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full h-[auto] p-[20px] items-center flex rounded-[10px] bg-[white] sm-max:p-[10px]">
              <div className="flex gap-[30px] items-center">
              <div className="h-[50px] w-[50px] bg-[#045c50] flex items-center justify-center">
                <FaLocationDot className="text-[30px] text-[white] sm-max:text-[30px]" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h2 className="text-[20px] font-[600] sm-max:text-[18px]">
                    Location
                  </h2>
                  <h2 className="text-[gray] text-[16px] font-normal leading-6 sm-max:text-[14px]">
                  Aiwa Industrial Co.LLC
                  3183,Ajman
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] md-small:w-[100%] sm-max:w-[100%] sm-max:mt-[50px]">
          <div className="w-[100%] bg-[white] h-[auto] rounded-[10px] p-[30px] sm-max:p-[0px]">
            <h1 className="text-[32px] font-[600] sm-max:text-[25px] text-[#23262f]">
              Need Expert Advice?
            </h1>
            <p className="text-[gray] text-[16px] font-normal leading-6 tracking-wide max-w-[100%] mt-[20px] sm-max:text-[14px]">
              Please fill out the given form
            </p>
            <div className="w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] mt-[20px]">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full p-[10px] border border-gray-300 rounded-[5px]"
                />
                {/* {errors.fullName && <span className="text-red-500">{errors.fullName}</span>} */}
                
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  className="w-full p-[10px] border border-gray-300 rounded-[5px]"
                />
                {/* {errors.contactNumber && <span className="text-red-500">{errors.contactNumber}</span>} */}
                
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email ID"
                  className="w-full p-[10px] border border-gray-300 rounded-[5px]"
                />
                {/* {errors.email && <span className="text-red-500">{errors.email}</span>} */}
                
               
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="w-full p-[10px] border border-gray-300 rounded-[5px]"
                  rows="5"
                ></textarea>
                {/* {errors.message && <span className="text-red-500">{errors.message}</span>} */}
                
                

                
                <button
                  type="submit"
                  className="w-full p-[10px] bg-[#045c50] text-white rounded-[5px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactsecondsection;