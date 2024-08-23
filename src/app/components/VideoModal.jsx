'use client';
import { useEffect } from 'react';
import AboutVideo from "./about-vid";
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";

export default function VideoModal() {
  const openModal = () => {
    document.getElementById('my_modal_5').showModal();
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    document.getElementById('my_modal_5').close();
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    const modal = document.getElementById('my_modal_5');
    modal.addEventListener('close', closeModal);

    return () => {
      modal.removeEventListener('close', closeModal);
    };
  }, []);

  return (
    <div>
      <div className="relative flex items-center justify-center  ">
        <button className="relative md:hover:scale-105 md:ease-in-out duration-300" onClick={openModal}>
          <Image
            src="/images/video-temp.jpg"
            width={350}
            height={350}
            className="rounded-full "
            alt="Video thumbnail"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <CiPlay1 className="text-white text-4xl  md:hover:scale-125 md:ease-in-out duration-200" />
          </div>
        </button>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-full md:h-[500px] p-1 m-0">
          <div className="w-full h-full flex items-center justify-center m-0">
            <AboutVideo />
          </div>
        </div>
        <button
          className="absolute top-4 right-4 btn btn-sm text-white text-2xl"
          onClick={closeModal}
        >
          <IoClose />
        </button>
      </dialog>
    </div>
  );
}
