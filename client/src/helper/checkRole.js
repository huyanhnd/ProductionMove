export function checkRole(role) {
    switch(role) {
        case "Factory":
          return "Quản Lý trung tâm sản xuất"
        case "Store":
            return "Quản lý đại lý phân phối"
        case "ServiceCenter":
            return "Quản lý trung tâm bảo hành"
        default:
            return "Ban điều hành BigCorp"
      }
};