import "../style/DetailPay.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
function DetailPay() {
  return (
    <>
      <div className="top-content">
        <Link to="/" className="back" style={{ fontSize: "17px", fontWeight: "700", textDecoration: "none", color: "#000", marginTop: "-25px" }}>
          <BsArrowLeft style={{ marginRight: "15px", fontSize: "20px" }} />
          <p className="kembali" style={{ marginLeft: "50px", marginTop: "-25px" }}>
            Kembali
          </p>
        </Link>
        <button className="warning-pay">Selesaikan Pembayaran sampai 10 Maret 2023 12:00</button>
      </div>
      <div className="mid-content">
        <div className="columns-container">
          <div className="col">
            <div className="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" style={{ backgroundColor: "#3C3C3C", color: "#fff" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Bank Transfer
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <h1>Kosong</h1>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" style={{ backgroundColor: "#6148FF", color: "#fff" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Credit Card
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <img className="img-pay" src="./img/Payment options.png"></img>
                    <div className="textpayment">
                      <h5>Card number</h5>
                      <input style={{ border: "none", width: "50%" }} type="text" placeholder="Enter Number" />
                      <hr />
                      <h5>Card holder name</h5>
                      <input style={{ border: "none", width: "50%" }} type="text" placeholder="Enter Name" />
                      <hr />
                      <div className="CE" style={{ display: "flex", flexDirection: "column" }}>
                        <h5 className="cvv">CVV</h5>
                        <div className="input-wrapper">
                          <input style={{ border: "none", width: "50%" }} type="text" placeholder="Enter CVV" /> <hr />
                        </div>
                        <hr />
                        <h5 className="date">Expiry date</h5>
                        <div className="input-wrapper">
                          <input style={{ border: "none", width: "50%" }} type="text" placeholder="MM/YY" /> <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card class-payment">
              <h2 className="h2payclass" style={{ fontSize: "22px", fontWeight: "700", paddingLeft: "20px", paddingTop: "20px", paddingBottom: "10px" }}>
                Pembayaran Kelas
              </h2>
              <div className="card card-deskripsi" style={{ width: "90%" }}>
                {/* Content of the card */}
                <img style={{ width: "100%" }} src="./img/image.png" alt="Course Thumbnail" />
                <p style={{ color: "#6148FF", fontWeight: "700" }}>UI/UX Design</p>
                <p style={{ fontSize: "13px", fontWeight: "700", marginTop: "-10px" }}>Intro to Basic of User Interaction Design</p>
                <p style={{ fontSize: "10px", fontWeight: "500", marginTop: "-10px" }}>by Simon Doe</p>
              </div>
              <div className="price-details">
                {/* Content of the price details */}
                <div className="column">
                  <p style={{ fontSize: "14px", fontWeight: "700" }}>Harga</p>
                  <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp 349,000</p>
                </div>
                <div className="column">
                  <p style={{ fontSize: "14px", fontWeight: "700" }}>PPN 11%</p>
                  <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp 38,390</p>
                </div>
                <div className="column">
                  <p style={{ fontSize: "14px", fontWeight: "700" }}>Total Bayar</p>
                  <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp 387,390</p>
                </div>
              </div>

              <button className="payclass">
                <Link to="/PaySuccess" style={{ textDecoration: "none", color: "#FFF" }}>
                  Bayar dan Ikuti Kelas Selamanya
                  <img src="./img/Vector.png" alt="Next Icon" style={{ paddingLeft: "10px" }} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPay;
