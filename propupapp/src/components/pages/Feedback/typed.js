import React from "react";
import Typical from 'react-typical';

const Typed = () => {
    return (  
        
        <div className="container5">        
            <p className="typed2"><strong>Hello, my name is Joe Somebody:<br></br><br></br></strong>
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                'This is a really great looking website. Thanks for making purchasing vacation property fairly priced and easy again',
                500,
                'Are you currently looking to hire at any coding positions? I would love to become part of the team.',
                500,                 
                ]}
                />
            </p>  
        </div>
    )
};

export default Typed;