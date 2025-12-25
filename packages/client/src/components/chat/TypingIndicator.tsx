const TypingIndicator = () => {
   return (
      <div className="flex gap-1 self-start bg-gray-200 py-3 px-4 rounded-xl">
         <Dot />
         <Dot className="[animation-delay:0.2s]" />
         <Dot className="[animation-delay:0.4s]" />
      </div>
   );
};

type DotProps = {
   className?: string;
};

const Dot = ({ className }: DotProps) => (
   <p
      className={` w-2 h-2 rounded-full bg-gray-700 animate-pulse ${className}`}
   />
);
export default TypingIndicator;
