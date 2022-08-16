import Image from "next/image";

function searchresultLogo() {
  return (
    <>
      <Image
        src="/assets/img/logos.svg"
        alt="Logo"
        width="328"
        height="232"
        style={{marginLeft:"-15px"}}
      />
    </>
  );
}

export default searchresultLogo;
