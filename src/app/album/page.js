import Image from "next/image";
import postImag from "/src/assets/add_post.png"
import postImg from "@/assets/dashboard_admin-profile.png"

export const metadata = {
    title: "Next.js | Album",
    description: 'this is About page for my next.js app'
}

const AlbumPage = () => {
    return (
        <div>

            <Image
                src='https://i.ibb.co/QQxQVgD/bmw-yang.jpg'
                alt="bike"
                width={500}
                height={400}
            />

            <Image
                src={postImag}
                alt="post"
                width={500}
                height={500}
            />
            
            <Image
                src={postImg}
                alt="post"
                width={500}
                height={500}
            />
        </div>
    );
};

export default AlbumPage;