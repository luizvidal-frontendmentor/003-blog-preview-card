import AppFooter from "@/components/AppFooter";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import React from "react";
import "./globals.css";

const figtree = Figtree({
	variable: "--font-figtree",
	subsets: ["latin"],
	weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
	title: "Frontend Mentor | Blog preview card",
	description: "Frontend Mentor Challenge",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${figtree.variable} antialiased h-screen flex flex-col`}
			>
				<main className="w-full h-full flex items-center justify-center">
					{children}
				</main>
				<AppFooter />
			</body>
		</html>
	);
}
