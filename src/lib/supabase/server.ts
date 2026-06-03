import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    if (typeof cookieStore?.getAll === 'function') {
                        return cookieStore.getAll();
                    }
                    return [];
                },

                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(
                            ({ name, value, options }) => {
                                if (typeof cookieStore?.set === 'function') {
                                    cookieStore.set(name, value, options);
                                }
                            }
                        );
                    } catch {
                        // Ignore in Server Components
                    }
                },
            },
        }
    );
}