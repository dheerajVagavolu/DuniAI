"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { fake_python_job_experiences } from "@/constants";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
// import {createCompanion} from "@/lib/actions/companion.actions";
import { redirect } from "next/navigation";
import { createCompanion } from "@/lib/actions/companion.actions";

const formSchema = z.object({
  name: z.string().min(1, { message: "Companion is required." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  topic: z.string().min(1, { message: "Job Description is required." }),
  voice: z.string().min(1, { message: "Voice is required." }),
  style: z.string().min(1, { message: "Style is required." }),
  duration: z.coerce.number().min(1, { message: "Duration is required." }),
  latestJobPosts: z.boolean().optional(),
});

const CompanionForm = () => {
  const [loading, setLoading] = useState(false); // 👈 Loading state

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "tech",
      topic: "",
      voice: "male",
      style: "",
      latestJobPosts: false,
      duration: 10,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    setLoading(true); // 👈 Start loading

    // values.topic = fake_python_job_experiences.join(" ");
    const companion = await createCompanion(values);

    if(companion) {
        redirect(`/companions/${companion.id}`);
    } else {
        console.log('Failed to create a companion');
        redirect('/');
    }
    
  };

  if (loading) {
    return (
      <div className="flex flex-col h-64 justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-lg">Generating a personalized set of learning questions for you...</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:w-1/3 md:w-full sm:w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a Project Name"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you want to focus on? (Job role, skills, or technologies)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex. C++ Developer, PySpark, etc."
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Style</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select a Style of Conversation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Interviewer (Evaluation Mode)">Interviewer (Evaluation Mode)</SelectItem>
                    <SelectItem value="Pair Programmer (Teaching Mode)">Pair Programmer (Teaching Mode)</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>

            
            // Will add dummy form items here, a check box for scraping latest job descriptions


            
          )}
        />

        <FormField
          control={form.control}
          name="latestJobPosts"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Input
                  type="checkbox"
                  checked={field.value}
                  onChange={e => field.onChange(e.target.checked)}
                  className="h-4 w-4 border rounded"
                />
              </FormControl>
              <FormLabel className="font-normal">
                Search latest job posts
              </FormLabel>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer">
          Generate Learning Path
        </Button>
      </form>
    </Form>
  );
};

export default CompanionForm;
