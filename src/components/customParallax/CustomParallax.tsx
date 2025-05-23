import { ParallaxBanner } from 'react-scroll-parallax';

const CustomParallax = ({ children }: { children: React.ReactNode }) => {
  return (
    <ParallaxBanner
      layers={ [ 
        { 
          speed: -20,
          children: (
            <div className="w-full h-full bg-[#999D9E]" />
          ),
        },
    ]}
      className="h-[120vh] aspect-[2/1]"
    >
      <>
        {children}
      </>
     
    </ParallaxBanner>
  );
};

export default CustomParallax;
