import "../pages_css/about.css";

function about(){
    return (
        <div className="bg-gray-300 grid grid-cols-1 gap-8 p-[5%] min-h-[80vh]">
            <div className="border-2 border-blue-500 p-4 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-4">ABOUT PAGE</h1>
                <h3 className="mb-4 text-gray-700">
                Vaughn Lester<br />
                Email: vaughnl2342@gmail.com<br />
                C: 774-826-9906
                </h3>
                <p className="text-gray-600">
                Welcome to my digital portfolio. Here are my web development projects organized together within one page. Simply click the link on each project card to be redirected to the application.
                </p>
            </div>
        </div>
    )
}

export default about;