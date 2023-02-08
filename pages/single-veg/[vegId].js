import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { copytoclipboard } from "npm install --save react-copy-to-clipboard"
export default function SingleBook() {
    const router = useRouter();
    const [book, setBook] = useState(null);
    const { bookId } = router.query;
    
    useEffect(() => {
        if (!bookId) return;

        getBook(bookId);
    }, [bookId]);

    const getBook = async (id) => {
        const response = await fetch(`/api/book-by-id?id=${id}`);
        const data = await response.json();
        const { book } = data;
        setBook(book);
    }

    console.log(book);

    if (!book) {
        return (
            <div>Loading...</div>
        )
    }
    

    return (
        <div className="w-full">
            <Header name={book.title} />

            <Hero
                imgUrl={book.imgUrl}
                title={book.title}
                subtitle={book.author}
            />

            <Content>
                <div className="w-full flex flex-col">
                    <div classNmae="">
                        <copytoclipboard
                    </div>
                    
                    <button
                        className= ""
                        type="button"
                    >
                        Copy link to amazon
                    </button>

            </Content>
            <Footer
                title="Next book"
                href={`/single-book/${+book.id + 1}`}
            />
        </div>
    )
}