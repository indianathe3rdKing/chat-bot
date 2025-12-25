import type { KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export type ChatFormData = {
   prompt: string;
};

type Props = {
   onSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ onSubmit }: Props) => {
   const { register, handleSubmit, reset, watch, formState } =
      useForm<ChatFormData>();
   watch('prompt');

   const handleFormSubmit = handleSubmit((data) => {
      reset({ prompt: '' });
      onSubmit(data);
   });
   const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleFormSubmit();
      }
   };
   return (
      <form
         onSubmit={handleFormSubmit}
         onKeyDown={handleKeyDown}
         className="flex flex-col gap-2 items-end border-2 p-5 rounded-2xl"
      >
         <textarea
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            autoFocus
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
         />
         <Button disabled={!formState.isValid} className="rounded-full w-8 h-8">
            <FaArrowUp />
         </Button>
      </form>
   );
};

export default ChatInput;
