import Image from "next/image";
import s from "./page.module.scss";
import Header from "@/components/Header";
import Button from "@/components/Button";
import heroEllipse from "@/assets/hero-ellipse.png";
import { carouselItems } from "@/data";

export default function Home() {
  return (
    <div className={s.home}>
      <Header />
      <div className={s.hero}>
        <div className={s.hero__Inner}>
          <h1>
            Data-driven
            <br />
            insights
          </h1>
          <div className={s.heroBottom}>
            <p className={s.heroBottom__Left}>
              Transforming tomorrow with AI-Powered intelligence to drive
              innovation
            </p>
            <div className={s.heroBottom__Right}>
              <p>
                Empowering businesses through data-driven insights and
                automation to achieve unparalleled growth. We built to
                revolutionize industries and improve productivity.
              </p>
              <div>
                <Button
                  mode="dark"
                  size="medium"
                  icon="arrow"
                  iconPosition="right"
                >
                  Explore Our Solutions
                </Button>
                <Button size="medium" icon="logo" iconPosition="right">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={heroEllipse}
        role="presentation"
        alt="ellipse"
        className={s.ellipse}
      />
      <h2 className={s.subtitle}>Rapidly changing tech landscape</h2>
      <div>
        <div className={s.carousel}>
          <div className={s.carousel__Numbers}>
            {Array.from({ length: 3 })?.map((each, i) => (
              <span>0{i + 1}</span>
            ))}
          </div>
          <div className={s.carousel__Divider}>
            <span></span>
          </div>
          <div className={s.carousel__Content}>
            {carouselItems?.map((each, i) => (
              <div key={i}>
                {each?.icon()}
                <h4>{each?.title}</h4>
                <p>{each?.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
