import React from "react";

const ManageClass = () => {
  const paymentData = [
    {
      id: "UIUX0123",
      category: "UI/UX Design",
      className: "Belajar Web Designer dengan Figma",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
    {
      id: "DS0223",
      category: "Data Science",
      className: "Data Cleaning untuk pemula",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
    {
      id: "DS0223",
      category: "Data Science",
      className: "Data Cleaning untuk Professional",
      typeClass: "PREMIUM",
      level: "Advanced ",
      classPrice: "Rp 199,000",
    },
    {
      id: "PM0123",
      category: "Product Management",
      className: "Scrum dalam tim kompleks",
      typeClass: "PREMIUM",
      level: "Intermediate ",
      classPrice: "Rp 299,000",
    },
    {
      id: "PM0123",
      category: "Product Management",
      className: "Penerapan manajemen Agile",
      typeClass: "PREMIUM",
      level: "Advanced ",
      classPrice: "Rp 349,000",
    },
    {
      id: "AD1023",
      category: "Android Development",
      className: "Mengenal Android Studio",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
    {
      id: "PM0123",
      category: "Product Management",
      className: "CSS dan HTML dalam seminggu",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
  ];

  return (
    <div style={{ margin: "80px" }}>
      <div
        className="tombol"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {" "}
        <button
          style={{
            width: "10%",
            backgroundColor: "#4CAF50",
            borderColor: "#4CAF50",
            color: "#fff",
            fontWeight: "500",
            borderRadius: "999px",
            backgroundColor: "#6148FF",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "10px" }}
          >
            <path
              d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 12H16.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 7.5V16.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Tambah
        </button>
        <button
          style={{
            width: "10%",
            backgroundColor: "transparent",
            borderColor: "#6148FF",
            color: "#6148FF",
            fontWeight: "500",
            borderRadius: "999px",
            marginRight: "30px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "10px" }}
          >
            <g clip-path="url(#clip0_97_2480)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.6665 2.49984C1.6665 2.0396 2.0396 1.6665 2.49984 1.6665H17.4998C17.9601 1.6665 18.3332 2.0396 18.3332 2.49984V4.65466C18.3332 5.09669 18.1576 5.52061 17.845 5.83317L12.4998 11.1783V15.8332C12.4998 16.1488 12.3215 16.4374 12.0392 16.5785L8.70585 18.2452C8.44753 18.3744 8.14074 18.3606 7.89506 18.2087C7.64938 18.0569 7.49984 17.7887 7.49984 17.4998V11.1783L2.15466 5.83317C1.8421 5.52061 1.6665 5.09669 1.6665 4.65466V2.49984ZM3.33317 3.33317V4.65466L8.92243 10.2439C9.07871 10.4002 9.1665 10.6122 9.1665 10.8332V16.1515L10.8332 15.3181V10.8332C10.8332 10.6122 10.921 10.4002 11.0772 10.2439L16.6665 4.65466V3.33317H3.33317Z"
                fill="#6148FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_97_2480">
                <rect
                  width="16.6667"
                  height="16.6667"
                  fill="white"
                  transform="translate(1.6665 1.6665)"
                />
              </clipPath>
            </defs>
          </svg>
          Filter
        </button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: "6px" }}
        >
          <path
            d="M22.1333 24L13.7333 15.6C13.0667 16.1333 12.3 16.5556 11.4333 16.8667C10.5667 17.1778 9.64444 17.3333 8.66667 17.3333C6.24444 17.3333 4.19467 16.4942 2.51733 14.816C0.84 13.1378 0.000888889 11.088 0 8.66667C0 6.24444 0.839111 4.19467 2.51733 2.51733C4.19556 0.84 6.24533 0.000888889 8.66667 0C11.0889 0 13.1387 0.839111 14.816 2.51733C16.4933 4.19556 17.3324 6.24533 17.3333 8.66667C17.3333 9.64444 17.1778 10.5667 16.8667 11.4333C16.5556 12.3 16.1333 13.0667 15.6 13.7333L24 22.1333L22.1333 24ZM8.66667 14.6667C10.3333 14.6667 11.7502 14.0831 12.9173 12.916C14.0844 11.7489 14.6676 10.3324 14.6667 8.66667C14.6667 7 14.0831 5.58311 12.916 4.416C11.7489 3.24889 10.3324 2.66578 8.66667 2.66667C7 2.66667 5.58311 3.25022 4.416 4.41733C3.24889 5.58444 2.66578 7.00089 2.66667 8.66667C2.66667 10.3333 3.25022 11.7502 4.41733 12.9173C5.58444 14.0844 7.00089 14.6676 8.66667 14.6667Z"
            fill="#6148FF"
          />
        </svg>
      </div>
      <h2 style={{ color: "#000", marginTop: "-30px" }}>Kelola Kelas</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
          fontWeight: "500",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#EBF3FC",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            <th style={{ padding: "10px", border: "none" }}>Kode Kelas</th>
            <th style={{ padding: "10px", border: "none" }}>Kategori</th>
            <th style={{ padding: "10px", border: "none" }}>Nama Kelas</th>
            <th style={{ padding: "10px", border: "none" }}>Tipe Kelas</th>
            <th style={{ padding: "10px", border: "none" }}>Level</th>
            <th style={{ padding: "10px", border: "none" }}>Harga Kelas</th>
            <th style={{ padding: "10px", border: "none" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", border: "none" }}>{payment.id}</td>
              <td style={{ padding: "10px", border: "none" }}>
                {payment.category}
              </td>
              <td style={{ padding: "10px", border: "none" }}>
                {payment.className}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "none",
                  color: payment.typeClass === "GRATIS" ? "#73CA5C" : "#6148FF",
                }}
              >
                {payment.typeClass}
              </td>
              <td style={{ padding: "10px", border: "none" }}>
                {payment.level}
              </td>
              <td style={{ padding: "10px", border: "none" }}>
                {payment.classPrice}
              </td>
              <td
                style={{ padding: "10px", border: "none", textAlign: "center" }}
              >
                <button
                  style={{
                    width: "40%",
                    backgroundColor: "#6148FF",
                    borderColor: "#6148FF",
                    color: "#fff",
                    fontWeight: "500",
                    borderRadius: "999px",
                  }}
                >
                  Ubah
                </button>
                <button
                  style={{
                    width: "40%",
                    backgroundColor: "#FF0000",
                    borderColor: "#FF0000",
                    color: "#fff",
                    fontWeight: "500",
                    borderRadius: "999px",
                    marginLeft: "30px",
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
