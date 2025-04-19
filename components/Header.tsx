import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Session } from "next-auth";
import { getInitials } from "@/lib/utils";


const Header = ({ session }: { session: Session }) => {
    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
            </Link>

            <ul className="flex flex-row items-center gap-8">
                <li>
                    <Link href="/my-profile">
                        <Avatar>
                            <AvatarFallback className="bg-amber-100">
                                {getInitials(session?.user?.name || "")}
                            </AvatarFallback>
                        </Avatar>
                    </Link>
                </li>
            </ul>



            {/* <ul className="flex flex-row items-center gap-8">
                <li>
                    <form
                        action={async () => {
                            "use server";

                            await signOut();
                        }}
                        className="mb-10"
                    >
                        <Button>Logout</Button>
                    </form>
                </li>
            </ul> */}
        </header>
    );
};

export default Header;