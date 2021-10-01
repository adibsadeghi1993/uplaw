import SignatureCanvas from "react-signature-canvas";


export const signtureFunction = (width,sigCanvas,styles) => {
    console.log(width)

    if (width>=1300) {
      return <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{
              height: 100,
              width: 200,
              className: styles.canvas,
            }}
          />
    }

    if (width>=1000 && width<=1300) {
      return <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{
              height: 100,
              width: 180,
              className: styles.canvas,
            }}
          />
    }

    if (width<=1000 && width >= 850) {
      return <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{
              height: 100,
              width: 150,
              className: styles.canvas,
            }}
          />
    }
    if (width<=850 && width >= 768) {
      return <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{
              height: 85,
              width: 125,
              className: styles.canvas,
            }}
          />
    }

    if (width<=768 && width>=480) {
      return <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{
              height: 180,
              width: 200,
              className: styles.canvas,
            }}
          />
    }
    if (width<=480 && width>=380) {
      return <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{
              height: 150,
              width: 160,
              className: styles.canvas,
            }}
          />
    }
    if (width<380) {
      return <SignatureCanvas
            ref={sigCanvas}
            penColor="green"
            canvasProps={{
              height: 150,
              width: 150,
              className: styles.canvas,
            }}
          />
    }
   

  // switch (width) {
  //   case width <= 1500:
  //     return( <SignatureCanvas
  //       ref={sigCanvas}
  //       penColor="green"
  //       canvasProps={{
  //         height: 150,
  //         width: 200,
  //         className: styles.canvas,
  //       }}
  //     />)
      
  //   case width <= 1000:
  //     return(  <SignatureCanvas
  //       ref={sigCanvas}
  //       penColor="green"
  //       canvasProps={{
  //         height: 90,
  //         width: 120,
  //         className: styles.canvas,
  //       }}
  //     />)
    
  //   case width <= 768:
  //     return (
  //       <SignatureCanvas
  //         ref={sigCanvas}
  //         penColor="green"
  //         canvasProps={{
  //           height: 80,
  //           width: 100,
  //           className: styles.canvas,
  //         }}
  //       />
  //     );
    
     

  //   default:
  //    return (
  //     <SignatureCanvas
  //       ref={sigCanvas}
  //       penColor="green"
  //       canvasProps={{
  //         height: 100,
  //         width: 150,
  //         className: styles.canvas,
  //       }}
  //     />
  //   );
  // }
};
