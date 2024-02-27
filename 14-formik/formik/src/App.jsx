// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";

// const App = () => {
//   const initialValue = {
//     email: "",
//     password: "",
//   };

//   const handleSubmit = (value) => {
//     console.log(value);
//   };

//   const validationSchema = yup.object({
//     email: yup
//       .string()
//       .required("Email is required")
//       .email("Invalid Email Format"),
//     password: yup
//       .string()
//       .min(8, "Password must be at least 8 characters")
//       .max(12, "Password must be at most 12 characters")
//       .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//       .matches(/[0-9]/, "Password must contain at least one number")
//       .matches(
//         /[!@#$%^&*(),.?":{}|<>]/,
//         "Password must contain at least one special character"
//       )
//       .required("Password is required"),
//   });

//   return (
//     <div>
//       {/* validate => custom */}
//       {/* valication */}

//       <Formik
//         initialValues={initialValue}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//         validateOnBlur={false}
//       >
//         {({isSubmitting}) => (
//           <>
//             <Form className="flex flex-col w-[50%] gap-5 ">
//               <label htmlFor="email">Email Address</label>
//               <ErrorMessage
//                 className=" text-red-600"
//                 component={"p"}
//                 name="email"
//               />
//               <Field
//                 className=" border border-gray-500"
//                 type="email"
//                 name="email"
//                 id="email"
//               />
//               <label htmlFor="password">Password</label>
//               <ErrorMessage
//                 className=" text-red-600"
//                 component={"p"}
//                 name="password"
//               />
//               <Field
//                 className=" border border-gray-500"
//                 type="password"
//                 name="password"
//                 id="password"
//               />
//               <button onChange={isSubmitting} type="submit">Submit</button>
//             </Form>
//           </>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { cn } from "@/lib/utils"
import { Button } from "./components/ui/button"
import { Calendar } from "./components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover"

const App = () => {
  const [date, setDate] = useState();
  return (
    <div>
      <Button className=" bg-red-500">Add</Button>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
  );
};

export default App;
