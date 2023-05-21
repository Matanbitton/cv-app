import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export const formatDate = (date) => {
  const currentDate = new Date();
  const currMonth = currentDate.getMonth();
  const currYear = currentDate.getYear();

  const inputDate = new Date(date);

  return date === "" ||
    (inputDate.getMonth() === currMonth && inputDate.getYear() === currYear)
    ? "present"
    : format(parseISO(date), "MMMM yyyy");
};

export const formatDateOrBlank = (date) => {
  const currentDate = new Date();
  const currMonth = currentDate.getMonth();
  const currYear = currentDate.getYear();

  const inputDate = new Date(date);

  return date === "" ||
    (inputDate.getMonth() === currMonth && inputDate.getYear() === currYear)
    ? ""
    : format(parseISO(date), "MMMM yyyy");
};
