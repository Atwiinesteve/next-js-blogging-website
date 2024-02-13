"use client";

import Blogs from "./components/Blogs";
import Header from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
	return (
		<div>
			<NextUIProvider>
				<Header />
				<Blogs />
			</NextUIProvider>
		</div>
	);
}
