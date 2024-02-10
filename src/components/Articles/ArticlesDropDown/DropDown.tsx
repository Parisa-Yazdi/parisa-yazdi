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
import { parseUrl } from '@/lib/utils';
import Link from 'next/link';

interface category {
  attributes: any;
}

export default function DropDown({ subCategories }: { subCategories: category[] }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" w-3/4 justify-between font-heebo text-base"
        >
          {value || 'Find article by category...'}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {subCategories.map((category, i) => (
              <CommandItem
                key={i}
                value={category.attributes.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <>
                  <Link
                    className="text-basae w-full"
                    href={`/articles/${parseUrl(
                      category.attributes.category.data.attributes.name
                    )}/${parseUrl(category.attributes.name)}`}
                  >
                    <div>
                      {category.attributes.name + `  (${category.attributes.articles.data.length})`}
                    </div>
                  </Link>
                </>

                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === category.attributes.name ? 'opacity-100' : 'opacity-0'
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

// // const categories = [
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

// interface category {
//   category: any;
// }

// const FormSchema = z.object({
//   category: z.string({
//     required_error: 'Please select a category.'
//   })
// });

// export default function ComboboxForm({ categories }: { categories: any }) {
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
//           name="category"
//           render={({ field }) => (
//             <FormItem className="flex flex-col items-center justify-center">
//               {/* <FormLabel>category</FormLabel> */}
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
//                         ? categories.find((category: any) => category.value === field.value)?.label
//                         : 'Select category'}
//                       <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent side="bottom" className="w-[200px] p-0">
//                   <Command>
//                     <CommandInput placeholder="Search category..." className="h-9" />
//                     <CommandEmpty>No category found.</CommandEmpty>
//                     <CommandGroup>
//                       {categories.map((category: any, i: any) => (
//                         <CommandItem
//                           value={category}
//                           key={i}
//                           onSelect={() => {
//                             // form.setValue('category', category.value);
//                           }}
//                         >
//                           {/* {category.label} */}
//                           <CheckIcon
//                             className={cn(
//                               'ml-auto h-4 w-4'
//                               // category.value === field.value ? 'opacity-100' : 'opacity-0'
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
