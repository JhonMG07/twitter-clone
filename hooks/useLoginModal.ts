import { create } from "zustand";
/*
Se puede crear un estado global que puede ser compartido y 
actualizado entre diferentes componentes de React. Además, 
se proporcionan funciones para actualizar y obtener el estado, lo
 que facilita la gestión de la lógica y la actualización de la 
 interfaz de usuario.
*/
interface RegisterModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useLoginModal = create<RegisterModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
