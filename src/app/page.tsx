"use client";

import Blogs from "./components/Blogs";
import Header from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";
import Tags from "./components/Tags";
import OtherBlogs from "./components/OtherBlogs";
import SubscriptionForm from "./components/SubscriptionForm";

export default function Home() {
	return (
		<div>
			<NextUIProvider>
				<Header />
				<Blogs />
				<Tags />
				<OtherBlogs />
				<SubscriptionForm />
			</NextUIProvider>
		</div>
	);
}
