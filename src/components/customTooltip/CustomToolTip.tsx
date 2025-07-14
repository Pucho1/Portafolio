import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import type { customToolTipsProps } from '../../interfaces/companies';



const CustomToolTip = styled(({ className, show = true, ...props  }: customToolTipsProps) => {
  const { children } = props; 

  return show ? 
    <Tooltip {...props} classes={{ popper: className }} /> 
  : 
    <>
      {children}
    </>

})(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'black',
    color: 'white',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: 'none',
  },
}));

export default CustomToolTip