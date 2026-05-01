import Foot from "@/app/Components/Foot";
import Nav from "@/app/Components/Nav";

const mainlayout = ({children}) => {
    return (
        <div className=''>
            <Nav></Nav>
            {children}
            <Foot></Foot>
        </div>
    );
};

export default mainlayout;;

