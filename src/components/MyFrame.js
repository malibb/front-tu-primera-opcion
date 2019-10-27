import React, { useState } from "react";

function MyFrame(props) {
    const [src] = useState(props.src);
    const [height] = useState(props.height);
    const [width] = useState(props.width);
    return(         
      <div>     
        { /* eslint-disable-next-line */ }     
        <iframe src={src} height={height} width={width}/>         
      </div>
    )
};

export default MyFrame;