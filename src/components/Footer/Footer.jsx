import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col justify-center ps-5 md:ps-2 items-center mt-[130px] bg-[#0e0d0d] text-white pb-[130px]">
  <div className="w-11/12 md:w-4/5">
    <div className="flex flex-col md:flex-row justify-between mt-[130px]">
      <div className=" space-y-5  w-[300px]">
        <h1 className="text-5xl">TechJobs</h1>
        <p className="text-[#ffffffb3]">
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
        <div>
          <img src="/images/socialmedia.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-36 gap-y-6 mb-6 md:mb-0 mt-6 md:mt-0">
        <div>
          <h1 className="text-3xl">Company</h1>
          <ul className="text-[#ffffffb3] space-y-3 mt-5">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Latest News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl">Product</h1>
          <ul className="text-[#ffffffb3] space-y-3 mt-5">
            <li>
              <a href="#">Prototype</a>
            </li>
            <li>
              <a href="#">Plans &amp; Pricing</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl">Support</h1>
          <ul className="text-[#ffffffb3] space-y-3 mt-5">
            <li>
              <a href="#">Help Desk</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Become a Partner</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl">Contact</h1>
        <ul className="text-[#ffffffb3] space-y-3 mt-5">
          <li>
            <a href="#">524 Broadway , NYC</a>
          </li>
          <li>
            <a href="#">+1777-978-5570</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <hr color="bg-gradient-to-r from-[#7e90fe33] to-[#9873ff33] text-transparent bg-clip-text"> */}
    <div className="border-[1px] bg-gradient-to-r from-[#7e90fe33] to-[#9873ff33] text-transparent bg-clip-text   w-full opacity-5 my-12"></div>
    <div className="flex justify-between items-center">
      <div className="text-[#ffffff66] text-sm">
        @2023 TechJobs. All Rights Reserved
      </div>
      <div className="text-[#ffffff66] text-sm">Powered by TechJobs</div>
    </div>
  </div>
</footer>

        </>
    );
}

export default Footer;
