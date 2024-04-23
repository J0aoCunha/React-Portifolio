interface PhotoProps {
  image: string;
}

export default function Photo({ image }: PhotoProps) {
  return (
    <div className="w-32 h-32 rounded-full border-2 border-[#0F0] bg-violet-600 overflow-hidden">
      <img className="w-full h-full " src={image} alt="" />
    </div>
  );
}
