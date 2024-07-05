
export const metadata = {
    title : 'Next.js | blog',
    description : 'this is blog page for my next.js app'
}

const DynamicPost = ({ params, searchParams }) => {

    console.log(params.id);
    console.log(searchParams);

    return (
        <div className=" flex items-center justify-center mt-10 mx-auto space-y-3">
            <div>
                <h1>This is Dynamic Page for <span className="text-green-600">{params.id}</span></h1>
                <p>product : {searchParams.category}</p>
                <p>Price : {searchParams.price}</p>
            </div>
        </div>
    );
};

export default DynamicPost;