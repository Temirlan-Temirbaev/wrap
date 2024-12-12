import Arrow from "@/public/icons/arrow.svg"

export const Banner = () => {
  return <main
    className={"z-[1] relative w-full h-[600px] bg-purple90 flex justify-center items-center flex-col rounded-[50px] "}>
    <div className="absolute inset-0 flex justify-center items-center z-[-1]">
      <img
        src="/images/logo-bg.png"
        alt="Background"
        className="w-auto h-auto max-w-[804px] max-h-[690px]"
      />
    </div>
    <h1
      className="max-w-[920px] text-[64px] font-bold leading-[100%] font-unbounded text-center text-white break-words mb-10">
      <span className={"text-purple90 outside relative text-[82px] font-bold leading-[120%]"} data-text="We are">
        We are
      </span>
      <br/>
      progressive web development studio
    </h1>
    <p className={"text-white font-unbounded font-normal text-center text-[16px] leading-[140%] max-w-[440px]"}>
      Progressive means that we are not chasing money, but developing a high quality innovative product
    </p>
    <div className={"w-16 h-16 rounded-full bg-black100 absolute bottom-0 left-1/2 flex justify-center items-center cursor-pointer -translate-x-1/2 translate-y-1/2 z-[3]"}>
      <Arrow className={"w-[16px] h-[26px]"}/>
    </div>
  </main>
}