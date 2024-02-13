/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qXiDDShMZ3k
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { JSX, SVGProps } from "react";

export default function MainNavbar() {
	return (
		<header className="bg-[#1a1a1a]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<h1 className="text-xl font-bold text-white italic">Porto</h1>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a
									className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="#">
									Style Guide
								</a>
								<a
									className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="#">
									Tags
								</a>
								<a
									className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="#">
									Authors
								</a>
								<div className="relative">
									<button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
										<DropdownMenu>
											<DropdownMenuTrigger>Posts</DropdownMenuTrigger>
											<ChevronDownIcon className="ml-1 w-4 h-4" />
											<DropdownMenuContent align="start" className="rounded-none">
												<DropdownMenuItem>Category</DropdownMenuItem>
												<DropdownMenuItem>Date</DropdownMenuItem>
												<DropdownMenuItem>Tags</DropdownMenuItem>
												<DropdownMenuItem>Author</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</button>
								</div>
								<a
									className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="#">
									Membership
								</a>
								<a
									className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="#">
									Contact
								</a>
								<div className="relative">
									<button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
										<DropdownMenu>
											<DropdownMenuTrigger>More</DropdownMenuTrigger>
											<ChevronDownIcon className="ml-1 w-4 h-4" />
											<DropdownMenuContent align="start" className="rounded-none">
												<DropdownMenuItem>Profile</DropdownMenuItem>
												<DropdownMenuItem>Billing</DropdownMenuItem>
												<DropdownMenuItem>Team</DropdownMenuItem>
												<DropdownMenuItem>Subscription</DropdownMenuItem>
												<DropdownMenuLabel>Help</DropdownMenuLabel>
												<DropdownMenuItem>Docs</DropdownMenuItem>
												<DropdownMenuItem>FAQ</DropdownMenuItem>
												<DropdownMenuItem>Support</DropdownMenuItem>
												<DropdownMenuItem>Feedback</DropdownMenuItem>

											</DropdownMenuContent>
										</DropdownMenu>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6">
							<button className="bg-white p-1 rounded-full text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
								<SearchIcon className="h-6 w-6" />
							</button>
							<button className="bg-white p-1 rounded-full text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-3">
								<BellIcon className="h-6 w-6" />
							</button>
							<a
								className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								href="#">
								Sign in
							</a>
							<Button className="bg-[#bd1e59] text-white px-3 py-2 rounded-md text-sm font-medium">
								Become member
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
		</svg>
	);
}

function ChevronDownIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	);
}
