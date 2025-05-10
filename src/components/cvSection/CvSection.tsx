import { Parallax } from 'react-scroll-parallax';

const CvSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Parallax speed={-20} className="h-screen">
        <div className="relative w-full h-full">
          {/* Fondo */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
            style={{ 
              // backgroundImage: "url('/imgs/yop.png')" 
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          />

          {/* Contenido encima del fondo */}
          <div className="relative z-10 flex items-center justify-center h-full text-white text-center p-8">
            {children}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CvSection;
