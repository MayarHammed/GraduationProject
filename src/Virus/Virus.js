import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Virus.css";
import pro from "../images/about.png";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

import { Link } from "react-router-dom";

function Virus() {
  return (
    <>
      <Bounce right>
        <Header />
      </Bounce>
      <Zoom>
        <p className="par_f">
          {" "}
          النصائح المتخذة <br /> للحد من الوقاية من الأمراض
        </p>
        <div className="virus">
          <div className="virus_img">
            <img src={pro} alt="doctor" />
          </div>
          <div className="virus_Text">
            <h2>الفيروسات والامراض الشائعة</h2>
            <p className="virus_p">
              يجب الاتصال بالطبيب في حالة الشعور بأي من هذه الأعراض أو أي أعراض{" "}
              <br />
              أخرى غير طبيعية، والبقاء في المنزل واتباع الإجراءات الوقائية
              اللازمة لتجنب انتقال العدوى إلى الآخرين
            </p>
            <Link to={"/S2"}>
              <button type="text" className="virus_button">
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div className="virus_1">
          <div className="virus">
            <div className="virus_img">
              <img src={pro} alt="doctor" />
            </div>
            <div className="virus_Text">
              <h2>الحد من الوقاية</h2>
              <p className="virus_p">
                جب غسل اليدين بالماء والصابون لمدة 20 ثانية على الأقل، وخاصة بعد{" "}
                <br />
                استخدام الحمام وقبل تناول الطعام وبعد العطس أو السعال.
              </p>
              <Link to={"/S"}>
                <button type="text" className="virus_button">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="virus">
          <div className="virus_img">
            <img src={pro} alt="doctor" />
          </div>
          <div className="virus_Text">
            <h2>استخدام المطهرات اليدوية</h2>
            <p className="virus_p">
              يمكن استخدام مطهرات اليد الكحولية عند عدم توفر الماء والصابون،
              ويجب ل <br />
              التأكد من استخدام مطهرات اليد التي تحتوي على 60٪ على الأقل من
              الكحو
            </p>
            <Link to={"/S3"}>
              <button type="text" className="virus_button">
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div className="virus_1">
          <div className="virus">
            <div className="virus_img">
              <img src={pro} alt="doctor" />
            </div>
            <div className="virus_Text">
              <h2>تجنب الاتصال المباشر</h2>
              <p className="virus_p">
                ينبغي تجنب الاتصال المباشر مع الأشخاص الذين قد يكونون مصابين{" "}
                <br />
                بالأمراض المعدية، والابتعاد عن الأماكن المزدحمة والتجمعات الكبير
              </p>
              <Link to={"/S6"}>
                <button type="text" className="virus_button">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="virus">
          <div className="virus_img">
            <img src={pro} alt="doctor" />
          </div>
          <div className="virus_Text">
            <h2>الحفاظ على الصحة العامة</h2>
            <p className="virus_p">
              يجب الحفاظ على الصحة العامة واللياقة البدنية وتناول الأطعمة الصحية
              <br />
              والمتوازنة والحصول على قسط كافي من النوم ، حيث أن الجهاز المناعي
              <br />
              القوي يساعد في الحد من انتشار الأمراض المعدية
            </p>
            <Link to={"S5"}>
              <button type="text" className="virus_button">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="virus_1">
          <div className="virus">
            <div className="virus_img">
              <img src={pro} alt="doctor" />
            </div>
            <div className="virus_Text">
              <h2>ارتداء الكمامات</h2>
              <p className="virus_p">
                يجب ارتداء الكمامات في الأماكن العامة وعندما يكون هناك احتمال
                تعرض <br />
                للعدوى، وخاصة إذا كنت تعاني من أعراض تنفسية مثل السعال والعطس
              </p>
              <Link to={"/S4"}>
                <button type="text" className="virus_button">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </Zoom>
    </>
  );
}

export default Virus;
