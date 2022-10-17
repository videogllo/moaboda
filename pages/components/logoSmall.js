import Image from "next/image";

const LogoSmall = () => {
    return (
        <>
            <Image
                src="/image/logo/logo_small.png"
                alt="smalllogo"
                width={40}
                height={40}
            ></Image>
        </>
    );
};
export default LogoSmall;
