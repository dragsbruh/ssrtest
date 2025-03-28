import { dev } from "$app/environment";
import type { PageServerLoad } from "./$types";
import { z } from "zod";

export const prerender = false;

async function getAddress() {
    if (dev) {
        return "<redacted>";
    }
    const response = await fetch("https://icanhazip.com/");
    const ipString = await response.text();
    return z.string().ip().parse(ipString.trim());
}

export const load: PageServerLoad = async () => {
    const ip = await getAddress();
    const timeSec = Math.floor(Date.now() / 1000);

    return {
        timeSec,
        ip,
    };
};
;
