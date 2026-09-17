interface PhotoProps {
  image: string;
}

export default function Photo({ image }: PhotoProps) {
  return (
    <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-line bg-sidebar overflow-hidden shrink-0">
      <img className="w-full h-full" src={image} alt="" />
    </div>
  );
}
