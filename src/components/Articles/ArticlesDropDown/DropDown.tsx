'use client';

import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { redirect } from 'next/dist/server/api-utils';

interface Article {
  title: string;
}

export default function DropDown({ articles }: { articles: Article[] }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" w-3/4 justify-between"
        >
          {value || 'Select article...'}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[600px] p-0">
        <Command>
          <CommandInput placeholder="Search article..." className="h-9" />
          <CommandEmpty>No article found.</CommandEmpty>
          <CommandGroup>
            {articles.map((article, i) => (
              <CommandItem
                key={i}
                value={article.title}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <>{article}</>

                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === article.title ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// 'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';

// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem
// } from '@/components/ui/command';

// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage
// } from '@/components/ui/form';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { toast } from '@/components/ui/use-toast';

// // const articles = [
// //   { label: 'Hello', value: 'en' },
// //   { label: 'French', value: 'fr' },
// //   { label: 'German', value: 'de' },
// //   { label: 'Spanish', value: 'es' },
// //   { label: 'Portuguese', value: 'pt' },
// //   { label: 'Russian', value: 'ru' },
// //   { label: 'Japanese', value: 'ja' },
// //   { label: 'Korean', value: 'ko' },
// //   { label: 'Chinese', value: 'zh' }
// // ] as const;

// interface Article {
//   article: any;
// }

// const FormSchema = z.object({
//   article: z.string({
//     required_error: 'Please select a article.'
//   })
// });

// export default function ComboboxForm({ articles }: { articles: any }) {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema)
//   });

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//       title: 'You submitted the following values:',
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       )
//     });
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="items-center justify-center space-y-6"
//       >
//         <FormField
//           control={form.control}
//           name="article"
//           render={({ field }) => (
//             <FormItem className="flex flex-col items-center justify-center">
//               {/* <FormLabel>Article</FormLabel> */}
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       className={cn(
//                         'w-[200px] justify-between',
//                         !field.value && 'text-muted-foreground'
//                       )}
//                     >
//                       {field.value
//                         ? articles.find((article: any) => article.value === field.value)?.label
//                         : 'Select article'}
//                       <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent side="bottom" className="w-[200px] p-0">
//                   <Command>
//                     <CommandInput placeholder="Search article..." className="h-9" />
//                     <CommandEmpty>No article found.</CommandEmpty>
//                     <CommandGroup>
//                       {articles.map((article: any, i: any) => (
//                         <CommandItem
//                           value={article}
//                           key={i}
//                           onSelect={() => {
//                             // form.setValue('article', article.value);
//                           }}
//                         >
//                           {/* {article.label} */}
//                           <CheckIcon
//                             className={cn(
//                               'ml-auto h-4 w-4'
//                               // article.value === field.value ? 'opacity-100' : 'opacity-0'
//                             )}
//                           />
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }
