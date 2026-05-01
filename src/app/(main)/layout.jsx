import Foot from "@/app/Components/Foot";
import Nav from "@/app/Components/Nav";

const mainlayout = ({children}) => {
    return (
        <div className='bg-sky-50'>
            <Nav></Nav>
            {children}
            <Foot></Foot>
        </div>
    );
};

export default mainlayout;;

