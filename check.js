import {useEffect} from 'react';

function Check() {
    
    useEffect(() => {

      document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e) => {
      
      console.log("Clicked: ", e.key)

      if(e.key === "13"){

        console.log("pressed");
      }
    }
  }

export default Check;
