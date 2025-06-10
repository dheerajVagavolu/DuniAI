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
  // latestJobPosts: z.boolean().optional(),
  // findDocumentation: z.boolean().optional(),
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
      // latestJobPosts: false,
      // findDocumentation: false,
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

  // ... existing code ...
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-white rounded-xl shadow-lg">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Creating Your Learning Path</h3>
        <p className="text-gray-600 text-center max-w-md">
          We're analyzing your requirements and generating personalized learning questions...
        </p>
        <div className="mt-6 flex gap-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }
// ... existing code ...

  // ... existing code ...
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <div className="space-y-2 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Create Your AI Learning Companion</h2>
          <p className="text-muted-foreground">Fill in the details below to start your personalized learning journey</p>
        </div>

        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Project Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a Project Name"
                    {...field}
                    className="input h-12 text-lg"
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
                <FormLabel className="text-lg font-semibold">Learning Focus</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex. C++ Developer, PySpark, etc."
                    {...field}
                    className="input min-h-[120px] text-lg resize-none"
                  />
                </FormControl>
                <FormDescription className="text-sm text-muted-foreground">
                  Describe what you want to learn or practice
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Learning Style</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="input h-12 text-lg">
                      <SelectValue placeholder="Select a Style of Conversation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Interviewer (Evaluation Mode)" className="text-lg py-3">
                        Interviewer (Evaluation Mode)
                      </SelectItem>
                      <SelectItem value="Pair Programmer (Teaching Mode)" className="text-lg py-3">
                        Pair Programmer (Teaching Mode)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription className="text-sm text-muted-foreground">
                  Choose how you want to interact with your AI companion
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Generate Learning Path
        </Button>
      </form>
    </Form>
  );
};

export default CompanionForm;
