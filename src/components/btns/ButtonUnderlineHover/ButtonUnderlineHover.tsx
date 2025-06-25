
const ButtonUnderlineHover = ({index, link}: {index: number, link: {name: string}}) => {

  return (
    <button className='custom_border' key={index}> 
    { link.name }
    </button>
  );
};

export default ButtonUnderlineHover;