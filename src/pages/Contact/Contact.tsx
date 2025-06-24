import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod"

import { NavBar } from "../../components";
import MagneticBtn from "../../components/btns/magneticBtn/MagneticBtn";
import CustomImput from "../../components/customInput/CustomImput";
import TimeLinksFooter from "../../components/foter/TimeLIksFooter";
import './contact.css'
import { schema, type FormValueContact } from "./FormSchema";

const Contact = () => {

  const { handleSubmit, control, formState: { errors }} = useForm<FormValueContact>({
    resolver: zodResolver(schema), // Agrego el resolver de Zod
    mode: "onChange", // <--- Agrego esta línea para validar en cada cambio
    // O puedo usar "onBlur" para validar cuando el usuario sale del campo
    // mode: "onBlur",
    }
  );

  const dataBusines = ['miguel', 'tomatoma'];

  const onSubmit: SubmitHandler<FormValueContact> = (data) => console.log(data, errors);

  return (
    <div className="bg-[#141517]  text-white">
      <NavBar />

      {/* Sección del título */}
      <section className="flex justify-start items-center h-[40vh] lg:h-[40vh] px-10 md:px-[12%] lg:px-[15%] pt-25">
        <h2 className="flex flex-col text-3xl responsive_title md:w-[78%] lg:w-[73%]">
          <span className="flex mt-6 text-left items-center">
            <div className="flex-none profileImg mr-3 md:hidden"></div>
            And so, shall we
          </span>
          <span className="text-left w-50">
            begin?
          </span>
        </h2>
        <div className="flex-none profileImg profileImg_second mr-3 hidden md:block"></div>
      </section>

      {/* Seccion de mis datos y form contacto  */}
      <section className="flex flex-col md:flex-row-reverse mt-28 px-10 lg:px-[15%] ">

        <aside className="flex flex-col md:w-1/3 md:pl-10">
          <div className="flex flex-col gap-5 my-5">
            <h5 className="b-2 font-black uppercase text-[0.6em] opacity-30">
              Contacts
            </h5>
            <MagneticBtn justifyPosition={'justify-start'}>
              <button className="border-none">
                email
              </button>
            </MagneticBtn>
            
            <MagneticBtn justifyPosition={'justify-start'}>
              <button className="border-none">
                number
              </button>
            </MagneticBtn>
          </div>

          <div className="flex flex-col gap-5 my-5">
            <h5 className="b-2 text-(--white-footer) font-black uppercase text-[0.6em] opacity-30">
              Busines data
            </h5>
            {dataBusines.map( (data, index)  => 
              <span key={index}>
                {data}
              </span>
            )}
          </div>
        </aside>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:pr-15 my-7 md:w-3/2 md:max-w-[70%]">

            <CustomImput  
              name= { 'name' }
              customLabel="Your name is ?"
              fieldNumber={ 0 }
              type="text"
              placeHolder={ 'jan Doe' }
              control={ control }
              error={errors.name}
            />

            <CustomImput  
              name= { 'email' }
              customLabel="And your email please"
              fieldNumber={ 1 }
              type="text"
              placeHolder={ 'jan@doe.com' }
              control={ control }
              error={errors.email}
            />

            <CustomImput  
              name= { 'serviceKind' }
              customLabel="What kind of service do you want ?"
              fieldNumber={ 2 }
              type="text"
              placeHolder={ 'Web, IA, Mantenance ...' }
              control={ control }
              error={errors.serviceKind}
            />

            <CustomImput  
              name= { 'organization' }
              customLabel="What's the name of your organization??"
              fieldNumber={ 3 }
              type="text"
              placeHolder={ 'jan Doe' }
              control={ control }
              error={errors.organization}
            />
           
            <CustomImput  
              name= { 'customerNeed' }
              customLabel="What do you need ?" 
              fieldNumber={4} 
              type="textarea" 
              placeHolder={'jan Doe'}
              control={ control }
              error={errors.customerNeed}
              showBorder
            /> 

            <MagneticBtn justifyPosition={'justify-end'} >
               <button
                  className="flex justify-center items-center h-37 w-37 animated-btn rounded-full bg-(--black_btn_sections)"
                  type="submit"
                >
                <span>
                  Submit
                </span>
              </button>
            </MagneticBtn >
        </form>
      </section>

      <TimeLinksFooter />
    </div>
  );
};

export default Contact;
