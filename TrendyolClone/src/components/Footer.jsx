import React from "react";
import "../styles/Footer.css";
import Troy from "../assets/troy.webp";
import MasterCard from "../assets/masterCard.webp";
import Visa from "../assets/visa.webp";
import Amex from "../assets/amex.webp";
import Ios from "../assets/ios.svg";
import Google from "../assets/google.svg";
import Huawei from "../assets/huawei.svg";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerTop">
          <div className="footerItem">
            <h3 className="footerItemHeader">Trendyol</h3>
            <div className="footerItemBottom">
              <h6 className="footerItemText">Biz Kimiz</h6>
              <h6 className="footerItemText">Kariyer</h6>
              <h6 className="footerItemText">İletişim</h6>
              <h6 className="footerItemText">Trendyol'da Satış Yap</h6>
            </div>
          </div>
          <div className="footerItem">
            <h3 className="footerItemHeader">Kampanyalar</h3>
            <div className="footerItemBottom">
              <h6 className="footerItemText">Aktif Kampanyalar</h6>
              <h6 className="footerItemText">Elite Üyelik</h6>
              <h6 className="footerItemText">Hediye Fikirleri</h6>
              <h6 className="footerItemText">Trendyol Fırsatları</h6>
            </div>
          </div>
          <div className="footerItem">
            <h3 className="footerItemHeader">Yardım</h3>
            <div className="footerItemBottom">
              <h6 className="footerItemText">Sıkça Sorulan Sorular</h6>
              <h6 className="footerItemText">Canlı Yardım</h6>
              <h6 className="footerItemText">Nasıl İade Edebilirim</h6>
              <h6 className="footerItemText">İşlem Rehberi</h6>
            </div>
          </div>
          <div className="footerItem">
            <h3 className="footerItemHeader">Trendyol</h3>
            <div className="footerItemBottom">
              <h6 className="footerItemText">Biz Kimiz</h6>
              <h6 className="footerItemText">Kariyer</h6>
              <h6 className="footerItemText">İletişim</h6>
              <h6 className="footerItemText">Trendyol'da Satış Yap</h6>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerItem">
            <h3 className="footerBottomItemHeader">Güvenli Alışveriş</h3>
            <div className="footerCardContainer">
              <img src={Troy} alt="" className="footerCard" />
              <img src={MasterCard} alt="" className="footerCard" />
              <img src={Visa} alt="" className="footerCard" />
              <img src={Amex} alt="" className="footerCard" />
            </div>
          </div>
          <div className="footerItem">
            <h3 className="footerBottomItemHeader">Mobil Uygulamalar</h3>
            <div className="footerItemBottomApp">
              <img
                src={Ios}
                alt="mobil uygulama gorseli"
                className="footerMobileApp"
              />
              <img
                src={Google}
                alt="mobil uygulama gorseli"
                className="footerMobileApp"
              />
              <img
                src={Huawei}
                alt="mobil uygulama gorseli"
                className="footerMobileApp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
