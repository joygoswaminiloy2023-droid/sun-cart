import React from 'react';

const Foot = () => {
    return (
     <footer className="footer p-10 bg-sky-200 text-black border-t border-sky-500 flex flex-col md:flex-row justify-around">
 
  <nav>
    <h6 className="footer-title opacity-100 ">Summer Shop</h6>
    <a className="link link-hover hover:text-yellow-300 transition-colors">Sunglasses</a>
    <a className="link link-hover hover:text-yellow-300 transition-colors">Beach Towels</a>
    <a className="link link-hover hover:text-yellow-300 transition-colors">Swimwear</a>
    <a className="link link-hover hover:text-yellow-300 transition-colors">Sunscreen</a>
  </nav>


  <nav>
    <h6 className="footer-title opacity-100 ">Customer Service</h6>
    <a className="link link-hover hover:text-yellow-300 transition-colors">Contact Info</a>
    <a className="link link-hover hover:text-yellow-300 transition-colors">Shipping & Returns</a>
    <a className="link link-hover hover:text-yellow-300 transition-colors">Privacy Policy</a>
    <a className="link link-hover hover:text-yellow-300 transition-colors">FAQ</a>
  </nav>

  
  <nav>
    <h6 className="footer-title opacity-100 ">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
      <a href="#" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      <a href="#" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      </a>
      <a href="#" className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h5v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Foot;