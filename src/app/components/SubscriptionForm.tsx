import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SubscriptionForm() {
	return (
		<div className="container bg-[#3e2099] p-11 rounded-none h-auto py-20  mx-auto text-white mt-32">
			<div className="flex items-center justify-center">
				<div className="flex-1">
					<h1 className="text-[44px] leading-[38px] font-bold mb-4">
						Subscribe to Porto newsletter and stay updated.
					</h1>
					<p className="mb-4 text-[23px]">
						Don&apos;t miss anything. Get all the latest posts delivered straight to
						your inbox. It&apos;s free!
					</p>
				</div>
				<div className="bg-white p-6 rounded-none shadow-lg flex-[0.6]">
					<form className="flex flex-col space-y-4">
						<Input
							className="bg-gray-100 rounded-md p-4 text-gray-900"
							placeholder="Your name"
							type="text"
						/>
						<Input
							className="bg-gray-100 rounded-md p-4 text-gray-900"
							placeholder="Your email address"
							type="email"
						/>
						<Button className="bg-black text-white rounded-md p-4">
							Subscribe
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
