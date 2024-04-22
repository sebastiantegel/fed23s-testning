import axios from "axios";
import { IPerson } from "../models/IPerson";

export const getPersons = async (): Promise<IPerson[]> => {
  const response = await axios.get<IPerson[]>("...");

  return response.data;
};
