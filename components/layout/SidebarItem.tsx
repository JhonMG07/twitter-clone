import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { BsDot } from "react-icons/bs";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  auth,
  onClick,
  alert,
}) => {
  //usamos el state para abrir el login
  const loginModal = useLoginModal();

  //para tener privacidad en las notificaciones y demas
  //vamos a comprobar que se a iniciado sesion
  
  const {data: currentUser}= useCurrentUser();

  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if(auth && !currentUser){
      loginModal.onOpen();
    }else if (href ) {
      router.push(href);
    } 
  }, [router, href, onClick,currentUser,auth,loginModal]);

  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
        className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      "
      >
        <Icon size={28} color="white" />
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
      <div
        className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      "
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
    </div>
  );
};

export default SidebarItem;
