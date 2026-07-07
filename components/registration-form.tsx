"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Helper lists
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica","Croatia","Cuba","Cyprus","Czechia (Czech Republic)","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini (fmr. \"Swaziland\")","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (formerly Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
const timeZones = ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:30", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:30", "UTC-03:00", "UTC-02:00", "UTC-01:00", "UTC±00:00", "UTC+01:00", "UTC+02:00", "UTC+03:00", "UTC+03:30", "UTC+04:00", "UTC+04:30", "UTC+05:00", "UTC+05:30", "UTC+05:45", "UTC+06:00", "UTC+06:30", "UTC+07:00", "UTC+08:00", "UTC+08:45", "UTC+09:00", "UTC+09:30", "UTC+10:00", "UTC+10:30", "UTC+11:00", "UTC+12:00", "UTC+12:45", "UTC+13:00", "UTC+14:00"];

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  dateOfBirth: z.date({
    required_error: "A date of birth is required.",
  }),
  fatherName: z.string().min(2, "Father's name is required."),
  motherName: z.string().optional(),
  email: z.string().email("Invalid email address."),
  studentWhatsApp: z.string().optional(),
  parentWhatsApp: z.string().optional(),
  country: z.string().min(1, "Please select a country."),
  city: z.string().min(2, "City is required."),
  timeZone: z.string().min(1, "Please select a time zone."),
  schoolName: z.string().optional(),
  lichessId: z.string().optional(),
  chessComId: z.string().optional(),
  fideId: z.string().optional(),
  fideRating: z.string().optional(),
  uscfId: z.string().optional(),
  uscfRating: z.string().optional(),
  currentLevel: z.string().min(1, "Please select your current chess level."),
  previousCoach: z.string().optional(),
  mainGoals: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one goal.",
  }),
  howDidYouKnow: z.string().min(1, "Please tell us how you found out about us."),
  referralName: z.string().optional(),
  declaration: z.boolean().refine((val) => val === true, {
    message: "You must confirm that the information is true and correct.",
  }),
});

const goalsList = [
  "Learn Chess Basics",
  "Improve Rating",
  "Tournament Preparation",
  "School Competitions",
  "Achieve FIDE Rating",
  "Achieve USCF Rating",
  "Improve Openings",
  "Improve Middlegame",
  "Improve Endgames",
  "Improve Calculation",
  "Just for Fun"
];

const sourceList = [
  "Google Search",
  "YouTube",
  "Facebook",
  "Instagram",
  "WhatsApp",
  "Referral by Friend",
  "Existing Student",
  "Chess Tournament",
  "Other"
];

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxnzPcnPxBlH_T0mYIZAqoUjWDGbzDxJTlKOBNnAexjqHT1lpoGi9p1x6cWCEURmPO2XA/exec";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      fatherName: "",
      motherName: "",
      email: "",
      studentWhatsApp: "",
      parentWhatsApp: "",
      country: "",
      city: "",
      timeZone: "",
      schoolName: "",
      lichessId: "",
      chessComId: "",
      fideId: "",
      fideRating: "",
      uscfId: "",
      uscfRating: "",
      currentLevel: "",
      previousCoach: "",
      mainGoals: [],
      howDidYouKnow: "",
      referralName: "",
      declaration: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!scriptUrl) {
      toast.error("Please configure the Web App URL first.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          "Student's Full Name": values.fullName,
          "Date of Birth": values.dateOfBirth.toISOString().split('T')[0],
          "Father's Name": values.fatherName,
          "Mother's Name": values.motherName || "",
          "Email Address": values.email,
          "Student's WhatsApp Number": values.studentWhatsApp || "",
          "Parent's WhatsApp Number": values.parentWhatsApp || "",
          "Country": values.country,
          "City": values.city,
          "Time Zone": values.timeZone,
          "School Name": values.schoolName || "",
          "Lichess ID": values.lichessId || "",
          "Chess.com ID": values.chessComId || "",
          "FIDE ID": values.fideId || "",
          "FIDE Rating": values.fideRating || "",
          "USCF ID": values.uscfId || "",
          "USCF Rating": values.uscfRating || "",
          "Current Chess Level": values.currentLevel,
          "Previous Coach / Academy": values.previousCoach || "",
          "What is your main goal?": values.mainGoals,
          "How did you come to know about Guru Chess Academy / Shailendra Bajpai Sir?": values.howDidYouKnow,
          "If referred by someone, please mention their name.": values.referralName || "",
          "Declaration": values.declaration ? "I confirm that the information provided above is true and correct." : "No",
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      
      // With no-cors, we cannot read the response body, so we assume success if fetch resolves
      toast.success("Thank you for registering with Guru Chess Academy! We have received your information and will contact you shortly regarding your classes.", { duration: 8000 });
      form.reset();
      
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again or check if CORS is enabled on your script.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900/50">
      <div className="mb-8 text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome to Guru Chess Academy!</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Please fill out this registration form carefully. The information you provide will help us schedule your classes and maintain your student records.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-500">
          Fields marked Optional, If you have, or If any may be left blank if they do not apply.
        </p>
        <p className="font-medium text-blue-700 dark:text-blue-400">
          Coach: Shailendra Bajpai
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student's Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="mt-2">Date of Birth *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father's Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Father's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother's Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Mother's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="studentWhatsApp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student's WhatsApp Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 234 567 8900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentWhatsApp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent's WhatsApp Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 234 567 8900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City *</FormLabel>
                  <FormControl>
                    <Input placeholder="New York" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeZone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Zone *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Time Zone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeZones.map((tz) => (
                        <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="High School Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <FormField
              control={form.control}
              name="lichessId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lichess ID (Optional)</FormLabel>
                  <FormDescription>If you have</FormDescription>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="chessComId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chess.com ID (Optional)</FormLabel>
                  <FormDescription>If you have</FormDescription>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fideId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FIDE ID (Optional)</FormLabel>
                  <FormDescription>If you have</FormDescription>
                  <FormControl>
                    <Input placeholder="FIDE ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fideRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FIDE Rating (Optional)</FormLabel>
                  <FormDescription>If any</FormDescription>
                  <FormControl>
                    <Input placeholder="1500" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="uscfId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>USCF ID (Optional)</FormLabel>
                  <FormDescription>If you have</FormDescription>
                  <FormControl>
                    <Input placeholder="USCF ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="uscfRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>USCF Rating (Optional)</FormLabel>
                  <FormDescription>If any</FormDescription>
                  <FormControl>
                    <Input placeholder="1500" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <FormField
              control={form.control}
              name="currentLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Chess Level *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Tournament Player">Tournament Player</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="previousCoach"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Coach / Academy (Optional)</FormLabel>
                  <FormDescription>If you want to share</FormDescription>
                  <FormControl>
                    <Input placeholder="Name of coach or academy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mainGoals"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">What is your main goal? *</FormLabel>
                    <FormDescription>
                      Select all that apply.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {goalsList.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="mainGoals"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {item}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="howDidYouKnow"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you come to know about Guru Chess Academy / Shailendra Bajpai Sir? *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sourceList.map((source) => (
                        <SelectItem key={source} value={source}>{source}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Show referral field only if they selected Referral or Existing Student */}
            {(form.watch("howDidYouKnow") === "Referral by Friend" || form.watch("howDidYouKnow") === "Existing Student") && (
              <FormField
                control={form.control}
                name="referralName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>If referred by someone, please mention their name.</FormLabel>
                    <FormControl>
                      <Input placeholder="Referrer Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <FormField
              control={form.control}
              name="declaration"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Declaration *
                    </FormLabel>
                    <FormDescription>
                      I confirm that the information provided above is true and correct.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full h-12 text-lg font-medium" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Registration...
              </>
            ) : (
              "Submit Registration"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
