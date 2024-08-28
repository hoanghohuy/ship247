import Link from "next/link";

const Menu = () => {
    return (
        <div className="py-2 w-full absolute bottom-0 shadow-lg flex justify-around">
            {/* HOME */}
            <Link href={'/'} className='flex flex-col items-center text-orange-500'>
              <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Trang chủ</div>
            </Link>
            {/* Đơn hàng */}
            <Link href={'/create-order'} className='flex flex-col items-center hover:text-orange-500'>
              <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Đơn hàng</div>
            </Link>
            {/*Tạo đơn */}
            <Link href={'/'} className='flex flex-col items-center hover:text-orange-500'>
            <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Tạo đơn</div>
            </Link>
            {/* Tìm Ship247 */}
            <Link href={'/'} className='flex flex-col items-center hover:text-orange-500'>
            <svg class="flex h-6 w-6 items-center justify-center " width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.875 2.83487C13.4789 1.72171 11.4953 1.72171 10.0991 2.83487L4.24249 7.56223C3.46851 8.158 3.0096 9.07543 3 10.0528V17.9056C3 20.1708 4.84287 22 7.10734 22H8.82886C9.95984 22 10.9565 21.0354 10.9565 19.8943V17.1342C10.9565 16.9864 11.0768 16.8592 11.2349 16.857H13.8127C13.9726 16.857 14.0952 16.9851 14.0952 17.1342V19.9028C14.095 21.0459 15.0102 21.9732 16.1478 21.9997L17.8927 22C20.1571 22 22 20.1708 22 17.9056L21.9999 10.0404C21.9866 9.06512 21.5285 8.15036 20.7575 7.55372L14.875 2.83487Z" fill="currentColor"></path>
              </svg>
              <div className='text-[12px]'>Tìm Ship247</div>
            </Link>
            {/* Cá nhân */}
            <Link href={'/'} className='flex flex-col items-center hover:text-orange-500'>
              <svg class="flex h-6 w-6 items-center justify-center " width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="style=fill">
                        <g id="profile">
                            <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z" fill="currentColor"></path>
                            <path id="rec (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z" fill="currentColor"></path>
                        </g>
                    </g>
              </svg>
              <div className='text-[12px]'>Cá nhân</div>
            </Link>
            {/* <Button onClick={() => {window.location.assign('/login')}} className="w-full h-10" variant="primary">Đăng nhập</Button> */}
        </div>
    )
}

export default Menu;