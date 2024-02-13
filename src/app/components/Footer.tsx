import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Footer() {
	return (
		<footer className="bg-white text-gray-600 mt-32 sm:text-center">
			<div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
				<div className="sm:text-center sm:flex sm:flex-col sm:items-center sm:justify-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Porto</h2>
					<p className="mb-4">
						Porto is a premium multipurpose Ghost theme suitable for personal,
						professional, magazine, brand blog and newsletter.
					</p>
					<div className="flex space-x-4">
						<DribbbleIcon className="text-gray-600 h-6 w-6" />
						<FacebookIcon className="text-gray-600 h-6 w-6" />
						<LinkedinIcon className="text-gray-600 h-6 w-6" />
						<InstagramIcon className="text-gray-600 h-6 w-6" />
						<TwitterIcon className="text-gray-600 h-6 w-6" />
					</div>
				</div>
				<div>
					<h3 className="text-xl font-semibold mb-4">Features</h3>
					<ul className="space-y-2">
						<li>
							<Link className="hover:text-gray-900" href="#">
								Style Guide
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Tags
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Authors
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Features
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xl font-semibold mb-4">Pages</h3>
					<ul className="space-y-2">
						<li>
							<Link className="hover:text-gray-900" href="#">
								Membership
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Sign in
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Sign up
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Account free
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Account paid
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xl font-semibold mb-4">About</h3>
					<ul className="space-y-2">
						<li>
							<Link className="hover:text-gray-900" href="#">
								Privacy policy
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Terms
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								Contact
							</Link>
						</li>
						<li>
							<Link className="hover:text-gray-900" href="#">
								404 error
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t border-gray-200 py-4">
				<div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
					<span className="text-sm text-gray-500">
						© Porto 2024. Published with Ghost and Porto
					</span>
					<Link className="text-sm text-gray-500 hover:text-gray-900" href="#">
						Back to top
					</Link>
				</div>
			</div>
		</footer>
	);
}

function DribbbleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<circle cx="12" cy="12" r="10" />
			<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
			<path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
			<path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
		</svg>
	);
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	);
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}
