import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
	return(
		<main className="flex items0center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full flex-col p-4 Md:-mt-32 max-w-[400px] space-y-2.5">
				<div className="flex-h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:Ph-36">
					<div className="w-32 text-white md:w-36">
						<AcmeLogo />
					</div>
				</div>
				<LoginForm />
			</div>
		</main>
	)
}