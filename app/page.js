import Image from "next/image";

export default function Page() {
  return (
    <> 
      <h1> Esta página está em construção</h1>
      <Image
        src="/images/img.png"
        alt="Teste"
        width={150}
        height={150}
      />
    </>
  );
}