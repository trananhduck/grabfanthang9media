document.addEventListener("DOMContentLoaded", function () {
    // Nhận diện thư mục
    const isSubFolder = window.location.pathname.includes('/production/');
    const prefix = isSubFolder ? '../' : '';

    const footerHTML = `
    <footer class="schedio-footer pt-5 pb-3 mt-auto" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-5 mb-4">
            <h5 class="fw-bold mb-3">GRAB FAN THÁNG 9 MEDIA.</h5>
            <p class="small">Đơn vị truyền thông chuyên biệt cho cộng đồng Rap/Hip-hop Việt Nam.</p>
          </div>
          <div class="col-md-7 mb-4">
            <h6 class="fw-bold mb-3">LIÊN HỆ BOOKING</h6>
            <div class="p-3 bg-white rounded-3 shadow-sm d-inline-block">
              <ul class="list-unstyled mb-0 text-start">
                <li class="mb-2">
                  <a href="https://zalo.me/0344377104" target="_blank" class="text-decoration-none text-dark d-flex align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" width="20" height="20" class="me-2" alt="Zalo" />
                    <span class="fw-bold">0344 377 104</span>
                  </a>
                </li>
                <li class="mb-2">
                  <i class="bi bi-facebook text-primary me-2"></i>
                  <a href="https://www.facebook.com/grabfanthang9" target="_blank" class="text-decoration-none text-dark fw-bold">Grab Fan Tháng 9</a>
                </li>
                <li class="mb-0 d-flex align-items-center">
                  <i class="bi bi-envelope-fill text-danger me-2"></i>
                  <a href="mailto:grft9.contact@gmail.com" class="text-decoration-none text-dark">grft9.contact@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div class="text-center small">&copy; 2026 Grab Fan Tháng 9 Media. Designed for V-Rap.</div>
      </div>
    </footer>
  `;

    const footerContainer = document.getElementById("dynamic-footer");
    if (footerContainer) footerContainer.innerHTML = footerHTML;
});