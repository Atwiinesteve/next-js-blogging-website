import { Button } from "@/components/ui/button";
import { XCircleIcon } from "lucide-react";
import { JSX, SVGProps } from "react";

export default function UpperNavbar() {
	return (
		<div className="bg-[#1e40af] px-4 py-2 flex justify-between items-center">
			<div className="flex items-center space-x-2">
				<CloudLightningIcon className="text-yellow-400" />
				<span className="text-sm font-medium text-white">
					Get access to premium posts. try our Gold package for 14 days free
				</span>
			</div>
			<Button className="text-white bg-transparent hover:bg-blue-700">
				<XIcon className="h-4 w-4" />
			</Button>
		</div>
	);
}

function CloudLightningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
			<path d="m13 12-3 5h4l-3 5" />
		</svg>
	);
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
