'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-slate-100'>
      <div className='max-w-[--max-width] bg-white mx-auto min-h-screen relative'>
        <header className='p-3'>Ship247</header>
        <main className='p-3'>
            <img src='/images/banner.png' className='rounded-lg' />
            <div className='mt-3 w-full flex gap-3'>
              <Link className='block w-full bg-orange-400 p-3 rounded-lg text-white' href={'/create-order'}>
                Tạo đơn
              </Link>
              <Link className='block w-full bg-orange-400 p-3 rounded-lg text-white' href={'/create-order'}>
                Quản lý đơn
              </Link>
            </div>
        </main>
        {/* <footer>
          aaaa
        </footer> */}
        <div className="py-3 w-full absolute bottom-0 shadow-lg flex justify-around">
            {/* HOME */}
            <Link href={'/'} className='flex flex-col items-center text-orange-500'>
              <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Trang chủ</div>
            </Link>
            {/* TẠO ĐƠN */}
            <Link href={'/create-order'} className='flex flex-col items-center hover:text-orange-500'>
              <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Tạo đơn</div>
            </Link>
            {/* Tra cứu */}
            <Link href={'/'} className='flex flex-col items-center hover:text-orange-500'>
            <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Tra cứu</div>
            </Link>
            {/* Tìm Ship247 */}
            <Link href={'/'} className='flex flex-col items-center hover:text-orange-500'>
            <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Tìm Ship247</div>
            </Link>
            {/* <Button onClick={() => {window.location.assign('/login')}} className="w-full h-10" variant="primary">Đăng nhập</Button> */}
        </div>
      </div>
    </div>
  );
}
