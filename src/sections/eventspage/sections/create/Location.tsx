import { createVenue, getVenue, getVenues } from "@/api/venues";
import SelectInput from "@/components/form/SelectInput";
import TextInput from "@/components/form/TextInput";
import { COUNTRIES } from "@/constants/Countries";
import { useCallback, useEffect, useState } from "react";

export default function Location({ toggleOnline, values, setValue }: any) {
  const [addVenueFlag, setAddVenueFlag] = useState(false);
  const [venues, setVenues] = useState<Array<{ label: string; value: string }>>(
    []
  );
  const COUTRIES_LABELS = COUNTRIES.map((item) => item.label);

  const activateAddVenueFlag = useCallback(() => {
    setAddVenueFlag(true);
  }, []);

  const disableAddVenueFlag = useCallback(() => {
    setAddVenueFlag(false);
  }, []);

  const addVenue = () => {
    createVenue({ ...values, capacity: 200 }).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    if (values.venue) {
      getVenue(values.venue).then((res) => {
        console.log(res);
      });
    }
  }, [values.venue]);

  useEffect(() => {
    getVenues().then((data: any) => {
      setVenues(
        data.map((item: any) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      );
    });
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-2xl font-bold">Location</p>
      <div className="space-y-4">
        <div className="inline-flex gap-4" role="group">
          <button
            type="button"
            onClick={() => toggleOnline(false)}
            className={`px-8 py-3 border-2 border-black rounded focus:ring-0 ${
              !values.isOnline
                ? "bg-gray-900 text-white"
                : "text-gray-900 bg-transparent"
            }`}
          >
            Venue
          </button>
          <button
            type="button"
            onClick={() => toggleOnline(true)}
            className={`px-8 py-3 border-2 border-black rounded focus:ring-0 ${
              values.isOnline
                ? "bg-gray-900 text-white"
                : "text-gray-900 bg-transparent"
            }`}
          >
            Online
          </button>
        </div>
        {!values.isOnline && !addVenueFlag && (
          <div>
            <SelectInput
              placeholder="Event Venue"
              label="Event Venue"
              data={venues}
              onChange={(val) => setValue("venue", val)}
              value={values.venue}
              topChild={
                <button
                  className="text-blue-600 text-left block w-full px-6 py-3 cursor-pointer font-bold hover:bg-slate-200"
                  role="menuitem"
                  onClick={activateAddVenueFlag}
                >
                  Can't find a venue ? Add one
                </button>
              }
            />
          </div>
        )}
        {!values.isOnline && addVenueFlag && (
          <div className="space-y-4 grid grid-cols-2 gap-x-4">
            <div className="col-span-2">
              <TextInput
                placeholder="Eg: Innospace"
                label="Venue Name"
                name="venue_name"
                onChange={(val: string) => setValue("venue_name", val)}
                value={values.venue_name}
                required={!values.isOnline && addVenueFlag}
              />
            </div>
            <TextInput
              placeholder="Eg: 56 Sidi Okba"
              label="Street Address"
              name="venue_street"
              onChange={(val: string) => setValue("venue_street", val)}
              value={values.venue_street}
              required={!values.isOnline && addVenueFlag}
            />
            <TextInput
              placeholder="Eg: Tighennif"
              label="City"
              name="venue_city"
              onChange={(val: string) => setValue("venue_city", val)}
              value={values.venue_city}
              required={!values.isOnline && addVenueFlag}
            />
            <SelectInput
              placeholder="Choose a Country"
              label="Country"
              data={COUTRIES_LABELS}
              onChange={(val) => setValue("venue_country", val)}
              value={values.venue_country}
              required={!values.isOnline && addVenueFlag}
            />
            <div className="flex gap-x-4">
              <TextInput
                placeholder="Eg: Mascara"
                label="State/Province"
                name="venue_state"
                onChange={(val: string) => setValue("venue_state", val)}
                value={values.venue_state}
                required={!values.isOnline && addVenueFlag}
              />
              <TextInput
                placeholder="Eg: 29002"
                label="Postal Code"
                name="venue_postal_code"
                onChange={(val: string) => setValue("venue_postal_code", val)}
                value={values.venue_postal_code}
                required={!values.isOnline && addVenueFlag}
              />
            </div>
            <div className="pt-4">
              <button
                type="button"
                className="border border-black rounded py-3 px-12 text-black text-lg font-bold hover:opacity-80"
                onClick={addVenue}
              >
                Search Venue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
