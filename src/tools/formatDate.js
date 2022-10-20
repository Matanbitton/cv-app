import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default function formatDate(date) {
  if (date === "") {
    return "present";
  }
  const dateFormated = format(parseISO(date), "MMMM yyyy");

  return dateFormated;
}
