import Header from "../Header/Header"
export default function Profile(){
    return  (
        <div className="h-screen">
            <Header></Header>
            <div className="flex w-1/2 p-6 pl-10">
                <div className="">
                    <div>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className="text center mt-4 bg-sky-200 p-4 text-lg">
                            <p>Tên: Nguyễn Quốc Nam</p>
                            <p>Ngày sinh: 10/02/2004</p>
                            <p>Đội bóng: Thăng Long</p>
                            <p>Thành phố: Hà Nội</p>
                            <p>Điện thoại: 0987654321</p>
                            <p>Facebook: Nam nguyễn</p>
                    </div>
                </div>
                <div className="w-1/2 text-center pl-20 text-lg auto">
                    <div className="text-center justify-center auto">
                        <div>
                            <p>Đội bóng yêu thích: Manchester United</p>
                            <p>Vị trí: Tiền vệ</p>
                            <p>Mô tả: Nhiệt huyết, đam mê với đá bóng</p>
                            <p>Thành tựu: </p>
                            <p> Vô địch THPT Bắc Thăng Long</p>
                            <p> giải 3 huyện Đông Anh</p>
                            <p> Vô địch All start cup HaNoi</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}