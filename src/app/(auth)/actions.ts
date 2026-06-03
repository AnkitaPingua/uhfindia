"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

/* =========================
   LOGIN
========================= */
export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      error: "Email and password are required",
    };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: "Unable to fetch user.",
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    return {
      error: "Profile not found.",
    };
  }

  revalidatePath("/", "layout");

  switch (profile.role) {
    case "intern":
      redirect("/intern");

    case "team_leader":
      redirect("/teamleader");

    case "executive":
      redirect("/executive");

    case "admin":
      redirect("/admin");

    default:
      redirect("/");
  }
}

/* =========================
   SIGNUP
========================= */
export async function signup(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  if (!email || !password || !name) {
    return {
      error: "Please fill all required fields.",
    };
  }

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: name,
      phone,
    },
  });

  console.log("SIGNUP DATA:", JSON.stringify(data, null, 2));
  console.log("SIGNUP ERROR:", error);

  if (error) {
    return {
      success: false,
      error: error.message,
      data,
    };
  }

  const user = data?.user;

  if (user) {
    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .upsert(
        {
          id: user.id,
          full_name: name,
          phone,
          role: "intern",
        },
        { onConflict: "id", ignoreDuplicates: true }
      );

    if (profileError) {
      console.error("PROFILE UPSERT ERROR:", profileError);
    }
  }

  return {
    success: true,
    error: null,
    data,
  };
}

/* =========================
   LOGOUT
========================= */
export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");

  redirect("/login");
}