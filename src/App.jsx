import React from "react";
import "./App.css";
import aboutUs from "/aboutUs.jpg";
import affortableApartment from "/affortableApartment.jpg";
import jobOpportunity from "/jobOpportunity.jpg";
import shareHolder from "/shareHolder.jpeg";
import applyNow from "/applyNow.jpg";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="landing-page">
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>
              Welcome to<br></br>Save the People of Green Life
            </h1>
            <p>
              Providing affordable and secure housing solutions for the people
              of Bangladesh.
            </p>
            <Link to="/aboutus" className="btn btn-secondary">
              About Us
            </Link>
            <Link to="/ourprojects" className="btn btn-secondary">
              Our Projects
            </Link>
          </div>
        </section>

        <section className="about">
          <div className="about-image">
            <img src={applyNow} alt="About" />
          </div>
          <div className="about-content">
            <h1 style={{ fontWeight: "bold", color: "red" }}>
              নিয়োগ বিজ্ঞপ্তি
            </h1>
            <br />
            <p>
              বাংলাদেশের সকল জেলায়, সকল থানায়, একজন করে মার্কেটিং অফিসার নিয়োগ
              করা হবে। বেতন ৩০ থেকে ৪০ হাজার টাকা। প্রার্থীদের কে কোম্পানির
              ইমেইলে দরখাস্ত করার জন্য আহবান করা হচ্ছে। দরখাস্তের মধ্যে মোবাইল
              নাম্বার অবশ্যই উল্লেখ করতে হবে। যোগ্যতা এসএসসি পাশ থেকে এমএ পাস
              পর্যন্ত। আবেদন কারিগণকে অভিজ্ঞতা এবং শিক্ষাগত যোগ্যতার উপরে
              পথ-পদবী নির্ধারণ করা হবে।
              <br />
              <span>
                Eamil:{" "}
                <a href="mailto:savethepeopleofgreenlife@gmail.com">
                  savethepeopleofgreenlife@gmail.com
                </a>
              </span>
            </p>
          </div>
        </section>

        <section className="about">
          <div className="about-content">
            <h1 className="titles">About Us</h1>
            <p>
              {`"আল্লাহ ব্যবসাকে হালাল করেছেন, সুদকে হারাম করেছেন" তাই হালাল পথে সম্পদ অর্জনের জন্য "সেভ দ্যা পিপল অফ গ্রিন লাইফ" কাংখিত লক্ষ্য মাত্রাকে সামনে নিয়ে তার যাত্রা শুরু করেছে।`}
            </p>
            <Link to="/about" className="btn btn-secondary">
              Read More
            </Link>
          </div>
          <div className="about-image">
            <img src={aboutUs} alt="About" />
          </div>
        </section>

        {/* Apartment Section */}
        <section className="apartment">
          <div className="apartment-image">
            <img src={affortableApartment} alt="Apartment" />
          </div>
          <div className="apartment-content">
            <h1 className="titles">Affordable Apartment</h1>
            <p>
              {` এই স্থানে ১২ শত স্কয়ার ফিট হতে ১০০০ থেকে ২০০০ স্কয়ার ফিট ফ্ল্যাট মোট ১০টি প্রকল্পের মধ্য হতে আপনার পছন্দের আবাসস্থলটি ৩৫০০০০ থেকে ১০০০০০০ টাকার মধ্যে  বেছে নিন। ২০০০ স্কয়ার ফুটের ৪০ টি ফ্লাট লটারির মাধ্যমে ৪০ জনকে বন্টন করা হবে।`}
            </p>
            <ul>
              <li>{`প্রকল্প আমিন বাজার`}</li>
              <li>{`প্রকল্প তুলশি মরিচ ব্রিজের পাশে দোহার রোড`}</li>
              <li>{`প্রকল্প আফতাব নগর`}</li>
              <li>{`প্রকল্প স্টাফ কোয়াটার রোড`}</li>
              <li>{`প্রকল্প মোহাম্মাদপুর মধুমিটি`}</li>
              <li>{`প্রকল্প উত্তরা দক্ষিন থান`}</li>
              <li>{`প্রকল্প আশুলিয়া`}</li>
              <li>{`প্রকল্প বরিশাল রোড`}</li>
              <li>{`প্রকল্প নবিনগর রোড`}</li>
              <li>{`প্রকল্প চিটাগাং রোড`}</li>
            </ul>
          </div>
        </section>

        {/* Employment Section */}
        <section className="employment">
          <div className="employment-content">
            <h1 className="titles">Employment Opportunities</h1>
            <p>
              {`"সেভ দ্যা পিপল অফ গ্রিন লাইফ" বৈদেশিক কর্মসংস্থানের অপার সম্ভাবনাকে কাজে লাগিয়ে নিয়েছে যুগান্তকারী পরিকল্পনা, যার মাধ্যমে বাংলাদেশে জাতীয় অর্থনীনৈতিক প্রবৃদ্ধিতে বিশেষ ভূমিকা রাখা ও আত্বকর্মসংস্থান সৃষ্টির মাধ্যমে কর্মহীন বিশাল জনগোষ্ঠিকে বিশেষ প্রশিক্ষনের মাধ্যমে ইউরোপ, আমেরিকা, কানাডা, অস্ট্রোলিয়া, মধ্যপ্রাচ্য, জাপান, দক্ষিন কোরিয়া সহ বিশ্বের বিভিন্ন দেশে কর্ম জোগাড় করে দেওয়া হবে।`}
            </p>
          </div>
          <div className="employment-image">
            <img src={jobOpportunity} alt="Employment" />
          </div>
        </section>

        {/* Shareholders Section */}
        <section className="shareholders">
          <div className="shareholders-image">
            <img src={shareHolder} alt="Shareholders" />
          </div>
          <div className="shareholders-content">
            <h1 className="titles">Join Us</h1>
            <p>
              <span style={{ fontWeight: "bold", color: "red" }}>
                ল্যান্ড হোল্ডার
              </span>{" "}
              হতে সাড়ে তিন লক্ষ টাকা হতে ১০ লক্ষ টাকা। ল্যান্ড হোল্ডাররা,
              কোম্পানিতে ফুল টাইম জব করলে ৩০ থেকে ৪০ হাজার টাকা বেতন দেওয়া হবে।
              <br />
              <span style={{ fontWeight: "bold", color: "green" }}>
                শেয়ার হোল্ডার
              </span>{" "}
              হতে ১০ লক্ষ টাকা কোম্পানিতে পে করতে হবে। শেয়ারহোল্ডারদের সম্মানি
              ৫০০০০ টাকা। যদি শেয়ার হোল্ডার ফুল টাইম কোম্পানিতে সময় দেয়।
              <br />
              <span style={{ fontWeight: "bold", color: "blue" }}>
                ডিরেক্টর
              </span>{" "}
              হতে ২০ লক্ষ টাকা হতে ৫০ লক্ষ টাকা লাগবে। যদি ফুল টাইম কোম্পানিতে
              সময় দেয় তাহলে তার সম্মানী বা লেমোনারেশন ৭০ হাজার হতে দেড় লক্ষ
              টাকা পর্যন্ত প্রদান করা হবে।
              <br />
              <br />
              <span style={{ fontWeight: "bold", color: "red" }}>
                বিশেষ দ্রষ্টব্য:
              </span>{" "}
              শেয়ার হোল্ডার এবং ডিরেক্টর দের জয়েনস্টক কোম্পানিতে তাদের নাম
              রেজিস্ট্রেশন এবং শেয়ার বন্টন করে দেওয়া হবে। যে যত টাকা পে করবে
              তার বিপরিতে ততটুকো শেয়ার প্রদান করা হবে। প্রতিটা শেয়ারের মূল্য
              ১০০০/- (একহাজার) টাকা।
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <div className="contact-content">
            <h1 className="titles">Get in Touch</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <div className="offer">
        <div>
          <h1 style={{ fontWeight: "bold", color: "red" }}>
            সুখবর সুখবর সুখবর
          </h1>
          <br />
          <p>
            জমি ক্রেতাদের জন্য সেভ দ্যা পিপুল অফ গ্রীন লাইফ একটি সুন্দর অফার
            নিয়ে আসছে। পাঁচ কাঠা হতে ১০০০ বিঘা পর্যন্ত নিসকন্ঠক জায়গা
            বাংলাদেশের রাজধানী হতে সকল জেলায় জোগাড় করে দেওয়ার এক দীপ্ত
            অঙ্গীকার নিয়ে আপনাদের অবহিত করছে যে, ক্রেতা গন দেশি-বিদেশি সকলেই
            সেভ দ্যা পিপুল অফ গ্রীন লাইফ এর ইমেইল বা হট লাইনে যোগাযোগ করে আপনার
            আবাসস্থল বা আপনার ব্যবসা প্রতিষ্ঠানের জায়গা সিলেক্ট/নির্ধারণ করতে
            পারেন। এজন্য শতভাগ নিশ্চিন্তে নিষ্কণ্ঠক জায়গা ক্রয় করতে পারবেন।
            কাগজপত্র শতভাগ সঠিক পাবেন ইনশাআল্লাহ। আমাদের একাধিক সোর্সের মাধ্যমে
            এই জায়গার সন্ধান করে আমাদের অফিসে কাগজপত্র বা তথ্য সংগ্রহ করে
            রেখেছে। আমাদের অল্প কিছু কনসালটেন্সি ফ্রি দিলেই চলবে।
            <br />
            <span>
              Eamil:{" "}
              <a href="mailto:savethepeopleofgreenlife@gmail.com">
                savethepeopleofgreenlife@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="offer">
        <div>
          <p>
            আন্তর্জাতিক মানসম্পন্ন ইলেকট্রনিক্স পণ্য বিক্রয়ের জন্য । বাংলাদেশের
            প্রত্যেকটি জেলায় একজন করে ডিলার আবশ্যক বিস্তারিত হটলাইনে জেনে নিতে
            পারবেন।
            <br />
            <span>
              Phone Number: <a href="tel:+8801533372195">01533372195</a>
            </span>
          </p>
        </div>
      </div>

      <div className="offer">
        <div>
          <p>
            আন্তর্জাতিক মানের অত্যাধুনিক রাশিয়ান কোম্পানির মোবেল
            বিক্রয়ের/মার্কেটিংয়ের জন্য বাংলাদেশের সকল জেলা হতে একজন করে ডিলার
            আবশ্যক। বিস্তারিত হট লাইনে
            <br />
            <span>
              Phone Number: <a href="tel:+8801915115851">01915115851</a>
            </span>
          </p>
        </div>
      </div>

      <div className="offer">
        <div>
          <p>
            বাংলাদেশের প্রথম শ্রেণীর ওয়াশিং পাউডার। চিনি ,লবণ, চা-পাতা, পোলাওর
            চাউল ,সেমাই, কয়েল ,মরিচের গুঁড়া ,হলুদের গুঁড়া ,যাবতীয় মসলার
            গোড়া, ন্যাচারাল পানি, আরো অসংখ্য প্রোডাক্ট মার্কেটিং করার জন্য সারা
            বাংলাদেশে ডিলার/এজেন্ট নিয়োগ চলছে অতিসত্বর যোগাযোগ করার জন্য হট
            লাইন এবং ইমেইলে যোগাযোগ করার জন্য বিশেষভাবে অনুরোধ করা হলো ।<br />
            অনুরোধক্রমে <br />
            ব্যবস্থাপনা পরিচালক <br />
            মোঃ মিজানুর রহমান
            <br />
            <span>
              Phone Number: <a href="tel:+8801678236183">01678236183</a>
            </span>
            <br />
            <span>
              Phone Number: <a href="tel:+8801781795551">01781795551</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
