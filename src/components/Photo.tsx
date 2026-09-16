interface PhotoProps {
  image: string;
}

export default function Photo({ image }: PhotoProps) {
  return (
    <div className="w-32 h-32 rounded-full border border-line bg-sidebar overflow-hidden">
      <img className="w-full h-full" src={image} alt="" />
    </div>
  );
}
