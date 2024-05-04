"use client";
import { ClientSafeProvider, getProviders, signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { Suspense, useEffect, useState } from "react";
import { LiteralUnion } from "react-hook-form";
import { BuiltInProviderType } from "next-auth/providers/index";
import Link from "next/link";
import { IoIosArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import SignInButton from "./signInButton";
import SignInWithVLJ from "./signInWithVLJ";
import RecruiterRegisterAccountForm from "./register/recruiter";
import CandidateRegisterAccountForm from "./register/candidate";

export default function PreHandler() {
	const { data: session, status, update } = useSession();
	const loading = status === "loading";

	// If the user is already logged in, redirect.
	// Note: Make sure not to redirect to the same page
	// To avoid an infinite loop!
	const router = useRouter();
	useEffect(() => {
		if (status === "authenticated") {
			router.push("/home");
		}
	}, [status, router]);

	const searchParams = useSearchParams();

	const prePage = searchParams.get("pre");

	const [isShowRedirectQuestionDialog, setShowRedirectQuestionDialog] = useState(false);
	const [isShowRecruiterRegisterAccount, setShowRecruiterRegisterAccount] = useState(false);
	const [isShowCandidateRegisterAccount, setShowCandidateRegisterAccount] = useState(false);

	const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
	useEffect(() => {
		(async () => {
			setProviders((await getProviders()) ?? null);
		})();
	}, []);

	if (loading) return <div>Loading...</div>;
	return (
		providers !== null && (
			<div className='flex flex-col h-dvh'>
				<div className='w-full border-b-[1px] border-slate-200'>
					<Link href={`/${prePage || "/"}`} className='flex w-fit items-center gap-1 p-2 hover:text-orange-500'>
						<IoIosArrowBack />
						<div>Back</div>
					</Link>
				</div>
				<div className='w-full flex flex-grow flex-wrap-reverse bg-slate-200 gap-[1px]'>
					<div className='flex-grow p-16 grid place-items-center bg-white'>
						<div className='flex flex-col gap-4 p-20 border-[1px] border-slate-200 w-fit items-center'>
							{providers["azure-ad"].id && (
								<SignInButton name='Microsoft' handleClick={() => signIn("azure-ad")} logoSrc='/image/logo/microsoft_logo.webp' helper='Chỉ hỗ trợ đối với tài khoản ứng viên' />
							)}
							<div>- Hoặc -</div>
							{providers.credentials.id && (
								<Suspense fallback={<div>Loading...</div>}>
									<SignInWithVLJ />
								</Suspense>
							)}
							<div className='flex items-start text-xs'>
								<div className='flex px-2 py-1 gap-1 items-center'>
									<div>Chưa có tài khoản?</div>
									<BsArrowRight />
								</div>
								<div className='flex flex-col gap-1'>
									<div
										onClick={() => {
											setShowRedirectQuestionDialog((pre) => !pre);
											setShowCandidateRegisterAccount(false);
											setShowRecruiterRegisterAccount(false);
										}}
										className='cursor-pointer flex gap-1 items-center border-[1px] px-2 py-1'
									>
										<div>Tạo tài khoản</div>
										<IoMdArrowDropdown />
									</div>
									<div className='relative'>
										{isShowRedirectQuestionDialog && (
											<div className='absolute flex flex-col'>
												<button
													onClick={() => {
														setShowRecruiterRegisterAccount(true);
														setShowCandidateRegisterAccount(false);
													}}
													className='bg-blue-200 px-2 py-1 hover:bg-blue-300'
													type='button'
												>
													Nhà tuyển dụng
												</button>
												<button
													onClick={() => {
														setShowCandidateRegisterAccount(true);
														setShowRecruiterRegisterAccount(false);
													}}
													className='bg-red-200 px-2 py-1 hover:bg-red-300'
													type='button'
												>
													Ứng viên
												</button>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					{(isShowRecruiterRegisterAccount || isShowCandidateRegisterAccount) && (
						<div className='flex-grow p-16 grid place-items-center bg-white'>
							{isShowRecruiterRegisterAccount && <RecruiterRegisterAccountForm />}
							{isShowCandidateRegisterAccount && <CandidateRegisterAccountForm />}
						</div>
					)}
				</div>
			</div>
		)
	);
}
