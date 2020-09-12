import React from "react";
import Typical from "react-typical";
import Typed from "react-typed";

const Type = () => {
  return (
    <div className="container5">
      {/* <p className="typed2"><strong>Hello, my name is Joe Somebody:<br></br><br></br></strong>
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
            </p>   */}

      <Typed
        strings={[
          "This is a really great looking website. Thanks for making purchasing vacation property fairly priced and easy again",
          "Are you currently looking to hire at any coding positions? I would love to become part of the team.",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <textarea className="typed2" type="text" />
      </Typed>
    </div>
  );
};

export default Type;
