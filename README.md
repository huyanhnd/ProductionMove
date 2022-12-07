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
### 3. Thành viên nhóm
- Nguyễn Đình Huy Anh
- Phạm Đức Tú
- Nguyễn Quang Thịnh
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
  
**SOURCE CODE**

Cơ bản **Base** sẽ như thế này.
Khi truy cập vào url: ví dụ http://localhost:3000/

React Router sẽ xử lý cái này, nó bắt được url ("/").
Xem code trong file App nhé:  
    react-router-dom là thư viện xử lý router.
    Hiểu đơn giản mình sẽ xử lý khi truy cập vào url "/" thì sẽ render ra component nào.
    index element là trang đầu tiên khi truy cập trang web
    những cái route sau sẽ lấy lần lượt trong path add thêm vào.

**Ví dụ:**
```
<Route path="/">
  <Route index element={<Home />} />
  <Route path="login" element={<Login />} />
</Route>
```
+ Nhận url "http://localhost:3000/" thì Render ra Home page. 

+ Nhận url "http://localhost:3000/login" thì Render ra Login page. 

Nhưng làm app thì phải xử lý 2 trường hợp, vì có trường hợp cùng là url "/" nhưng người dùng chưa đăng nhập thì chuyển qua Page SignIn chẳng hạn, nếu đăng nhập rồi thì là PageHome. Thì lại chia ra PrivateRoute và PublicRoute để xử lý...

**Folder pages**: Ok khi nhận route rồi thì sẽ gọi tới các trang ở trong folder Page, mỗi folder sẽ là 1 Page.
Ví dụ Code folder HomePage, tạo Folder HomePage, nhưng trong Folder này sẽ có các Component nhỏ muốn chia ra (nhưng chỉ sử dụng cho HomePage này thôi) thì sẽ tạo folder con "component" trong folder Home này và bỏ các component vào đó.

**Folder components**: Nhưng Component mà cả APP sử dung (button, icon, ...) đồ đó, đại khái là các Modules dùng chung thì bỏ ở trong Folder components to ở trong thư mực /src nhé còn component dùng mỗi modules dùng riêng thì tự tạo folder component và để trong đó thôi. 

### 2. Back-end Technology
- C#
- Asp.net Core
- Entity Framework

## III. USE-CASE
**User: Ban điều hành BigCorp**

Các ca sử dụng:
- Trang quản lý danh mục dòng sản phẩm.
  - Trang chính là get productlines by category 
- Trang cấp tài khoản và quản lý danh mục các cơ sở sản xuất, đại lý phân phối và trung tâm bảo hành.
  - Trang chinh là get user by role
  - Get user by Factories, Stores, ServiceCenters
- Trang theo dõi và xem thống kê sản phẩm trên toàn quốc, theo trạng thái và theo cơ sở sản xuất, đại lý phân phối và trung tâm bảo hành.
  - Trang chinh là filter
  - Get Products By Factories, Stores, ServiceCenters

**User: Cơ sở sản xuất**

Các ca sử dụng:
- Trang đầu là danh sách các dòng sản phẩm mà cơ sở đang quản lý và các sản phẩm thuộc dòng sản phẩm đó. Có checkbox duyệt các sản phẩm mới sản xuất vào kho.
- Khi bấm vào xuất sản phẩm cho đại lý, hệ thống hiện bảng chọn kho nào của đại lý để xuất.
- Duyệt các đơn chuyển sản phẩm lỗi về từ trung tâm bảo hành.
- Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái), theo tháng, quý, năm.
- Thống kê và phân tích số lượng sản phẩm bán ra hàng tháng, quý, năm.
- Thống kê tỉ lệ sản phẩm bị lỗi theo dòng sản phẩm, cơ sở sản xuất, đại lý phân phối.

**User: Đại lý phân phối**

Các ca sử dụng:
- Duyệt đơn nhập sản phẩm mới từ cơ sở sản xuất, tuỳ chọn nhập kho hay để lại cửa hàng.
- Bán sản phẩm, khi đó trạng thái sản phẩm sẽ chuyển sang sold
- Duyệt sản phẩm từ khách hàng và gửi lên trung tâm bảo hành, chuyển trạng thái.
- Nhận lại sản phẩm từ trung tâm bảo hành để trả cho khách hàng, chuyển trạng thái.
- Nếu sản phẩm bảo hành lỗi không thể sửa chữa thì trung tâm bảo hành báo cho đại lý rồi đại lý chuyển sản phẩm về cơ sở sản xuất, đại lý cũng có nhiệm vụ báo cho khách hàng và bàn giao sản phẩm mới thay thế cho khách hàng.
- Trường hợp cần triệu hồi, sản phẩm triệu hồi được xử lý như sản phẩm bảo hành. Điểm khác so với bảo hành là đại lý phải chủ động rà soát những sản phẩm cần triệu hồi và thông báo cho khách hàng.
- Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái liên), theo tháng, quý, năm.
- Thống kê và phân tích số lượng sản phẩm bán ra hàng tháng, quý, năm.

**User: Trung tâm bảo hành**

Các ca sử dụng:
- Nhận các sản phẩm bảo hành hoặc triệu hồi từ đại lý.
- Trả sản phẩm đã sửa chữa xong cho đại lý.
- Chuyển sản phẩm bảo hành lỗi không thể sửa chữa về cơ sở sản xuất.
- Thống kê và báo cáo số liệu sản phẩm theo từng loại (trạng thái), theo tháng, quý, năm.

**Trạng thái Sản phẩm**

Mỗi dòng sản phẩm có mã riêng. Mỗi sản phẩm cũng được gán định danh riêng để tiện quản lý. 
Tất cả các sản phẩm được theo dõi từ khi ra đời cho đến hết thời gian bảo hành hoặc bị hủy do lỗi. 
Các trạng thái của sản phẩm (State):
- Manufacture (Vừa sản xuất)
  - Mới sản xuất: Sản xuất tại cơ sở nào thì nằm tại kho của cơ sở đó.
- Store (Đang ở cửa hàng hay không)
  - Đưa về đại lý: Đại lý nào.
- Sold (Bán hay chưa bán)
  - Đã bán: Khách hàng nào (Thông tin của khách hàng).
- Error (Lỗi)
  - Lỗi, cần trả về nhà máy: Đang ở trung tâm bảo hành nào.
  - Lỗi, đã đưa về cơ sở sản xuất: Cơ sở sản xuất nào.
  - Lỗi cần triệu hồi: Đang ở khách hàng (sản phẩm triệu hồi được đưa đi bảo hành như sản phẩm khách hàng chủ động yêu cầu bảo hành).
  - Lỗi, cần bảo hành: Bảo hành lần thứ mấy, đại lý đã nhận lại từ khách hàng.
- Warranty (Bảo hành)
  - Đang sửa chữa bảo hành: Ở trung tâm bảo hành nào.
  - Đã bảo hành xong: Quay lại đại lý.
  - Đã trả lại bảo hành cho khách hàng: Quay lại khách hàng.
  - Hết thời gian bảo hành (WARRANTY TIME).
  - Trả lại cơ sở sản xuất (do lâu không bán được).
