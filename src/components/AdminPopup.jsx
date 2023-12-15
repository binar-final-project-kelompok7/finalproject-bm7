import React from "react";
import "../style/Admin.css";

function AdminPopup() {
  return (
    <>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "80%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel" style={{ color: "#6148FF", fontSize: "30px", fontWeight: "700", paddingLeft: "45%" }}>
                Tambah Kelas
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ fontSize: "12px", paddingLeft: "200px", color: "#000", fontWeight: "600" }}>
              <div className="mb-1">
                <label htmlFor="namaKelas" className="form-label">
                  Nama Kelas
                </label>
                <input type="text" className="form-control" id="namaKelas" placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="kategori" className="form-label">
                  Kategori
                </label>
                <input type="text" className="form-control" id="kategori" placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="kodeKelas" className="form-label">
                  Kode Kelas
                </label>
                <input type="text" className="form-control" id="kodeKelas" placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="tipeKelas" className="form-label">
                  Tipe Kelas
                </label>
                <input type="text" className="form-control" id="tipeKelas" placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="level" className="form-label">
                  Level
                </label>
                <input type="text" className="form-control" id="level" placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="harga" className="form-label">
                  Harga
                </label>
                <input type="text" className="form-control" id="harga" placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="materi" className="form-label">
                  Materi
                </label>
                <textarea className="form-control" id="materi" rows="3" placeholder="Paragraph" style={{ width: "80%", height: "150px", borderRadius: "15px" }}></textarea>
              </div>
            </div>
            <div className="modal-footer" style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                className="btn "
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                style={{ width: "39%", backgroundColor: "#FF0000", height: "60px", color: "#fff", fontSize: "20px", fontWeight: "600", borderRadius: "999px" }}
              >
                Upload Video
              </button>
              <button type="button" className="btn " style={{ width: "29%", backgroundColor: "#6148FF", color: "#fff", height: "60px", fontSize: "20px", fontWeight: "600", borderRadius: "999px" }}>
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>

      <a className="btn" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style={{ backgroundColor: "#6148FF", color: "#fff", height: "20px", fontSize: "15px", padding: "0px" }}>
        Tambah
      </a>
    </>
  );
}

export default AdminPopup;
