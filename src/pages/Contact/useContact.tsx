import { schema, type FormValueContact } from "./FormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const useContact = () => {

	
  const { handleSubmit, control, formState: { errors }} = useForm<FormValueContact>({
    resolver: zodResolver(schema), // Agrego el resolver de Zod
    mode: "onChange", // <--- Agrego esta línea para validar en cada cambio
    // O puedo usar "onBlur" para validar cuando el usuario sale del campo
    // mode: "onBlur",
    }
  );

  const dataBusines = ['España', 'Miguel Martinez', '✅ Permiso de trabajo' ];

  return{
    handleSubmit,
    control,
    errors,
    dataBusines
  };
};

export default useContact;
