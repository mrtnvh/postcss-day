import { getYear, differenceInDays, isWithinInterval } from "date-fns";

export const previousEditionStart = `2025-06-06`;
export const nextEditionStart = `2026-06-11 00:00`;
export const nextEditionStop = `2026-06-12 21:00`;

export const getActiveMessage = () => `
  CSSday is happening right now!
  https://cssday.nl
`;

export function getInactiveMessage() {
  const days = differenceInDays(new Date(nextEditionStart), new Date());
  const dayTerm = days === 1 ? "day" : "days";

  return `
  Unfortunately, CSS Day ${getYear(previousEditionStart)} has ended.

  Fortunately, only ${days} ${dayTerm} until the next edition.

  In the meanwhile, have a bitterbal.

                 ▒▒▓▒▓▓▓▓▓▒▒▒▓
              ▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒
         ▒▓▓▓▓█▓▓▓▓▓▓▓▒▒▓█▓▓▓██▓▓▓▓▓▓▒
       ▒▒▒▒▓▓▓▓▓▓▒▓▓██▓█▓▒█▓▒▓▓▓▓▓▓▓▓▓▓▓▒
     ▒▒▒▒▓██▓▒▓▓▓▓▓▓▓▒▒▓██▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▒
    ▒▒▓▓▓▓▓▓▓███▒▒▒▓▓▓▓▓██▓▒▓█▓█▓███▓▓▓▓▓▓▓▓▓▓
   ▒▒▒▓▓▓▓▓▓▓▓█▓▒▒▓▓▓▓██████▓▓▓▓█████▓▓▓▓▓▓▓▓▓
   ▒▒▓█▓▓▓▓▓▓▓▓▓▓▒▒▓████▓▓▓▓▓▓▓▓▓███▓▓█▓██▓▓▓▒
  ▒▒▒▓▒▓▓▓▒▒▓▓▓▓▓▓▓▓███████▓█▒▓▓█████▓▒▓▓▓▓▓▓▓▒
   ▒▒▒▒▓▒▒▒▓▓▓██▒▓███▓▓▓███▓▓█▓█▓▓▓██▓▓█▓▓▓▓▓▓█
   ▒▒▒▒▓▓▒▒▒▓██▓▓▓█████▓██▓▓▓▓▓████▓▓▓▓██▓▓████
    ▒▒▓█▓▓▓▒▓▒██▓███▒▓█▓▓█████▓▓███▓▓▓███▓▓███
     ▒▓▒▓██▓▓▓▓█████▓▓▓██▓▓▓█▓█▓▓▓▓▓▓▓▓██████
     ▒▒▒▒▓▒▒▒▓▓▓███▓▓█▓▓▓██▓███▓▓▒▒▓▓██▓████
          ▒▓▒▓▓▓██▓▓█▓▓███▓▓██▓▓██▓█▓████
              ▒▒▓▓▓▓▓███████▓██▓▓███
                 ▒▒▒▓▓▓▓▓██████

                https://cssday.nl
`;
}

function getMessage() {
  const isActive = isWithinInterval(new Date(), {
    start: new Date(nextEditionStart),
    end: new Date(nextEditionStop),
  });

  const message = isActive ? getActiveMessage() : getInactiveMessage();
  return `
/* =================================================================== */
${message}
/* =================================================================== */
`;
}

/**
 * @type {import('postcss').PluginCreator}
 */
const module = () => {
  const message = getMessage();
  console.log(message);
  return {
    postcssPlugin: "postcss-day",
  };
};

export default module;

export const postcss = true;
