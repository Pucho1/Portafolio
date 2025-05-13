import { ParallaxBanner } from 'react-scroll-parallax';

const CustomParallax = ({ children }: { children: React.ReactNode }) => {
  return (
    <ParallaxBanner
      layers={ [ 
        { 
          speed: -20,
          children: (
            <div className="w-full h-full bg-black/50" />
          ),
        },
        // {
        //   speed: 20,
        //   children: (
            
        //   ),
        // }
    ]}
      className="h-screen aspect-[2/1]"
    >
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center p-8">
        {children}
      </div>
     
    </ParallaxBanner>
  );
};

export default CustomParallax;
