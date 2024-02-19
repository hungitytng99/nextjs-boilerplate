## How to run
- Run the following commands:
1. `yarn`
2. `yarn dev`

## Deploy

## Coding conventions
- Hạn chế dùng let, ưu tiên dùng const, không dùng var
- Làm việc với ảnh và file:
```
1. Tải ảnh lên folder public/images
2. Khai báo trong @/shared/configs/app.images
3. Import vào nơi cần sử dụng.
```
- Khai báo components được sử dụng trong pages tương ứng với folder trong components 
- Các component common (form item, button, link,...) thì được khai báo trong @/components/common. Tất cả component trong @/components/common đều phải đặt tên theo qui ước: **App\*\***
- Các api của hệ thống sẽ được khai báo trong: @/shared/api/**.api.ts
- Ưu tiên dùng class/property của tailwindcss. Trong trường hợp tailwindcss không hỗ trợ hoặc tốn thời gian implement thì sẽ dùng phương án dễ nhất để implement.

## More note
```
1. Muốn call api thì sử dụng variable: appRequest
2. Muốn lưu trữ vào bộ nhớ trình duyệt (cookies) thì dùng: appStorage
3. Log các thông tin quan trọng (optional): appLogger
```

## Work flow
1. Checkout sang branch mới khi làm 1 feature.
2. Commit theo format đã được quy định ở bên dưới.
2. Khi làm xong tạo PR và báo cho Leader.

## Commits: 
Khi commit cần commit dưới dạng: `[Prefix]:[Description]` với `Prefix` là 1 trong các prefix sau đây:
- feat: thêm một feature
- fix: fix bug cho hệ thống, vá lỗi trong codebase
- refactor: sửa code nhưng không fix bug cũng không thêm feature hoặc đôi khi bug cũng được fix từ việc refactor.
- docs: thêm/thay đổi document
- chore: những sửa đổi nhỏ nhặt không liên quan tới code
- style: những thay đổi không làm thay đổi ý nghĩa của code như thay đổi css/ui chẳng hạn.
- perf: code cải tiến về mặt hiệu năng xử lý
- vendor: cập nhật version cho các dependencies, packages.
Sau khi commit cần tạo PR và báo cho Teamleader