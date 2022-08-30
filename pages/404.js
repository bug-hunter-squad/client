import Image from "next/image";
import Head from "next/head";

function Error() {

  return (
    <><Head>
      <title>Error</title>
      </Head>
      <div className="d-flex justify-content-center align-content-center">
        
    <Image src="/404.png" alt="404" width={500} height={500} className="image-error"/>
    
      </div></>
  );
}

export default Error;
