"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

import GoogleAuthButton from "./GoogleAuthButton";
import LoadingButton from "./LoadingButton";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";


const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type SignInFormValues = z.infer<typeof signInSchema>;


export default function SignInForm() {
  

  const router = useRouter();
  const [pending, setPending] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInFormValues) => {
     form.reset();
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        
      },
      {
        onRequest: () => {
          setPending(true);
        },
        onSuccess: () => {
          router.push("/dashboard");
          router.refresh()
        },
        onError: (ctx) => {
          console.log("error", ctx);
          toast.error(`something went wrong ${ctx.error.message}`)
          router.push("/");
        },
      },
    );
    setPending(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto  p-6">
      <CardContent>
        <h2 className="text-2xl font-semibold  text-center py-6">SignIn with <span className="text-orange-600">SHOPAPP</span></h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-6">
                <LoadingButton pending={pending} >Sign In</LoadingButton>
            </div>
           
            
          </form>
        </Form>
        

        <div className="flex flex-col gap-5">
          <GoogleAuthButton action="signin"
           buttonText="SignIn with Google" redirectTo="/dashboard"/>
        
        
        </div>
        <div className="items-center text-sm text-red-600 mt-4 mb-4">
         <Link href="/sign-up">You don't have an account?  </Link> 
        </div>
      </CardContent>
    </Card>
  );
}
