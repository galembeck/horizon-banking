import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Horizon Banking ",
        template: `%s | Horizon Banking`
    },
    description: "Horizon Banking is banking application built with modern web technologies such as Next.js, TailwindCSS, Shadcn-UI, Stripe and others, featuring a robust finance management dashboard designed to help users manage their finances efficiently.",
    icons: {
        icon: [
            {
                url: "../app/favicon.ico",
                href: "../app/favicon.ico",
            }
        ]
    },
    metadataBase: new URL("https://horizon-banking-galembeck.vercel.app"),
};