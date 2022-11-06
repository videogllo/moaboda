import { useRef } from "react";

const SignUpForm = ({ setIsSignIn, setIsSignUp }) => {
    const signUpRef = useRef(null);

    //뒤로가기 버튼 클릭 시
    const back = () => {
        //모달의 내용을 교체할때는 다른 애니메이션 효과 부여
        signUpRef.current.classList.remove("animate__fadeIn");
        signUpRef.current.classList.add("animate__fadeOut");
        setTimeout(() => {
            setIsSignIn(true);
            setIsSignUp(false);
        }, 500);
    };

    return (
        <div
            className="flex min-h-full flex-col justify-center py-6 sm:px-6 lg:px-8 w-full animate__animated animate__fadeIn"
            ref={signUpRef}
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-bold tracking-tight">
                    회원가입
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                        >
                            로그인 아이디
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="email"
                                required
                                className="bg-slate-800 block w-full appearance-none rounded-md px-3 py-2 placeholder-slate-200 shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            이름
                        </label>
                        <div className="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="current-password"
                                required
                                className="bg-slate-800 block w-full appearance-none rounded-md px-3 py-2 placeholder-slate-200 shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            패스워드
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="bg-slate-800 block w-full appearance-none rounded-md px-3 py-2 placeholder-slate-200 shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            패스워드 확인
                        </label>
                        <div className="mt-1">
                            <input
                                id="passwordChk"
                                name="passwordChk"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="bg-slate-800 block w-full appearance-none rounded-md px-3 py-2 placeholder-slate-200 shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            휴대전화
                        </label>
                        <div className="flex gap-1 sm:gap-2 lg:gap-4">
                            <div className="mt-1">
                                <input
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="current-password"
                                    required
                                    className="bg-slate-800 block w-full appearance-none rounded-md px-3 py-2 placeholder-slate-200 shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="current-password"
                                    required
                                    className="bg-slate-800 block w-full appearance-none rounded-md px-3 py-2 placeholder-slate-200 shadow-sm sm:text-sm"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    id="number"
                                    name="number"
                                    type="number"
                                    autoComplete="current-password"
                                    required
                                    className="bg-slate-800 block w-full appearance-none rounded-md px-3 py-2 placeholder-slate-200 shadow-sm sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-24">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-slate-900 py-2 px-4 text-sm font-medium text-slate-200 border shadow-sm hover:bg-slate-800 transition-all focus:outline-none"
                        >
                            제출
                        </button>
                        <div
                            onClick={back}
                            className="flex w-1/2 cursor-pointer justify-center rounded-md bg-slate-900 py-2 px-4 text-sm font-medium text-slate-200 border shadow-sm hover:bg-slate-800 transition-all focus:outline-none"
                        >
                            뒤로
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUpForm;
