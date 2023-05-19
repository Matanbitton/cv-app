import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export const formatDate = (date) => {
  if (date === "") {
    return "present";
  }
  const dateFormated = format(parseISO(date), "MMMM yyyy");

  return dateFormated;
}

export const formatDateOrBlank = (date) => {
  return formatDate(date) === "present"? "": formatDate(date);
}
