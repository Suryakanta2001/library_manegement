import React from 'react'
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import BookList from '@/components/BookList';
import { sampleBooks } from '@/constants';
const Profile = () => {
    return (
        <>
            <form
                action={async () => {
                    "use server";

                    await signOut();
                }}
                className="mb-10"
            >
                <Button>Logout</Button>
            </form>

            <BookList
                title='Borrowed Books'
                books={sampleBooks}
            />
        </>
    );
};

export default Profile;