import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={() => router.push("/")}
      className="
      rounded-full
      h-14
      w-14
      p-4
      flec
      items-center
      justify-center
      hover:bg-blue-300
      cursor-pointer
      hover:bg-opacity-10
      transition"
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
