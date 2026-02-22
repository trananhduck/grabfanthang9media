document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop();
    const isSubFolder = window.location.pathname.includes('/production/');
    const prefix = isSubFolder ? '../' : '';

    const headerHTML = `
    <style>
      /* Hiệu ứng tự động xổ Dropdown khi di chuột (chỉ áp dụng cho màn hình lớn xl) */
      @media (min-width: 1200px) {
        .navbar .dropdown:hover .dropdown-menu {
          display: block;
          animation: fadeIn 0.2s ease-in;
        }
        
        /* ĐÂY LÀ PHẦN SỬA LỖI: Tạo "cầu nối tàng hình" lấp đầy khoảng trống */
        .navbar .dropdown-menu::before {
          content: "";
          position: absolute;
          top: -20px; /* Độ cao vươn lên để lấp khoảng trống */
          left: 0;
          width: 100%;
          height: 20px;
          background: transparent; /* Hoàn toàn trong suốt */
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>

    <nav class="navbar navbar-expand-xl sticky-top shadow-sm py-2">
      <div class="container">
        <a class="navbar-brand fw-bold fs-4" href="${prefix}index.html">GRAB FAN THÁNG 9</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-xl-2">
            <li class="nav-item">
              <a class="nav-link fw-bold text-nowrap ${currentPath === "index.html" || currentPath === "" ? "active" : ""}" href="${prefix}index.html">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold text-nowrap ${currentPath === "booking.html" ? "active" : ""}" href="${prefix}booking.html">Bảng giá booking</a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link fw-bold text-nowrap dropdown-toggle ${currentPath === "production.html" || isSubFolder ? "active" : ""}" href="${prefix}production.html" id="productionDropdown">
                Dịch vụ khác
              </a>
              <ul class="dropdown-menu shadow border-0 rounded-3 mt-xl-2" aria-labelledby="productionDropdown">
                <li><a class="dropdown-item py-2 ${currentPath === "banner.html" ? "active fw-bold" : ""}" href="${prefix}production/banner.html"><i class="bi bi-palette text-warning me-2"></i>Thiết kế banner / Artwork</a></li>
                <li><a class="dropdown-item py-2 ${currentPath === "lyrics.html" ? "active fw-bold" : ""}" href="${prefix}production/lyrics.html"><i class="bi bi-type-bold text-warning me-2"></i>Sản xuất Lyrics Video</a></li>
                <li><a class="dropdown-item py-2 ${currentPath === "mv.html" ? "active fw-bold" : ""}" href="${prefix}production/mv.html"><i class="bi bi-film text-warning me-2"></i>Edit Music Video & VFX</a></li>
                <li><a class="dropdown-item py-2 ${currentPath === "beat.html" ? "active fw-bold" : ""}" href="${prefix}production/beat.html"><i class="bi bi-music-note-list text-warning me-2"></i>Sản xuất beat độc quyền</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link fw-bold text-nowrap ${currentPath === "clients.html" ? "active" : ""}" href="${prefix}clients.html">Khách hàng tiêu biểu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold text-nowrap ${currentPath === "projects.html" ? "active" : ""}" href="${prefix}projects.html">Dự án nổi bật</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold text-nowrap ${currentPath === "donate.html" ? "active" : ""}" href="${prefix}donate.html">Donate</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  `;

    const headerContainer = document.getElementById("dynamic-header");
    if (headerContainer) headerContainer.innerHTML = headerHTML;
});