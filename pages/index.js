import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1513692398020-cbaea622c427?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-25 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-3/4 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Construcciones y servicios Reina
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    This is a simple example of a Landing Page you can build
                    using Notus NextJS. It features multiple CSS components
                    based on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                    <i class="fas fa-hard-hat"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Construcciones Civiles</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Remodelación de viviendas reciendeciales, mantenimientos industriales y civiles,
                    manteniendo en vias, señaletica, paredes de fibrocemento,
                    instaclaciones cerámicas, impermivialización de terrazas (residencial e indistruial),
                    adecuaciones y construciones civiles 
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                    <i class="fas fa-tools"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Metal Mecánica</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Manteniendo industrial metal mecánico
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                    <i class="fas fa-solar-panel"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Aluminio y Vidrio</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Manteniendo Aluminio y Vidrio (En general)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                    <i class="fas fa-paint-roller"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Pintura</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Servicio de Pintura y mantenimiento Arquitectónica,
                    Servicio de Pintura y mantenimiento indistruial 
                    </p>
                  </div>
                </div>
              </div>


            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Somos los mejores
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Somos una empresa de servicios especilizados en el mantenimiento, mejoramiento,
                e implementación de su infraestructura, realizando trabajos como:
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Servicios de construcciones civíles, metalmecánico, adecuaciones de tumbados, 
                  señalización, pintura de exteriores e interiores (industrial y residencial),  
                </p>
                <Link href="/">
                  <a href="#pablo" className="font-bold text-gray-800 mt-8">
                    Trabajamos para todo tipo clientes como locales comerciales, intiticiones privadas y publicas 
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-gray-800 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Misión
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Somos una empresa de servicios especilizados en el mantenimiento, mejoramiento,
                      e implementacion de su infraestructura, realizando 
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1574184420433-97596a59e79d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=676&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">20 años de experiencia</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nuestos Clientes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/Unilever-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/cerveceria-nacional-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/dinadec-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/Tesalia-CBC.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/inmobiliar.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/cuidad-celeste-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/jardines-delrio-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/gran-vittoria-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/logo-inmmobi.png")}
                    className="h-14"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/logo-villa-italia.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/logo-villaclub.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/villadelrey-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/hospital-naval-logo.png")}
                    className="h-24"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/Logo_UNA.png")}
                    className="h-32"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-8 mb-12 px-4">
                <div className="px-6 flex justify-center">
                  <img
                    alt="..."
                    src={require("assets/img/plasti-logo.png")}
                    className="h-14"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Contactanos
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Cual es tu proyecto o duda ?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Completa el formulario y te responderemos en maximo 24 horas
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Nombres y apellidos"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Mensaje
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Dejanos saber de ti"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
