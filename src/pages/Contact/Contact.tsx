import { NavBar } from "../../components";
import MagneticBtn from "../../components/btns/magneticBtn/MagneticBtn";
import CustomImput from "../../components/customInput/CustomImput";
import TimeLinksFooter from "../../components/foter/TimeLIksFooter";
import './contact.css'

const Contact = () => {

  const dataBusines = ['miguel', 'tomatoma'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('se ha enviado la data --->' )
  };

  return (
    <div className="bg-[#141517]  text-white">
      <NavBar />

      {/* Sección del título */}
      <section className="flex justify-start items-center h-[40vh] lg:h-[40vh] px-10 md:px-[12%] lg:px-[15%] pt-25">
        <h2 className="flex flex-col text-3xl responsive_title md:w-[75%]">
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
        
        <form className="flex flex-col md:pr-15 my-7 md:w-3/2 md:max-w-[70%]">
            <CustomImput  customLabel="Your name is ?" fieldNumber={0} type="text" placeHolder={'jan Doe'}/>
            <CustomImput  customLabel="And your email please" fieldNumber={1} type="text" placeHolder={'jan@doe.com'}/>
            <CustomImput  customLabel="What kind of service do you want ?" fieldNumber={2} type="text" placeHolder={'Web, IA, Mantenance'}/>
            <CustomImput  customLabel="What's the name of your organization?" fieldNumber={3} type="text" placeHolder={'jan Doe'}/>
            <CustomImput  customLabel="What do you need ?" fieldNumber={3} type="text" placeHolder={'jan Doe'}/>

            <MagneticBtn >
               <button
                  className="flex justify-center items-center h-12 w-12 animated-btn rounded-full bg-(--black_btn_sections)"
                  type="submit"
                  onClick={ handleSubmit}
                >
                <span>
                  text
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
