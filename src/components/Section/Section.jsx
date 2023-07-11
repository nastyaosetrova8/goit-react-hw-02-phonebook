
import { SectionStyled } from './SectionStyled';

const Section = ({title, children}) => {
    return (
        <SectionStyled>
            {<h1>{title}</h1>}
            {children}
        </SectionStyled>
    )
    }
    
    export default Section;