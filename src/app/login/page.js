import Link from "next/link";
import { Button } from "react-bootstrap";

export const metadata = {
    title: 'Đăng nhập Ship247'
}

const Login = () => {
    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="max-w-[--max-width] bg-white mx-auto min-h-screen relative">
                <div className="h-[60px] bg-orange-400 pt-4 text-white text-center relative">
                    <Link href={'/'} className="absolute left-4 top-6">
                        <img src="/icons/back.svg" />
                    </Link>
                    <div className="text-center">Đăng nhập</div>
                </div>
                <div className="px-4 pt-4 flex flex-col gap-3">
                    <input className="input" placeholder="Số điện thoại" />
                    <input className="input" placeholder="Mật khẩu" />
                </div>
                <div className="px-4 w-full absolute bottom-6">
                    <Button className="w-full h-10" variant="primary">Tiếp tục</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;