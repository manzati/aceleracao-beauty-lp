"use server";

import { supabase } from "@/lib/supabase";

export async function submitLead(formData: FormData) {
  const name = formData.get("name") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const instagram = formData.get("instagram") as string;

  if (!name || !whatsapp || !instagram) {
    return { error: "Todos os campos são obrigatórios." };
  }

  try {
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name,
          whatsapp,
          instagram,
        },
      ])
      .select();

    if (error) {
      console.error("Erro no Supabase:", error);
      return { error: "Falha ao salvar o contato. Tente novamente." };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Erro inesperado:", err);
    return { error: "Ocorreu um erro inesperado." };
  }
}
