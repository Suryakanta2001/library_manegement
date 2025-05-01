import React from 'react'
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import BookList from '@/components/BookList';
// import { sampleBooks } from '@/constants';
import { desc } from 'drizzle-orm';
import { db } from '@/database/drizzle';
import { books } from '@/database/schema';
import BorrowBook from '@/components/BorrowBook';

const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];
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
                books={latestBooks}
                containerClassName="mt-28"
            />
        </>
    );
};

export default Profile;