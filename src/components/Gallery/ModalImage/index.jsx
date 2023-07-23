import { useState } from 'react';
import { MdClose } from 'react-icons/md';

export default function ModalImage({ item, isOpen, closeModal }) {
  return (
    <div
      className={`${
        !isOpen && 'opacity-0 -z-50'
      } fixed flex center-center inset-0 w-screen h-screen p-16 backdrop-blur-md bg-[#000]/40 z-50 transition-all `}
    >
      <div
        className={`${
          isOpen ? 'scale-100' : 'scale-50'
        } flex center-center w-full h-full transition-transform duration-500 ease-in-out`}
      >
        <img
          src={item.imagem}
          alt={item.titulo}
          className="h-full object-contain rounded-3xl"
        />
      </div>
      <MdClose
        size={45}
        className="absolute top-5 right-5 cursor-pointer text-white"
        onClick={closeModal}
      />
    </div>
  );
}
