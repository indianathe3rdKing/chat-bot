import { Button } from './button';
import { FaArrowUp } from 'react-icons/fa';
const ChatBot = () => {
   return (
      <div className="flex flex-col gap-2 items-end border-2 p-5 rounded-2xl">
         <textarea
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
         />
         <Button className="rounded-full w-8 h-8">
            <FaArrowUp />
         </Button>
      </div>
   );
};

export default ChatBot;
