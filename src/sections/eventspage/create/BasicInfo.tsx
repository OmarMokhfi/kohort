"use client";

import DateInput from "@/components/form/DateInput";
import MultiSelectInput from "@/components/form/MultiSelect";
import SelectInput from "@/components/form/SelectInput";
import TextInput from "@/components/form/TextInput";
import TimeInput from "@/components/form/TimeInput";
import ToastMessage from "@/components/notifications/Message";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Location from "../sections/create/Location";

declare namespace Intl {
  type Key =
    | "calendar"
    | "collation"
    | "currency"
    | "numberingSystem"
    | "timeZone"
    | "unit";

  function supportedValuesOf(input: Key): never[];
}

interface IDictionary<> {
  [id: string]: string;
}

const ERRORS: IDictionary = {
  server_error: "An error occured during login please try again.",
  password_incorrect: "The password you entered is incorrect.",
  user_not_exists: "User with the provided email does not exist.",
};

export default function BasicInfo() {
  const [error, setError] = useState("");
  const [timezones, setTimezones] = useState([]);
  const formik = useFormik({
    initialValues: {
      title: "",
      tags: [],
      isOnline: false,
      addVenueFlag: false,
      venue: "",
      venue_name: "ESI SBA",
      venue_street: "8 Mai 1945",
      venue_city: "Sidi Bel Abbès",
      venue_country: "Algeria",
      venue_state: "Sidi Bel Abbès",
      venue_postal_code: "22000",
      startDate: null,
      endDate: null,
      startTime: undefined,
      endTime: undefined,
      timezone: "",
    },
    onSubmit: (values: any) => {},
  });

  useEffect(() => {
    setTimezones(Intl.supportedValuesOf("timeZone"));
  }, []);

  return (
    <form className="md:w-[700px]" onSubmit={formik.handleSubmit}>
      <div className="space-y-8 w-full">
        <div className="w-full space-y-6">
          {error.length > 0 && (
            <ToastMessage message={ERRORS[error]} type="error" />
          )}
          <p className="text-2xl font-bold">Information</p>
          <TextInput
            placeholder="Event Title"
            label="Event Title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            required
          />
          <MultiSelectInput
            placeholder="Tags (...Hit Enter to add a new tag)"
            name="tags"
            label="Keywords"
            onChange={(val: Array<string>) =>
              formik.setFieldValue(
                "tags",
                val.map((item) =>
                  item
                    .replaceAll("#", "")
                    .replaceAll(" ", "_")
                    .toLocaleLowerCase()
                )
              )
            }
            value={formik.values.tags}
          />
          <hr className="w-full h-[0.5px] mx-auto bg-black border-0 rounded" />
          <Location
            toggleOnline={(val: boolean) =>
              formik.setFieldValue("isOnline", val)
            }
            setValue={formik.setFieldValue}
            values={{
              isOnline: formik.values.isOnline,
              venue: formik.values.venue,
              venue_name: formik.values.venue_name,
              venue_street: formik.values.venue_street,
              venue_city: formik.values.venue_city,
              venue_country: formik.values.venue_country,
              venue_state: formik.values.venue_state,
              venue_postal_code: formik.values.venue_postal_code,
            }}
          />
          <hr className="w-full h-[0.5px] mx-auto bg-black border-0 rounded" />
          <div className="space-y-4">
            <p className="text-2xl font-bold">Date and Time</p>
            <div className="grid grid-cols-2 gap-4">
              <DateInput
                placeholder="Start Date"
                label="Start Date"
                name="startDate"
                onChange={(val) => formik.setFieldValue("startDate", val)}
                value={formik.values.startDate}
                required
              />
              <TimeInput
                placeholder="Start Time"
                label="Start Time"
                name="startTime"
                onChange={formik.handleChange}
                value={formik.values.startTime}
                required
              />
              <DateInput
                placeholder="End Date"
                label="End Date"
                name="endDate"
                onChange={(val) => formik.setFieldValue("endDate", val)}
                value={formik.values.endDate}
                required
              />
              <TimeInput
                placeholder="End Time"
                label="End Time"
                name="endTime"
                onChange={formik.handleChange}
                value={formik.values.endTime}
                required
              />
              {timezones.length > 0 && (
                <SelectInput
                  placeholder="Timezone"
                  label="Timezone"
                  data={timezones}
                  onChange={(val) => formik.setFieldValue("timezone", val)}
                  value={formik.values.timezone}
                  required
                />
              )}
            </div>
          </div>
          <hr className="w-full h-[0.5px] mx-auto bg-black border-0 rounded" />
          <div className="w-fit ml-auto space-x-4">
            <button
              type="button"
              className="border border-black rounded py-4 px-12 text-black text-lg font-bold hover:opacity-80"
            >
              Cancel
            </button>
            <button className="bg-black rounded py-4 px-12 text-white text-lg font-bold hover:opacity-80">
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
