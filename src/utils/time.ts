import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");

export const createdAt = (): string => {
  return moment().format();
};
