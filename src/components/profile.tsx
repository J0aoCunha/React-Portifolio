interface ProfilerProps {
  name: string;
  role: string;
  image: string;
}

function Profile(props: ProfilerProps) {
  return (
    <div className="w-[348px] h-[292px] rounded-[20px] bg-[#302F3D] flex  flex-col items-center justify-evenly shadow-[2px_2px_2px _1px_rgba(0, 0, 0, 0.20)]">
      <div className="w-32 h-32 rounded-full border-2 border-[#0F0] bg-violet-600 overflow-hidden">
        <img className="w-full h-full " src={props.image} alt="" />
      </div>
      <div className="flex flex-col items-center mt-[-20px]">
        <h1 className="text-[#837E9F] font-bold text-[23px] leading-normal ">
          {props.name}
        </h1>
        <p className="text-[#837E9F] font-light not-italic text-[13px] leading-normal">
          {props.role}
        </p>
      </div>
    </div>
  );
}

export default Profile;
