import { Button } from './button';
import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import type { KeyboardEvent } from 'react';

type FormData = {
   prompt: string;
};

const ChatBot = () => {
   const { register, handleSubmit, reset, watch, formState } =
      useForm<FormData>();
   watch('prompt');

   const onSubmit = (data: FormData) => {
      console.log(data);
      reset();
   };

   const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(onSubmit)();
      }
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         onKeyDown={onKeyDown}
         className="flex flex-col gap-2 items-end border-2 p-5 rounded-2xl"
      >
         <textarea
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            className="w-full border-0 focus:outline-0 resize-none"
            placeholder="Ask anything"
         />
         <Button disabled={!formState.isValid} className="rounded-full w-8 h-8">
            <FaArrowUp />
         </Button>
      </form>
   );
};

export default ChatBot;
