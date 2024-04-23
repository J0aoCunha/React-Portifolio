import Photo from "./Photo";

interface ProfilerProps {
  name?: string;
  role?: string;
}

function Profile({ name, role }: ProfilerProps) {
  return (
    <div className="w-full xl:w-[348px] lg:w-full h-[292px] rounded-[20px] bg-[#302F3D] flex  flex-col items-center justify-evenly shadow-md ">
      <Photo image={"https://github.com/J0aoCunha.png"} />
      <div className="flex flex-col items-center mt-[-20px]">
        <h1 className="text-[#837E9F] font-bold xl:text-[23px] lg:text-[23px] leading-normal ">
          {name}
        </h1>
        <p className="text-[#837E9F] font-light not-italic text-[13px] leading-normal">
          {role}
        </p>
      </div>
    </div>
  );
}

export default Profile;
