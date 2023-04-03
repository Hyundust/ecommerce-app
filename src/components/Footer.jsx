import React from 'react'

function Footer() {
  return (
    <footer className="bg-black pt- pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 md:pr-10 pb-10">
              <h3 className="text-white font-medium text-xl mb-4 mt-4">Contact Us</h3>
              <ul className="list-none mb-0">
                  <li className="mb-3">
                    <span className="block text-gray-500 text-sm font-medium mb-1">Phone:</span>
                    <span className="text-gray-300 text-base">555-123-4567</span>
                  </li>
                  <li className="mb-3">
                    <span className="block text-gray-500 text-sm font-medium mb-1">Email:</span>
                    <span className="text-gray-300 text-base">info@ecommerce.com</span>
                  </li>
                  <li>
                    <span className="block text-gray-500 text-sm font-medium mb-1">Address:</span>
                    <span className="text-gray-300 text-base">123 Main Street, Anywhere, USA</span>
                  </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 md:px-5 pb-10">
              <h3 className="text-white font-medium text-xl mb-4 mt-9">Follow Us</h3>
              <ul className="list-none mb-0">
                  <li className="mb-3">
                    <a href="#" className="text-gray-300 font-bold text-base hover:text-gray-600 transition-colors duration-300">Facebook</a>
                  </li>
                  <li class="mb-3">
                    <a href="#" className="text-gray-300 font-bold text-base hover:text-gray-600 transition-colors duration-300">Twitter</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 font-bold text-base hover:text-gray-600 transition-colors duration-300">Instagram</a>
                  </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 pb-10">
              <div className="">
                  <h3 className="text-white italic font-medium text-xl mb-4 mt-4">About Us</h3>
                  <p className="text-gray-800 leading-relaxed">Danzonn, chorus, erant ' cadit seorsum usque ad dimidium tempus
                            Saltare, saltare, et hae sunt vitae quas amas ducere
                            Stimulare, ambos amare.
                            Et cum cognovissent me miserere mei

                            Cur non adpraescriptum tuum cenas
                            Tu salvum esse eius culcita (Culcita, culcita)
                            Desidero passeggiare con voi
                            Apud me in lecto reptans

                            Danzonn, chorus, erant ' cadit seorsum usque ad dimidium tempus
                            Saltare, saltare, et hae sunt vitae quas amas ducere
                            Saltare, haec est via quam amant (Modo amant)
                            Saltare, haec est via quam vellem me amare (Modo amare)
                            Stimulare, ambos amare.
                            Et cum cognovissent me miserere mei.</p>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer