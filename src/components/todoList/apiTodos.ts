import { supabase } from "./supabase";

type taskProps = Promise<string[]>;

export default async function getTasks(): taskProps {
  const { data: tasks } = await supabase.from("tasks").select("*");
  return tasks;
}
