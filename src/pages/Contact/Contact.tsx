import { type SubmitHandler } from "react-hook-form";

import { NavBar } from "../../components";
import MagneticBtn from "../../components/btns/magneticBtn/MagneticBtn";
import CustomImput from "../../components/customInput/CustomImput";
import TimeLinksFooter from "../../components/foter/TimeLIksFooter";
import type { FormValueContact } from "./FormSchema";

import './contact.css'
import useContact from "./useContact";
import SectionBtn from "../../components/btns/sectionbtn/SectionBtn";
import FloatBtnWraper from "../../components/btns/FloatBtnWraper/FloatBtnWraper";
import useColitionDetector from "../../utils/useColitionDetector";


const Contact = () => {

  const { handleSubmit, control, errors , dataBusines } = useContact();

  const onSubmit: SubmitHandler<FormValueContact> = (data) => console.log(data, errors);

  const sectionId = 'section_ref';
  const buttonId  = 'btn_ref';
  const triguer   = 'contact_seccion';

  useColitionDetector({sectionId, buttonId, triguer});

  return (
    <main className={`${sectionId} bg-[#141517]  text-white`} id={sectionId}>
      <NavBar />

      <FloatBtnWraper />

      {/* Sección del título */}
      <section className="flex justify-start items-center h-[40vh] lg:h-[40vh] px-10 md:px-[12%] lg:px-[15%] pt-25">
        <h2 className="flex flex-col text-3xl responsive_title md:w-[78%] lg:w-[73%]">
          <span className="flex mt-6 text-left items-center">
            <div className="flex-none profileImg profileImg_ferstOne mr-3 md:hidden"></div>
            And so, shall we
          </span>
          <span className="text-left w-50">
            begin?
          </span>
        </h2>
        <div className="flex-none profileImg profileImg_second mr-3 hidden md:block mb-8 h-10 w-10"></div>
      </section>

      {/* Seccion de mis datos y form contacto  */}
      <section className="flex flex-col md:flex-row-reverse mt-28 mb-65 px-10 lg:px-[15%] ">

        <aside className="flex flex-col md:w-1/3 md:pl-10">
          <div className="flex flex-col gap-5 my-5">
            <h5 className="b-2 text-white font-bold uppercase text-[0.6em] opacity-50">
              Contacts
            </h5>
            <MagneticBtn justifyPosition={'justify-start'}>
              <button className="border-none custom_border pb-2">
                martinezochandarenam@gmail.com
              </button>
            </MagneticBtn>

            <MagneticBtn justifyPosition={'justify-start'}>
              <button className="border-none custom_border pb-2">
                +34 672595322
              </button>
            </MagneticBtn>
          </div>

          <div className="flex flex-col gap-5 my-5">
            <h5 className="b-2 text-white font-bold uppercase text-[0.6em] opacity-50">
              Busines data
            </h5>
            {dataBusines.map( (data, index)  => 
              <span key={index}>
                {data}
              </span>
            )}
          </div>
        </aside>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:pr-15 my-7 md:w-3/2 md:max-w-[70%] relative">

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

            <div className="absolute right-[1rem] bottom-[-4rem] ">
              <SectionBtn 
                hgt={9} 
                bgCustom={'#455CE9'}
                wdt={9} 
                classCustom='md:h-12 md:w-12' 
                content={'Submit'}
                justifyPosition={'justify-end'}
              />
            </div>
            
        </form>
      </section>

      <TimeLinksFooter />
    </main>
  );
};

export default Contact;
