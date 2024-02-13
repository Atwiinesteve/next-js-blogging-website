"use client";

import Blogs from "./components/Blogs";
import Header from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";
import Tags from "./components/Tags";
import OtherBlogs from "./components/OtherBlogs";

export default function Home() {
	return (
		<div>
			<NextUIProvider>
				<Header />
				<Blogs />
				<Tags />
				<OtherBlogs />
			</NextUIProvider>
		</div>
	);
}
