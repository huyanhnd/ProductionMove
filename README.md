# ProductionMove
Product Lifecycle Management System
## I. OVERVIEW
### 1. Thực hiện
|  STT  | Tiêu chí                                                                                                                                                      |
| :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1   | Chức năng và các features đã cài đặt                                                                                                                           |
|   2   | Thiết kế: Logic, dễ sử dụng, đẹp                                                                                                                               |
|   3   | Responsive GUI                                                                                                                                                 |
|   4   | Hiệu năng: Sử dụng fetch hoặc AJAX để tải bộ phận, không tải lại, backend API, sử dụng dữ liệu JSON, cập nhật DOM trên frontend.                               |
|   5   | Phong cách lập trình: Sử dụng mẫu thiết kế, tách biệt mã tạo giao diện và mã xử lý nghiệp vụ, tổ chức thư viện, lớp và kế thừa, trình bày và chú thích mã, ... |
|   6   | Xử lý nhập liệu: Kiểm tra hợp thức, tự động điền, gợi ý, chuyển đổi, ...                                                                                       |
|   7   | Xử lý phiên, xác thực, an ninh                                                                                                                                 |
|   8   | Viết lại và/hoặc định tuyến URL                                                                                                                                |
|   9   | Thao tác CSDL theo lập trình hướng đối tượng và độc lập CSDL                                                                                                   |
### 2. Requiment
BigCorp là một tập đoàn chuyên sản xuất các mặt hàng công nghiệp. Các sản phẩm của họ được tiêu thụ rộng rãi trên toàn quốc.

Tập đoàn này có nhiều cơ sở/nhà máy sản xuất cùng nhiều trung tâm bảo hành sản phẩm trên toàn quốc. Mặt khác, tập đoàn đã thiết lập một hệ thống rộng khắp các đại lý phân phối sản phẩm.

Sản xuất và phân phối sản phẩm

Sản phẩm của BigCorp, sau khi được sản xuất sẽ được nhập vào nhà kho chứa sản phẩm mới của nhà máy. Sau đó, sản phẩm được đưa đến các đại lý phân phối, rồi trao đến tay khách hàng. Mỗi đại lý có thể có một hoặc nhiều kho riêng để chứa các sản phẩm mới nhập từ nhà máy về mà chưa bán.

Bảo hành

Một sản phẩm khi đã đến tay khách hàng và đang trong thời gian bảo hành, gặp lỗi sẽ được khách hàng yêu cầu bảo hành. Sản phẩm được đưa đến trung tâm bảo hành gần nhất, sửa chữa, rồi chuyển lại cho khách hàng. Trường hợp không sửa chữa được thì BigCorp sẽ phải đổi trả sản phẩm mới cho khách hàng. Sản phẩm lỗi được đưa về cơ sở sản xuất của BigCorp để nghiên cứu và tái chế.

Triệu hồi sản phẩm

Trường hợp có nhiều khách hàng báo cùng một lỗi hoặc bộ phận kỹ thuật của BigCorp phát hiện ra một lỗi kỹ thuật nào đó của một dòng sản phẩm, toàn bộ các sản phẩm có lỗi đã phân phối cho khách sẽ được triệu hồi để sửa chữa. Sản phẩm được đưa về các trung tâm bảo hành để khắc phục lỗi sau đó sẽ trả lại cho khách hàng.

Mỗi dòng sản phẩm có mã riêng. Mỗi sản phẩm cũng được gán định danh riêng để tiện quản lý. Tất cả các sản phẩm được theo dõi từ khi ra đời cho đến hết thời gian bảo hành hoặc bị hủy do lỗi. Các trạng thái của sản phẩm bao gồm (với chú thích địa điểm của sản phẩm):
- Mới sản xuất: Sản xuất tại cơ sở nào thì nằm tại kho của cơ sở đó.
- Đưa về đại lý: Đại lý nào.
- Đã bán: Khách hàng nào (Thông tin của khách hàng).
- Lỗi, cần bảo hành: Bảo hành lần thứ mấy, đại lý đã nhận lại từ khách hàng.
- Đang sửa chữa bảo hành: Ở trung tâm bảo hành nào.
- Đã bảo hành xong: Quay lại đại lý.
- Đã trả lại bảo hành cho khách hàng: Quay lại khách hàng
- Lỗi, cần trả về nhà máy: Đang ở trung tâm bảo hành nào.
- Lỗi, đã đưa về cơ sở sản xuất: Cơ sở sản xuất nào.
- Lỗi cần triệu hồi: Đang ở khách hàng (sản phẩm triệu hồi được đưa đi bảo hành như sản phẩm khách hàng chủ động yêu cầu bảo hành).
- Hết thời gian bảo hành.
- Trả lại cơ sở sản xuất (do lâu không bán được)

ProductionMove là phần mềm được BigCorp sử dụng để theo dõi vòng đời các sản phẩm của họ. Các cơ sở sản xuất, đại lý phân phối, trung tâm bảo hành đều sử dụng ProductionMove để cộng tác trong việc phân phối và theo dõi vòng đời của sản phẩm.

Vai trò của các bên tham gia như sau:

Ban điều hành BigCorp
- Quản lý danh mục dòng sản phẩm.
- Cấp tài khoản và quản lý danh mục các cơ sở sản xuất, đại lý phân phối và trung tâm bảo hành.
- Theo dõi và xem thống kê sản phẩm trên toàn quốc, theo trạng thái và theo cơ sở sản xuất, đại lý phân phối và trung tâm bảo hành.

Cơ sở sản xuất
- Nhập các lô sản phẩm mới vừa sản xuất vào kho.
- Xuất sản phẩm cho đại lý.
- Nhận các sản phẩm lỗi về từ các trung tâm bảo hành.
- Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái), theo tháng, quý, năm.
- Thống kê và phân tích số lượng sản phẩm bán ra hàng tháng, quý, năm.
- Thống kê tỉ lệ sản phẩm bị lỗi theo dòng sản phẩm, cơ sở sản xuất, đại lý phân phối.

Đại lý phân phối
- Nhập sản phẩm mới về từ cơ sở sản xuất. Sản phẩm nhập về được lưu tại kho (riêng, nội bộ) của đại lý.
- Bán sản phẩm cho khách hàng
- Nhận lại sản phẩm cần bảo hành và chuyển đến trung tâm bảo hành.
- Nhận lại sản phẩm từ trung tâm bảo hành để trả cho khách hàng.
- Nếu sản phẩm bảo hành lỗi không thể sửa chữa thì trung tâm bảo hành báo cho đại lý rồi đại lý chuyển sản phẩm về cơ sở sản xuất, đại lý cũng có nhiệm vụ báo cho khách hàng và bàn giao sản phẩm mới thay thế cho khách hàng.
- Trường hợp cần triệu hồi, sản phẩm triệu hồi được xử lý như sản phẩm bảo hành. Điểm khác so với bảo hành là đại lý phải chủ động rà soát những sản phẩm cần triệu hồi và thông báo cho khách hàng.
- Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái liên), theo tháng, quý, năm.
- Thống kê và phân tích số lượng sản phẩm bán ra hàng tháng, quý, năm.

Trung tâm bảo hành
- Nhận các sản phẩm bảo hành hoặc triệu hồi từ đại lý.
- Trả sản phẩm đã sửa chữa xong cho đại lý.
- Chuyển sản phẩm bảo hành lỗi không thể sửa chữa về cơ sở sản xuất.
- Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái), theo tháng, quý, năm.

Lưu ý: Mỗi nhóm tự chọn một loại sản phẩm nào đó, ví dụ ôtô, xe máy, máy nông nghiệp, ..., khảo sát các dòng sản phẩm, khảo sát hoặc tự đặt ra quy tắc đặt tên cho các dòng sản phẩm cũng như đặt định danh cho từng sản phẩm. Ngoài tên và định danh, nhóm thực hiện cũng cần khảo sát để bổ sung các thuộc tính phù hợp cho sản phẩm và dòng sản phẩm, ví dụ ngày sản xuất, thời gian bảo hành (số tháng), model, các thông số cấu hình, hình ảnh sản phẩm, ...
## II. TECHNOLOGY:
|  STT  | Ứng dụng | Ngôn ngữ      | Framework, Library                  |
| :---: | :------- | :------------ | :---------------------------------- |
|   1   | Client   | HTML, CSS, JS | ReactJS                             |
|   2   | Server   | C#            | ASP.NET core, Entity Framework Core |
|   3   | Database | SQL           | SQL Server                          |
### 1. Front-end Technology

- ReactJS (Function Components)
- Redux (Quản lý state)
- Css
- React-Router-Dom (Chuyển hướng)
- Axios (Gọi API)

### 2. Back-end Technology
- C#
- Asp.net Core
- Entity Framework

## III. Application
### 1. Role: Ban điều hành BigCorp
#### Page: Home
- **Path**: /
- **Use Case**: Trang chủ, có các biểu đồ và bảng thống kê có thể chuyển hướng sang trang /products 
#### Page: ProductLines
- **Path**: /productlines
- **Thực hiện yêu cầu**: 
  - Quản lý danh mục dòng sản phẩm
- **Use Case**: Khi vào trang sẽ có các mục chọn series và có thể chọn các series để lấy danh sách các dòng sản phẩm.
#### Page: Products
- **Path**: /products
- **Thực hiện yêu cầu**: 
  - Theo dõi và xem thống kê sản phẩm trên toàn quốc, theo trạng thái và theo cơ sở sản xuất, đại lý phân phối và trung tâm bảo hành.
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các sản phẩm. Có các filter theo trạng thái và theo cơ sở sản xuất, đại lý phân phối và trung tâm bảo hành. 
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10 
#### Page: Accounts
- **Path**: /accounts
- **Thực hiện yêu cầu**: 
  - Cấp tài khoản
- **Use Case**: 
  - Khi vào trang sẽ có bảng danh sách các tài khoản. Có các filter theo quyền, thời gian tạo tài khoản và search box theo tên 
  - Mặc định lúc vào là get all phân trang mỗi trang có size = 10
#### Page: Factories, Stores, Service Centers
- **Path**: /factories, /stores, /servicecenters
- **Thực hiện yêu cầu**: 
  - Trang quản lý danh mục các cơ sở sản xuất
  - Trang quản lý danh mục các đại lý phân phối
  - Trang quản lý danh mục các trung tâm bảo hành 
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các cơ sở. Có các filter theo tỉnh, huyện, xã và search box theo tên.
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10
### 2. Role: Cơ sở sản xuất
#### Page: Home
- **Path**: /
- **Use Case**: Trang chủ, có các biểu đồ và bảng thống kê có thể chuyển hướng sang trang /products 
#### Page: Products
- **Path**: /products
- **Thực hiện yêu cầu**: 
  - Nhập các lô sản phẩm mới vừa sản xuất vào kho.
  - Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái), theo tháng, quý, năm.
  - Thống kê và phân tích số lượng sản phẩm bán ra hàng tháng, quý, năm.
  - Thống kê tỉ lệ sản phẩm bị lỗi theo dòng sản phẩm, cơ sở sản xuất, đại lý phân phối.
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các sản phẩm của cơ sở hiện tại. Có các filter theo trạng thái theo dòng sản phẩm theo tháng, quý, năm. 
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10.
  - Khi nhà máy sản xuất 1 sản phẩm mới, tức là thêm 1 sản phẩm. Chọn nút thêm sản phẩm, sản phẩm lúc này có trạng thái là mới sản xuất. Có thể chuyển thành trạng thái là In Warehouse (nhập vào kho)
#### Page: Process
- **Path**: /process
- **Thực hiện yêu cầu**: 
  - Xuất sản phẩm cho đại lý.
  - Nhận các sản phẩm lỗi về từ các trung tâm bảo hành.
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các yêu cầu. Có các filter loại yêu cầu, trạng thái sản phẩm. 
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10.
  - Khi các đại lý gửi yêu cầu, danh sách yêu cầu sẽ được cập nhật data từ api (t sẽ viết sau m tạo data fake tạm cần trường gì m tạo trước r ta thống nhất). 
  - Kiểm tra điều kiện, số hàng thì có thẻ xác nhận yêu cầu của đại lý hoặc trung tâm bảo hành
### 3. Role: Đại lý phân phối
#### Page: Home
- **Path**: /
- **Use Case**: Trang chủ, có các biểu đồ và bảng thống kê có thể chuyển hướng sang trang /products 
#### Page: Products
- **Path**: /products
- **Thực hiện yêu cầu**: 
  - Nhập sản phẩm mới về từ cơ sở sản xuất. Sản phẩm nhập về được lưu tại kho (riêng, nội bộ) của đại lý.
  - Bán sản phẩm cho khách hàng
  - Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái), theo tháng, quý, năm.
  - Thống kê và phân tích số lượng sản phẩm bán ra hàng tháng, quý, năm.
  
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các sản phẩm của cơ sở hiện tại. Có các filter theo trạng thái theo dòng sản phẩm theo tháng, quý, năm. 
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10.
  - Khi nhà máy sản xuất 1 sản phẩm mới, tức là thêm 1 sản phẩm. Chọn nút thêm sản phẩm, sản phẩm lúc này có trạng thái là mới sản xuất. Có thể chuyển thành trạng thái là In Warehouse (nhập vào kho)
#### Page: Process
- **Path**: /process
- **Thực hiện yêu cầu**: 
  - Nhận lại sản phẩm cần bảo hành và chuyển đến trung tâm bảo hành.
  - Nhận lại sản phẩm từ trung tâm bảo hành để trả cho khách hàng.
  - Nếu sản phẩm bảo hành lỗi không thể sửa chữa thì trung tâm bảo hành báo cho đại lý rồi đại lý chuyển sản phẩm về cơ sở sản xuất, đại lý cũng có nhiệm vụ báo cho khách hàng và bàn giao sản phẩm mới thay thế cho khách hàng.
  - Trường hợp cần triệu hồi, sản phẩm triệu hồi được xử lý như sản phẩm bảo hành. Điểm khác so với bảo hành là đại lý phải chủ động rà soát những sản phẩm cần triệu hồi và thông báo cho khách hàng.
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các yêu cầu. Có các filter loại yêu cầu, trạng thái sản phẩm. 
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10.
  - Khi các đại lý gửi yêu cầu, danh sách yêu cầu sẽ được cập nhật data từ api (t sẽ viết sau m tạo data fake tạm cần trường gì m tạo trước r ta thống nhất). 
  - Kiểm tra điều kiện, số hàng thì có thẻ xác nhận yêu cầu của đại lý hoặc trung tâm bảo hành
### 4. Role: Trung tâm bảo hành
#### Page: Home
- **Path**: /
- **Use Case**: Trang chủ, có các biểu đồ và bảng thống kê có thể chuyển hướng sang trang /products 
#### Page: Products
- **Path**: /products
- **Thực hiện yêu cầu**: 
  - Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái), theo tháng, quý, năm.
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các sản phẩm của cơ sở hiện tại. Có các filter theo trạng thái theo dòng sản phẩm theo tháng, quý, năm. 
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10.
  - Khi nhà máy sản xuất 1 sản phẩm mới, tức là thêm 1 sản phẩm. Chọn nút thêm sản phẩm, sản phẩm lúc này có trạng thái là mới sản xuất. Có thể chuyển thành trạng thái là In Warehouse (nhập vào kho)
#### Page: Process
- **Path**: /process
- **Thực hiện yêu cầu**: 
  - Nhận các sản phẩm bảo hành hoặc triệu hồi từ đại lý.
  - Trả sản phẩm đã sửa chữa xong cho đại lý.
  - Chuyển sản phẩm bảo hành lỗi không thể sửa chữa về cơ sở sản xuất.
- **Use Case**: 
  - Khi vào trang sẽ hiện ra danh sách các yêu cầu. Có các filter loại yêu cầu, trạng thái sản phẩm. 
  - Mặc định lúc vào là get all phân trang, mỗi trang có size = 10.
  - Khi các đại lý gửi yêu cầu, danh sách yêu cầu sẽ được cập nhật data từ api (t sẽ viết sau m tạo data fake tạm cần trường gì m tạo trước r ta thống nhất). 
  - Kiểm tra điều kiện, số hàng thì có thẻ xác nhận yêu cầu của đại lý hoặc trung tâm bảo hành
