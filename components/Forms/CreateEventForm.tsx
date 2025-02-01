"use client";
import { createEventSchema } from "@/app/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import useFetch from "@/hooks/useFetch";
import { createEvent } from "@/actions/events";
import { useRouter } from "next/navigation";

function CreateEventForm({ onFormSubmit }: { onFormSubmit: () => void }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      duration: 10,
      isPrivate: false,
    },
  });

  const {loading, error, fn : fnCreateEvent} = useFetch(createEvent);
  const router = useRouter();

  async function onSubmit (data) {
    await fnCreateEvent(data);
    if (!error && !loading) {
      onFormSubmit();
      router.refresh();
    }
  }

  return (
    <form className="space-y-4 mx-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title" className="font-medium">
          Title
        </label>
        <Input id="title" {...register("title")} className="mt-2" />
        {errors.title && errors.title.message && (
          <p className="text-red-500 text-sm">
            {errors.title.message.toString()}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="description" className="font-medium">
          Event Description
        </label>
        <Input id="title" {...register("description")} className="mt-2" />
        {errors.description && errors.description.message && (
          <p className="text-red-500 text-sm">
            {errors.description.message.toString()}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="duration" className="font-medium">
          Duration (in minutes)
        </label>
        <Input
          id="duration"
          {...register("duration", { valueAsNumber: true })}
          type="number"
          className="mt-2"
        />
        {errors.duration && errors.duration.message && (
          <p className="text-red-500 text-sm">
            {errors.duration.message.toString()}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="isPrivate" className="font-medium">
          Event Privacy
        </label>
        <Controller
        name="isPrivate"
        control={control}
        render={({ field }) => (
            <Select value={field.value?.toString()} onValueChange={(value) => field.onChange(value === "true")}>
            <SelectTrigger>
              <SelectValue placeholder="Select Privacy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Private</SelectItem>
              <SelectItem value="false">Public</SelectItem>
            </SelectContent>
          </Select>
        )}
        />
        {errors.duration && errors.duration.message && (
          <p className="text-red-500 text-sm">
            {errors.duration.message.toString()}
          </p>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
      <Button className="w-full" disabled={loading}>{loading ? "Creating Event..." : "Create Event"}</Button>
    </form>
  );
}

export default CreateEventForm;
