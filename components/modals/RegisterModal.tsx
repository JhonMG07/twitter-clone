import axios from "axios"
import {toast} from "react-hot-toast"
import { useCallback, useState } from "react";
import {signIn} from "next-auth/react"

import useLoginModal from "@/hooks/useLoginModas";
import useRegisterModal from "@/hooks/useRegisterModal";

import Input from "../Input";
import Modal from "../layout/Modal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      //TODO add register adn login

      await  axios.post("/api/register",{
        email,
        password,
        username,
        name
      });
      toast.success("Account created");

      signIn('credentials',{
        email,
        password,
      })
      registerModal.onClose();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");

    }
  }, [registerModal,email,password,username,name ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="UserName"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?{" "}
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <span
          onClick={onToggle}
          className="
          text-white
          cursor-pointer
          hover:underline
        "
        >
          Sign in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create Account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
