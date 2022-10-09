import React from 'react';
import { useGlobalContext } from '../Context';

const Modal = () => {
  const { selectedWaifu, closeModal } = useGlobalContext();
  const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedWaifu;
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={closeModal}
      >
        Open regular modal
      </button> */}
      {selectedWaifu ? (
        <>
          <div onClick={closeModal} className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-auto mx-auto max-w-3xl">
              {/*content*/}
              <div onClick={selectedWaifu} className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold mx-auto">{selectedWaifu.strMeal}</h3>
                  {/* <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={closeModal}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button> */}
                </div>
                <img src={image} alt={title} className=" w-96 mx-auto pt-10 rounded-lg px-3 shadow-sm" />

                {/*body*/}
                <div className="relative p-6 pt-10 px-8 flex-auto">
                  <h1 className="text-2xl font-semibold">Waifu Detail</h1>
                  <p className="my-4 text-justify text-slate-500 text-lg leading-relaxed">{text}</p>
                  <a href={source} className="text-blue-500 font-semibold">
                    Original Source
                  </a>
                </div>
                {/*footer*/}
                <div className="flex mb-6 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal
                    }
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
              <button
                className="text-red-500 -mt-14 absolute block background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 pl-96"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
